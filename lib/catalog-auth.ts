import {
  randomBytes,
  scryptSync,
  timingSafeEqual,
  createHash,
} from "node:crypto";
import { cookies } from "next/headers";
import { execute, isPostgres, queryOne } from "./catalog-db";

const digest = (value: string) =>
  createHash("sha256").update(value).digest("hex");

export async function configured(): Promise<boolean> {
  const admin = await queryOne<{ id: number }>(
    "SELECT id FROM admins WHERE id=1",
  );
  return Boolean(admin);
}

export async function authenticated(): Promise<boolean> {
  const jar = await cookies();
  const token = jar.get("catalog_session")?.value;
  if (!token) return false;
  const session = await queryOne<{ token: string }>(
    "SELECT token FROM sessions WHERE token=$1 AND expires>$2",
    [digest(token), Date.now()],
  );
  return Boolean(session);
}

export function checkOrigin(request: Request) {
  const expected = process.env.APP_URL
    ? new URL(process.env.APP_URL).origin
    : new URL(request.url).origin;
  if (request.headers.get("origin") !== expected)
    throw new Error("Request origin is not allowed.");
}

export async function login(
  email: string,
  password: string,
  setupToken?: string,
) {
  const bucket = "admin-login";
  const attempt = await queryOne<{
    attempts: number;
    reset_at: number | string;
  }>("SELECT attempts, reset_at FROM login_attempts WHERE key=$1", [bucket]);
  const now = Date.now();
  if (attempt && Number(attempt.reset_at) > now && attempt.attempts >= 10)
    throw new Error("Too many attempts. Try again in 15 minutes.");

  const upsertSql = isPostgres
    ? "INSERT INTO login_attempts (key, attempts, reset_at) VALUES ($1, 1, $2) ON CONFLICT (key) DO UPDATE SET attempts = CASE WHEN login_attempts.reset_at < $3 THEN 1 ELSE login_attempts.attempts + 1 END, reset_at = CASE WHEN login_attempts.reset_at < $4 THEN EXCLUDED.reset_at ELSE login_attempts.reset_at END"
    : "INSERT INTO login_attempts (key, attempts, reset_at) VALUES ($1, 1, $2) ON CONFLICT(key) DO UPDATE SET attempts = CASE WHEN reset_at < $3 THEN 1 ELSE attempts + 1 END, reset_at = CASE WHEN reset_at < $4 THEN excluded.reset_at ELSE reset_at END";

  await execute(upsertSql, [bucket, now + 900000, now, now]);

  const isConfigured = await configured();
  if (!isConfigured) {
    const expected = process.env.ADMIN_SETUP_TOKEN;
    if (
      !expected ||
      !setupToken ||
      !timingSafeEqual(
        Buffer.from(digest(expected)),
        Buffer.from(digest(setupToken)),
      )
    )
      throw new Error(
        "Enter the setup token from .env.local to create the first admin.",
      );
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254)
      throw new Error("Enter a valid email address.");
    if (password.length < 12 || password.length > 256)
      throw new Error("Use a password with 12–256 characters.");
    const salt = randomBytes(16).toString("hex");
    await execute(
      "INSERT INTO admins (id, email, password) VALUES (1, $1, $2)",
      [
        email.trim().toLowerCase(),
        `${salt}:${scryptSync(password, salt, 64).toString("hex")}`,
      ],
    );
  }

  const admin = await queryOne<{ email: string; password: string }>(
    "SELECT email, password FROM admins WHERE id=1",
  );
  if (!admin) throw new Error("Email or password is incorrect.");

  const [salt, hash] = admin.password.split(":");
  const valid = timingSafeEqual(
    Buffer.from(hash, "hex"),
    scryptSync(password, salt, 64),
  );
  if (!valid || admin.email !== email.trim().toLowerCase())
    throw new Error("Email or password is incorrect.");

  await execute("DELETE FROM login_attempts WHERE key=$1", [bucket]);
  await execute("DELETE FROM sessions WHERE expires < $1", [Date.now()]);
  const token = randomBytes(32).toString("hex");
  await execute("INSERT INTO sessions (token, expires) VALUES ($1, $2)", [
    digest(token),
    Date.now() + 8 * 3600000,
  ]);

  (await cookies()).set("catalog_session", token, {
    httpOnly: true,
    sameSite: "strict",
    secure:
      process.env.APP_URL?.startsWith("https://") ??
      process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 8 * 3600,
  });
}

export async function logout() {
  const jar = await cookies();
  const token = jar.get("catalog_session")?.value;
  if (token) {
    await execute("DELETE FROM sessions WHERE token=$1", [digest(token)]);
  }
  jar.delete("catalog_session");
}
