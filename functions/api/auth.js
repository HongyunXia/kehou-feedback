export async function onRequest(context) {
  const { request, env } = context;

  if (request.method === "OPTIONS") {
    return json({}, 200, request);
  }

  if (request.method !== "POST") {
    return json({ ok: false, message: "Only POST allowed" }, 405, request);
  }

  const kv = getAuthKV(env);
  if (!kv) {
    return json({ ok: false, message: "服务端未绑定 AUTH_KV，无法使用云端账号" }, 503, request);
  }

  try {
    const data = await request.json();
    const action = String(data?.action || "").trim();

    if (action === "register") {
      return handleRegister(data, kv, request);
    }
    if (action === "login") {
      return handleLogin(data, kv, request);
    }
    if (action === "session") {
      return handleSession(data, kv, request);
    }

    return json({ ok: false, message: "未知账号操作" }, 400, request);
  } catch (error) {
    return json({ ok: false, message: error.message || "账号服务暂时不可用" }, 500, request);
  }
}

async function handleRegister(data, kv, request) {
  const account = normalizeAccount(data?.account);
  const phone = String(data?.phone || "").trim();
  const password = String(data?.password || "");
  const validation = validateAccountPassword(account, password);
  if (validation) {
    return json({ ok: false, message: validation }, 400, request);
  }

  const userKey = getUserKey(account);
  const existing = await kv.get(userKey, "json");
  if (existing) {
    return json({ ok: false, message: "这个账号已经注册过，请直接登录" }, 409, request);
  }

  const salt = randomHex(16);
  const now = Date.now();
  const user = {
    account,
    phone,
    salt,
    passwordHash: await hashPassword(password, salt),
    createdAt: now,
    updatedAt: now
  };
  await kv.put(userKey, JSON.stringify(user));
  const token = await createSession(kv, account);
  return json({ ok: true, account, phone, token }, 200, request);
}

async function handleLogin(data, kv, request) {
  const account = normalizeAccount(data?.account);
  const password = String(data?.password || "");
  const validation = validateAccountPassword(account, password);
  if (validation) {
    return json({ ok: false, message: validation }, 400, request);
  }

  const user = await kv.get(getUserKey(account), "json");
  if (!user) {
    return json({ ok: false, message: "账号不存在，请先注册后再登录" }, 404, request);
  }

  const passwordHash = await hashPassword(password, user.salt);
  if (passwordHash !== user.passwordHash) {
    return json({ ok: false, message: "账号或密码不正确" }, 401, request);
  }

  const token = await createSession(kv, account);
  return json({ ok: true, account: user.account, phone: user.phone || "", token }, 200, request);
}

async function handleSession(data, kv, request) {
  const token = String(data?.token || "").trim();
  if (!token) {
    return json({ ok: false, message: "未登录" }, 401, request);
  }

  const session = await kv.get(getSessionKey(token), "json");
  if (!session || !session.account || session.expiresAt < Date.now()) {
    return json({ ok: false, message: "登录已失效，请重新登录" }, 401, request);
  }

  return json({ ok: true, account: session.account, token }, 200, request);
}

async function createSession(kv, account) {
  const token = randomHex(24);
  const expiresAt = Date.now() + 30 * 24 * 60 * 60 * 1000;
  await kv.put(getSessionKey(token), JSON.stringify({
    account,
    createdAt: Date.now(),
    expiresAt
  }), { expirationTtl: 30 * 24 * 60 * 60 });
  return token;
}

function validateAccountPassword(account, password) {
  if (!account) return "请先输入账号";
  if (account.length < 2 || account.length > 32) return "账号长度建议为 2-32 位";
  if (!/^[\w\u4e00-\u9fa5.-]+$/.test(account)) return "账号只能包含中文、字母、数字、下划线、点或短横线";
  if (password.length < 8) return "密码至少 8 位";
  return "";
}

function normalizeAccount(value) {
  return String(value || "").trim();
}

function getUserKey(account) {
  return `teacher:${account.toLowerCase()}`;
}

function getSessionKey(token) {
  return `teacher_session:${token}`;
}

function getAuthKV(env) {
  return env.AUTH_KV || env.kehou_feedback_auth;
}

async function hashPassword(password, salt) {
  const input = new TextEncoder().encode(`${salt}:${password}`);
  const digest = await crypto.subtle.digest("SHA-256", input);
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function randomHex(length) {
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);
  return [...bytes].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function json(data, status = 200, request) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...corsHeaders(request)
    }
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
