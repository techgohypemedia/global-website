import { neon } from "@neondatabase/serverless";
type NeonSql = ReturnType<typeof neon>;
import { existsSync, readFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";

export const dataDir =
  process.env.CATALOG_DATA_DIR || path.join(process.cwd(), "data");

function getDatabaseUrl(): string | undefined {
  if (process.env.DATABASE_URL !== undefined) {
    const val = process.env.DATABASE_URL.trim();
    return val.length > 0 ? val : undefined;
  }
  const envLocalPath = path.join(process.cwd(), ".env.local");
  if (existsSync(envLocalPath)) {
    const match = readFileSync(envLocalPath, "utf8").match(
      /^DATABASE_URL=(.+)$/m,
    );
    if (match) return match[1].trim();
  }
  return undefined;
}

const databaseUrl = getDatabaseUrl();
export const isPostgres = Boolean(databaseUrl);

let neonSql: NeonSql | null = null;
let sqliteDb: DatabaseSync | null = null;

let initialized = false;
let initPromise: Promise<void> | null = null;

export async function ensureDb(): Promise<void> {
  if (initialized) return;
  if (initPromise) return initPromise;

  initPromise = (async () => {
    if (databaseUrl) {
      neonSql ??= neon(databaseUrl);
    } else if (!sqliteDb) {
      if (process.env.VERCEL)
        throw new Error("Set DATABASE_URL for the deployed product registry.");
      mkdirSync(dataDir, { recursive: true });
      sqliteDb = new DatabaseSync(path.join(dataDir, "catalog.sqlite"));
      sqliteDb.exec("PRAGMA journal_mode = WAL;");
      sqliteDb.exec("PRAGMA foreign_keys = ON;");
      sqliteDb.exec("PRAGMA busy_timeout = 10000;");
    }
    if (isPostgres && neonSql) {
      const statements = [
        `CREATE TABLE IF NOT EXISTS categories (
          id TEXT PRIMARY KEY,
          name TEXT NOT NULL,
          name_key TEXT NOT NULL UNIQUE
        )`,
        `CREATE TABLE IF NOT EXISTS products (
          id BIGSERIAL PRIMARY KEY,
          public_id TEXT NOT NULL UNIQUE,
          name TEXT NOT NULL,
          sku TEXT NOT NULL,
          sku_key TEXT NOT NULL UNIQUE,
          category_id TEXT NOT NULL REFERENCES categories(id),
          brand TEXT NOT NULL DEFAULT '',
          model TEXT NOT NULL DEFAULT '',
          description TEXT NOT NULL DEFAULT '',
          images TEXT NOT NULL DEFAULT '[]',
          manufacturing_date TEXT NOT NULL DEFAULT '',
          website_url TEXT NOT NULL,
          active INTEGER NOT NULL DEFAULT 1,
          created_at TEXT NOT NULL DEFAULT (to_char(NOW() AT TIME ZONE 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS.MS"Z"')),
          updated_at TEXT NOT NULL DEFAULT (to_char(NOW() AT TIME ZONE 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS.MS"Z"'))
        )`,
        `CREATE TABLE IF NOT EXISTS admins (
          id INTEGER PRIMARY KEY CHECK(id=1),
          email TEXT NOT NULL,
          password TEXT NOT NULL
        )`,
        `CREATE TABLE IF NOT EXISTS sessions (
          token TEXT PRIMARY KEY,
          expires BIGINT NOT NULL
        )`,
        `CREATE TABLE IF NOT EXISTS login_attempts (
          key TEXT PRIMARY KEY,
          attempts INTEGER NOT NULL,
          reset_at BIGINT NOT NULL
        )`,
        `CREATE TABLE IF NOT EXISTS imports (
          id TEXT PRIMARY KEY,
          kind TEXT NOT NULL,
          result TEXT NOT NULL,
          created_at TEXT NOT NULL DEFAULT (to_char(NOW() AT TIME ZONE 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS.MS"Z"'))
        )`,
      ];

      for (const stmt of statements) {
        await neonSql.query(stmt);
      }

      // Automatically migrate data from SQLite if local sqlite exists and Neon is empty
      const sqliteFile = path.join(dataDir, "catalog.sqlite");
      if (existsSync(sqliteFile)) {
        try {
          const localSqlite = new DatabaseSync(sqliteFile, { readOnly: true });
          const adminRow = localSqlite
            .prepare("SELECT id, email, password FROM admins WHERE id=1")
            .get() as
            { id: number; email: string; password: string } | undefined;

          if (adminRow) {
            const neonAdmins = (await neonSql.query(
              "SELECT id FROM admins WHERE id=1",
            )) as unknown[];
            if (neonAdmins.length === 0) {
              await neonSql.query(
                "INSERT INTO admins (id, email, password) VALUES (1, $1, $2)",
                [adminRow.email, adminRow.password],
              );
              console.log(
                `[catalog-db] Migrated local admin (${adminRow.email}) to Neon PostgreSQL.`,
              );
            }
          }

          // Also migrate categories if none exist in Neon
          const localCategories = localSqlite
            .prepare("SELECT id, name, name_key FROM categories")
            .all() as { id: string; name: string; name_key: string }[];
          if (localCategories.length > 0) {
            const neonCats = (await neonSql.query(
              "SELECT id FROM categories LIMIT 1",
            )) as unknown[];
            if (neonCats.length === 0) {
              for (const c of localCategories) {
                await neonSql.query(
                  "INSERT INTO categories (id, name, name_key) VALUES ($1, $2, $3) ON CONFLICT (id) DO NOTHING",
                  [c.id, c.name, c.name_key],
                );
              }
              console.log(
                `[catalog-db] Migrated ${localCategories.length} categories to Neon PostgreSQL.`,
              );
            }
          }

          localSqlite.close();
        } catch (migErr) {
          console.warn("[catalog-db] SQLite migration check skipped:", migErr);
        }
      }
    } else if (sqliteDb) {
      sqliteDb.exec(`
        CREATE TABLE IF NOT EXISTS categories (id TEXT PRIMARY KEY, name TEXT NOT NULL, name_key TEXT NOT NULL UNIQUE);
        CREATE TABLE IF NOT EXISTS products (
          id INTEGER PRIMARY KEY AUTOINCREMENT, public_id TEXT NOT NULL UNIQUE,
          name TEXT NOT NULL, sku TEXT NOT NULL, sku_key TEXT NOT NULL UNIQUE,
          category_id TEXT NOT NULL REFERENCES categories(id), brand TEXT NOT NULL DEFAULT '', model TEXT NOT NULL DEFAULT '',
          description TEXT NOT NULL DEFAULT '', images TEXT NOT NULL DEFAULT '[]', manufacturing_date TEXT NOT NULL DEFAULT '',
          website_url TEXT NOT NULL, active INTEGER NOT NULL DEFAULT 1,
          created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
          updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
        );
        CREATE TABLE IF NOT EXISTS admins (id INTEGER PRIMARY KEY CHECK(id=1), email TEXT NOT NULL, password TEXT NOT NULL);
        CREATE TABLE IF NOT EXISTS sessions (token TEXT PRIMARY KEY, expires INTEGER NOT NULL);
        CREATE TABLE IF NOT EXISTS login_attempts (key TEXT PRIMARY KEY, attempts INTEGER NOT NULL, reset_at INTEGER NOT NULL);
        CREATE TABLE IF NOT EXISTS imports (id TEXT PRIMARY KEY, kind TEXT NOT NULL, result TEXT NOT NULL, created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')));
      `);
    }
    await (isPostgres && neonSql
      ? neonSql.query(
          "CREATE TABLE IF NOT EXISTS product_images (filename TEXT PRIMARY KEY, content TEXT NOT NULL)",
        )
      : sqliteDb!.exec(
          "CREATE TABLE IF NOT EXISTS product_images (filename TEXT PRIMARY KEY, content TEXT NOT NULL)",
        ));
    initialized = true;
  })();

  try {
    await initPromise;
  } finally {
    // A temporary connection failure must not poison this server instance.
    initPromise = null;
  }
}

function adaptSqlForSqlite(
  sql: string,
  params: unknown[],
): { sql: string; params: unknown[] } {
  const sqliteParams: unknown[] = [];
  let sqliteSql = sql.replace(/\$(\d+)\b/g, (_, indexStr) => {
    const idx = parseInt(indexStr, 10) - 1;
    sqliteParams.push(params[idx]);
    return "?";
  });
  sqliteSql = sqliteSql.replace(/\bILIKE\b/gi, "LIKE");
  sqliteSql = sqliteSql.replace(
    /\bNOW\(\)/gi,
    "(strftime('%Y-%m-%dT%H:%M:%fZ','now'))",
  );
  return { sql: sqliteSql, params: sqliteParams };
}

export async function query<T = any>(
  sqlText: string,
  params: unknown[] = [],
): Promise<T[]> {
  await ensureDb();
  if (isPostgres && neonSql) {
    const res = await neonSql.query(sqlText, params);
    return res as T[];
  }

  const { sql, params: p } = adaptSqlForSqlite(sqlText, params);
  return sqliteDb!.prepare(sql).all(...(p as any[])) as T[];
}

/**
 * Execute a query returning a single row or undefined.
 */
export async function queryOne<T = any>(
  sqlText: string,
  params: unknown[] = [],
): Promise<T | undefined> {
  await ensureDb();
  if (isPostgres && neonSql) {
    const res = (await neonSql.query(sqlText, params)) as any[];
    return (res[0] as T) ?? undefined;
  }

  const { sql, params: p } = adaptSqlForSqlite(sqlText, params);
  return (sqliteDb!.prepare(sql).get(...(p as any[])) as T) ?? undefined;
}

/**
 * Execute a mutation query (INSERT, UPDATE, DELETE).
 */
export async function execute(
  sqlText: string,
  params: unknown[] = [],
): Promise<{ rowCount: number }> {
  await ensureDb();
  if (isPostgres && neonSql) {
    const res = await neonSql.query(sqlText, params);
    return { rowCount: Array.isArray(res) ? res.length : 1 };
  }

  const { sql, params: p } = adaptSqlForSqlite(sqlText, params);
  const info = sqliteDb!.prepare(sql).run(...(p as any[]));
  return { rowCount: Number(info.changes) };
}

export { sqliteDb as db };
