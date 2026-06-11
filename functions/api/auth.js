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
    if (action === "getProfile") {
      return handleGetProfile(data, kv, request);
    }
    if (action === "saveProfile") {
      return handleSaveProfile(data, kv, request);
    }
    if (action === "changePassword") {
      return handleChangePassword(data, kv, request);
    }
    if (action === "logout") {
      return handleLogout(data, kv, request);
    }

    return json({ ok: false, message: "未知账号操作" }, 400, request);
  } catch (error) {
    return json({ ok: false, message: error.message || "账号服务暂时不可用" }, error.status || 500, request);
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
  const session = await requireSession(kv, token);

  return json({ ok: true, account: session.account, token }, 200, request);
}

async function handleGetProfile(data, kv, request) {
  const session = await requireSession(kv, String(data?.token || "").trim());
  const profile = await kv.get(getProfileKey(session.account), "json");
  return json({ ok: true, account: session.account, profile: normalizeProfile(profile) }, 200, request);
}

async function handleSaveProfile(data, kv, request) {
  const session = await requireSession(kv, String(data?.token || "").trim());
  const existing = await kv.get(getProfileKey(session.account), "json");
  const profile = normalizeProfile({ ...normalizeProfile(existing), ...normalizeProfile(data?.profile) });
  profile.updatedAt = Date.now();
  await kv.put(getProfileKey(session.account), JSON.stringify(profile));
  return json({ ok: true, account: session.account, profile }, 200, request);
}

async function handleChangePassword(data, kv, request) {
  const session = await requireSession(kv, String(data?.token || "").trim());
  const oldPassword = String(data?.oldPassword || "");
  const newPassword = String(data?.newPassword || "");
  if (newPassword.length < 8) {
    return json({ ok: false, message: "新密码至少 8 位" }, 400, request);
  }

  const user = await kv.get(getUserKey(session.account), "json");
  if (!user) {
    return json({ ok: false, message: "账号不存在，请重新登录" }, 404, request);
  }
  const oldHash = await hashPassword(oldPassword, user.salt);
  if (oldHash !== user.passwordHash) {
    return json({ ok: false, message: "原密码不正确" }, 401, request);
  }

  const salt = randomHex(16);
  user.salt = salt;
  user.passwordHash = await hashPassword(newPassword, salt);
  user.updatedAt = Date.now();
  await kv.put(getUserKey(session.account), JSON.stringify(user));
  return json({ ok: true, account: session.account }, 200, request);
}

async function handleLogout(data, kv, request) {
  const token = String(data?.token || "").trim();
  if (token) {
    await kv.delete(getSessionKey(token));
  }
  return json({ ok: true }, 200, request);
}

async function requireSession(kv, token) {
  if (!token) {
    throw new HttpError("未登录", 401);
  }
  const session = await kv.get(getSessionKey(token), "json");
  if (!session || !session.account || session.expiresAt < Date.now()) {
    throw new HttpError("登录已失效，请重新登录", 401);
  }
  return session;
}

function normalizeProfile(profile) {
  const source = profile && typeof profile === "object" ? profile : {};
  return {
    studentNames: cleanList(source.studentNames),
    accessCodes: cleanList(source.accessCodes),
    students: cleanStudents(source.students),
    feedbackHistory: Array.isArray(source.feedbackHistory) ? source.feedbackHistory.slice(0, 12) : [],
    updatedAt: Number(source.updatedAt) || 0
  };
}

function cleanList(values) {
  return Array.isArray(values)
    ? [...new Set(values.map((value) => String(value || "").trim()).filter(Boolean))].slice(0, 12)
    : [];
}

function cleanStudents(values) {
  if (!Array.isArray(values)) return [];
  const seen = new Set();
  return values
    .map((item) => {
      const source = item && typeof item === "object" ? item : {};
      const name = String(source.name || "").trim();
      if (!name) return null;
      return {
        id: String(source.id || `${Date.now()}-${Math.random().toString(16).slice(2)}`),
        name,
        stage: String(source.stage || "").trim(),
        grade: String(source.grade || "").trim(),
        subject: String(source.subject || "").trim(),
        updatedAt: Number(source.updatedAt) || Date.now()
      };
    })
    .filter(Boolean)
    .filter((student) => {
      const key = `${student.name}|${student.stage}|${student.grade}|${student.subject}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, 120);
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

function getProfileKey(account) {
  return `teacher_profile:${account.toLowerCase()}`;
}

class HttpError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
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
