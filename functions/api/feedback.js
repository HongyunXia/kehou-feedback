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
    const prompt = buildPrompt(data);
    let result = await callDeepSeek(env, prompt);
    let feedback = normalizeFeedback(data, cleanFeedback(result?.choices?.[0]?.message?.content || ""));

    if (!isUsableFeedback(feedback)) {
      result = await callDeepSeek(env, buildRepairPrompt(data, feedback));
      feedback = normalizeFeedback(data, cleanFeedback(result?.choices?.[0]?.message?.content || ""));
    }

    if (!isUsableFeedback(feedback)) {
      return json({ error: "AI输出不完整，已触发本地兜底", raw: result }, 500, request);
    }

    return json({ feedback }, 200, request);
  } catch (error) {
    return json({ error: error.message || "服务暂时不可用" }, 500, request);
  }
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
          content: "你是一名中国初高中学科培训老师。只允许使用简体中文输出完整课后反馈，语言要像老师发给家长的日常沟通，不要像AI模板。"
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.65,
      max_tokens: 900,
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
  return `
请根据以下课堂信息，为家长生成一份固定格式的课后反馈。

硬性要求：
1. 第一行必须是“${data.subject || "学科"} 课程课堂反馈”。
2. 第二行只输出已有时间信息：“${lessonMeta}”。如果授课时段为空，禁止写任何授课时段相关文字，也不要写“未填写”。
3. 第三行起必须分三点排布，且标题固定为：①上课内容⭐ ②课程反馈⭐ ③课后作业⭐。
4. 每个分点标题单独占一行，标题后面的正文必须另起一行。
5. 不要使用“家长您好”作为开头，不要添加其他标题，不要空行。
6. “①上课内容⭐”正文写本节课具体讲了什么知识点、题型或训练任务。
7. “②课程反馈⭐”正文结合成绩等级、课堂表现、掌握情况、薄弱原因，写孩子的具体亮点和问题。
8. “③课后作业⭐”正文只写作业类型与练习范围，例如课堂错题订正、同类变式练习、基础巩固练习、答题规范复盘等，并补一句后续教学跟进。
9. “③课后作业⭐”禁止标注具体习题题号、页码、讲义页码、练习册编号、具体数量或“第几题”，不要编造具体作业编号。
10. 如果提供了成绩等级，需要结合“优秀、良好、一般”的层次判断学生学情画像：优秀侧重拔高与规范，良好侧重补齐易错和迁移，一般侧重基础巩固和可执行复习。
11. 语言专业、真诚、客观，适合老师直接发给家长。
12. 总字数控制在180到300字，必须完整收尾。
13. 全文只能使用简体中文和中文标点，禁止英文单词、英文短语、拼音和中英混写。
14. 不要使用“较稳、比较稳、基础漏洞、这个方面、那个方面”等生硬表达。

课堂信息：
学生姓名：${data.studentName || "孩子"}
学段：${data.stage || ""}
年级：${data.grade || ""}
学科：${data.subject || ""}
上课日期：${data.lessonDate || ""}
授课时段：${data.lessonTime || ""}
教学板块：${data.block || ""}
知识点：${Array.isArray(data.knowledgePoints) ? data.knowledgePoints.join("、") : data.topic || ""}
对应考点：${data.exam || ""}
课堂掌握：${data.mastery || ""}
成绩等级：${data.scoreLevel || "未录入"}
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
${data.subject || "学科"} 课程课堂反馈
${lessonMeta}
①上课内容⭐
正文
②课程反馈⭐
正文
③课后作业⭐
正文
`;
}

function buildRepairPrompt(data, badText) {
  const lessonMeta = buildLessonMeta(data);
  return `
下面这段课后反馈存在表达不完整或格式不符合要求的问题，请完全重写。

问题文本：
${badText || "无"}

重写要求：
1. 只能输出简体中文，禁止英文、拼音和中英混写。
2. 第一行必须是“${data.subject || "学科"} 课程课堂反馈”。
3. 第二行只输出已有时间信息：“${lessonMeta}”。如果授课时段为空，禁止写任何授课时段相关文字，也不要写“未填写”。
4. 第三行起必须分三点：①上课内容⭐ ②课程反馈⭐ ③课后作业⭐。
5. 每个分点标题单独占一行，标题后面的正文必须另起一行。
6. 围绕“${Array.isArray(data.knowledgePoints) ? data.knowledgePoints.join("、") : data.topic || ""}”写课堂内容、课程反馈、课后作业。
7. “③课后作业⭐”只写作业类型与练习范围，禁止具体习题题号、页码、讲义页码、练习册编号、具体数量或“第几题”。
8. 字数控制在180到300字。
9. 必须完整结束，最后一句以中文句号结尾。

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
  const title = `${data.subject || "学科"} 课程课堂反馈`;
  const lessonMeta = buildLessonMeta(data);
  const value = cleanFeedback(text)
    .replace(/①\s*上课内容\s*⭐?\s*[：:]/g, "①上课内容⭐\n")
    .replace(/①\s*上课内容\s*⭐/g, "①上课内容⭐")
    .replace(/②\s*课程反馈\s*⭐?\s*[：:]/g, "②课程反馈⭐\n")
    .replace(/②\s*课程反馈\s*⭐/g, "②课程反馈⭐")
    .replace(/③\s*课后作业\s*⭐?\s*[：:]/g, "③课后作业⭐\n")
    .replace(/③\s*课后作业\s*⭐/g, "③课后作业⭐")
    .replace(/\n{3,}/g, "\n");

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

function isUsableFeedback(text) {
  if (!text) return false;
  if (text.length < 80 || text.length > 1000) return false;
  if (/[A-Za-z]{2,}/.test(text)) return false;
  if (!text.includes("①上课内容⭐") || !text.includes("②课程反馈⭐") || !text.includes("③课后作业⭐")) return false;
  if (!/①上课内容⭐\n[\s\S]{8,}\n②课程反馈⭐/.test(text)) return false;
  if (!/②课程反馈⭐\n[\s\S]{8,}\n③课后作业⭐/.test(text)) return false;
  if (!/③课后作业⭐\n[\s\S]{8,}/.test(text)) return false;
  if (/未填写|授课时段未填写/.test(text)) return false;
  if (hasSpecificHomeworkReference(text)) return false;
  return true;
}

function hasSpecificHomeworkReference(text) {
  const homework = text.split("③课后作业⭐")[1] || "";
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
