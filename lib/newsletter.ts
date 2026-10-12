/**
 * Newsletter subscriptions collected by the website "Subscribe Now" form.
 * Rows live next to the product registry (SQLite locally, Postgres when
 * DATABASE_URL is set) so admins can export the list from the admin panel.
 */
import { execute, query, queryOne } from "./catalog-db";

export type Subscriber = { email: string; lang: string; created_at: string };

let tableReady: Promise<void> | null = null;

function ensureTable(): Promise<void> {
  tableReady ??= execute(
    `CREATE TABLE IF NOT EXISTS newsletter_subscribers (
      email TEXT PRIMARY KEY,
      lang TEXT NOT NULL DEFAULT 'en',
      created_at TEXT NOT NULL
    )`,
  ).then(() => undefined);
  return tableReady;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function normalizeEmail(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  const email = raw.trim().toLowerCase();
  if (email.length > 254 || !EMAIL_RE.test(email)) return null;
  return email;
}

export async function subscribe(
  rawEmail: unknown,
  lang: string,
): Promise<{ email: string; duplicate: boolean }> {
  const email = normalizeEmail(rawEmail);
  if (!email) throw new Error("Please enter a valid email address.");
  await ensureTable();
  const existing = await queryOne<Subscriber>(
    "SELECT email FROM newsletter_subscribers WHERE email = $1",
    [email],
  );
  if (existing) return { email, duplicate: true };
  await execute(
    "INSERT INTO newsletter_subscribers (email, lang, created_at) VALUES ($1, $2, $3)",
    [email, lang === "hi" ? "hi" : "en", new Date().toISOString()],
  );
  return { email, duplicate: false };
}

export async function listSubscribers(): Promise<Subscriber[]> {
  await ensureTable();
  return query<Subscriber>(
    "SELECT email, lang, created_at FROM newsletter_subscribers ORDER BY created_at DESC",
  );
}

export function subscribersCsv(rows: Subscriber[]): string {
  const cell = (v: string) => `"${String(v).replace(/"/g, '""')}"`;
  return [
    ["Email", "Language", "Subscribed At (UTC)"].map(cell).join(","),
    ...rows.map((r) => [r.email, r.lang, r.created_at].map(cell).join(",")),
  ].join("\r\n");
}
