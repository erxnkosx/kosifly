"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { BtnArrow } from "@/components/ui/BtnArrow";
import { Honeypot } from "@/components/ui/Honeypot";
import { SITE } from "@/lib/site";

const GOALS = [
  "Meer aanvragen",
  "Beter gevonden worden",
  "Sneller & mobielvriendelijk",
  "Een frisser design",
];

/** Kort aanvraagformulier voor de gratis website-audit. Verstuurt naar dezelfde route als het contactformulier. */
export function AuditForm() {
  const [goals, setGoals] = useState<string[]>([]);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<{ ok: boolean; text: string } | null>(null);

  const toggle = (goal: string) =>
    setGoals((current) =>
      current.includes(goal) ? current.filter((g) => g !== goal) : [...current, goal],
    );

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Na de await is e.currentTarget leeg; bewaar het formulier om het daarna te kunnen legen.
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setSaving(true);
    setStatus(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          name: data.naam,
          type: "audit",
          topics: ["Website-audit", ...goals],
        }),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok)
        throw new Error(
          result?.error ||
            `Je aanvraag kon niet verstuurd worden. Probeer opnieuw of mail ${SITE.email}.`,
        );
      setStatus({
        ok: true,
        text: "Bedankt! We bekijken je website en nemen binnen 24 uur contact met je op.",
      });
      form.reset();
      setGoals([]);
    } catch (error) {
      setStatus({
        ok: false,
        text:
          error instanceof Error
            ? error.message
            : `Versturen lukt momenteel niet. Mail gerust naar ${SITE.email}.`,
      });
    } finally {
      setSaving(false);
    }
  }

  return (
    <form className="audit-form" onSubmit={submit}>
      <div className="audit-form-head">
        <strong>Vraag je gratis audit aan</strong>
        <span>Duurt minder dan een minuut</span>
      </div>

      <label className="audit-field">
        <span>Adres van je website</span>
        <input
          name="website"
          type="text"
          inputMode="url"
          autoComplete="url"
          placeholder="jouwbedrijf.be"
          required
        />
      </label>

      <div className="audit-row">
        <label className="audit-field">
          <span>Naam</span>
          <input
            name="naam"
            type="text"
            autoComplete="name"
            placeholder="Voornaam Achternaam"
            required
          />
        </label>
        <label className="audit-field">
          <span>E-mail</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="jij@bedrijf.be"
            required
          />
        </label>
      </div>

      <label className="audit-field">
        <span>
          Telefoon <em>(optioneel)</em>
        </span>
        <input name="telefoon" type="tel" autoComplete="tel" placeholder="+32 …" />
      </label>

      <fieldset className="audit-goals">
        <legend>
          Waar wil je vooral beter in worden? <em>(optioneel)</em>
        </legend>
        <div>
          {GOALS.map((goal) => (
            <button
              key={goal}
              type="button"
              aria-pressed={goals.includes(goal)}
              onClick={() => toggle(goal)}
            >
              {goal}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="audit-field">
        <span>
          Nog iets dat we moeten weten? <em>(optioneel)</em>
        </span>
        <textarea
          name="bericht"
          rows={3}
          placeholder="Bv. we krijgen veel bezoekers maar weinig aanvragen."
        />
      </label>

      <label className="audit-consent">
        <input type="checkbox" name="privacy" required />
        <span>
          Ik ga akkoord met de <Link href="/privacy">privacyverklaring</Link>.
        </span>
      </label>

      <Honeypot />

      <button type="submit" className="audit-submit" disabled={saving}>
        {saving ? (
          "Bezig met versturen…"
        ) : (
          <>
            Vraag mijn gratis audit aan <BtnArrow />
          </>
        )}
      </button>

      <p className="audit-note">
        Gratis en zonder verplichtingen. We gebruiken je gegevens enkel voor deze audit.
      </p>

      <p
        className={"audit-status" + (status ? (status.ok ? " is-ok" : " is-error") : "")}
        role="status"
        aria-live="polite"
      >
        {status?.text}
      </p>
    </form>
  );
}
