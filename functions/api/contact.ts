/**
 * Cloudflare Pages Function: POST /api/contact, gebruikt door het contact- en het auditformulier.
 * Controleert herkomst, omvang en verplichte velden, weigert spam (honeypot) en stuurt een vaste set
 * velden door naar CONTACT_WEBHOOK_URL (mailbox- of CRM-koppeling, in te stellen in Cloudflare Pages).
 */
interface Context {
  request: Request;
  env: {
    CONTACT_WEBHOOK_URL?: string;
  };
}

const MAX_BODY_BYTES = 20_000;
const WEBHOOK_TIMEOUT_MS = 8_000;
const FALLBACK = "Mail je aanvraag naar info@kosifly.com of bel +32 483 69 04 26.";

/** Tekstvelden die we doorsturen, met hun maximale lengte. Andere velden worden genegeerd. */
const TEXT_FIELDS: Record<string, number> = {
  name: 120,
  email: 200,
  telefoon: 40,
  bedrijf: 160,
  website: 300,
  bericht: 5_000,
  type: 20,
  budget: 20,
};
/** Gestructureerde velden uit de calculators; ze vallen binnen MAX_BODY_BYTES. */
const OBJECT_FIELDS = ["quote", "calculation"];
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (body: unknown, status: number) => Response.json(body, { status });

export const onRequestPost = async ({ request, env }: Context) => {
  // Alleen aanvragen vanaf de eigen site (ook op preview-domeinen: zelfde host als de aanvraag).
  const origin = request.headers.get("Origin");
  if (!origin || new URL(origin).host !== new URL(request.url).host) {
    return json({ ok: false, error: "Ongeldige aanvraag." }, 403);
  }
  if (!request.headers.get("Content-Type")?.includes("application/json")) {
    return json({ ok: false, error: "Ongeldige aanvraag." }, 415);
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) {
    return json({ ok: false, error: `Je bericht is te lang. ${FALLBACK}` }, 413);
  }
  let body: Record<string, unknown>;
  try {
    body = JSON.parse(raw);
  } catch {
    return json({ ok: false, error: "Ongeldige aanvraag." }, 400);
  }
  if (!body || typeof body !== "object") {
    return json({ ok: false, error: "Ongeldige aanvraag." }, 400);
  }

  // Honeypot (components/ui/Honeypot.tsx): ingevuld = bot. Antwoord met succes zodat de bot niets leert.
  if (typeof body.bedrijfsfax === "string" && body.bedrijfsfax.trim()) {
    return json({ ok: true }, 200);
  }

  const lead: Record<string, unknown> = { ontvangen: new Date().toISOString() };
  for (const [field, max] of Object.entries(TEXT_FIELDS)) {
    const value = body[field];
    if (typeof value === "string" && value.trim()) lead[field] = value.trim().slice(0, max);
  }
  if (Array.isArray(body.topics)) {
    lead.topics = body.topics
      .filter((t): t is string => typeof t === "string")
      .slice(0, 12)
      .map((t) => t.slice(0, 60));
  }
  for (const field of OBJECT_FIELDS) {
    if (body[field] && typeof body[field] === "object") lead[field] = body[field];
  }

  if (!lead.name || typeof lead.email !== "string" || !EMAIL.test(lead.email)) {
    return json({ ok: false, error: "Vul je naam en een geldig e-mailadres in." }, 400);
  }

  const endpoint = env.CONTACT_WEBHOOK_URL;
  if (!endpoint) {
    console.error("contact: CONTACT_WEBHOOK_URL ontbreekt");
    return json(
      { ok: false, error: `Het contactformulier is nog niet aangesloten. ${FALLBACK}` },
      503,
    );
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(WEBHOOK_TIMEOUT_MS),
    });
    if (!response.ok) {
      console.error("contact: webhook antwoordde", response.status);
      return json({ ok: false, error: `Je aanvraag kon niet verstuurd worden. ${FALLBACK}` }, 502);
    }
    return json({ ok: true }, 200);
  } catch (error) {
    console.error("contact: webhook onbereikbaar", error);
    return json({ ok: false, error: `Er ging iets mis bij het versturen. ${FALLBACK}` }, 502);
  }
};
