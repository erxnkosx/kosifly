import type { Glyph } from "../shared";

export type Extra = {
  title: string;
  price: string;
  unit: string;
  glyph: Glyph;
};

const ICON_DIR = "/figma/pricing/extras";
const CALENDAR_ICON = "/figma/pricing/shared/calendar.svg";

export const EXTRAS: readonly Extra[] = [
  {
    title: "Copywriting",
    price: "€ 60",
    unit: "per pagina",
    glyph: { src: `${ICON_DIR}/25ccc.svg`, width: 16, height: 15.2971, left: 1.6, top: 1.5021 },
  },
  {
    title: "Extra pagina",
    price: "€ 120",
    unit: "per pagina",
    glyph: { src: `${ICON_DIR}/a1d79.svg`, width: 16.8003, height: 16.8, left: 1.2, top: 1.2 },
  },
  {
    title: "Logo & huisstijl",
    price: "vanaf € 350",
    unit: "eenmalig",
    glyph: { src: `${ICON_DIR}/db9ec.svg`, width: 16.8, height: 16, left: 1.2, top: 1.2 },
  },
  {
    title: "Extra taal",
    price: "€ 175",
    unit: "per taal",
    glyph: { src: `${ICON_DIR}/3ee9e.svg`, width: 15.04, height: 11.68, left: 2.56, top: 3.76 },
  },
  {
    title: "Boekings- of offertemodule",
    price: "vanaf € 300",
    unit: "eenmalig",
    glyph: { src: CALENDAR_ICON, width: 16, height: 16.8, left: 1.6, top: 1.2 },
  },
  {
    title: "API / CRM-koppeling",
    price: "vanaf € 1.450",
    unit: "eenmalig",
    glyph: { src: `${ICON_DIR}/c39f1.svg`, width: 16, height: 16, left: 1.6, top: 1.6 },
  },
  {
    title: "AI-chatbot op je site",
    price: "vanaf € 400",
    unit: "eenmalig",
    glyph: { src: `${ICON_DIR}/52e3f.svg`, width: 15.2, height: 14.8, left: 2.4, top: 2 },
  },
  {
    title: "Nieuwsbriefkoppeling",
    price: "€ 90",
    unit: "eenmalig",
    glyph: { src: `${ICON_DIR}/7f403.svg`, width: 16.8, height: 13.6, left: 1.2, top: 2.8 },
  },
];

export const INCLUDED: readonly string[] = [
  "SEO-basis",
  "Mobiel eerst",
  "SSL-certificaat",
  "30 dagen nazorg",
  "Site en domein van jou",
  "Vaste prijs vooraf",
];
