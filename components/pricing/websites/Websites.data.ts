import { PACKAGES, type PackageId } from "@/lib/pricing";

/**
 * Inhoud van de statische websitekaarten (ook gebruikt door de vergelijkingstabel).
 * De bedragen volgen het ontwerp (Figma) en staan los van de calculator in `lib/pricing.ts`, die met eigen
 * (voorlopige) prijzen rekent. Pas ze dus niet aan om ze gelijk te trekken: dat is een besluit van de eigenaar.
 */

type PackageContent = {
  title: string;
  /** Richtprijs in euro excl. btw, zoals getoond in het ontwerp. */
  price: number;
  description: string;
  /** Levertijd zoals getoond in het label "Levering in …". */
  delivery: string;
  /** Uitgelicht pakket: donkere kaart met het label "Meest gekozen". */
  featured?: boolean;
  features: readonly string[];
};

const CONTENT: Record<PackageId, PackageContent> = {
  starter: {
    price: 850,
    title: "Starter",
    description: "Voor starters en kleine bedrijven die professioneel zichtbaar willen zijn.",
    delivery: "3 weken",
    features: [
      "1-3 pagina’s",
      "Design op maat, mobiel eerst",
      "Professionele online aanwezigheid",
      "Contactformulier",
      "SEO-basis",
      "SSL certificaat",
      "30 dagen nazorg",
    ],
  },
  bedrijfssite: {
    price: 1250,
    title: "Professioneel",
    description: "Voor KMO's die een volwaardige site willen die aanvragen oplevert.",
    delivery: "6 weken",
    featured: true,
    features: [
      "Tot 8 pagina's",
      "Strategie, structuur en design op maat",
      "Formulieren met automatische bevestiging",
      "SEO-basis en Google Bedrijfsprofiel",
      "Analytics en 2 feedbackrondes",
      "Training en 30 dagen nazorg",
    ],
  },
  groei: {
    price: 2500,
    title: "Groei",
    description:
      "Voor bedrijven die actief groeien, meerdere diensten aanbieden of meerdere regio's bedienen.",
    delivery: "8–10 weken",
    features: [
      "Tot 20 pagina's",
      "Alles van Professioneel",
      "Meertalig (NL, FR, EN)",
      "Boekings- of offertemodule",
      "Koppeling met je CRM",
      "Lokale landingspagina's",
    ],
  },
};

/** Websitepakketten in weergavevolgorde. */
export const WEBSITE_PACKAGES = PACKAGES.map(({ id }) => ({ id, ...CONTENT[id] }));

export type WebsitePackage = (typeof WEBSITE_PACKAGES)[number];
