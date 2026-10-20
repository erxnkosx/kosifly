import { deliveryLabel, PACKAGES, type PackageId } from "@/lib/pricing";

/**
 * Inhoud van de statische websitekaarten (ook gebruikt door de vergelijkingstabel).
 * De calculator in `lib/pricing.ts` rekent met dezelfde bedragen; pas ze dus op beide plaatsen aan.
 */

type PackageContent = {
  title: string;
  /** Richtprijs in euro excl. btw, zoals getoond in het ontwerp. */
  price: number;
  description: string;
  /** Uitgelicht pakket: donkere kaart met het label "Meest gekozen". */
  featured?: boolean;
  features: readonly string[];
};

const CONTENT: Record<PackageId, PackageContent> = {
  starter: {
    price: 850,
    title: "Starter",
    description: "Voor starters en kleine bedrijven die professioneel zichtbaar willen zijn.",
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
/** Levertijd ("Levering in …") komt uit lib/pricing.ts, net als in de vergelijking en de calculator. */
export const WEBSITE_PACKAGES = PACKAGES.map((pkg) => ({
  id: pkg.id,
  ...CONTENT[pkg.id],
  delivery: deliveryLabel(pkg),
}));

export type WebsitePackage = (typeof WEBSITE_PACKAGES)[number];
