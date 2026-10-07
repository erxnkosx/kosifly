import { calculatorHref } from "../calculator/calculatorHref";
import type { Glyph } from "../shared";

export type Offer = {
  title: string;
  description: string;
  glyph: Glyph;
  priceLabel: string;
  price: string;
  priceNote: string;
  entry: { label: string; title: string; price: string; note: string };
  included: readonly string[];
  cta: { label: string; href: string };
};

const ICON_DIR = "/figma/pricing/custom";

export const OFFERS: readonly Offer[] = [
  {
    title: "Web apps & maatwerksoftware",
    description: "Klantenportalen, dashboards en boekingssystemen op maat.",
    glyph: { src: `${ICON_DIR}/fe132.svg`, width: 20, height: 20, left: 2, top: 2 },
    priceLabel: "Typisch project",
    price: "€ 2.500 – € 6.000",
    priceNote: "excl. btw · afhankelijk van wat de software moet kunnen",
    entry: {
      label: "Instappen met een vaste prijs",
      title: "Analyse & klikbaar prototype",
      price: "€ 750 – € 1.050 · 2 weken",
      note: "Wordt volledig verrekend als je verder bouwt.",
    },
    included: [
      "Functioneel plan met vaste prijs",
      "Klikbaar prototype van de belangrijkste schermen",
      "Daarna bouw in sprints van twee weken",
    ],
    cta: { label: "Start met een prototype", href: "/contact?tab=offerte" },
  },
  {
    title: "AI & automatisaties",
    description: "Leadopvolging, offertes, opvolgmails en AI-assistenten.",
    glyph: { src: `${ICON_DIR}/1fa32.svg`, width: 19, height: 18.5, left: 3, top: 2.5 },
    priceLabel: "Per automatisatie",
    price: "vanaf € 1.200",
    priceNote: "excl. btw · afhankelijk van stappen en koppelingen",
    entry: {
      label: "Instappen met een vaste prijs",
      title: "Procesanalyse",
      price: "€ 450 · 1 week",
      note: "We tonen waar de meeste winst zit en wat het je oplevert.",
    },
    included: [
      "Koppelingen met je bestaande tools",
      "Eerst parallel getest met echte data",
      "30 dagen nazorg",
    ],
    cta: { label: "Bereken wat het oplevert", href: calculatorHref() },
  },
];
