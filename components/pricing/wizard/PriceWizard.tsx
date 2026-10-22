"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { BtnArrow } from "@/components/ui/BtnArrow";
import { ChoiceGroup, ChoiceOption, StepProgress } from "@/components/ui/Choice";
import {
  EXTRAS,
  MAATWERK_FROM,
  ONDERHOUD,
  QUANTITY_LIMITS,
  SEO,
  WEBSHOP_PRICE,
  applyQuoteParams,
  calcQuote,
  fmt,
  quoteToSearchParams,
  type QuoteInput,
} from "@/lib/pricing";
import { normalizeQuote, stepQuantity, toggleExtra, toggleService } from "./QuoteState";
import { WEBSITE_PACKAGES } from "../websites/Websites.data";

/**
 * Prijsberekenaar als venster in stappen (opent via "Bereken je prijs" op /prijzen of via #prijsberekenaar).
 * Stap 1 kiest de dienst; daarna volgen de vragen die bij die dienst horen:
 * - website: pakket, extra's en opvolging, met een berekende prijs (zelfde logica als lib/pricing.ts);
 * - software op maat en AI & automatisatie: vragen die de offerte voorbereiden, met de vanaf-prijs.
 *   De antwoorden gaan als bericht mee naar het contactformulier; prijsopslagen per antwoord bestaan niet.
 */
export const OPEN_PRICE_WIZARD = "kosifly:prijsberekenaar";

export type Track = "website" | "software" | "ai";

/**
 * Waar de berekenaar begint: bij een dienst (`track`), of met keuzes uit een link zoals
 * /prijzen?pakket=groei#prijsberekenaar (`params`: pakket, onderhoud, seo, diensten, extras, paginas, talen, dienst).
 */
type WizardStart = { track?: Track; params?: URLSearchParams };

export const openPriceWizard = (start: WizardStart = {}) =>
  window.dispatchEvent(new CustomEvent<WizardStart>(OPEN_PRICE_WIZARD, { detail: start }));

const QUOTE_PARAMS = ["pakket", "onderhoud", "seo", "diensten", "extras", "paginas", "talen"];
const WEBSITE_SERVICES = ["Website", "Webshop", "Lokale SEO", "Onderhoud & hosting"];

const TRACKS = [
  {
    id: "website",
    title: "Website",
    text: "Een nieuwe website, eventueel met webshop",
    price: "vanaf € 850",
  },
  {
    id: "software",
    title: "Software op maat",
    text: "Een web app, klantenportaal of planningstool",
    price: `vanaf € ${fmt(MAATWERK_FROM["Web app"])}`,
  },
  {
    id: "ai",
    title: "AI & automatisatie",
    text: "Minder handwerk met AI en slimme koppelingen",
    price: `vanaf € ${fmt(MAATWERK_FROM.Automatisatie)}`,
  },
] as const satisfies readonly { id: Track; title: string; text: string; price: string }[];

const STEPS = {
  website: ["dienst", "pakket", "extras", "opvolging", "resultaat"],
  software: ["dienst", "soort", "gebruik", "koppelingen", "resultaat"],
  ai: ["dienst", "taken", "handwerk", "tools", "resultaat"],
} as const;
type StepId = (typeof STEPS)[Track][number];

const STEP_TITLES: Record<StepId, { title: string; hint: string }> = {
  dienst: { title: "Waarmee kunnen we je helpen?", hint: "Kies de dienst die het best past." },
  pakket: { title: "Welk websitepakket past bij je?", hint: "Vaste prijs, excl. btw." },
  extras: {
    title: "Wil je er iets bij?",
    hint: "Optioneel: sla over als je niets extra nodig hebt.",
  },
  opvolging: { title: "Hoe volgen we je site op?", hint: "Maandelijks opzegbaar, excl. btw." },
  soort: { title: "Wat voor software heb je nodig?", hint: "Meerdere keuzes mogelijk." },
  gebruik: { title: "Wie gaat ermee werken?", hint: "Zo weten we wat de software moet kunnen." },
  koppelingen: { title: "Moet het koppelen met andere tools?", hint: "Optioneel." },
  taken: { title: "Wat wil je automatiseren?", hint: "Meerdere keuzes mogelijk." },
  handwerk: {
    title: "Hoeveel handwerk is het nu?",
    hint: "Een ruwe schatting volstaat. Sleep om aan te passen.",
  },
  tools: { title: "Met welke tools werk je nu?", hint: "Optioneel." },
  resultaat: { title: "Je prijsindicatie", hint: "Op basis van je keuzes, excl. 21 % btw." },
};

const SOFTWARE_TYPES = [
  ["Klantenportaal", "Klanten zien hun dossiers, documenten of bestellingen"],
  ["Planning & agenda", "Afspraken, ritten of opdrachten inplannen"],
  ["Leden- of klantenbeheer", "Al je contacten en gegevens op één plek"],
  ["Bestellingen & offertes", "Bestellingen, betalingen en opvolging"],
  ["Dashboard & rapportering", "Cijfers en overzichten in één oogopslag"],
  ["Iets anders", "Vertel het ons in het gesprek"],
] as const;
const AUDIENCES = [
  "Alleen ons team",
  "Ons team en onze klanten",
  "Vooral klanten of leden",
] as const;
const DEVICES = ["Vooral op de computer", "Vooral op de gsm", "Op de computer en de gsm"] as const;
const SOFTWARE_LINKS = [
  "Boekhouding",
  "Online betalingen",
  "E-mail en agenda (Microsoft 365 of Google)",
  "Excel of Google Sheets",
  "Een bestaand systeem",
  "Nog niet nodig",
] as const;

const AI_TASKS = [
  ["Leads opvolgen", "Elke aanvraag meteen beantwoord en opgevolgd"],
  ["Offertes opmaken", "Van aanvraag naar offerte zonder overtypen"],
  ["Afspraken inplannen", "Klanten boeken zelf, jij krijgt de afspraak"],
  ["E-mails en opvolgmails", "Standaardmails en herinneringen vanzelf"],
  ["Facturatie & administratie", "Minder overtypen tussen je systemen"],
  ["Chatbot op je website", "Beantwoordt vragen van bezoekers"],
  ["Iets anders", "Vertel het ons in het gesprek"],
] as const;
const AI_TOOLS = [
  "Gmail of Outlook",
  "Een CRM",
  "Boekhoudsoftware",
  "Excel of Google Sheets",
  "WhatsApp",
  "Weet ik niet",
] as const;

/** Zelfde sliders en formule als de besparingscalculator op /diensten/ai-automatisaties (46 werkweken). */
const AI_SLIDERS = [
  { key: "requests", label: "Aanvragen per week", min: 1, max: 50, prefix: "", suffix: "" },
  {
    key: "minutes",
    label: "Minuten handwerk per aanvraag",
    min: 5,
    max: 60,
    prefix: "",
    suffix: " min",
  },
  { key: "rate", label: "Kost van een uur", min: 20, max: 100, prefix: "€ ", suffix: "" },
] as const;
const WORK_WEEKS = 46;

const EXTRA_TEXT: Record<string, string> = {
  copywriting: "Wij schrijven de teksten",
  taal: "Je site in een extra taal",
  boeking: "Klanten boeken of vragen een offerte aan",
  logo: "Een logo en huisstijl op maat",
  chatbot: "Beantwoordt vragen van bezoekers",
  nieuwsbrief: "Koppeling met je nieuwsbrief",
};

const WEBSITE_START: QuoteInput = {
  services: ["Website"],
  pkg: "bedrijfssite",
  extras: [],
  onderhoud: "geen",
  seo: "geen",
  pages: 0,
  languages: 0,
};
const SOFTWARE_START = {
  types: [] as string[],
  audience: "",
  device: "Op de computer en de gsm",
  links: [] as string[],
};
const AI_START = {
  tasks: [] as string[],
  requests: 12,
  minutes: 25,
  rate: 45,
  tools: [] as string[],
};

/** Dienst en websitekeuzes uit een link; zonder dienst begint de berekenaar bij stap 1. */
function startFrom({ track, params }: WizardStart): { track: Track | null; quote: QuoteInput } {
  if (!params) return { track: track ?? null, quote: WEBSITE_START };
  const dienst = params.get("dienst");
  if (!track && (dienst === "website" || dienst === "software" || dienst === "ai")) track = dienst;
  if (!QUOTE_PARAMS.some((name) => params.has(name)))
    return { track: track ?? null, quote: WEBSITE_START };
  const quote = normalizeQuote(applyQuoteParams(WEBSITE_START, params));
  const services = quote.services.filter((s) => WEBSITE_SERVICES.includes(s));
  return {
    track: "website",
    quote: {
      ...quote,
      services: services.includes("Website") ? services : ["Website", ...services],
    },
  };
}

const toggle = (list: string[], item: string) =>
  list.includes(item) ? list.filter((i) => i !== item) : [...list, item];

function Stepper({
  value,
  max,
  noun,
  onStep,
}: {
  value: number;
  max: number;
  noun: [string, string];
  onStep: (direction: 1 | -1) => void;
}) {
  return (
    <div className="pw-stepper">
      <button
        type="button"
        aria-label={`Minder ${noun[1]}`}
        disabled={value <= 1}
        onClick={() => onStep(-1)}
      >
        −
      </button>
      <output>
        {value} {value === 1 ? noun[0] : noun[1]}
      </output>
      <button
        type="button"
        aria-label={`Meer ${noun[1]}`}
        disabled={value >= max}
        onClick={() => onStep(1)}
      >
        +
      </button>
    </div>
  );
}

function Summary({ rows }: { rows: [string, string][] }) {
  return (
    <dl className="pw-lines pw-answers">
      {rows
        .filter(([, value]) => value)
        .map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
    </dl>
  );
}

export function PriceWizard() {
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const [track, setTrack] = useState<Track | null>(null);
  const [index, setIndex] = useState(0);
  const [quote, setQuote] = useState<QuoteInput>(WEBSITE_START);
  const [software, setSoftware] = useState(SOFTWARE_START);
  const [ai, setAi] = useState(AI_START);

  // Zolang er nog geen dienst gekozen is, telt het venster vier stappen (elke dienst heeft er vier).
  const steps: readonly StepId[] = STEPS[track ?? "website"];
  const step = steps[index];
  const inputSteps = steps.length - 1;
  const result = calcQuote(quote);
  const weekHours = (ai.requests * ai.minutes) / 60;
  const yearHours = weekHours * WORK_WEEKS;

  const open = useCallback((start: WizardStart = {}) => {
    const el = dialog.current;
    if (!el || el.open) return;
    opener.current = document.activeElement as HTMLElement | null;
    const from = startFrom(start);
    setTrack(from.track);
    setIndex(from.track ? 1 : 0);
    setQuote(from.quote);
    setSoftware(SOFTWARE_START);
    setAi(AI_START);
    el.showModal();
    document.documentElement.classList.add("pw-lock");
  }, []);
  const close = () => dialog.current?.close();

  useEffect(() => {
    const onOpen = (e: Event) => open((e as CustomEvent<WizardStart | null>).detail ?? {});
    const fromHash = () => {
      if (window.location.hash === "#prijsberekenaar")
        open({ params: new URLSearchParams(window.location.search) });
    };
    // Links naar /prijzen…#prijsberekenaar op deze pagina openen het venster meteen (zonder navigatie).
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a[href]");
      if (!link || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey)
        return;
      const url = new URL((link as HTMLAnchorElement).href);
      if (url.hash !== "#prijsberekenaar" || url.pathname !== window.location.pathname) return;
      e.preventDefault();
      open({ params: url.searchParams });
    };
    window.addEventListener(OPEN_PRICE_WIZARD, onOpen);
    window.addEventListener("hashchange", fromHash);
    document.addEventListener("click", onClick, true);
    fromHash();
    return () => {
      window.removeEventListener(OPEN_PRICE_WIZARD, onOpen);
      window.removeEventListener("hashchange", fromHash);
      document.removeEventListener("click", onClick, true);
    };
  }, [open]);

  const onClosed = () => {
    document.documentElement.classList.remove("pw-lock");
    if (window.location.hash === "#prijsberekenaar")
      history.replaceState(null, "", window.location.pathname + window.location.search);
    opener.current?.focus();
  };

  const canGoOn =
    (step === "dienst" && track !== null) ||
    (step === "soort" && software.types.length > 0) ||
    (step === "gebruik" && software.audience !== "") ||
    (step === "taken" && ai.tasks.length > 0) ||
    !["dienst", "soort", "gebruik", "taken"].includes(step);

  // Antwoorden bij software en AI als bericht voor het contactformulier.
  const softwareRows: [string, string][] = [
    ["Soort software", software.types.join(", ")],
    ["Gebruikers", software.audience],
    ["Gebruik", software.device],
    ["Koppelingen", software.links.join(", ")],
  ];
  const aiRows: [string, string][] = [
    ["Automatiseren", ai.tasks.join(", ")],
    ["Handwerk", `${ai.requests} aanvragen per week, ${ai.minutes} min per aanvraag`],
    ["Tools", ai.tools.join(", ")],
  ];
  const message = (title: string, rows: [string, string][]) =>
    [
      `${title} (via de prijsberekenaar)`,
      ...rows.filter(([, v]) => v).map(([l, v]) => `${l}: ${v}`),
    ].join("\n");

  const contactHref = (() => {
    if (track === "software") {
      const params = new URLSearchParams({
        dienst: "Web app",
        bericht: message("Software op maat", softwareRows),
      });
      return `/contact?${params}`;
    }
    if (track === "ai") {
      const params = new URLSearchParams({
        dienst: "Automatisatie",
        aanvragen: String(ai.requests),
        minuten: String(ai.minutes),
        uurtarief: String(ai.rate),
        bericht: message("AI & automatisatie", aiRows),
      });
      return `/contact?${params}`;
    }
    const params = quoteToSearchParams(quote);
    params.set("tab", "offerte");
    return `/contact?${params}`;
  })();

  return (
    <dialog
      ref={dialog}
      id="prijsberekenaar"
      className="price-wizard"
      aria-labelledby="pw-title"
      onClose={onClosed}
      onClick={(e) => {
        // Klik op de donkere achtergrond (buiten het venster) sluit.
        if (e.target === dialog.current) close();
      }}
    >
      <div className="pw-card">
        <div className="pw-head">
          <span className="pw-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="5" y="3" width="14" height="18" rx="2.5" />
              <path d="M8.5 7.5h7" strokeLinecap="round" />
              <path
                d="M8.5 12h.01M12 12h.01M15.5 12h.01M8.5 15.5h.01M12 15.5h.01M15.5 15.5h.01"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <div className="pw-head-text">
            <span className="pw-eyebrow">KOSIFLY</span>
            <h2 id="pw-title">Prijsberekenaar</h2>
            <p>{step === "resultaat" ? "Klaar" : `Stap ${index + 1} van ${inputSteps}`}</p>
          </div>
          <button type="button" className="pw-close" aria-label="Sluiten" onClick={close}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <StepProgress steps={inputSteps} current={index} className="pw-progress" />

        <div className="pw-body" key={step} role="group" aria-labelledby="pw-step-title">
          <h3 id="pw-step-title">{STEP_TITLES[step].title}</h3>
          <p className="pw-hint">{STEP_TITLES[step].hint}</p>

          {/* ───────── Stap 1: de dienst ───────── */}
          {step === "dienst" && (
            <div className="choice-list">
              {TRACKS.map((t) => (
                <ChoiceOption
                  key={t.id}
                  type="radio"
                  name="dienst"
                  value={t.id}
                  checked={track === t.id}
                  onChange={() => setTrack(t.id)}
                  title={t.title}
                  text={t.text}
                  price={t.price}
                />
              ))}
            </div>
          )}

          {/* ───────── Website ───────── */}
          {step === "pakket" && (
            <div className="choice-list">
              {WEBSITE_PACKAGES.map((pkg) => (
                <ChoiceOption
                  key={pkg.id}
                  type="radio"
                  name="pakket"
                  value={pkg.id}
                  checked={quote.pkg === pkg.id}
                  onChange={() => setQuote((q) => ({ ...q, pkg: pkg.id }))}
                  title={pkg.title}
                  badge={pkg.featured ? "Meest gekozen" : undefined}
                  text={`${pkg.description} Levering in ${pkg.delivery}.`}
                  price={`€ ${fmt(pkg.price)}`}
                />
              ))}
            </div>
          )}

          {step === "extras" && (
            <div className="choice-grid">
              <ChoiceOption
                type="checkbox"
                name="extras"
                checked={quote.services.includes("Webshop")}
                onChange={() => setQuote((q) => toggleService(q, "Webshop"))}
                title="Webshop"
                text="Online verkopen met betalingen"
                price={`+ € ${fmt(WEBSHOP_PRICE)}`}
              />
              {EXTRAS.map((extra) => {
                const on = quote.extras.includes(extra.id);
                const unit =
                  "perPage" in extra ? " / pagina" : "perLanguage" in extra ? " / taal" : "";
                return (
                  <ChoiceOption
                    key={extra.id}
                    type="checkbox"
                    name="extras"
                    checked={on}
                    onChange={() => setQuote((q) => toggleExtra(q, extra.id))}
                    title={extra.name}
                    text={EXTRA_TEXT[extra.id]}
                    price={`${"from" in extra ? "vanaf " : ""}€ ${fmt(extra.unit)}${unit}`}
                  >
                    {on && extra.id === "copywriting" && (
                      <Stepper
                        value={quote.pages ?? 0}
                        max={QUANTITY_LIMITS.pages}
                        noun={["pagina", "pagina's"]}
                        onStep={(d) => setQuote((q) => stepQuantity(q, "copywriting", d))}
                      />
                    )}
                    {on && extra.id === "taal" && (
                      <Stepper
                        value={quote.languages ?? 0}
                        max={QUANTITY_LIMITS.languages}
                        noun={["taal", "talen"]}
                        onStep={(d) => setQuote((q) => stepQuantity(q, "taal", d))}
                      />
                    )}
                  </ChoiceOption>
                );
              })}
            </div>
          )}

          {step === "opvolging" && (
            <div className="choice-groups">
              {(
                [
                  ["onderhoud", "Onderhoud & hosting", ONDERHOUD, "Ik regel het zelf"],
                  ["seo", "Lokale SEO", SEO, "Niet nodig"],
                ] as const
              ).map(([field, label, plans, none]) => (
                <ChoiceGroup key={field} label={label}>
                  {plans.map((plan) => (
                    <ChoiceOption
                      key={plan.id}
                      type="radio"
                      name={field}
                      value={plan.id}
                      checked={quote[field] === plan.id}
                      onChange={() => setQuote((q) => normalizeQuote({ ...q, [field]: plan.id }))}
                      title={plan.price > 0 ? plan.name : none}
                      price={plan.price > 0 ? `€ ${plan.price} / maand` : undefined}
                    />
                  ))}
                </ChoiceGroup>
              ))}
            </div>
          )}

          {/* ───────── Software op maat ───────── */}
          {step === "soort" && (
            <div className="choice-grid">
              {SOFTWARE_TYPES.map(([title, text]) => (
                <ChoiceOption
                  key={title}
                  type="checkbox"
                  name="soort"
                  checked={software.types.includes(title)}
                  onChange={() => setSoftware((s) => ({ ...s, types: toggle(s.types, title) }))}
                  title={title}
                  text={text}
                />
              ))}
            </div>
          )}

          {step === "gebruik" && (
            <div className="choice-groups">
              <ChoiceGroup label="Wie gebruikt de software?">
                {AUDIENCES.map((a) => (
                  <ChoiceOption
                    key={a}
                    type="radio"
                    name="gebruikers"
                    checked={software.audience === a}
                    onChange={() => setSoftware((s) => ({ ...s, audience: a }))}
                    title={a}
                  />
                ))}
              </ChoiceGroup>
              <ChoiceGroup label="Waar gebruik je het vooral?">
                {DEVICES.map((d) => (
                  <ChoiceOption
                    key={d}
                    type="radio"
                    name="toestel"
                    checked={software.device === d}
                    onChange={() => setSoftware((s) => ({ ...s, device: d }))}
                    title={d}
                  />
                ))}
              </ChoiceGroup>
            </div>
          )}

          {step === "koppelingen" && (
            <div className="choice-grid">
              {SOFTWARE_LINKS.map((l) => (
                <ChoiceOption
                  key={l}
                  type="checkbox"
                  name="koppelingen"
                  checked={software.links.includes(l)}
                  onChange={() => setSoftware((s) => ({ ...s, links: toggle(s.links, l) }))}
                  title={l}
                />
              ))}
            </div>
          )}

          {/* ───────── AI & automatisatie ───────── */}
          {step === "taken" && (
            <div className="choice-grid">
              {AI_TASKS.map(([title, text]) => (
                <ChoiceOption
                  key={title}
                  type="checkbox"
                  name="taken"
                  checked={ai.tasks.includes(title)}
                  onChange={() => setAi((s) => ({ ...s, tasks: toggle(s.tasks, title) }))}
                  title={title}
                  text={text}
                />
              ))}
            </div>
          )}

          {step === "handwerk" && (
            <div className="pw-sliders">
              {AI_SLIDERS.map((sl) => {
                const value = ai[sl.key];
                return (
                  <label key={sl.key} className="pw-slider">
                    <span>
                      <strong>{sl.label}</strong>
                      <output>
                        {sl.prefix}
                        {value}
                        {sl.suffix}
                      </output>
                    </span>
                    <input
                      type="range"
                      min={sl.min}
                      max={sl.max}
                      value={value}
                      onChange={(e) => setAi((s) => ({ ...s, [sl.key]: +e.target.value }))}
                      style={
                        {
                          "--progress": `${((value - sl.min) / (sl.max - sl.min)) * 100}%`,
                        } as CSSProperties
                      }
                    />
                  </label>
                );
              })}
              <p className="pw-saving">
                Dat is ongeveer <strong>{fmt(weekHours)} uur per week</strong> handwerk, of{" "}
                {fmt(yearHours)} uur per jaar.
              </p>
            </div>
          )}

          {step === "tools" && (
            <div className="choice-grid">
              {AI_TOOLS.map((t) => (
                <ChoiceOption
                  key={t}
                  type="checkbox"
                  name="tools"
                  checked={ai.tools.includes(t)}
                  onChange={() => setAi((s) => ({ ...s, tools: toggle(s.tools, t) }))}
                  title={t}
                />
              ))}
            </div>
          )}

          {/* ───────── Resultaat ───────── */}
          {step === "resultaat" && track === "website" && (
            <div className="pw-result">
              <div className="pw-total">
                <span>Eenmalig</span>
                <strong>
                  € {fmt(result.once)} – € {fmt(result.high)}
                </strong>
              </div>
              {result.monthly > 0 && (
                <div className="pw-total">
                  <span>Per maand</span>
                  <strong>€ {fmt(result.monthly)}</strong>
                </div>
              )}
              <dl className="pw-lines">
                {[...result.lines, ...result.monthlyLines].map((line) => (
                  <div key={line.label}>
                    <dt>{line.label}</dt>
                    <dd>
                      {line.bundled
                        ? "inbegrepen"
                        : `€ ${fmt(line.price)}${line.kind === "maandelijks" ? " / maand" : ""}`}
                    </dd>
                  </div>
                ))}
              </dl>
              {result.delivery && (
                <p className="pw-delivery">Levering in ongeveer {result.delivery}</p>
              )}
              <p className="pw-note">
                Een indicatie, niet bindend. Je keuzes gaan mee naar het offerteformulier; binnen
                twee werkdagen krijg je een voorstel met vaste prijs.
              </p>
            </div>
          )}

          {step === "resultaat" && track !== "website" && (
            <div className="pw-result">
              <div className="pw-total">
                <span>Eenmalig</span>
                <strong>
                  Prijs na analyse
                  <small>
                    vanaf €{" "}
                    {fmt(track === "ai" ? MAATWERK_FROM.Automatisatie : MAATWERK_FROM["Web app"])}
                  </small>
                </strong>
              </div>
              {track === "ai" && (
                <div className="pw-total">
                  <span>Handwerk nu</span>
                  <strong>
                    {fmt(weekHours)} uur / week
                    <small>
                      {fmt(yearHours)} uur per jaar · € {fmt(yearHours * ai.rate)} loonkost
                    </small>
                  </strong>
                </div>
              )}
              <Summary rows={track === "ai" ? aiRows : softwareRows} />
              <p className="pw-note">
                Maatwerk prijzen we pas na een korte analyse. In een gesprek van 30 minuten
                overlopen we je antwoorden; binnen twee werkdagen krijg je een voorstel met vaste
                prijs.
              </p>
            </div>
          )}
        </div>

        <div className="pw-foot">
          <button
            type="button"
            className="sbtn sbtn-outline"
            aria-label="Vorige"
            disabled={index === 0}
            onClick={() => setIndex((n) => Math.max(0, n - 1))}
          >
            <BtnArrow glyph="←" /> <span className="step-back-label">Vorige</span>
          </button>
          {step === "resultaat" ? (
            <Link href={contactHref} className="sbtn sbtn-primary" onClick={close}>
              {track === "website" ? "Vraag deze offerte aan" : "Plan een gesprek"} <BtnArrow />
            </Link>
          ) : (
            <button
              type="button"
              className="sbtn sbtn-primary"
              disabled={!canGoOn}
              onClick={() => setIndex((n) => Math.min(steps.length - 1, n + 1))}
            >
              {index === inputSteps - 1 ? "Bekijk je prijs" : "Volgende"} <BtnArrow />
            </button>
          )}
        </div>
      </div>
    </dialog>
  );
}

/** Link die de prijsberekenaar opent; zonder JavaScript springt hij naar de calculator op de pagina. */
export function PriceWizardLink({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href="#bereken-je-prijs"
      className={className}
      onClick={(e) => {
        e.preventDefault();
        openPriceWizard();
      }}
    >
      {children}
    </a>
  );
}
