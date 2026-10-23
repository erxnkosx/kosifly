/**
 * Inhoud van de case-beelden: schermen voor de toestellen (components/ui/Devices.tsx, gsm 390 × 845 ontworpen) en
 * de documenten met kaartjes voor de offerte en het maandrapport. Teksten en cijfers komen uit de etalages;
 * stijl in app/styles/devices.css.
 */

const PHONE_H = 845;

function Icon({ d, size = 18 }: { d: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

const ICON = {
  search: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.3-4.3",
  mic: "M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zM5 11a7 7 0 0 0 14 0M12 18v3",
  globe:
    "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18",
  route:
    "M6 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM6 15V9a4 4 0 0 1 4-4h6M18 9v6a4 4 0 0 1-4 4H8",
  phone:
    "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z",
  bookmark: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z",
  sparkle: "M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z",
  check: "M5 12.5l4.5 4.5L19 7.5",
  inbox: "M22 12h-6l-2 3h-4l-2-3H2M5.5 5h13l3.5 7v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6z",
  file: "M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9zM14 3v6h6",
  users:
    "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8",
  list: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
  back: "M15 18l-6-6 6-6",
  share: "M12 3v12M7 8l5-5 5 5M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5",
  calendar:
    "M8 2v4M16 2v4M3 9h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
  camera:
    "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  user: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  torch: "M8 2h8v5l-2 3v12h-4V10L8 7z",
};

/** Statusbalk van een gsm: tijd links, bereik, wifi en batterij rechts (het eiland tekent het toestel). */
function StatusBar() {
  return (
    <div className="scr-status" aria-hidden="true">
      <span>9:41</span>
      <span className="scr-status-icons">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor">
          <rect x="0" y="8" width="3" height="4" rx="1" />
          <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
          <rect x="10" y="3" width="3" height="9" rx="1" />
          <rect x="15" y="0" width="3" height="12" rx="1" />
        </svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
          <path d="M8 2.2c2.4 0 4.6.9 6.3 2.5l1.2-1.3C13.5 1.5 10.9.4 8 .4S2.5 1.5.5 3.4l1.2 1.3C3.4 3.1 5.6 2.2 8 2.2zm0 3.6c1.4 0 2.7.5 3.7 1.4l1.2-1.3C11.6 4.7 9.9 4 8 4s-3.6.7-4.9 1.9l1.2 1.3c1-.9 2.3-1.4 3.7-1.4zM8 9.4c.5 0 1 .2 1.3.5L8 11.6 6.7 9.9c.3-.3.8-.5 1.3-.5z" />
        </svg>
        <svg width="27" height="13" viewBox="0 0 27 13" fill="none">
          <rect
            x="0.5"
            y="0.5"
            width="23"
            height="12"
            rx="3.5"
            stroke="currentColor"
            opacity="0.4"
          />
          <rect x="2" y="2" width="18" height="9" rx="2" fill="currentColor" />
          <path
            d="M25 4.5v4c.8-.3 1.3-1.1 1.3-2s-.5-1.7-1.3-2z"
            fill="currentColor"
            opacity="0.5"
          />
        </svg>
      </span>
    </div>
  );
}

/** Lokale SEO in de browser: het echte Google-resultaat van Taxi Bornem. */
export function GoogleDesktopScreen() {
  return (
    <img
      className="scr-shot"
      src="/images/taxi-bornem-google-v2.webp"
      alt=""
      width={1700}
      height={1108}
      loading="lazy"
    />
  );
}

/** Web apps (voorbeeldproject): de app voor de vakman van een aannemer. */
export function CrewScreen() {
  return (
    <div className="scr scr-crew" style={{ height: PHONE_H }}>
      <StatusBar />
      <div className="scr-crew-top">
        <strong>Goedemorgen, Wout</strong>
        <small>Woensdag 15 oktober</small>
      </div>
      <div className="scr-card scr-crew-job">
        <span className="scr-tag">Volgende klus</span>
        <strong>Keuken Maes</strong>
        <span>Kerkstraat 12, Bornem</span>
        <span className="scr-crew-time">08:00 – 16:30</span>
        <div className="scr-crew-actions">
          <span className="is-primary">
            <Icon d={ICON.route} size={17} /> Navigeer
          </span>
          <span>
            <Icon d={ICON.phone} size={17} /> Bel klant
          </span>
        </div>
      </div>
      <div className="scr-card scr-crew-material">
        <span className="scr-tag">Materiaal</span>
        <ul>
          {["12 dozen tegels", "Voegsel grijs", "Silicone wit"].map((item) => (
            <li key={item}>
              <Icon d={ICON.check} size={15} /> {item}
            </li>
          ))}
        </ul>
      </div>
      <span className="scr-crew-photo">
        <Icon d={ICON.camera} size={18} /> Foto van de werf
      </span>
      <div className="scr-tabbar" aria-hidden="true">
        <span className="is-active">
          <Icon d={ICON.calendar} size={22} />
          Planning
        </span>
        <span>
          <Icon d={ICON.list} size={22} />
          Klussen
        </span>
        <span>
          <Icon d={ICON.camera} size={22} />
          Foto&apos;s
        </span>
        <span>
          <Icon d={ICON.user} size={22} />
          Profiel
        </span>
      </div>
    </div>
  );
}

/* ───────────── AI & automatisatie: aanvraag → wat AI eruit haalde → offerte ───────────── */

/** De aanvraag zoals ze via het formulier binnenkomt. */
export function RequestCard() {
  return (
    <div className="doc-card doc-request">
      <span className="scr-tag">Nieuwe aanvraag · via je website</span>
      <p>
        Hallo, we zoeken een <mark>warmtepomp</mark> voor onze woning van <mark>160 m²</mark> in{" "}
        <mark>Mechelen</mark>. Kunnen jullie eens <mark>langskomen</mark>?
      </p>
      <small>Lien Vermeulen · Mechelen</small>
    </div>
  );
}

/** Wat AI uit de aanvraag haalde. */
export function ExtractCard() {
  return (
    <div className="doc-card doc-extract">
      <span className="scr-tag">
        <Icon d={ICON.sparkle} size={15} /> AI haalde eruit
      </span>
      <dl>
        {[
          ["Toestel", "Warmtepomp"],
          ["Woning", "160 m²"],
          ["Gemeente", "Mechelen"],
          ["Volgende stap", "Plaatsbezoek"],
        ].map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

const offerLines = [
  ["Lucht-water warmtepomp 8 kW", "€ 9.450"],
  ["Plaatsing en inbedrijfstelling", "€ 1.850"],
  ["Plaatsbezoek", "gratis"],
];

/** De offerte als document (A4), opgemaakt met de prijzen van de installateur. */
export function OfferteDocument() {
  return (
    <div className="doc-paper doc-offerte">
      <div className="doc-head">
        <span className="doc-brand">
          <i>P</i> Installatie Peeters
        </span>
        <b>Offerte</b>
      </div>
      <div className="doc-meta">
        <strong>OF-2026-118</strong>
        <small>Voor Lien Vermeulen, Mechelen</small>
      </div>
      <div className="doc-table">
        <span className="doc-th">
          <span>Omschrijving</span>
          <span>Bedrag</span>
        </span>
        {offerLines.map(([label, price]) => (
          <span key={label} className="doc-tr">
            <span>{label}</span>
            <b>{price}</b>
          </span>
        ))}
      </div>
      <div className="doc-total">
        <span>Totaal excl. btw</span>
        <strong>€ 11.300</strong>
      </div>
      <span className="doc-stamp">AI-voorstel · te controleren</span>
      <span className="doc-lines" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
    </div>
  );
}

/** Eén klik om de offerte te versturen. */
export function ApproveCard() {
  return (
    <div className="doc-card doc-approve">
      <span className="doc-approve-btn">
        <Icon d={ICON.check} size={17} /> Goedkeuren en versturen
      </span>
      <span>Aanpassen</span>
    </div>
  );
}

/* ───────────── Onderhoud: het maandrapport ───────────── */

const reportDone = [
  "3 updates getest en geïnstalleerd",
  "Beveiligingsscan: alles in orde",
  "Openingsuren aangepast op vraag",
  "Afbeeldingen geoptimaliseerd",
];

/** Het maandrapport als document (A4), met twee pagina's erachter. */
export function ReportDocument() {
  return (
    <div className="doc-stack">
      <span className="doc-sheet" aria-hidden="true" />
      <span className="doc-sheet" aria-hidden="true" />
      <div className="doc-paper doc-report">
        <div className="doc-head">
          <span className="doc-wordmark">KOSIFLY</span>
          <b className="doc-stamp-small">Voorbeeld</b>
        </div>
        <div className="doc-meta">
          <strong>Maandrapport</strong>
          <small>November 2026 · jouwbedrijf.be</small>
        </div>
        <dl className="doc-stats">
          {[
            ["Uptime", "99,98 %"],
            ["Laadtijd", "0,9 s"],
            ["Back-ups", "30/30"],
          ].map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <span className="doc-label">Wat we deden</span>
        <ul className="doc-done">
          {reportDone.map((item) => (
            <li key={item}>
              <Icon d={ICON.check} size={14} /> {item}
            </li>
          ))}
        </ul>
        <div className="doc-visitors">
          <span>
            <small>Bezoekers</small>
            <strong>+12 % t.o.v. oktober</strong>
          </span>
          <span className="scr-bars" aria-hidden="true">
            {[42, 55, 48, 63, 58, 72, 80].map((h, n) => (
              <i key={n} style={{ height: h + "%" }} />
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}

/** De mail waarmee het rapport elke maand binnenkomt. */
export function MailCard() {
  return (
    <div className="doc-card doc-mail">
      <i aria-hidden="true">
        <Icon d={ICON.inbox} size={20} />
      </i>
      <span>
        <small>Kosifly · nu</small>
        <strong>Je maandrapport van november</strong>
        <span className="doc-attachment">
          <Icon d={ICON.file} size={14} /> Maandrapport-november.pdf
        </span>
      </span>
    </div>
  );
}
