import type { CSSProperties, ReactNode } from "react";
import { RegionMap } from "./art/RegionMap";

/*
 * Mobiele versies van de Figma-hero's (Lokale SEO 232:499, Web apps 232:857, AI 232:1215, Onderhoud 232:1573).
 * Zelfde onderdelen, kleuren, randen, gloed, iconen en grafieken als de desktop-export (art/Hero1–4), maar
 * opgebouwd voor een smal scherm en op leesbare grootte. Enkel zichtbaar onder 761px.
 */

/** Figma-iconen: zelfde bestanden en insets als in de export. */
const ICONS = {
  "map-pin": ["/figma/seo-hero/193ab.svg", "12.5% 20.83% 10.42% 20.83%", "-5.41% -7.14%"],
  "file-text": ["/figma/9e120.svg", "10.42% 18.75%", "-5.26% -6.67%"],
  dashboard: ["/figma/98fd2.svg", "12.5%", "-5.56%"],
  calendar: ["/figma/dbd5c.svg", "10.42% 12.5%", "-5.26% -5.56%"],
  "user-circle": ["/figma/7038b.svg", "10.42%", "-5.26%"],
  "bar-chart": ["/figma/0bfdc.svg", "12.5%", "-5.56%"],
  search: ["/figma/1b443.svg", "16.67% 14.58% 14.58% 16.67%", "-6.06%"],
  "user-check": ["/figma/49567.svg", "16.67% 8.33% 14.58% 8.33%", "-6.06% -5%"],
  "user-check-grey": ["/figma/3a904.svg", "16.67% 8.33% 14.58% 8.33%", "-6.06% -5%"],
  sparkles: ["/figma/1fa32.svg", "14.58% 12.5% 16.67% 16.67%", "-6.06% -5.88%"],
  mail: ["/figma/7f403.svg", "18.75% 10.42%", "-6.67% -5.26%"],
  send: ["/figma/9a447.svg", "10.42% 10.42% 10.42% 12.5%", "-5.26% -5.4% -5.26% -5.41%"],
  database: ["/figma/005d1.svg", "10.42% 14.58%", "-5.26% -5.88%"],
  "shield-check": ["/figma/4b3c3.svg", "10.42% 18.75%", "-5.26% -6.67%"],
  refresh: ["/figma/a4ec1.svg", "14.58%", "-5.88%"],
  activity: ["/figma/2111d.svg", "14.58% 8.33%", "-5.88% -5%"],
} as const;
type IconName = keyof typeof ICONS;

function Icon({ name, size = 19.2 }: { name: IconName; size?: number }) {
  const [src, group, inset] = ICONS[name];
  return (
    <span className="fhi" style={{ width: size, height: size }}>
      <span style={{ inset: group }}>
        <span style={{ inset }}>
          <img src={src} alt="" />
        </span>
      </span>
    </span>
  );
}

/** Rode icoontegel (verloop 135°, #e8334f → #7e0c1e). */
function Tile({ name, size = 36, icon }: { name: IconName; size?: number; icon?: number }) {
  return (
    <span className="fh-tile" style={{ width: size, height: size } as CSSProperties}>
      <Icon name={name} size={icon} />
    </span>
  );
}

/** Glazen statuskaart (icoontegel + titel + ondertitel). */
function Status({
  icon,
  title,
  text,
  className = "",
}: {
  icon: IconName;
  title: string;
  text: string;
  className?: string;
}) {
  return (
    <div className={"fh-status " + className}>
      <Tile name={icon} />
      <span>
        <strong>{title}</strong>
        <small>{text}</small>
      </span>
    </div>
  );
}

/** Grote melding (icoontegel 48px, titel, ondertitel, "NU" + vinkje). */
function Toast({
  icon,
  title,
  text,
  className = "",
}: {
  icon: IconName;
  title: string;
  text: string;
  className?: string;
}) {
  return (
    <div className={"fh-toast " + className}>
      <Tile name={icon} size={44} icon={22} />
      <span>
        <strong>{title}</strong>
        <small>{text}</small>
      </span>
      <em>
        <span>NU</span>
        <img src="/figma/740c0.svg" alt="" width={22} height={22} />
      </em>
    </div>
  );
}

function Stars({ filled = 5 }: { filled?: number }) {
  return (
    <span className="fh-stars">
      {[0, 1, 2, 3, 4].map((n) => (
        <img
          key={n}
          src={n < filled ? "/figma/seo-hero/ef241.svg" : "/figma/seo-hero/4a1a7.svg"}
          alt=""
        />
      ))}
    </span>
  );
}

/* ───────────── Lokale SEO ───────────── */

const results = [
  {
    name: "Jouw bedrijf",
    score: "4,9",
    stars: 5,
    count: "(86)",
    meta: "Elektricien · 2,1 km · Nu open",
  },
  {
    name: "Concurrent A",
    score: "4,2",
    stars: 4,
    count: "(31)",
    meta: "Elektricien · 3,4 km · Nu open",
  },
  {
    name: "Concurrent B",
    score: "3,9",
    stars: 4,
    count: "(12)",
    meta: "Elektricien · 5,0 km · Sluit om 17:00",
  },
];

function Seo() {
  return (
    <>
      <div className="fh-review">
        <span className="fh-review-head">
          <Stars />
          Nieuwe review
        </span>
        <p>“Snel ter plaatse en heel vriendelijk geholpen!”</p>
        <small>Sarah · 2 min geleden</small>
      </div>
      <div className="fh-map">
        <div className="fh-map-canvas">
          <RegionMap className="relative" />
        </div>
      </div>
      <div className="fh-results">
        <div className="fh-results-head">
          <strong>Elektricien in de buurt</strong>
          <small>Kaartweergave</small>
        </div>
        {results.map((r, n) => (
          <div key={r.name} className={"fh-result" + (n === 0 ? " is-you" : "")}>
            <span className="fh-rank">{n + 1}</span>
            <span className="fh-result-info">
              <strong>{r.name}</strong>
              <span className="fh-score">
                {r.score}
                <Stars filled={r.stars} />
                {r.count}
              </span>
              <small>{r.meta}</small>
            </span>
            {n === 0 && (
              <span className="fh-result-actions">
                <b>Bellen</b>
                <b>Route</b>
              </span>
            )}
          </div>
        ))}
      </div>
      <Toast
        icon="map-pin"
        title="Nieuwe klant belt"
        text="Rechtstreeks vanuit Google Maps"
        className="fh-seo-toast"
      />
    </>
  );
}

/* ───────────── Web apps ───────────── */

const nav: { icon: IconName; label: string }[] = [
  { icon: "dashboard", label: "Overzicht" },
  { icon: "file-text", label: "Dossiers" },
  { icon: "calendar", label: "Planning" },
  { icon: "user-circle", label: "Klanten" },
  { icon: "bar-chart", label: "Rapporten" },
];

function WebApps() {
  return (
    <>
      <div className="fh-confirm">
        <Tile name="calendar" size={34} icon={17} />
        <span>
          <strong>Afspraak bevestigd</strong>
          <small>Dinsdag · 10:00 · werfbezoek</small>
        </span>
      </div>
      <div className="fh-app">
        <aside className="fh-app-side">
          <span className="fh-app-logo" />
          {nav.map((item, n) => (
            <span key={item.label} className={n === 1 ? "is-active" : undefined}>
              <Icon name={item.icon} size={16} />
            </span>
          ))}
        </aside>
        <div className="fh-app-main">
          <div className="fh-app-top">
            <span className="fh-app-search">
              <Icon name="search" size={14} />
              Zoek een dossier…
            </span>
            <span className="fh-app-avatar">JD</span>
          </div>
          <strong className="fh-app-title">Dossiers</strong>
          <small className="fh-app-sub">12 open · 3 wachten op jou</small>
          <div className="fh-kpis">
            <span>
              <small>Open dossiers</small>
              <b>12</b>
            </span>
            <span>
              <small>Doorlooptijd</small>
              <b>4,2 dagen</b>
            </span>
            <span>
              <small>Tevredenheid</small>
              <b>96 %</b>
            </span>
          </div>
          <div className="fh-chart">
            <strong>Aanvragen per week</strong>
            <img src="/figma/f1c57.svg" alt="" />
          </div>
          <div className="fh-table">
            <span className="fh-table-head">
              <small>Klant</small>
              <small>Status</small>
              <small>Laatste update</small>
            </span>
            <span>
              <b>Peeters Bouw</b>
              <i className="is-busy">In behandeling</i>
              <small>vandaag, 09:14</small>
            </span>
            <span>
              <b>Janssens &amp; Co</b>
              <i>Afgerond</i>
              <small>gisteren</small>
            </span>
          </div>
        </div>
      </div>
      <Toast
        icon="file-text"
        title="Document ontvangen"
        text="Peeters Bouw · Plan_v2.pdf"
        className="fh-doc-toast"
      />
      <div className="fh-progress">
        <span className="fh-progress-ring">
          <img src="/figma/b98ee.svg" alt="" />
          <b>82%</b>
        </span>
        <small>dossiers afgerond</small>
      </div>
    </>
  );
}

/* ───────────── AI & automatisaties ───────────── */

const outputs: { icon: IconName; title: string; text: string }[] = [
  { icon: "user-check", title: "CRM", text: "Lead aangemaakt" },
  { icon: "file-text", title: "Offerte", text: "Automatisch opgemaakt" },
  { icon: "calendar", title: "Agenda", text: "Afspraak ingepland" },
  { icon: "send", title: "Mail", text: "Bevestiging verstuurd" },
];

function Block({
  icon,
  title,
  text,
  big,
}: {
  icon: IconName;
  title: string;
  text: string;
  big?: boolean;
}) {
  return (
    <div className={"fh-block" + (big ? " is-ai" : "")}>
      <Tile name={icon} size={big ? 40 : 32} icon={big ? 22 : 17} />
      <span>
        <strong>{title}</strong>
        <small>{text}</small>
      </span>
    </div>
  );
}

function Ai() {
  return (
    <>
      <span className="fh-chip">Automatisch · 0 min handwerk</span>
      <div className="fh-canvas">
        <div className="fh-canvas-head">
          <span>Automatisatie · Nieuwe aanvraag</span>
          <span className="fh-live">
            <i />
            Actief
          </span>
        </div>
        <span className="fh-start">Start</span>
        <Block icon="mail" title="Formulier" text="Nieuwe aanvraag" />
        <span className="fh-wire" aria-hidden="true">
          <i />
        </span>
        <Block icon="sparkles" title="AI-assistent" text="Leest, sorteert, beslist" big />
        <span className="fh-branch" aria-hidden="true" />
        <div className="fh-outputs">
          {outputs.map((o) => (
            <Block key={o.title} {...o} />
          ))}
        </div>
      </div>
      <div className="fh-chat">
        <span className="fh-chat-head">
          <Tile name="sparkles" size={22} icon={13} />
          AI-assistent · op je website
        </span>
        <p className="fh-bubble">Kunnen jullie dinsdag langskomen?</p>
        <p className="fh-bubble is-out">Dinsdag om 10u kan. Ik heb het ingepland ✓</p>
      </div>
    </>
  );
}

/* ───────────── Onderhoud & hosting ───────────── */

function Onderhoud() {
  return (
    <>
      <img className="fh-beat" src="/figma/7d720.svg" alt="" />
      <div className="fh-meter">
        <img className="fh-meter-ring" src="/figma/f42ba.svg" alt="" />
        <span className="fh-meter-copy">
          <span className="fh-ok">
            <img src="/figma/2aedf.svg" alt="" />
            Alles werkt
          </span>
          <strong>99,98 %</strong>
          <small>uptime · laatste 30 dagen</small>
          <em>jouwbedrijf.be</em>
        </span>
      </div>
      <Status icon="database" title="Back-up gelukt" text="Vandaag om 03:00" className="is-tl" />
      <Status
        icon="shield-check"
        title="SSL-certificaat"
        text="Geldig · automatisch verlengd"
        className="is-tr"
      />
      <Status icon="refresh" title="3 updates" text="Getest en geïnstalleerd" className="is-bl" />
      <Status
        icon="activity"
        title="Monitoring 24/7"
        text="Laatste check: 1 min geleden"
        className="is-br"
      />
    </>
  );
}

const scenes: Record<string, { label: string; node: () => ReactNode }> = {
  "lokale-seo": {
    label:
      "Kaart van de regio met jouw bedrijf als eerste zoekresultaat, een nieuwe review en een klant die belt.",
    node: Seo,
  },
  "web-apps": {
    label:
      "Klantenportaal met dossiers, doorlooptijd, een grafiek en meldingen van nieuwe documenten.",
    node: WebApps,
  },
  "ai-automatisaties": {
    label:
      "Automatisatie: een aanvraag gaat via de AI-assistent naar CRM, offerte, agenda en mail.",
    node: Ai,
  },
  "onderhoud-hosting": {
    label:
      "Voorbeeld van monitoring: 99,98 % uptime, back-up, SSL-certificaat, updates en monitoring.",
    node: Onderhoud,
  },
};

export const hasFigmaHeroMobile = (slug: string) => slug in scenes;

export function FigmaHeroMobile({ slug }: { slug: string }) {
  const scene = scenes[slug];
  if (!scene) return null;
  const Node = scene.node;
  return (
    <figure className={"fh fh-" + slug} role="img" aria-label={scene.label}>
      <Node />
      {slug === "onderhoud-hosting" && (
        <figcaption className="fh-caption" aria-hidden="true">
          Voorbeeld van monitoring
        </figcaption>
      )}
    </figure>
  );
}
