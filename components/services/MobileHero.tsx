import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import type { ServiceSlug } from "@/lib/services";

/*
 * Mobiele hero-visuals per dienst. De desktop-illustraties worden op een gsm te klein om te lezen;
 * deze versies tonen dezelfde inhoud (alle teksten en voorbeeldcijfers komen uit de desktop-art)
 * als echte, leesbare interface-onderdelen met een korte lus-animatie. Enkel zichtbaar op mobiel.
 */

const icon = {
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="m12 3.2 2.6 5.5 6 .7-4.4 4.1 1.2 5.9L12 16.5l-5.4 2.9 1.2-5.9L3.4 9.4l6-.7L12 3.2Z" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
      <path
        d="M5 4h3.5l1.7 4.2-2.2 1.4a11 11 0 0 0 6.4 6.4l1.4-2.2L20 15.5V19a1.5 1.5 0 0 1-1.6 1.5A16 16 0 0 1 3.5 5.6 1.5 1.5 0 0 1 5 4Z"
        strokeLinejoin="round"
      />
    </svg>
  ),
  route: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
      <path d="m3.5 11 17-7-7 17-2.2-7.8L3.5 11Z" strokeLinejoin="round" />
    </svg>
  ),
  search: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" strokeLinecap="round" />
    </svg>
  ),
  doc: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
      <path d="M7 3.5h7l4 4V20a.5.5 0 0 1-.5.5h-10A.5.5 0 0 1 7 20V3.5Z" />
      <path d="M14 3.5V8h4M9.5 12.5h6M9.5 16h4" strokeLinecap="round" />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
      <rect x="3.5" y="5" width="17" height="15.5" rx="3" />
      <path d="M3.5 10h17M8 3v4M16 3v4" strokeLinecap="round" />
    </svg>
  ),
  user: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
      <circle cx="12" cy="8.5" r="3.8" />
      <path d="M4.5 20c1.3-3.6 4-5.3 7.5-5.3s6.2 1.7 7.5 5.3" strokeLinecap="round" />
    </svg>
  ),
  send: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
      <path d="M20.5 3.5 10 14M20.5 3.5 14 20.5l-4-6.5-6.5-4 17-6.5Z" strokeLinejoin="round" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
      <path
        d="M12 3.5 19 6v5.5c0 4.4-2.9 7.6-7 9-4.1-1.4-7-4.6-7-9V6l7-2.5Z"
        strokeLinejoin="round"
      />
      <path d="m9 12 2.2 2.2L15.5 10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  database: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
      <ellipse cx="12" cy="6" rx="7" ry="2.8" />
      <path d="M5 6v12c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8V6M5 12c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8" />
    </svg>
  ),
  refresh: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
      <path d="M19.5 8A8 8 0 0 0 5 7.5M4.5 16A8 8 0 0 0 19 16.5" strokeLinecap="round" />
      <path d="M19.5 3.5V8H15M4.5 20.5V16H9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  pulse: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
      <path d="M3 12h4l2.5-6 5 12 2.5-6h4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  sparkle: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M10 3.5c.4 3.6 2.4 5.6 6 6-3.6.4-5.6 2.4-6 6-.4-3.6-2.4-5.6-6-6 3.6-.4 5.6-2.4 6-6Z" />
      <path d="M17.5 13c.2 1.9 1.1 2.8 3 3-1.9.2-2.8 1.1-3 3-.2-1.9-1.1-2.8-3-3 1.9-.2 2.8-1.1 3-3Z" />
    </svg>
  ),
} satisfies Record<string, ReactNode>;

export const mobileIcon = icon;

function Toast({
  i,
  glyph,
  title,
  text,
  time,
}: {
  i: number;
  glyph: ReactNode;
  title: string;
  text: string;
  time?: string;
}) {
  return (
    <li className="smh-toast" style={{ "--i": i } as CSSProperties}>
      <span className="smh-toast-icon">{glyph}</span>
      <span className="smh-toast-copy">
        <strong>{title}</strong>
        <small>{text}</small>
      </span>
      {time && <time>{time}</time>}
    </li>
  );
}

function Webdesign() {
  return (
    <>
      <div className="hero-flow-device smh-device">
        <div className="hero-flow-browser">
          <div className="hero-flow-chrome">
            <span className="hero-flow-dots">
              <i />
              <i />
              <i />
            </span>
            <span className="hero-flow-url">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <rect x="5" y="11" width="14" height="10" rx="2" />
                <path d="M8 11V8a4 4 0 0 1 8 0v3" />
              </svg>
              taxibornem.be
            </span>
          </div>
          <div className="hero-flow-screen smh-screen-taxi">
            <Image
              src="/images/taxibornem-home.webp"
              alt=""
              width={10164}
              height={5548}
              sizes="(max-width: 760px) 100vw, 1px"
            />
          </div>
        </div>
      </div>
      <ul className="smh-toasts">
        <Toast
          i={0}
          glyph={icon.mail}
          title="Nieuwe ritaanvraag"
          text="Via het boekingsformulier"
          time="nu"
        />
        <Toast i={1} glyph={icon.star} title="Nieuwe Google-review" text="5 sterren" time="1 min" />
        <Toast
          i={2}
          glyph={icon.phone}
          title="Oproep via de site"
          text="Klik op de belknop"
          time="3 min"
        />
      </ul>
    </>
  );
}

const seoResults = [
  { name: "Jouw bedrijf", score: "4,9", count: "(86)", meta: "Elektricien · 2,1 km · Nu open" },
  { name: "Concurrent A", score: "4,2", count: "(31)", meta: "Elektricien · 3,4 km · Nu open" },
  {
    name: "Concurrent B",
    score: "3,9",
    count: "(12)",
    meta: "Elektricien · 5,0 km · Sluit om 17:00",
  },
];

function LokaleSeo() {
  return (
    <>
      <div className="smh-search">
        <div className="smh-search-bar">
          {icon.search}
          <span>Elektricien in de buurt</span>
        </div>
        <ol className="smh-results">
          {seoResults.map((r, n) => (
            <li key={r.name} className={n === 0 ? "is-you" : undefined}>
              <span className="smh-rank">{n + 1}</span>
              <span className="smh-result-copy">
                <strong>{r.name}</strong>
                <span className="smh-rating">
                  {r.score} <i aria-hidden="true">★</i> {r.count}
                </span>
                <small>{r.meta}</small>
              </span>
              {n === 0 && (
                <span className="smh-result-actions">
                  <span>{icon.phone}</span>
                  <span>{icon.route}</span>
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
      <ul className="smh-toasts smh-toasts-float">
        <Toast
          i={0}
          glyph={icon.phone}
          title="Nieuwe klant belt"
          text="Rechtstreeks vanuit Google Maps"
          time="nu"
        />
      </ul>
    </>
  );
}

function WebApps() {
  return (
    <>
      <div className="smh-app">
        <div className="smh-app-head">
          <span className="smh-avatar">PB</span>
          <span>
            <strong>Dossiers</strong>
            <small>12 open · 3 wachten op jou</small>
          </span>
        </div>
        <dl className="smh-kpis">
          <div>
            <dt>Open dossiers</dt>
            <dd>12</dd>
          </div>
          <div>
            <dt>Doorlooptijd</dt>
            <dd>4,2 dagen</dd>
          </div>
          <div>
            <dt>Tevredenheid</dt>
            <dd>96 %</dd>
          </div>
        </dl>
        <ul className="smh-rows">
          <li>
            <strong>Peeters Bouw</strong>
            <span className="smh-status">In behandeling</span>
            <small>vandaag, 09:14</small>
          </li>
          <li>
            <strong>Janssens &amp; Co</strong>
            <span className="smh-status is-done">Afgerond</span>
            <small>gisteren</small>
          </li>
        </ul>
      </div>
      <ul className="smh-toasts">
        <Toast
          i={0}
          glyph={icon.doc}
          title="Document ontvangen"
          text="Peeters Bouw · Plan_v2.pdf"
          time="nu"
        />
        <Toast
          i={1}
          glyph={icon.calendar}
          title="Afspraak bevestigd"
          text="Dinsdag · 10:00 · werfbezoek"
        />
      </ul>
    </>
  );
}

const aiOutputs = [
  { glyph: icon.user, title: "CRM", text: "Lead aangemaakt" },
  { glyph: icon.doc, title: "Offerte", text: "Automatisch opgemaakt" },
  { glyph: icon.calendar, title: "Agenda", text: "Afspraak ingepland" },
  { glyph: icon.send, title: "Mail", text: "Bevestiging verstuurd" },
];

function AiAutomatisaties() {
  return (
    <>
      <div className="smh-chat">
        <span className="smh-chat-label">
          <span className="smh-orb">{icon.sparkle}</span>
          AI-assistent · op je website
        </span>
        <p className="smh-bubble smh-bubble-in">Kunnen jullie dinsdag langskomen?</p>
        <p className="smh-bubble smh-bubble-typing" aria-hidden="true">
          <b />
          <b />
          <b />
        </p>
        <p className="smh-bubble smh-bubble-out">Dinsdag om 10u kan. Ik heb het ingepland ✓</p>
      </div>
      <ul className="smh-outputs">
        {aiOutputs.map((o, n) => (
          <li key={o.title} style={{ "--i": n } as CSSProperties}>
            <span className="smh-toast-icon">{o.glyph}</span>
            <span className="smh-toast-copy">
              <strong>{o.title}</strong>
              <small>{o.text}</small>
            </span>
          </li>
        ))}
      </ul>
      <p className="smh-foot">Automatisch · 0 min handwerk</p>
    </>
  );
}

const checks = [
  { glyph: icon.database, title: "Back-up gelukt", text: "Vandaag om 03:00" },
  { glyph: icon.shield, title: "SSL-certificaat", text: "Automatisch verlengd" },
  { glyph: icon.refresh, title: "3 updates", text: "Getest en geïnstalleerd" },
  { glyph: icon.pulse, title: "Monitoring 24/7", text: "Laatste check: 1 min" },
];

function Onderhoud() {
  return (
    <>
      <div className="smh-status-card">
        <div className="smh-ring">
          <svg viewBox="0 0 120 120" aria-hidden="true">
            <circle cx="60" cy="60" r="52" />
            <circle cx="60" cy="60" r="52" pathLength="100" />
          </svg>
          <span>
            <strong>99,98 %</strong>
            <small>uptime</small>
          </span>
        </div>
        <div className="smh-status-copy">
          <span className="smh-ok">
            <b className="smh-live-dot" /> Alles werkt
          </span>
          <strong>jouwbedrijf.be</strong>
          <small>Uptime · laatste 30 dagen</small>
        </div>
      </div>
      <ul className="smh-checks">
        {checks.map((c, n) => (
          <li key={c.title} style={{ "--i": n } as CSSProperties}>
            <span className="smh-toast-icon">{c.glyph}</span>
            <span className="smh-toast-copy">
              <strong>{c.title}</strong>
              <small>{c.text}</small>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

const visuals: Record<ServiceSlug, { label: string; node: () => ReactNode }> = {
  webdesign: {
    label: "Website van Taxi Bornem met binnenkomende ritaanvragen, reviews en oproepen.",
    node: Webdesign,
  },
  "lokale-seo": {
    label: "Zoekresultaat in Google Maps waarin jouw bedrijf als eerste verschijnt.",
    node: LokaleSeo,
  },
  "web-apps": {
    label: "Klantenportaal met open dossiers, doorlooptijd en statusupdates.",
    node: WebApps,
  },
  "ai-automatisaties": {
    label:
      "Een AI-assistent plant een afspraak in en maakt automatisch een lead, offerte, afspraak en bevestigingsmail aan.",
    node: AiAutomatisaties,
  },
  "onderhoud-hosting": {
    label: "Voorbeeld van monitoring: uptime, back-ups, SSL-certificaat en updates.",
    node: Onderhoud,
  },
};

export function MobileHero({ slug }: { slug: ServiceSlug }) {
  const visual = visuals[slug];
  const Node = visual.node;
  return (
    <figure className={"smh smh-" + slug} role="img" aria-label={visual.label}>
      <Node />
      {slug === "onderhoud-hosting" && (
        <figcaption className="smh-caption" aria-hidden="true">
          Voorbeeld van monitoring
        </figcaption>
      )}
    </figure>
  );
}
