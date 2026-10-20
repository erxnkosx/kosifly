import type { CSSProperties, ReactNode } from "react";

/**
 * PSC Open Huis (Figma: "Ledenbeheer – Activiteitenkalender", 02 – Dashboard) in de originele huisstijl.
 * PscDashboard tekent het bureaubladscherm op ware grootte (1440 × 1063), PscMobile de gsm-versie (390 breed);
 * PscVisual schaalt ze in de etalage. Iconen en logo komen uit het Figma-bestand (public/images/psc).
 * Geen <p>, <li> of <h*>: de mobiele etalage stijlt die elementen zelf.
 */

/** Huisstijlkleuren (Figma-variabelen brand/*, bg/*, border/*, text/*, status/*). */
const THEME = {
  "--psc-navy": "#203860",
  "--psc-navy-700": "#2f5083",
  "--psc-navy-50": "#f1f4f9",
  "--psc-navy-100": "#e4e9f2",
  "--psc-red": "#d20a11",
  "--psc-red-50": "#fdecec",
  "--psc-page": "#f6f7f9",
  "--psc-border": "#e2e6ee",
  "--psc-text": "#1b2433",
  "--psc-muted": "#5b6577",
  "--psc-warning-bg": "#fef2df",
} as CSSProperties;

const icon = (name: string) => `/images/psc/${name}.svg`;

type Activity = {
  day: number;
  title: string;
  time: string;
  place: string;
  /** Bezette en beschikbare plaatsen; zonder = geen inschrijving nodig. */
  seats?: [number, number];
  status: "Vrij toegankelijk" | "Gepland" | "Volgeboekt";
};

const ACTIVITIES: Activity[] = [
  {
    day: 13,
    title: "Koffienamiddag",
    time: "14u00",
    place: "Open Huis",
    status: "Vrij toegankelijk",
  },
  {
    day: 14,
    title: "Wandeling Park Spoor Noord",
    time: "10u00",
    place: "Park Spoor Noord",
    seats: [12, 15],
    status: "Gepland",
  },
  {
    day: 15,
    title: "Bezoek aan het MAS",
    time: "13u30",
    place: "MAS, Antwerpen",
    seats: [20, 20],
    status: "Volgeboekt",
  },
  {
    day: 16,
    title: "Soepnamiddag",
    time: "12u00",
    place: "Open Huis",
    seats: [18, 24],
    status: "Gepland",
  },
  {
    day: 20,
    title: "Uitstap Brugge",
    time: "09u00",
    place: "Centraal Station",
    seats: [22, 30],
    status: "Gepland",
  },
];

const KPIS = [
  { label: "Actieve leden", value: "286", note: "+8 sinds vorige maand" },
  { label: "Nieuwe leden", value: "12", note: "in oktober" },
  { label: "Activiteiten", value: "18", note: "gepland in oktober" },
  {
    label: "Inschrijving open",
    value: "3",
    note: "activiteiten met vrije plaatsen",
    short: "met vrije plaatsen",
  },
];

const NAV = [
  { label: "Dashboard", icon: "nav-dashboard", active: true },
  { label: "Leden", icon: "nav-leden" },
  { label: "Activiteiten", icon: "nav-activiteiten" },
  { label: "Inschrijvingen", icon: "nav-inschrijvingen", badge: "3" },
  { label: "Lijsten & rapporten", icon: "nav-lijsten" },
  { label: "Instellingen", icon: "nav-instellingen" },
];

const ATTENTION = [
  {
    icon: "aandacht-alert",
    bg: "var(--psc-warning-bg)",
    text: "4 leden zonder getekende privacytoestemming",
    link: "Bekijk leden →",
  },
  {
    icon: "aandacht-kalender",
    bg: "var(--psc-navy-50)",
    text: "Kalender november is nog niet opgemaakt",
    link: "Start opmaak →",
  },
  {
    icon: "aandacht-leden",
    bg: "var(--psc-red-50)",
    text: "2 lidmaatschappen lopen af deze maand",
    link: "Bekijk →",
  },
];

/** Instroom per maand (Figma: Grafiek), hoogte van elke staaf in px; oktober in het rood. */
const GROWTH = [48, 72, 32, 56, 40, 24, 16, 32, 64, 96];
const MONTHS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O"];

/* ───────────── Gedeelde onderdelen ───────────── */

/** Logo (Figma: Logo, Achtergrond=Donker 150 × 97 / Licht 300 × 194). */
function Logo({ tone }: { tone: "dark" | "light" }) {
  return tone === "dark" ? (
    <span className="relative block h-[97px] w-[150px] shrink-0">
      <img
        src={icon("logo-dak-donker")}
        width={150}
        height={97}
        alt=""
        className="absolute inset-0"
      />
      <span className="absolute left-[82px] top-[29px] text-[32px] font-semibold text-white">
        PSC
      </span>
      <span className="absolute left-[48px] top-[66px] text-[16.5px] font-medium text-white">
        OPEN HUIS
      </span>
    </span>
  ) : (
    <span className="relative block h-[194px] w-[300px] shrink-0">
      <img
        src={icon("logo-dak-licht")}
        width={300}
        height={194}
        alt=""
        className="absolute inset-0"
      />
      <span className="absolute left-[164px] top-[58px] text-[64px] font-semibold text-(--psc-navy-700)">
        PSC
      </span>
      <span className="absolute left-[96px] top-[132px] text-[33px] font-medium text-(--psc-red)">
        OPEN HUIS
      </span>
    </span>
  );
}

/** Statuslabel (Figma: Badge, Toon=Neutraal / Info / Gevaar). */
function Badge({ status, size }: { status: Activity["status"]; size: number }) {
  const tone =
    status === "Volgeboekt"
      ? "bg-(--psc-red-50) text-(--psc-red)"
      : status === "Gepland"
        ? "bg-(--psc-navy-50) text-(--psc-navy)"
        : "bg-(--psc-page) text-(--psc-muted)";
  return (
    <span
      className={`whitespace-nowrap rounded-full px-[10px] py-[4px] font-semibold ${tone}`}
      style={{ fontSize: size }}
    >
      {status}
    </span>
  );
}

/** Bezettingsbalk (Figma: Capaciteit): navy, rood wanneer volgeboekt. */
function Capacity({
  seats,
  width,
  height,
}: {
  seats: [number, number];
  width: number;
  height: number;
}) {
  const [taken, total] = seats;
  return (
    <span
      className="relative block overflow-hidden rounded-full bg-(--psc-navy-100)"
      style={{ width, height }}
    >
      <span
        className={`absolute inset-y-0 left-0 rounded-full ${taken === total ? "bg-(--psc-red)" : "bg-(--psc-navy)"}`}
        style={{ width: (width * taken) / total }}
      />
    </span>
  );
}

/** Uur · plaats met de iconen icon/clock en icon/pin. */
function Meta({ a, size, iconSize }: { a: Activity; size: number; iconSize: number }) {
  return (
    <span
      className="flex items-center gap-[6px] whitespace-nowrap text-(--psc-muted)"
      style={{ fontSize: size }}
    >
      <img
        src={icon("klok")}
        width={14}
        height={14}
        alt=""
        style={{ width: iconSize, height: iconSize }}
      />
      {a.time}
      <span className="whitespace-pre">{"  ·  "}</span>
      <img
        src={icon("locatie")}
        width={14}
        height={14}
        alt=""
        style={{ width: iconSize, height: iconSize }}
      />
      {a.place}
    </span>
  );
}

function DateBadge({ day, w, h, size }: { day: number; w: number; h: number; size: number }) {
  return (
    <span
      className="flex shrink-0 flex-col items-center justify-center rounded-[10px] bg-(--psc-navy-50)"
      style={{ width: w, height: h }}
    >
      <span className="font-bold text-(--psc-navy)" style={{ fontSize: size }}>
        {day}
      </span>
      <span className="font-semibold text-(--psc-red)" style={{ fontSize: size / 2 }}>
        OKT
      </span>
    </span>
  );
}

function Button({
  variant,
  children,
}: {
  variant: "secundair" | "primair" | "accent";
  children: ReactNode;
}) {
  const tone =
    variant === "secundair"
      ? "border border-(--psc-border) bg-white text-(--psc-navy)"
      : variant === "primair"
        ? "bg-(--psc-navy) text-white"
        : "bg-(--psc-red) text-white";
  return (
    <span
      className={`whitespace-nowrap rounded-[8px] px-[20px] py-[12px] text-[15px] font-semibold ${tone}`}
    >
      {children}
    </span>
  );
}

/* ───────────── Bureaublad: 02 – Dashboard (1440 × 1063) ───────────── */

export const DASHBOARD = {
  w: 1440,
  h: 1063,
  /** Plekken waar de uitlegkaders naar wijzen: het actieve menu-item en de derde activiteit (volgeboekt). */
  navDashboard: [186, 203],
  fullActivity: [316, 732],
};

function Sidebar() {
  return (
    <div className="flex w-[264px] shrink-0 flex-col gap-[6px] bg-(--psc-navy) px-[20px] pt-[28px] pb-[24px] text-white">
      <div className="flex flex-col gap-[6px] pb-[28px] pl-[4px]">
        <Logo tone="dark" />
        <span className="text-[13px] font-medium opacity-70">Ledenbeheer &amp; activiteiten</span>
      </div>
      {NAV.map((item) => (
        <div
          key={item.label}
          className={`flex items-center gap-[12px] rounded-[8px] px-[14px] py-[12px] ${item.active ? "bg-white" : ""}`}
        >
          <img src={icon(item.icon)} width={20} height={20} alt="" className="shrink-0" />
          <span
            className={`min-w-0 flex-1 text-[15px] ${item.active ? "font-semibold text-(--psc-navy)" : "font-medium opacity-88"}`}
          >
            {item.label}
          </span>
          {item.active && <img src={icon("nav-actief")} width={8} height={8} alt="" />}
          {item.badge && (
            <span className="rounded-full bg-(--psc-red) px-[8px] py-[2px] text-[12px] font-semibold">
              {item.badge}
            </span>
          )}
        </div>
      ))}
      <div className="flex-1" />
      <div className="flex flex-col gap-[6px] rounded-[10px] bg-white/8 p-[16px]">
        <span className="flex items-center gap-[8px] text-[15px] font-semibold">
          <img src={icon("hulp")} width={18} height={18} alt="" />
          Hulp nodig?
        </span>
        <span className="text-[13px] opacity-75">
          Bekijk de handleiding of contacteer de coördinator.
        </span>
        <span className="text-[13px] font-semibold text-[#ff9ea2]">Open handleiding →</span>
      </div>
      <span className="text-[11px] opacity-50">PSC Open Huis vzw</span>
    </div>
  );
}

function Topbar() {
  return (
    <div className="flex h-[72px] shrink-0 items-center gap-[20px] border-b border-(--psc-border) bg-white px-[40px]">
      <span className="flex items-center gap-[8px] text-[14px]">
        <span className="font-medium text-(--psc-muted)">PSC Open Huis</span>
        <img src={icon("kruimel-chevron")} width={16} height={16} alt="" />
        <span className="font-semibold">Dashboard</span>
      </span>
      <span className="flex-1" />
      <span className="flex w-[300px] items-center gap-[8px] rounded-[8px] border border-(--psc-border) bg-(--psc-page) px-[14px] py-[10px] text-[14px] text-(--psc-muted)">
        <img src={icon("zoeken")} width={18} height={18} alt="" />
        Zoek een lid of activiteit…
      </span>
      <span className="flex items-center gap-[12px]">
        <span className="flex flex-col items-end gap-[2px]">
          <span className="flex items-center gap-[6px] text-[14px] font-semibold">
            <img src={icon("status-online")} width={8} height={8} alt="" />
            Annelies Vermeulen
          </span>
          <span className="text-[12px] text-(--psc-muted)">Aangemeld via Microsoft 365</span>
        </span>
        <span className="grid size-[40px] place-items-center rounded-[20px] bg-(--psc-navy-100) text-[14px] font-semibold text-(--psc-navy)">
          AV
        </span>
        <img src={icon("afmelden")} width={20} height={20} alt="" />
      </span>
    </div>
  );
}

function ActivitiesCard() {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-[18px] rounded-[12px] border border-(--psc-border) bg-white p-[24px]">
      <div className="flex items-center font-semibold">
        <span className="flex flex-1 flex-col gap-[4px]">
          <span className="text-[12px] tracking-[0.96px] text-(--psc-red)">OKTOBER 2026</span>
          <span className="text-[20px] text-(--psc-navy)">Komende activiteiten</span>
        </span>
        <span className="text-[14px] text-(--psc-navy)">Bekijk kalender →</span>
      </div>
      {ACTIVITIES.map((a, i) => (
        <div
          key={a.title}
          className={`flex items-center gap-[18px] py-[14px] ${i < ACTIVITIES.length - 1 ? "border-b border-(--psc-border)" : ""}`}
        >
          <DateBadge day={a.day} w={58} h={60} size={22} />
          <span className="flex min-w-0 flex-1 flex-col gap-[6px]">
            <span className="text-[16px] font-semibold">{a.title}</span>
            <Meta a={a} size={13} iconSize={14} />
          </span>
          <span className="flex w-[170px] shrink-0 flex-col gap-[8px] text-[13px]">
            {a.seats ? (
              <>
                <span className="flex gap-[4px] whitespace-nowrap">
                  <span className="font-semibold">
                    {a.seats[0]} / {a.seats[1]}
                  </span>
                  <span className="text-(--psc-muted)">plaatsen bezet</span>
                </span>
                <Capacity seats={a.seats} width={170} height={8} />
              </>
            ) : (
              <span className="text-(--psc-muted)">Geen inschrijving nodig</span>
            )}
          </span>
          <span className="flex w-[130px] shrink-0 justify-end">
            <Badge status={a.status} size={13} />
          </span>
          <img src={icon("rij-chevron")} width={18} height={18} alt="" className="shrink-0" />
        </div>
      ))}
    </div>
  );
}

function AttentionCard() {
  return (
    <div className="flex flex-col gap-[18px] rounded-[12px] border border-(--psc-border) bg-white p-[24px]">
      <span className="flex flex-col gap-[4px]">
        <span className="text-[18px] font-semibold text-(--psc-navy)">Aandachtspunten</span>
        <span className="text-[14px] text-(--psc-muted)">Wat vraagt deze week actie?</span>
      </span>
      {ATTENTION.map((item) => (
        <div key={item.text} className="flex items-start gap-[14px]">
          <span
            className="grid size-[36px] shrink-0 place-items-center rounded-[18px]"
            style={{ background: item.bg }}
          >
            <img src={icon(item.icon)} width={18} height={18} alt="" />
          </span>
          <span className="flex min-w-0 flex-1 flex-col gap-[4px]">
            <span className="text-[14px] font-medium">{item.text}</span>
            <span className="text-[13px] font-semibold text-(--psc-navy)">{item.link}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

function GrowthCard() {
  return (
    <div className="flex flex-col gap-[18px] rounded-[12px] border border-(--psc-border) bg-white p-[24px]">
      <span className="flex flex-col gap-[4px]">
        <span className="text-[18px] font-semibold text-(--psc-navy)">Ledenevolutie 2026</span>
        <span className="text-[14px] text-(--psc-muted)">Instroom per maand</span>
      </span>
      <div className="flex items-end gap-[10px]">
        {GROWTH.map((height, i) => (
          <span key={i} className="flex min-w-0 flex-1 flex-col items-center gap-[6px]">
            <span
              className={`w-[18px] rounded-t-[4px] ${i === GROWTH.length - 1 ? "bg-(--psc-red)" : "bg-(--psc-navy)"}`}
              style={{ height }}
            />
            <span className="text-[11px] font-medium text-(--psc-muted)">{MONTHS[i]}</span>
          </span>
        ))}
      </div>
      <span className="text-[13px] text-(--psc-muted)">
        +60 nieuwe leden · −14 uitgeschreven sinds januari
      </span>
    </div>
  );
}

/** height: zichtbare hoogte (venster); de zijbalk vult die, de inhoud ernaast loopt door en valt weg. */
export function PscDashboard({ height = DASHBOARD.h }: { height?: number }) {
  return (
    <div
      className="flex bg-(--psc-page) font-inter leading-[normal] text-(--psc-text)"
      style={{ ...THEME, width: DASHBOARD.w, height }}
    >
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <Topbar />
        <div className="flex flex-col gap-[28px] px-[40px] pt-[36px] pb-[48px]">
          <div className="flex items-end gap-[24px]">
            <span className="flex min-w-0 flex-1 flex-col gap-[6px]">
              <span className="text-[13px] font-semibold tracking-[1.04px] text-(--psc-red)">
                MAANDAG 12 OKTOBER 2026
              </span>
              <span className="text-[32px] font-semibold text-(--psc-navy)">
                Goeiemorgen, Annelies
              </span>
              <span className="text-[16px] text-(--psc-muted)">
                Dit staat er deze week op de planning bij de seniorenwerking.
              </span>
            </span>
            <span className="flex items-start gap-[12px]">
              <Button variant="secundair">Nieuw lid</Button>
              <Button variant="primair">Nieuwe activiteit</Button>
              <Button variant="accent">Inschrijfmoment starten</Button>
            </span>
          </div>
          <div className="flex gap-[20px]">
            {KPIS.map((k) => (
              <div
                key={k.label}
                className="flex min-w-0 flex-1 flex-col items-start gap-[6px] rounded-[12px] border border-(--psc-border) bg-white p-[20px]"
              >
                <span className="h-[4px] w-[28px] rounded-[2px] bg-(--psc-red)" />
                <span className="text-[14px] font-medium text-(--psc-muted)">{k.label}</span>
                <span className="text-[34px] font-bold text-(--psc-navy)">{k.value}</span>
                <span className="whitespace-nowrap text-[13px] text-(--psc-muted)">{k.note}</span>
              </div>
            ))}
          </div>
          <div className="flex items-start gap-[20px]">
            <ActivitiesCard />
            <div className="flex w-[360px] shrink-0 flex-col gap-[20px]">
              <AttentionCard />
              <GrowthCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────── Gsm-versie (390 breed), uit dezelfde componenten ───────────── */

export const MOBILE = {
  w: 390,
  kpiTop: 255,
  kpi: { w: 169, h: 95, gap: 12 },
  tabTop: 753,
};

/** Lijniconen in de stijl van de Figma-iconen, voor wat het bureaubladscherm niet heeft (menu, bel, meer). */
function LineIcon({ d, size }: { d: string; size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

/** Figma-icoon in een andere kleur (CSS-masker), voor de tabbalk op een witte achtergrond. */
function MaskIcon({ name, size, color }: { name: string; size: number; color: string }) {
  const mask = `url(${icon(name)}) center / contain no-repeat`;
  return (
    <span
      className="block shrink-0"
      style={{ width: size, height: size, background: color, WebkitMask: mask, mask }}
    />
  );
}

const TABS = [
  { label: "Dashboard", icon: "nav-dashboard" },
  { label: "Activiteiten", icon: "nav-activiteiten" },
  { label: "Inschrijvingen", icon: "nav-inschrijvingen", badge: "3" },
  { label: "Meer" },
];

export function PscMobile({ height }: { height: number }) {
  const { kpi } = MOBILE;
  return (
    <div
      className="relative overflow-hidden bg-(--psc-page) font-inter leading-[normal] text-(--psc-text)"
      style={{ ...THEME, width: MOBILE.w, height }}
    >
      {/* Statusbalk en app-balk */}
      <div className="absolute inset-x-0 top-0 h-[118px] border-b border-(--psc-border) bg-white">
        <span className="absolute left-[34px] top-[17px] text-[16px] font-semibold">9:41</span>
        <span className="absolute left-[131px] top-[14px] h-[36px] w-[128px] rounded-[18px] bg-[#111]" />
        <span className="absolute left-[20px] top-[74px] text-(--psc-text)">
          <LineIcon d="M4 6h16M4 12h16M4 18h16" size={24} />
        </span>
        <span className="absolute left-[153px] top-[60px] block h-[54px] w-[84px] overflow-hidden">
          <span className="block origin-top-left scale-[0.28]">
            <Logo tone="light" />
          </span>
        </span>
        <span className="absolute right-[20px] top-[74px] text-(--psc-text)">
          <LineIcon
            d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"
            size={24}
          />
        </span>
      </div>

      {/* Paginakop */}
      <span className="absolute left-[20px] top-[140px] text-[12px] font-semibold tracking-[0.96px] text-(--psc-red)">
        MAANDAG 12 OKTOBER 2026
      </span>
      <span className="absolute left-[20px] top-[160px] text-[26px] font-semibold text-(--psc-navy)">
        Goeiemorgen, Annelies
      </span>
      <span className="absolute left-[20px] right-[20px] top-[198px] text-[14px] leading-[20px] text-(--psc-muted)">
        Dit staat er deze week op de planning bij de seniorenwerking.
      </span>

      {/* Kerncijfers 2 × 2 */}
      <div
        className="absolute left-[20px] grid"
        style={{
          top: MOBILE.kpiTop,
          gap: kpi.gap,
          gridTemplateColumns: `${kpi.w}px ${kpi.w}px`,
          gridAutoRows: kpi.h,
        }}
      >
        {KPIS.map((k) => (
          <div
            key={k.label}
            className="flex flex-col items-start gap-[3px] rounded-[12px] border border-(--psc-border) bg-white px-[14px] pt-[13px]"
          >
            <span className="mb-[2px] h-[4px] w-[24px] rounded-[2px] bg-(--psc-red)" />
            <span className="text-[12.5px] font-medium text-(--psc-muted)">{k.label}</span>
            <span className="text-[26px] font-bold text-(--psc-navy)">{k.value}</span>
            <span className="whitespace-nowrap text-[11.5px] text-(--psc-muted)">
              {k.short ?? k.note}
            </span>
          </div>
        ))}
      </div>

      {/* Komende activiteiten */}
      <div className="absolute inset-x-[20px] top-[475px] flex items-center justify-between font-semibold">
        <span className="text-[17px] text-(--psc-navy)">Komende activiteiten</span>
        <span className="text-[12.5px] text-(--psc-navy)">Bekijk kalender →</span>
      </div>
      <div className="absolute inset-x-[20px] top-[509px] rounded-[12px] border border-(--psc-border) bg-white px-[14px]">
        {ACTIVITIES.slice(0, 3).map((a) => (
          <div
            key={a.title}
            className="flex items-center gap-[12px] border-b border-(--psc-border) py-[12px] last:border-b-0"
          >
            <DateBadge day={a.day} w={46} h={50} size={19} />
            <span className="flex min-w-0 flex-1 flex-col gap-[3px]">
              <span className="truncate text-[14.5px] font-semibold">{a.title}</span>
              <Meta a={a} size={12} iconSize={12} />
              <span className="mt-[5px] flex items-center gap-[8px]">
                {a.seats ? (
                  <>
                    <span className="flex flex-1 flex-col gap-[4px]">
                      <span className="whitespace-nowrap text-[11px]">
                        <span className="font-semibold">
                          {a.seats[0]} / {a.seats[1]}
                        </span>{" "}
                        <span className="text-(--psc-muted)">plaatsen bezet</span>
                      </span>
                      <Capacity seats={a.seats} width={130} height={6} />
                    </span>
                    <Badge status={a.status} size={11} />
                  </>
                ) : (
                  <Badge status={a.status} size={11} />
                )}
              </span>
            </span>
            <img src={icon("rij-chevron")} width={18} height={18} alt="" className="shrink-0" />
          </div>
        ))}
      </div>

      {/* Tabbalk */}
      <div
        className="absolute inset-x-0 bottom-0 flex border-t border-(--psc-border) bg-white pt-[10px]"
        style={{ top: MOBILE.tabTop }}
      >
        {TABS.map((tab, i) => {
          const color = i === 0 ? "var(--psc-red)" : "var(--psc-muted)";
          return (
            <span
              key={tab.label}
              className="flex flex-1 flex-col items-center gap-[4px] text-[11px] font-semibold"
              style={{ color }}
            >
              <span className="relative">
                {tab.icon ? (
                  <MaskIcon name={tab.icon} size={24} color={color} />
                ) : (
                  <LineIcon d="M5 12h.01M12 12h.01M19 12h.01" size={24} />
                )}
                {tab.badge && (
                  <span className="absolute -right-[8px] -top-[5px] grid size-[17px] place-items-center rounded-full bg-(--psc-red) text-[10px] font-bold text-white">
                    {tab.badge}
                  </span>
                )}
              </span>
              {tab.label}
            </span>
          );
        })}
      </div>
    </div>
  );
}
