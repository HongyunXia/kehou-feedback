export async function onRequest(context) {
  const { request, env } = context;

  if (request.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders(request) });
  }

  if (request.method !== "POST") {
    return json({ error: "Only POST allowed" }, 405, request);
  }

  try {
    const data = await request.json();
    const usageCost = getUsageCost(data);
    let usageReservation = await reserveTencentUsage(data, env, usageCost);
    let auth = null;
    if (!usageReservation) {
      auth = await verifyAccessCode(data, env, usageCost);
      if (!auth.ok) {
        return json({ error: auth.message, blockLocal: Boolean(auth.blockLocal) }, auth.status || 401, request);
      }
    }

    try {
      const prompt = buildPrompt(data);
      let result = await callDeepSeek(env, prompt);
      let feedback = normalizeFeedback(data, cleanFeedback(result?.choices?.[0]?.message?.content || ""));

      if (needsFormatRepair(feedback, data)) {
        result = await callDeepSeek(env, buildRepairPrompt(data, feedback));
        feedback = normalizeFeedback(data, cleanFeedback(result?.choices?.[0]?.message?.content || ""));
      }

      if (!isUsableFeedback(feedback, data)) {
        await refundTencentUsage(usageReservation?.usage, env);
        return json({ error: "AI输出不完整，已触发本地兜底", raw: result }, 500, request);
      }

      const usage = usageReservation?.usage || await recordAccessUsage(auth, env);
      return json({ feedback, usage }, 200, request);
    } catch (error) {
      await refundTencentUsage(usageReservation?.usage, env);
      throw error;
    }
  } catch (error) {
    return json({ error: error.message || "服务暂时不可用", blockLocal: Boolean(error.blockLocal) }, error.status || 500, request);
  }
}

async function reserveTencentUsage(data, env, cost) {
  const result = await callTencentAuth(env, { ...data, action: "reserveUsage", cost });
  if (!result) return null;
  if (!result.ok) {
    throw httpError(result.error || result.message || "AI次数校验失败", result.status || 502, {
      blockLocal: true
    });
  }
  return result;
}

async function refundTencentUsage(usage, env) {
  if (!usage) return;
  await callTencentAuth(env, { action: "refundUsage", usage }).catch(() => null);
}

async function callTencentAuth(env, payload) {
  if (String(env.TENCENT_PROXY_ENABLED || "").toLowerCase() !== "true") {
    return null;
  }

  const base = String(env.TENCENT_API_BASE || "").trim().replace(/\/+$/g, "");
  if (!base) return null;

  const prefix = normalizeProxyPrefix(env.TENCENT_API_PREFIX || "/api");
  const headers = { "Content-Type": "application/json" };
  if (env.TENCENT_PROXY_SECRET) {
    headers["X-Proxy-Secret"] = env.TENCENT_PROXY_SECRET;
  }

  const response = await fetch(`${base}${prefix}/auth`, {
    method: "POST",
    headers,
    body: JSON.stringify(payload)
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw httpError(result.error || result.message || "腾讯云账号服务暂时不可用", response.status, {
      blockLocal: true
    });
  }
  return result;
}

function httpError(message, status = 500, extra = {}) {
  const error = new Error(message);
  error.status = status;
  Object.assign(error, extra);
  return error;
}

async function verifyAccessCode(data, env, usageCost = 1) {
  const code = String(data?.accessCode || "").trim();
  if (!code) {
    return verifyTrialAccess(data, env, usageCost);
  }

  const allowedCodes = parseAccessCodes(env.ACCESS_CODES);
  if (!allowedCodes.length) {
    return { ok: false, status: 503, message: "服务端尚未配置授权码", blockLocal: true };
  }

  if (!allowedCodes.includes(code)) {
    return { ok: false, status: 403, message: "AI授权码无效，请检查后重试", blockLocal: true };
  }

  const limit = Number(env.ACCESS_TOTAL_LIMIT || env.ACCESS_MONTHLY_LIMIT || env.ACCESS_DAILY_LIMIT || 1000);
  const usageKey = `usage:${code}`;
  const kv = getAuthKV(env);
  if (limit > 0 && !kv) {
    return { ok: false, status: 503, message: "KV计数未绑定，无法启用授权码次数限制", blockLocal: true };
  }
  if (limit > 0 && kv) {
    const used = Number(await kv.get(usageKey) || 0);
    if (used + usageCost > limit) {
      return { ok: false, status: 429, message: `该授权码AI次数不足，本次需消耗${usageCost}次`, blockLocal: true };
    }
    return { ok: true, type: "code", code, usageKey, used, limit, cost: usageCost };
  }

  return { ok: true, type: "code", code, cost: usageCost };
}

async function verifyTrialAccess(data, env, usageCost = 1) {
  const kv = getAuthKV(env);
  if (!kv) {
    return { ok: false, status: 503, message: "账号试用服务暂时不可用，请填写有效授权码", blockLocal: true };
  }

  const token = String(data?.teacherToken || data?.token || "").trim();
  const session = await verifySessionToken(kv, token);
  if (!session?.account) {
    return { ok: false, status: 401, message: "请先登录账号，或填写有效授权码后再生成", blockLocal: true };
  }

  const limit = Number(env.TRIAL_TOTAL_LIMIT || 6);
  const usageKey = `trial_usage:${session.account.toLowerCase()}`;
  const used = Number(await kv.get(usageKey) || 0);
  if (limit > 0 && used + usageCost > limit) {
    return {
      ok: false,
      status: 429,
      message: `免费体验次数已用完，本次需消耗${usageCost}次；请填写有效授权码后继续生成`,
      blockLocal: true
    };
  }

  return {
    ok: true,
    type: "trial",
    account: session.account,
    usageKey,
    used,
    limit,
    cost: usageCost
  };
}

async function recordAccessUsage(auth, env) {
  const kv = getAuthKV(env);
  if (!auth?.usageKey || !kv) return null;
  const cost = auth.cost || 1;
  const nextUsed = (auth.used || 0) + cost;
  await kv.put(auth.usageKey, String(nextUsed));
  return {
    code: auth.code,
    account: auth.account,
    type: auth.type || "code",
    used: nextUsed,
    limit: auth.limit,
    cost
  };
}

function getUsageCost(data) {
  return String(data?.boardContent || "").trim() ? 4 : 1;
}

function getAuthKV(env) {
  return env.AUTH_KV || env.kehou_feedback_auth;
}

function parseAccessCodes(value) {
  return String(value || "")
    .split(/[\s,，;；\n]+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

async function verifySessionToken(kv, token) {
  const [payload, signature] = String(token || "").split(".");
  if (!payload || !signature) return null;

  let session;
  try {
    session = JSON.parse(base64UrlDecode(payload));
  } catch (error) {
    return null;
  }

  if (!session?.account || !session?.expiresAt || session.expiresAt < Date.now()) {
    return null;
  }

  const user = await kv.get(getUserKey(session.account), "json");
  if (!user?.passwordHash) return null;

  const expected = await signSessionPayload(payload, user.passwordHash);
  if (signature !== expected) return null;
  return session;
}

function getUserKey(account) {
  return `teacher:${String(account || "").toLowerCase()}`;
}

async function signSessionPayload(payload, passwordHash) {
  return sha256Text(`${payload}.${passwordHash}`);
}

async function sha256Text(text) {
  const input = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", input);
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function base64UrlDecode(text) {
  const normalized = text.replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "=");
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return new TextDecoder().decode(bytes);
}

async function callDeepSeek(env, prompt) {
  const model = env.DEEPSEEK_MODEL || "deepseek-v4-flash";
  const aiResponse = await fetch("https://api.deepseek.com/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${env.DEEPSEEK_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model,
      messages: [
        {
          role: "system",
          content: "你是一名中国小学、初中、高中学科培训老师。输出完整课后反馈，语言要像老师发给家长的日常沟通，不要像AI模板。除英语学科、拼音规则、数学单位或公式等必要内容外，正文尽量使用简体中文。"
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.65,
      max_tokens: 650,
      stream: false
    })
  });

  const result = await aiResponse.json();
  if (!aiResponse.ok) {
    throw new Error(result?.error?.message || "DeepSeek接口调用失败");
  }
  return result;
}

function buildPrompt(data) {
  const lessonMeta = buildLessonMeta(data);
  const isLargeClass = data.feedbackMode === "largeClass";
  const feedbackTitle = isLargeClass
    ? `${data.grade || ""}${data.subject || "学科"}大班课课堂反馈`
    : `${data.subject || "学科"} 课程课堂反馈`;
  const sectionTitles = isLargeClass
    ? "①上课内容⭐ ②课堂整体反馈⭐ ③分层学习建议⭐ ④课后落实⭐"
    : "①上课内容⭐ ②课程反馈⭐ ③课后作业⭐";
  const sectionCountRule = isLargeClass
    ? "第三行起必须分四点排布，且标题固定为：①上课内容⭐ ②课堂整体反馈⭐ ③分层学习建议⭐ ④课后落实⭐。"
    : "第三行起必须分三点排布，且标题固定为：①上课内容⭐ ②课程反馈⭐ ③课后作业⭐。";
  const audienceRule = isLargeClass
    ? "大班课模式下禁止出现任何学生姓名，禁止写“某某同学”“孩子个人”等个体化称呼；请使用“本班”“班级整体”“大部分同学”“部分同学”“少数同学”等班级整体表达。"
    : "一对一模式下可以围绕该学生的课堂表现生成个性化反馈。";
  const lengthRule = data.tone === "short"
    ? "总正文内容控制在70到80个中文字符左右，不含第一行标题、第二行时间和三点固定标题；表达要完整收尾。"
    : "总字数控制在180到260字，必须完整收尾。";
  const hasBoardContent = String(data.boardContent || "").trim();
  return `
请根据以下课堂信息，为家长生成一份固定格式的课后反馈。

硬性要求：
1. 第一行必须是“${feedbackTitle}”。
2. 第二行只输出已有时间信息：“${lessonMeta}”。如果授课时段为空，禁止写任何授课时段相关文字，也不要写“未填写”。
3. ${sectionCountRule}
4. 每个分点标题单独占一行，标题后面的正文必须另起一行。
5. 不要使用“家长您好”作为开头，不要添加其他标题，不要空行。
6. “①上课内容⭐”正文写本节课具体讲了什么知识点、题型或训练任务；如果提供了“教师自定义授课知识点”，必须优先围绕该内容写。
7. 如果提供了“板书/讲义识别内容”，必须把它作为最高优先级的真实授课材料；若它与下拉学科、内置知识点或对应考点冲突，以识别内容为准，禁止写识别内容里没有依据的数学、函数、方程等无关内容。
8. ${isLargeClass ? "“②课堂整体反馈⭐”正文写班级整体听课、互动、练习完成度和共性薄弱点，不写单个学生。" : "“②课程反馈⭐”正文结合内部学情画像、课堂表现、掌握情况、薄弱原因，写孩子的具体亮点和问题。"}
9. ${isLargeClass ? "“③分层学习建议⭐”正文按掌握较快、基本跟上、仍需巩固三类学生给出不同建议。" : "“③课后作业⭐”正文只写作业类型与练习范围，例如课堂错题订正、同类变式练习、基础巩固练习、答题规范复盘等，并补一句后续教学跟进。"}
10. ${isLargeClass ? "“④课后落实⭐”正文只写班级课后落实要求和后续教学跟进，不要写具体题号、页码、讲义页码、练习册编号、具体数量或“第几题”。" : "“③课后作业⭐”禁止标注具体习题题号、页码、讲义页码、练习册编号、具体数量或“第几题”，不要编造具体作业编号。"}
11. 如果提供了成绩等级，只能作为内部学情画像参考：优秀侧重拔高与规范，良好侧重补齐易错和迁移，一般侧重基础巩固和可执行复习；正文禁止直接写出“成绩等级”“优秀”“良好”“一般”等标签。
12. 语言专业、真诚、客观，适合老师直接发给家长。
13. ${lengthRule}
14. 除英语学科、拼音规则、数学单位或公式等必要内容外，正文尽量使用简体中文和中文标点，不要无意义中英混写。
15. 不要使用“较稳、比较稳、基础漏洞、这个方面、那个方面”等生硬表达。
16. ${data.lessonMode ? `本节课时属性为“${data.lessonMode}”，生成内容要自然体现该属性；` : "本节未选择课时属性，正文中不要主动写“新课”“复习”等课时类型字样；"}
17. ${audienceRule}
${hasBoardContent ? "18. 本次含板书/讲义识别内容，请先判断识别内容真实学科与主题，再生成反馈；不要被页面默认选项带偏。" : ""}

课堂信息：
反馈模式：${isLargeClass ? "大班课" : "一对一"}
${isLargeClass ? "" : `学生姓名：${data.studentName || "孩子"}`}
学段：${data.stage || ""}
年级：${data.grade || ""}
学科：${data.subject || ""}
板书推断学科：${data.inferredSubject || ""}
上课日期：${data.lessonDate || ""}
授课时段：${data.lessonTime || ""}
课时属性：${data.lessonMode || ""}
教学板块：${data.block || ""}
知识点：${Array.isArray(data.knowledgePoints) ? data.knowledgePoints.join("、") : data.topic || ""}
板书提炼知识点：${data.inferredKnowledgePoint || ""}
教师自定义授课知识点：${data.customTopic || ""}
板书/讲义识别内容：${data.boardContent || ""}
内置参考知识点：${data.baseTopic || ""}
对应考点：${data.exam || ""}
课堂掌握：${data.mastery || ""}
内部学情画像参考：${data.scoreLevel || "未录入"}
课堂状态：${data.classroomState || ""}
课堂参与：${data.participation || ""}
学习习惯：${data.habit || ""}
课堂产出：${data.output || ""}
作业情况：${data.homework || ""}
薄弱表现：${data.weakness || ""}
问题类型：${data.issueLabel || ""}
问题原因：${data.issueReason || ""}
具体问题：${data.issueManifest || ""}
课堂任务：${data.classTask || ""}
反馈语气：${data.tone || ""}
改写序号：${data.variant || 0}

请严格按照以下格式输出，不要解释：
${feedbackTitle}
${lessonMeta}
①上课内容⭐
正文
${isLargeClass ? `②课堂整体反馈⭐
正文
③分层学习建议⭐
正文
④课后落实⭐
正文` : `②课程反馈⭐
正文
③课后作业⭐
正文`}
`;
}

function buildRepairPrompt(data, badText) {
  const lessonMeta = buildLessonMeta(data);
  const isLargeClass = data.feedbackMode === "largeClass";
  const feedbackTitle = isLargeClass
    ? `${data.grade || ""}${data.subject || "学科"}大班课课堂反馈`
    : `${data.subject || "学科"} 课程课堂反馈`;
  const formatRule = isLargeClass
    ? "第三行起必须分四点：①上课内容⭐ ②课堂整体反馈⭐ ③分层学习建议⭐ ④课后落实⭐。"
    : "第三行起必须分三点：①上课内容⭐ ②课程反馈⭐ ③课后作业⭐。";
  const audienceRule = isLargeClass
    ? "大班课模式禁止出现学生姓名，使用班级整体表达。"
    : "一对一模式围绕该学生生成。";
  const lengthRule = data.tone === "short"
    ? "字数控制在70到80个中文字符左右，不含标题、时间和三点固定标题。"
    : "字数控制在180到260字。";
  const hasBoardContent = String(data.boardContent || "").trim();
  return `
下面这段课后反馈存在表达不完整或格式不符合要求的问题，请完全重写。

问题文本：
${badText || "无"}

重写要求：
1. 除英语学科、拼音规则、数学单位或公式等必要内容外，正文尽量使用简体中文，不要无意义中英混写。
2. 第一行必须是“${feedbackTitle}”。
3. 第二行只输出已有时间信息：“${lessonMeta}”。如果授课时段为空，禁止写任何授课时段相关文字，也不要写“未填写”。
4. ${formatRule}
5. 每个分点标题单独占一行，标题后面的正文必须另起一行。
6. 围绕“${data.customTopic || (Array.isArray(data.knowledgePoints) ? data.knowledgePoints.join("、") : data.topic || "")}”写课堂内容、课程反馈、课后作业。
7. ${isLargeClass ? "“④课后落实⭐”只写作业类型、练习范围和后续教学跟进，禁止具体习题题号、页码、讲义页码、练习册编号、具体数量或“第几题”。" : "“③课后作业⭐”只写作业类型与练习范围，禁止具体习题题号、页码、讲义页码、练习册编号、具体数量或“第几题”。"}
8. ${lengthRule}
9. 必须完整结束，最后一句以中文句号结尾。
10. 禁止直接写出“成绩等级”“优秀”“良好”“一般”等标签，相关信息只作为内部判断依据。
11. ${data.lessonMode ? `课时属性为“${data.lessonMode}”，可以自然融入课堂内容；` : "未选择课时属性，不要主动写“新课”“复习”等课时类型字样；"}
12. ${audienceRule}
${hasBoardContent ? "13. 本次含板书/讲义识别内容，必须以识别内容为最高优先级；若识别内容是英语资料，禁止改写成数学、函数、方程等无关课堂内容。" : ""}

请直接输出重写后的完整反馈正文，不要解释。
`;
}

function buildLessonMeta(data) {
  return [data.lessonDate || "", data.lessonTime || ""].filter(Boolean).join(" ");
}

function cleanFeedback(text) {
  return String(text).replace(/\r/g, "").replace(/\n{2,}/g, "\n").replace(/\*\*/g, "").trim();
}

function normalizeFeedback(data, text) {
  const isLargeClass = data.feedbackMode === "largeClass";
  const title = isLargeClass
    ? `${data.grade || ""}${data.subject || "学科"}大班课课堂反馈`
    : `${data.subject || "学科"} 课程课堂反馈`;
  const lessonMeta = buildLessonMeta(data);
  const value = cleanFeedback(text)
    .replace(/①\s*上课内容\s*⭐?\s*[：:]/g, "①上课内容⭐\n")
    .replace(/①\s*上课内容\s*⭐/g, "①上课内容⭐")
    .replace(/②\s*课程反馈\s*⭐?\s*[：:]/g, "②课程反馈⭐\n")
    .replace(/②\s*课程反馈\s*⭐/g, "②课程反馈⭐")
    .replace(/②\s*课堂整体反馈\s*⭐?\s*[：:]/g, "②课堂整体反馈⭐\n")
    .replace(/②\s*课堂整体反馈\s*⭐/g, "②课堂整体反馈⭐")
    .replace(/③\s*课后作业\s*⭐?\s*[：:]/g, "③课后作业⭐\n")
    .replace(/③\s*课后作业\s*⭐/g, "③课后作业⭐")
    .replace(/③\s*分层学习建议\s*⭐?\s*[：:]/g, "③分层学习建议⭐\n")
    .replace(/③\s*分层学习建议\s*⭐/g, "③分层学习建议⭐")
    .replace(/④\s*课后落实\s*⭐?\s*[：:]/g, "④课后落实⭐\n")
    .replace(/④\s*课后落实\s*⭐/g, "④课后落实⭐")
    .replace(/\n{3,}/g, "\n");

  if (isLargeClass) {
    if (!value.includes("①上课内容⭐") || !value.includes("②课堂整体反馈⭐") || !value.includes("③分层学习建议⭐") || !value.includes("④课后落实⭐")) return value;

    const content = extractSection(value, "①上课内容⭐", "②课堂整体反馈⭐");
    const overall = extractSection(value, "②课堂整体反馈⭐", "③分层学习建议⭐");
    const layered = extractSection(value, "③分层学习建议⭐", "④课后落实⭐");
    const followUp = extractSection(value, "④课后落实⭐");
    const header = lessonMeta ? `${title}\n${lessonMeta}` : title;
    return `${header}\n①上课内容⭐\n${content}\n②课堂整体反馈⭐\n${overall}\n③分层学习建议⭐\n${layered}\n④课后落实⭐\n${followUp}`.trim();
  }

  if (!value.includes("①上课内容⭐") || !value.includes("②课程反馈⭐") || !value.includes("③课后作业⭐")) return value;

  const content = extractSection(value, "①上课内容⭐", "②课程反馈⭐");
  const feedback = extractSection(value, "②课程反馈⭐", "③课后作业⭐");
  const homework = extractSection(value, "③课后作业⭐");
  const header = lessonMeta ? `${title}\n${lessonMeta}` : title;
  return `${header}\n①上课内容⭐\n${content}\n②课程反馈⭐\n${feedback}\n③课后作业⭐\n${homework}`.trim();
}

function extractSection(text, start, end) {
  const startIndex = text.indexOf(start);
  if (startIndex < 0) return "";
  const contentStart = startIndex + start.length;
  const endIndex = end ? text.indexOf(end, contentStart) : -1;
  return text.slice(contentStart, endIndex >= 0 ? endIndex : undefined).replace(/^[\s：:，,。]+/, "").trim();
}

function isUsableFeedback(text, data = {}) {
  if (!text) return false;
  if (text.length < 80 || text.length > 1200) return false;
  if (data.feedbackMode === "largeClass") {
    if (!text.includes("①上课内容⭐") || !text.includes("②课堂整体反馈⭐") || !text.includes("③分层学习建议⭐") || !text.includes("④课后落实⭐")) return false;
    if (!/①上课内容⭐\n[\s\S]{8,}\n②课堂整体反馈⭐/.test(text)) return false;
    if (!/②课堂整体反馈⭐\n[\s\S]{8,}\n③分层学习建议⭐/.test(text)) return false;
    if (!/③分层学习建议⭐\n[\s\S]{8,}\n④课后落实⭐/.test(text)) return false;
    if (!/④课后落实⭐\n[\s\S]{8,}/.test(text)) return false;
    if (data.studentName && text.includes(data.studentName)) return false;
    if (/未填写|授课时段未填写/.test(text)) return false;
    if (hasSpecificHomeworkReference(text)) return false;
    return true;
  }
  if (!text.includes("①上课内容⭐") || !text.includes("②课程反馈⭐") || !text.includes("③课后作业⭐")) return false;
  if (!/①上课内容⭐\n[\s\S]{8,}\n②课程反馈⭐/.test(text)) return false;
  if (!/②课程反馈⭐\n[\s\S]{8,}\n③课后作业⭐/.test(text)) return false;
  if (!/③课后作业⭐\n[\s\S]{8,}/.test(text)) return false;
  if (/未填写|授课时段未填写/.test(text)) return false;
  if (hasSpecificHomeworkReference(text)) return false;
  return true;
}

function needsFormatRepair(text, data = {}) {
  if (!text) return true;
  if (data.feedbackMode === "largeClass") {
    return !text.includes("①上课内容⭐") || !text.includes("②课堂整体反馈⭐") || !text.includes("③分层学习建议⭐") || !text.includes("④课后落实⭐");
  }
  return !text.includes("①上课内容⭐") || !text.includes("②课程反馈⭐") || !text.includes("③课后作业⭐");
}

function hasSpecificHomeworkReference(text) {
  const homework = text.split("③课后作业⭐")[1] || text.split("④课后落实⭐")[1] || "";
  return /第\s*[一二三四五六七八九十\d]+\s*[题问]|[Pp]\s*\d+|\d+\s*页|页码|题号|练习册编号|讲义\s*[Pp]?\s*\d+/.test(homework);
}

function json(data, status = 200, request) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders(request), "Content-Type": "application/json; charset=utf-8" }
  });
}

function corsHeaders(request) {
  const origin = request?.headers?.get("Origin") || "";
  return {
    "Access-Control-Allow-Origin": origin || "https://kehou-feedback.pages.dev",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
}

async function proxyToTencent(request, env, route) {
  const base = String(env.TENCENT_API_BASE || "").trim().replace(/\/+$/g, "");
  if (!base) return null;

  const prefix = normalizeProxyPrefix(env.TENCENT_API_PREFIX || "/api");
  const url = `${base}${prefix}/${route}`;
  const headers = {
    "Content-Type": request.headers.get("Content-Type") || "application/json"
  };
  if (env.TENCENT_PROXY_SECRET) {
    headers["X-Proxy-Secret"] = env.TENCENT_PROXY_SECRET;
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: await request.text()
    });
    const text = await response.text();
    return new Response(text, {
      status: response.status,
      headers: {
        ...corsHeaders(request),
        "Content-Type": response.headers.get("Content-Type") || "application/json; charset=utf-8"
      }
    });
  } catch (error) {
    return json({ error: error.message || "腾讯云反馈服务暂时不可用" }, 502, request);
  }
}

function normalizeProxyPrefix(prefix) {
  const value = String(prefix || "").trim();
  if (!value || value === "/") return "";
  return `/${value.replace(/^\/+|\/+$/g, "")}`;
}
