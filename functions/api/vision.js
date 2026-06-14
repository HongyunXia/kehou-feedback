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
    const images = Array.isArray(data.images) ? data.images.slice(0, 6) : [];
    if (!images.length) {
      return json({ error: "请先上传需要识别的图片" }, 400, request);
    }

    let usageReservation = await reserveTencentUsage(data, env, 4);
    if (!usageReservation) {
      const auth = verifyAccessCode(data, env);
      if (!auth.ok) {
        return json({ error: auth.message }, auth.status || 401, request);
      }
    }

    try {
      const recognized = await recognizeImages(env, data, images);
      return json({ ...recognized, usage: usageReservation?.usage || null }, 200, request);
    } catch (error) {
      await refundTencentUsage(usageReservation?.usage, env);
      throw error;
    }
  } catch (error) {
    return json({ error: error.message || "图片识别服务暂时不可用" }, error.status || 500, request);
  }
}

async function reserveTencentUsage(data, env, cost) {
  const result = await callTencentAuth(env, { ...data, action: "reserveUsage", cost });
  if (!result) return null;
  if (!result.ok) {
    throw httpError(result.error || result.message || "AI次数校验失败", result.status || 502);
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
    throw httpError(result.error || result.message || "腾讯云账号服务暂时不可用", response.status);
  }
  return result;
}

function httpError(message, status = 500) {
  const error = new Error(message);
  error.status = status;
  return error;
}

function verifyAccessCode(data, env) {
  const code = String(data?.accessCode || "").trim();
  if (!code) {
    return { ok: false, status: 401, message: "请先填写AI授权码" };
  }

  const allowedCodes = String(env.ACCESS_CODES || "")
    .split(/[\s,，;；\n]+/)
    .map((item) => item.trim())
    .filter(Boolean);

  if (!allowedCodes.length) {
    return { ok: false, status: 503, message: "服务端尚未配置授权码" };
  }

  if (!allowedCodes.includes(code)) {
    return { ok: false, status: 403, message: "AI授权码无效" };
  }

  return { ok: true, code };
}

async function recognizeImages(env, data, images) {
  const endpoint = env.VISION_ENDPOINT || "https://openrouter.ai/api/v1/chat/completions";
  const apiKey = env.VISION_API_KEY || env.OPENROUTER_API_KEY;
  const model = env.VISION_MODEL || "qwen/qwen2.5-vl-72b-instruct";

  if (!apiKey) {
    throw new Error("服务端尚未配置视觉AI密钥");
  }

  const content = [
    {
      type: "text",
      text: buildVisionPrompt(data, images.length)
    },
    ...images.map((image) => ({
      type: "image_url",
      image_url: {
        url: image.dataUrl
      }
    }))
  ];

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model,
      messages: [
        {
          role: "system",
          content: "你是课堂板书和讲义图片识别助手，只负责识别图片中的真实文字、题目、公式和课堂要点，不要编造。"
        },
        {
          role: "user",
          content
        }
      ],
      temperature: 0.1,
      max_tokens: 900
    })
  });

  const result = await response.json();
  if (!response.ok) {
    throw new Error(result?.error?.message || "视觉AI接口调用失败");
  }

  return parseVisionResult(result?.choices?.[0]?.message?.content || "");
}

function buildVisionPrompt(data, imageCount) {
  return `
请识别${imageCount}张课堂板书、试卷或讲义图片中的有效教学内容，并先判断真实学科。

课堂背景：
学段：${data.stage || ""}
年级：${data.grade || ""}
页面当前学科：${data.subject || ""}（仅作参考，不能据此猜测；必须以图片内容为准）

识别要求：
1. 第一步必须判断图片真实学科，只能从：语文、数学、英语、物理、化学、生物、地理、历史、政治、科学、未知 中选择。
2. 学科判断必须依据图片中的文字、题干、公式、词汇和课堂内容；不要沿用页面当前学科。
3. 只提取图片中真实出现的文字、题干、公式、关键词和课堂要点。
4. 如果是英文资料，subject 必须优先判断为“英语”，保留英文原文并补充必要中文说明。
5. 如果是数学、物理、化学内容，保留公式、符号和题型关键词。
6. 多张图片请按“第1页、第2页”分段整理。
7. 图片模糊或无法确认的部分，用“疑似”标注，不要强行猜测。
8. 不要生成课后反馈。

请严格输出 JSON，不要输出 Markdown，不要加解释：
{
  "subject": "英语",
  "confidence": 0.92,
  "knowledgePoints": ["一般过去时", "阅读理解"],
  "topic": "一般过去时与阅读理解",
  "content": "第1页：识别出的真实内容..."
}
`;
}

function parseVisionResult(rawText) {
  const cleaned = cleanVisionText(rawText);
  const parsed = parseJsonFromText(cleaned);
  if (parsed && typeof parsed === "object") {
    const subject = normalizeSubject(parsed.subject || parsed.detectedSubject);
    const content = cleanVisionText(parsed.content || parsed.text || parsed.lessonSummary || cleaned);
    const knowledgePoints = Array.isArray(parsed.knowledgePoints)
      ? parsed.knowledgePoints.map((item) => String(item || "").trim()).filter(Boolean).slice(0, 8)
      : [];
    return {
      text: content,
      content,
      subject,
      detectedSubject: subject,
      confidence: Number(parsed.confidence) || 0,
      knowledgePoints,
      topic: String(parsed.topic || knowledgePoints[0] || "").trim()
    };
  }

  const subject = inferSubjectFromVisionText(cleaned);
  return {
    text: cleaned,
    content: cleaned,
    subject,
    detectedSubject: subject,
    confidence: subject ? 0.55 : 0,
    knowledgePoints: [],
    topic: ""
  };
}

function parseJsonFromText(text) {
  const value = String(text || "").trim();
  const fenced = value.match(/```(?:json)?\s*([\s\S]*?)```/i);
  const jsonText = fenced ? fenced[1].trim() : value;
  try {
    return JSON.parse(jsonText);
  } catch {
    const start = jsonText.indexOf("{");
    const end = jsonText.lastIndexOf("}");
    if (start >= 0 && end > start) {
      try {
        return JSON.parse(jsonText.slice(start, end + 1));
      } catch {
        return null;
      }
    }
    return null;
  }
}

function normalizeSubject(value) {
  const text = String(value || "").trim();
  const subjects = ["语文", "数学", "英语", "物理", "化学", "生物", "地理", "历史", "政治", "科学"];
  return subjects.find((subject) => text.includes(subject)) || "";
}

function inferSubjectFromVisionText(text) {
  const value = String(text || "");
  const englishLetters = (value.match(/[A-Za-z]/g) || []).length;
  const chineseChars = (value.match(/[\u4e00-\u9fa5]/g) || []).length;
  if (englishLetters >= 20 && englishLetters > chineseChars * 0.45) return "英语";
  const rules = [
    ["数学", /函数|方程|几何|代数|坐标|二次|一次|分式|概率|统计|圆|三角形|x\s*[+=-]|y\s*=/i],
    ["语文", /文言|古诗|阅读理解|作文|修辞|病句|说明文|议论文|记叙文|字词|拼音/i],
    ["物理", /力学|电路|电压|电流|欧姆|压强|浮力|光学|透镜|速度|密度|磁场/i],
    ["化学", /化学式|方程式|酸|碱|盐|溶液|氧气|二氧化碳|化合价|金属/i],
    ["生物", /细胞|生态|遗传|光合|呼吸作用|植物|动物|免疫|生物圈/i],
    ["地理", /经纬|气候|地形|河流|地图|板块|人口|区域|洋流|城市化/i],
    ["历史", /朝代|秦汉|隋唐|明清|鸦片战争|辛亥|抗日|工业革命|世界大战/i],
    ["政治", /法治|宪法|权利|义务|道德|民主|责任|国家利益|核心价值观/i],
    ["科学", /观察|实验|物态|电与磁|大气压|浮力|地球|月相/i]
  ];
  const hit = rules.find(([, pattern]) => pattern.test(value));
  return hit ? hit[0] : "";
}

function cleanVisionText(text) {
  return String(text)
    .replace(/\r/g, "")
    .replace(/\n{3,}/g, "\n")
    .replace(/\*\*/g, "")
    .trim();
}

function json(data, status = 200, request) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders(request), "Content-Type": "application/json; charset=utf-8" }
  });
}

function corsHeaders(request) {
  const origin = request?.headers?.get("Origin") || "*";
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin"
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
    return json({ error: error.message || "腾讯云识别服务暂时不可用" }, 502, request);
  }
}

function normalizeProxyPrefix(prefix) {
  const value = String(prefix || "").trim();
  if (!value || value === "/") return "";
  return `/${value.replace(/^\/+|\/+$/g, "")}`;
}
