export async function onRequest(context) {
  const { request, env } = context;

  if (request.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders(request) });
  }

  if (request.method !== "POST") {
    return json({ error: "Only POST allowed" }, 405, request);
  }

  const proxyResponse = await proxyToTencent(request, env, "vision");
  if (proxyResponse) {
    return proxyResponse;
  }

  try {
    const data = await request.json();
    const auth = verifyAccessCode(data, env);
    if (!auth.ok) {
      return json({ error: auth.message }, auth.status || 401, request);
    }

    const images = Array.isArray(data.images) ? data.images.slice(0, 6) : [];
    if (!images.length) {
      return json({ error: "请先上传需要识别的图片" }, 400, request);
    }

    const text = await recognizeImages(env, data, images);
    return json({ text }, 200, request);
  } catch (error) {
    return json({ error: error.message || "图片识别服务暂时不可用" }, 500, request);
  }
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

  return cleanVisionText(result?.choices?.[0]?.message?.content || "");
}

function buildVisionPrompt(data, imageCount) {
  return `
请识别${imageCount}张课堂板书、试卷或讲义图片中的有效教学内容。

课堂背景：
学段：${data.stage || ""}
年级：${data.grade || ""}
学科：${data.subject || ""}

识别要求：
1. 只提取图片中真实出现的文字、题干、公式、关键词和课堂要点。
2. 不要把英文误判为数学内容，不要根据学科自行脑补。
3. 如果是英文资料，保留英文原文并补充必要中文说明。
4. 如果是数学、物理、化学内容，保留公式、符号和题型关键词。
5. 多张图片请按“第1页、第2页”分段整理。
6. 图片模糊或无法确认的部分，用“疑似”标注，不要强行猜测。
7. 输出简洁清楚的识别结果，不要生成课后反馈。
`;
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
