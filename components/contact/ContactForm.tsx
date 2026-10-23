"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { delayed, scaleIn } from "@/components/motion/presets";
import { BtnArrow } from "@/components/ui/BtnArrow";
import { ChoiceGroup, ChoiceOption, StepProgress } from "@/components/ui/Choice";
import { Honeypot } from "@/components/ui/Honeypot";
import { CheckSmall, LockIcon } from "@/components/ui/icons";
import { SITE } from "@/lib/site";
import { applyQuoteParams, calcQuote, fmt, type QuoteInput } from "@/lib/pricing";

/**
 * Contactformulier in drie stappen, in de stijl van de prijsberekenaar: dienst kiezen, budget en timing
 * (optioneel), gegevens. Komt de bezoeker uit de prijsberekenaar of de besparingscalculator, dan staan de
 * keuzes al klaar en begint het formulier bij de gegevens.
 */

const TOPICS = [
  { id: "Website", title: "Website", text: "Een nieuwe website, eventueel met webshop" },
  {
    id: "Web app",
    title: "Software op maat",
    text: "Een web app, klantenportaal of planningstool",
  },
  {
    id: "Automatisatie",
    title: "AI & automatisatie",
    text: "Minder handwerk met AI en koppelingen",
  },
  { id: "Lokale SEO", title: "Lokale SEO", text: "Beter gevonden worden in je regio" },
  { id: "Onderhoud", title: "Onderhoud & hosting", text: "Voor je website of software" },
  { id: "Weet ik nog niet", title: "Weet ik nog niet", text: "We denken graag met je mee" },
];
const BUDGETS = [
  { id: "<2500", name: "< € 2.500" },
  { id: "2500-5000", name: "€ 2.500 – 5.000" },
  { id: "5000-10000", name: "€ 5.000 – 10.000" },
  { id: ">10000", name: "> € 10.000" },
  { id: "onbekend", name: "Weet ik nog niet" },
];
const PLANNING = [
  "Zo snel mogelijk",
  "Binnen 1 à 3 maanden",
  "Later dit jaar",
  "Ik oriënteer me nog",
];

const STEPS = [
  { id: "dienst", title: "Waarmee kunnen we je helpen?", hint: "Meerdere keuzes mogelijk." },
  {
    id: "plannen",
    title: "Wat heb je in gedachten?",
    hint: "Optioneel, maar zo kunnen we je meteen gericht antwoorden.",
  },
  { id: "gegevens", title: "Hoe bereiken we je?", hint: "Je krijgt binnen 24 uur antwoord." },
] as const;

/** ?dienst= van de dienstpagina's en de prijsberekenaar. */
const SERVICE_ALIASES: Record<string, string> = {
  Webdesign: "Website",
  "Web apps & maatwerk": "Web app",
  "AI & automatisaties": "Automatisatie",
  "Onderhoud & hosting": "Onderhoud",
};
/** Diensten uit een websiteberekening, vertaald naar de keuzes van stap 1. */
const QUOTE_TOPICS: Record<string, string> = {
  Website: "Website",
  Webshop: "Website",
  "Lokale SEO": "Lokale SEO",
  "Onderhoud & hosting": "Onderhoud",
};
const QUOTE_KEYS = ["diensten", "pakket", "extras", "onderhoud", "seo", "paginas", "talen"];
const QUOTE_BASE: QuoteInput = {
  services: ["Website"],
  pkg: "bedrijfssite",
  extras: [],
  onderhoud: "geen",
  seo: "geen",
  pages: 0,
  languages: 0,
};

type Calculation = { aanvragen: number; minuten: number; uurtarief: number };

function readCalculation(params: URLSearchParams): Calculation | null {
  const [aanvragen, minuten, uurtarief] = ["aanvragen", "minuten", "uurtarief"].map((key) =>
    Number(params.get(key)),
  );
  const within = (n: number, min: number, max: number) =>
    Number.isInteger(n) && n >= min && n <= max;
  return within(aanvragen, 1, 50) && within(minuten, 5, 60) && within(uurtarief, 20, 100)
    ? { aanvragen, minuten, uurtarief }
    : null;
}

function Field({
  name,
  text,
  type = "text",
  placeholder,
  autoComplete,
  required = false,
}: {
  name: string;
  text: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="cf-field">
      <span>{text}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        placeholder={placeholder}
      />
    </label>
  );
}

export function ContactForm() {
  const [index, setIndex] = useState(0);
  const [topics, setTopics] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [planning, setPlanning] = useState("");
  // Vooraf ingevuld bericht, bv. de antwoorden uit de prijsberekenaar (?bericht=…).
  const [prefill, setPrefill] = useState("");
  const [quote, setQuote] = useState<QuoteInput | null>(null);
  /** Querystring van de berekening, om ze in de prijsberekenaar aan te passen. */
  const [quoteQuery, setQuoteQuery] = useState("");
  const [calculation, setCalculation] = useState<Calculation | null>(null);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState("");
  const title = useRef<HTMLHeadingElement>(null);
  const moved = useRef(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const chosen = new Set<string>();
    const service = params.get("dienst");
    if (service) chosen.add(SERVICE_ALIASES[service] ?? service);
    let fromCalculator = false;
    if (QUOTE_KEYS.some((key) => params.has(key))) {
      const q = applyQuoteParams(QUOTE_BASE, params);
      for (const s of q.services) if (QUOTE_TOPICS[s]) chosen.add(QUOTE_TOPICS[s]);
      const query = new URLSearchParams(params);
      query.delete("tab");
      setQuote(q);
      setQuoteQuery(query.toString());
      fromCalculator = true;
    }
    const message = (params.get("bericht") ?? "").slice(0, 2000);
    const calc = readCalculation(params);
    setPrefill(message);
    setCalculation(calc);
    setTopics(TOPICS.map((t) => t.id).filter((id) => chosen.has(id)));
    // Wie al keuzes maakte in een calculator, hoeft ze niet opnieuw te maken.
    if (fromCalculator || message || calc) setIndex(STEPS.length - 1);
  }, []);

  // Na een stapwissel krijgt de titel de focus, zodat schermlezers de nieuwe vraag voorlezen.
  useEffect(() => {
    if (moved.current) title.current?.focus();
  }, [index]);

  const step = STEPS[index];
  const last = index === STEPS.length - 1;
  const result = quote ? calcQuote(quote) : null;
  const go = (n: number) => {
    moved.current = true;
    setIndex(n);
  };

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!last) {
      if (topics.length) go(index + 1);
      return;
    }
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setSaving(true);
    setStatus("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          name: data.naam,
          type: quote ? "offerte" : "bericht",
          topics,
          budget,
          planning,
          calculation,
          quote: quote && result ? { ...quote, ...result } : undefined,
        }),
      });
      const answer = await response.json().catch(() => null);
      if (!response.ok)
        throw new Error(
          answer?.error ||
            `Je aanvraag kon niet verstuurd worden. Probeer opnieuw of mail ${SITE.email}.`,
        );
      setStatus("Bedankt! Je aanvraag is verstuurd. We nemen contact met je op.");
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : `Versturen lukt momenteel niet. Mail gerust naar ${SITE.email}.`,
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <motion.form
      variants={delayed(scaleIn, 0.25)}
      initial="hidden"
      animate="show"
      onSubmit={submit}
      className="contact-flow"
      aria-labelledby="cf-title"
    >
      <div className="cf-head">
        <span className="cf-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path
              d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 3.5V17H6.5A2.5 2.5 0 0 1 4 14.5v-8z"
              strokeLinejoin="round"
            />
            <path d="M8.5 9.5h7M8.5 12.5h4.5" strokeLinecap="round" />
          </svg>
        </span>
        <div>
          <h2 id="cf-title">Vertel ons over je project</h2>
          <p>
            Stap {index + 1} van {STEPS.length}
          </p>
        </div>
      </div>
      <StepProgress steps={STEPS.length} current={index} />

      {(calculation || result || prefill) && (
        <div className="contact-context">
          {result ? (
            <>
              <strong>Je prijsindicatie is overgenomen</strong>
              <br />€ {fmt(result.once)} – € {fmt(result.high)} eenmalig
              {result.monthly > 0 && ` · € ${fmt(result.monthly)} per maand`}
              {" · "}
              <a href={`/prijzen?${quoteQuery}#prijsberekenaar`}>Aanpassen</a>
            </>
          ) : calculation ? (
            <>
              <strong>Je berekening is overgenomen</strong>
              <br />
              {calculation.aanvragen} aanvragen per week · {calculation.minuten} minuten per
              aanvraag · € {calculation.uurtarief}/uur
              <br />
              Ongeveer {Math.round((calculation.aanvragen * calculation.minuten) / 60)} uur per week
              aan handwerk.
            </>
          ) : (
            <strong>Je antwoorden uit de prijsberekenaar staan in je bericht.</strong>
          )}
        </div>
      )}

      <div className="cf-body" key={step.id}>
        <h3 ref={title} tabIndex={-1}>
          {step.title}
        </h3>
        <p className="cf-hint">{step.hint}</p>

        {step.id === "dienst" && (
          <>
            <div className="choice-grid">
              {TOPICS.map((t) => (
                <ChoiceOption
                  key={t.id}
                  type="checkbox"
                  name="dienst"
                  value={t.id}
                  checked={topics.includes(t.id)}
                  onChange={() =>
                    setTopics((list) =>
                      list.includes(t.id) ? list.filter((id) => id !== t.id) : [...list, t.id],
                    )
                  }
                  title={t.title}
                  text={t.text}
                />
              ))}
            </div>
            <p className="cf-aside">
              Eerst je prijs weten?{" "}
              <Link href="/prijzen#prijsberekenaar">
                Bereken hem in één minuut <BtnArrow />
              </Link>
            </p>
          </>
        )}

        {step.id === "plannen" && (
          <div className="choice-groups">
            <ChoiceGroup label="Budget" layout="grid">
              {BUDGETS.map((b) => (
                <ChoiceOption
                  key={b.id}
                  type="radio"
                  name="budget"
                  value={b.id}
                  checked={budget === b.id}
                  onChange={() => setBudget(b.id)}
                  title={b.name}
                />
              ))}
            </ChoiceGroup>
            <ChoiceGroup label="Wanneer wil je starten?" layout="grid">
              {PLANNING.map((p) => (
                <ChoiceOption
                  key={p}
                  type="radio"
                  name="planning"
                  value={p}
                  checked={planning === p}
                  onChange={() => setPlanning(p)}
                  title={p}
                />
              ))}
            </ChoiceGroup>
          </div>
        )}
      </div>

      {/* Altijd in het formulier (verborgen tot de laatste stap), zodat ingevulde gegevens blijven staan. */}
      <div className="cf-fields" hidden={!last}>
        <div className="cf-row">
          <Field name="naam" text="Naam *" placeholder="Je naam" autoComplete="name" required />
          <Field
            name="email"
            type="email"
            text="E-mail *"
            placeholder="jij@bedrijf.be"
            autoComplete="email"
            required
          />
        </div>
        <div className="cf-row">
          <Field
            name="bedrijf"
            text="Bedrijf"
            placeholder="Optioneel"
            autoComplete="organization"
          />
          <Field
            name="telefoon"
            type="tel"
            text="Telefoon"
            placeholder="Optioneel"
            autoComplete="tel"
          />
        </div>
        <label className="cf-field">
          <span>Je bericht</span>
          <textarea
            key={prefill ? "prefill" : "leeg"}
            name="bericht"
            defaultValue={prefill}
            placeholder="Vertel kort wat je wil bereiken…"
          />
        </label>
        <label className="cf-consent">
          <input type="checkbox" required aria-label="Ik ga akkoord met het privacybeleid" />
          <span aria-hidden="true">
            <CheckSmall />
          </span>
          <span>
            Ik ga akkoord met het <a href="/privacy">privacybeleid</a>.
          </span>
        </label>
      </div>

      <Honeypot />

      <div className="cf-foot">
        <button
          type="button"
          className="sbtn sbtn-outline"
          aria-label="Vorige"
          disabled={index === 0}
          onClick={() => go(index - 1)}
        >
          <BtnArrow glyph="←" /> <span className="step-back-label">Vorige</span>
        </button>
        {last ? (
          <button type="submit" className="sbtn sbtn-primary" disabled={saving} aria-busy={saving}>
            {saving ? (
              "Even versturen…"
            ) : (
              <>
                Verstuur je aanvraag <BtnArrow />
              </>
            )}
          </button>
        ) : (
          <button
            type="button"
            className="sbtn sbtn-primary"
            disabled={index === 0 && topics.length === 0}
            onClick={() => go(index + 1)}
          >
            Volgende <BtnArrow />
          </button>
        )}
      </div>

      {status && (
        <div className="cf-status" role="status">
          <p>{status}</p>
          {!status.startsWith("Bedankt!") && (
            <a href={`mailto:${SITE.email}`}>Mail naar {SITE.email} →</a>
          )}
        </div>
      )}
      <p className="cf-privacy">
        <LockIcon />
        Je gegevens blijven bij ons. We gebruiken ze enkel om je te antwoorden.
      </p>
    </motion.form>
  );
}
