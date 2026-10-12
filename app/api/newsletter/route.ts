import { NextRequest } from "next/server";
import { authenticated } from "@/lib/catalog-auth";
import { listSubscribers, subscribe, subscribersCsv } from "@/lib/newsletter";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const json = (data: unknown, status = 200) =>
  Response.json(data, { status, headers: { "Cache-Control": "no-store" } });

/** Public: the website subscribe form posts here. */
export async function POST(request: NextRequest) {
  let body: { email?: unknown; lang?: unknown } = {};
  try {
    body = await request.json();
  } catch {
    return json({ error: "Please enter a valid email address." }, 400);
  }
  try {
    const result = await subscribe(
      body.email,
      typeof body.lang === "string" ? body.lang : "en",
    );
    return json({ ok: true, ...result });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Subscription failed.";
    if (message.startsWith("Please enter")) return json({ error: message }, 400);
    console.error("[newsletter] subscribe failed", error);
    return json(
      { error: "We could not save your subscription right now. Please try again." },
      503,
    );
  }
}

/** Admin only: list or export subscribers. */
export async function GET(request: NextRequest) {
  if (!(await authenticated())) return json({ error: "Please sign in." }, 401);
  try {
    const rows = await listSubscribers();
    if (request.nextUrl.searchParams.get("format") === "csv") {
      return new Response("﻿" + subscribersCsv(rows), {
        headers: {
          "Content-Type": "text/csv; charset=utf-8",
          "Cache-Control": "no-store",
          "Content-Disposition": 'attachment; filename="newsletter-subscribers.csv"',
        },
      });
    }
    return json({ subscribers: rows });
  } catch (error) {
    console.error("[newsletter] list failed", error);
    return json({ error: "Subscriber list is temporarily unavailable." }, 503);
  }
}
