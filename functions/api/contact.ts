interface Context {
  request: Request;
  env: {
    CONTACT_WEBHOOK_URL?: string;
  };
}

export const onRequestPost = async (context: Context) => {
  const body = await context.request.json().catch(() => null);

  if (
    !body ||
    typeof body.name !== "string" ||
    !body.name.trim() ||
    typeof body.email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)
  ) {
    return Response.json(
      { ok: false, error: "Vul je naam en een geldig e-mailadres in." },
      { status: 400 }
    );
  }

  const endpoint = context.env.CONTACT_WEBHOOK_URL;
  if (!endpoint) {
    return Response.json(
      {
        ok: false,
        error:
          "Het contactformulier is nog niet aangesloten. Mail je aanvraag naar info@kosifly.com of bel +32 483 69 04 26.",
      },
      { status: 503 }
    );
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return Response.json(
        { ok: false, error: "Verzenden naar webhook mislukt." },
        { status: 502 }
      );
    }

    return Response.json({ ok: true }, { status: 200 });
  } catch {
    return Response.json(
      { ok: false, error: "Er ging iets mis bij het versturen." },
      { status: 500 }
    );
  }
};