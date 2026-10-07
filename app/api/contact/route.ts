import { NextResponse } from "next/server";
/** Connect a server-side mailbox/CRM webhook through CONTACT_WEBHOOK_URL. */
export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (
    !body ||
    typeof body.naam !== "string" ||
    !body.naam.trim() ||
    typeof body.email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)
  ) {
    return NextResponse.json(
      { ok: false, error: "Vul je naam en een geldig e-mailadres in." },
      { status: 400 },
    );
  }
  const endpoint = process.env.CONTACT_WEBHOOK_URL;
  if (!endpoint)
    return NextResponse.json(
      {
        ok: false,
        error:
          "Het contactformulier is nog niet aangesloten. Mail je aanvraag naar info@kosifly.com of bel +32 483 69 04 26.",
      },
      { status: 503 },
    );
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) throw new Error("Webhook failed");
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Je aanvraag kon niet verstuurd worden. Probeer opnieuw of mail naar info@kosifly.com.",
      },
      { status: 502 },
    );
  }
}
