import type { ReactNode } from "react";
import { Artwork } from "@/components/ui/Artwork";
import { BrowserWindow, MONITOR, Phone, bezelPoint, browserPoint } from "@/components/ui/Devices";
import {
  ApproveCard,
  CrewScreen,
  ExtractCard,
  GoogleDesktopScreen,
  MailCard,
  OfferteDocument,
  ReportDocument,
  RequestCard,
} from "./CaseScreens";

/**
 * Case-beelden op een canvas van 920 × 560: in de etalage op de homepage (tussen de uitlegkaders) en op de
 * dienstpagina's. Per beeld de punten (zelfde volgorde als de vier uitlegkaders) waar de lijnen op de
 * homepage naartoe wijzen; ze liggen op de rand van een toestel, kaart of document, nooit op de inhoud.
 */
export const CASE_W = 920;
export const CASE_H = 560;

type Point = [number, number];
export type CaseVisual = {
  Visual: () => ReactNode;
  points: Point[];
  /** Andere titel en tekst voor een uitlegkader (index zoals de punten), als het beeld iets anders toont. */
  calls?: Record<number, [title: string, text: string]>;
};

const SHADOW = "drop-shadow(0 30px 40px rgb(0 0 0 / 0.5))";

/** Canva-beeld zoals in de projecten (public/images/projects), met dezelfde schaduw als de toestellen. */
function Shot({
  src,
  left,
  top,
  width,
  ratio,
}: Record<"left" | "top" | "width" | "ratio", number> & { src: string }) {
  return (
    <img
      src={src}
      alt=""
      width={width}
      height={Math.round(width / ratio)}
      loading="lazy"
      decoding="async"
      className="absolute block max-w-none"
      style={{ left, top, width, height: width / ratio, filter: SHADOW }}
    />
  );
}

/** Element op een vaste plek in het canvas. */
function At({
  left,
  top,
  width,
  children,
}: {
  left: number;
  top: number;
  width: number;
  children: ReactNode;
}) {
  return (
    <div className="absolute" style={{ left, top, width }}>
      {children}
    </div>
  );
}

/** Zwevend kaartje naast een toestel (glas op de donkere achtergrond). */
function Chip({
  left,
  top,
  icon,
  title,
  text,
}: {
  left: number;
  top: number;
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="case-chip" style={{ left, top }}>
      <i aria-hidden="true">{icon}</i>
      <span>
        <strong>{title}</strong>
        <small>{text}</small>
      </span>
    </div>
  );
}

const chipIcon = (d: string) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d={d} />
  </svg>
);

/* ───────────── Website: Taxi Bornem op laptop en gsm (de Canva-beelden zelf) ───────────── */
const WEB_LAPTOP = { left: 6, top: 112, width: 650 };
const WEB_PHONE = { left: 664, top: 56, width: 222 };
export const websiteVisual: CaseVisual = {
  Visual: () => (
    <>
      <Shot src="/images/projects/taxi-desktop.webp" ratio={1030 / 636} {...WEB_LAPTOP} />
      <Shot src="/images/projects/taxi-mobiel.webp" ratio={390 / 798} {...WEB_PHONE} />
    </>
  ),
  points: [
    bezelPoint("laptop", WEB_LAPTOP, "left", 0.37), // naast de belofte in de hero
    bezelPoint("laptop", WEB_LAPTOP, "left", 0.71), // naast de knoppen "Bel" en "Boek een rit"
    bezelPoint("phone", WEB_PHONE, "right", 0.15), // gsm: "Boek uw rit"
    bezelPoint("phone", WEB_PHONE, "right", 0.9), // naast de WhatsApp-knop
  ],
};

/* ───────────── Lokale SEO: het Google-resultaat in Safari ───────────── */
const SEO_BROWSER = { left: 80, top: 14, width: 760, ratio: 1700 / 1108 };
/** Plek op het Google-resultaat in pixels van de afbeelding (1700 × 1108). */
const serp = (x: number, y: number) => browserPoint(SEO_BROWSER, x / 1700, y / 1108);
export const seoVisual: CaseVisual = {
  Visual: () => (
    <BrowserWindow url="google.com" {...SEO_BROWSER}>
      <GoogleDesktopScreen />
    </BrowserWindow>
  ),
  points: [
    serp(22, 77), // links van de zoekbalk
    serp(26, 353), // links van het eerste resultaat
    serp(1664, 390), // rechts van het bedrijfsprofiel
    serp(1664, 592), // rechts van de sterren
  ],
};

/* ───────────── Web apps (case): PSC Open Huis op de monitor ───────────── */
const PSC_MONITOR = { left: 80, top: 20, width: 760 };
export const pscVisual: CaseVisual = {
  Visual: () => (
    <Shot src="/images/projects/psc-desktop.webp" ratio={MONITOR.w / MONITOR.h} {...PSC_MONITOR} />
  ),
  points: [
    bezelPoint("monitor", PSC_MONITOR, "left", 0.2), // menu "Dashboard"
    bezelPoint("monitor", PSC_MONITOR, "left", 0.7), // rij met "Volgeboekt"
    bezelPoint("monitor", PSC_MONITOR, "right", 0.16), // knop "Inschrijfmoment starten"
    bezelPoint("monitor", PSC_MONITOR, "right", 0.82), // grafiek "Ledenevolutie"
  ],
  calls: {
    2: ["Snel inschrijven", "Een inschrijfmoment start je meteen."],
    3: ["Groei in één grafiek", "Nieuwe leden per maand."],
  },
};

/* ───────────── Web apps (voorbeeld): app voor de vakman ───────────── */
const CREW_PHONE = { left: 342, top: 22, width: 236 };
export const crewVisual: CaseVisual = {
  Visual: () => (
    <>
      <Chip
        left={70}
        top={150}
        icon={chipIcon(
          "M8 2v4M16 2v4M3 9h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
        )}
        title="Planning bijgewerkt"
        text="Klus versleept naar donderdag"
      />
      <Phone {...CREW_PHONE}>
        <CrewScreen />
      </Phone>
      <Chip
        left={620}
        top={330}
        icon={chipIcon(
          "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
        )}
        title="Foto van de werf"
        text="Gedeeld met het kantoor"
      />
    </>
  ),
  points: [
    bezelPoint("phone", CREW_PHONE, "left", 0.12),
    bezelPoint("phone", CREW_PHONE, "left", 0.32),
    bezelPoint("phone", CREW_PHONE, "right", 0.5),
    bezelPoint("phone", CREW_PHONE, "right", 0.75),
  ],
};

/* ───────────── AI & automatisatie: aanvraag, wat AI eruit haalde en de offerte als document ───────────── */
const AI = {
  request: { left: 14, top: 44, width: 350 },
  extract: { left: 44, top: 262, width: 330 },
  offerte: { left: 470, top: 26, width: 340 },
  approve: { left: 556, top: 446, width: 336 },
};
export const aiVisual: CaseVisual = {
  Visual: () => (
    <>
      <svg className="doc-flow" width="920" height="560" viewBox="0 0 920 560" aria-hidden="true">
        <path d="M364 120C420 120 420 190 466 200M374 340C420 340 430 300 466 290" />
      </svg>
      <At {...AI.request}>
        <RequestCard />
      </At>
      <At {...AI.extract}>
        <ExtractCard />
      </At>
      <At {...AI.offerte}>
        <OfferteDocument />
      </At>
      <At {...AI.approve}>
        <ApproveCard />
      </At>
    </>
  ),
  points: [
    [AI.request.left, AI.request.top + 70], // linkerrand van de aanvraag
    [AI.extract.left, AI.extract.top + 62], // linkerrand van wat AI eruit haalde
    [AI.offerte.left + AI.offerte.width, AI.offerte.top + 205], // rechterrand van de offerte, bij de regels
    [AI.approve.left + AI.approve.width, AI.approve.top + 34], // rechterrand van de knop
  ],
};

/* ───────────── Onderhoud: het maandrapport als document, met de mail ───────────── */
const REPORT = {
  doc: { left: 300, top: 20, width: 330 },
  mail: { left: 0, top: 372, width: 290 },
};
export const reportVisual: CaseVisual = {
  Visual: () => (
    <>
      <At {...REPORT.doc}>
        <ReportDocument />
      </At>
      <At {...REPORT.mail}>
        <MailCard />
      </At>
      <Chip
        left={650}
        top={462}
        icon={chipIcon("M22 12h-4l-3 9L9 3l-3 9H2")}
        title="99,98 % uptime"
        text="Laadtijd 0,9 s"
      />
    </>
  ),
  points: [
    [REPORT.doc.left, REPORT.doc.top + 166], // linkerrand van het rapport, bij uptime en laadtijd
    [REPORT.mail.left, REPORT.mail.top + 46], // linkerrand van de mail
    [REPORT.doc.left + REPORT.doc.width, REPORT.doc.top + 262], // rechterrand, bij "Wat we deden"
    [REPORT.doc.left + REPORT.doc.width, REPORT.doc.top + 392], // rechterrand, bij de grafiek
  ],
};

/** Beeld dat met zijn container meeschaalt (dienstpagina's en de mobiele etalage). */
export function CaseArtwork({ visual, label }: { visual: CaseVisual; label?: string }) {
  const { Visual } = visual;
  return (
    <Artwork width={CASE_W} height={CASE_H} label={label}>
      <div className="relative" style={{ width: CASE_W, height: CASE_H }}>
        <Visual />
      </div>
    </Artwork>
  );
}
