import type { Glyph } from "../shared";

export const TRUST_POINTS = [
  "Antwoord binnen 24 uur",
  "Gratis website-audit",
  "Geen verplichtingen",
] as const;

export type QuoteRowData = { label: string; price: string; tag?: string };

export const QUOTE_ONCE_ROWS: readonly QuoteRowData[] = [
  { label: "Bedrijfssite · tot 8 pagina's", price: "€ 1.250" },
  { label: "Boekings- of offertemodule", price: "€ 300" },
  { label: "Lokale SEO-opstart", price: "€ 0", tag: "bij een Kosifly-site" },
];

export const QUOTE_MONTHLY_ROWS: readonly QuoteRowData[] = [
  { label: "Onderhoud Plus", price: "€ 79 / maand" },
  { label: "Lokale SEO Lokaal", price: "€ 145 / maand" },
];

export type StatusChipData = {
  title: string;
  text: string;
  status: string;
  /** Icoon in de 24px-tegel. */
  glyph: Glyph;
  /** Plaats en breedte in de scène. */
  className: string;
};

export const STATUS_CHIPS: readonly StatusChipData[] = [
  {
    title: "Levering in 6 weken",
    text: "Planning zwart op wit, vanaf dag één",
    status: "WK 6",
    glyph: { src: "/figma/pricing/hero/1665b.svg", width: 20, height: 21, left: 2, top: 1.5 },
    className: "left-[380px] top-[548px] w-[420px]",
  },
  {
    title: "40 % bij start",
    text: "De rest pas bij de livegang",
    status: "OK",
    glyph: { src: "/figma/pricing/hero/9e120.svg", width: 17, height: 21, left: 3.5, top: 1.5 },
    className: "left-0 top-[448px] w-[380px]",
  },
];
