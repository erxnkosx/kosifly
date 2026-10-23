import { fmt, ONDERHOUD, SOFTWARE_DATA_GB, SOFTWARE_ONDERHOUD, type SeoId } from "@/lib/pricing";
import { calculatorHref } from "../wizard/calculatorHref";

/**
 * Inhoud van de maandkaarten. De onderhoudsplannen lezen hun prijs uit `lib/pricing.ts`; de SEO-bedragen hieronder
 * zijn dezelfde als die in `lib/pricing.ts` (SEO en SEO_SETUP_PRICE); pas ze op beide plaatsen aan.
 */

export type PlanTone = "light" | "featured" | "outline";

export type Plan = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  unit: string;
  note: string;
  cta: { label: string; href: string };
  features: readonly string[];
  tone: PlanTone;
  popular?: boolean;
};

type PlanDetails = Pick<Plan, "tagline" | "note" | "features" | "tone" | "popular">;

const euro = (amount: number) => `€ ${fmt(amount)}`;

const MAINTENANCE_DETAILS = {
  basis: {
    tagline: "Voor kleine sites die gewoon veilig moeten draaien.",
    note: "excl. btw",
    tone: "light",
    features: [
      "Snelle hosting met SSL",
      "Dagelijkse back-ups",
      "Maandelijkse updates",
      "Uptime-monitoring",
      "Support via e-mail",
    ],
  },
  plus: {
    tagline: "Voor KMO's die hun site zorgeloos willen laten groeien.",
    note: "excl. btw",
    tone: "featured",
    popular: true,
    features: [
      "Alles van Basis",
      "Wekelijkse updates en tests",
      "24/7 monitoring",
      "1 uur kleine aanpassingen per maand",
      "Maandrapport",
    ],
  },
  partner: {
    tagline: "Voor bedrijven waar de site elke dag moet presteren.",
    note: "excl. btw",
    tone: "light",
    features: [
      "Alles van Plus",
      "3 uur aanpassingen per maand",
      "Antwoord dezelfde werkdag",
      "Snelheidsoptimalisatie",
      "Kwartaalgesprek",
    ],
  },
} satisfies Record<string, PlanDetails>;

export const MAINTENANCE_PLANS: readonly Plan[] = ONDERHOUD.flatMap(({ id, name, price }) =>
  id === "geen"
    ? []
    : [
        {
          ...MAINTENANCE_DETAILS[id],
          id,
          name,
          price: euro(price),
          unit: "/ maand",
          cta: { label: `Kies ${name}`, href: calculatorHref({ onderhoud: id }) },
        },
      ],
);

/** Hosting & onderhoud voor software op maat (sectie Maatwerk): prijzen uit SOFTWARE_ONDERHOUD in lib/pricing.ts. */
const SOFTWARE_DETAILS = {
  basis: {
    tagline: "Voor software die gewoon veilig moet draaien.",
    note: "excl. btw · per app",
    tone: "light",
    features: [
      `Hosting in de EU, tot ${SOFTWARE_DATA_GB} GB data`,
      "Dagelijkse back-ups, extern bewaard",
      "Beveiligingsupdates en monitoring",
      "Bugfixes in je software",
      "Antwoord binnen 2 werkdagen",
    ],
  },
  plus: {
    tagline: "Voor software waar je team elke dag mee werkt.",
    note: "excl. btw · per app",
    tone: "featured",
    popular: true,
    features: [
      "Alles van Basis",
      "1 uur aanpassingen per maand",
      "Koppelingen gecontroleerd",
      "Antwoord binnen 1 werkdag",
      "Maandrapport",
    ],
  },
  partner: {
    tagline: "Voor software waar je bedrijf op draait.",
    note: "excl. btw · per app",
    tone: "light",
    features: [
      "Alles van Plus",
      "3 uur aanpassingen per maand",
      "Antwoord dezelfde werkdag",
      "Prestaties opgevolgd",
      "Kwartaalgesprek",
    ],
  },
} satisfies Record<string, PlanDetails>;

export const SOFTWARE_PLANS: readonly Plan[] = SOFTWARE_ONDERHOUD.flatMap(({ id, name, price }) =>
  id === "geen"
    ? []
    : [
        {
          ...SOFTWARE_DETAILS[id],
          id: `software-${id}`,
          name,
          price: euro(price),
          unit: "/ maand",
          cta: { label: `Kies ${name}`, href: calculatorHref({ dienst: "software", hosting: id }) },
        },
      ],
);

const seoCta = (id: Exclude<SeoId, "geen">, name: string) => ({
  label: `Kies ${name}`,
  href: calculatorHref({ seo: id }),
});

export const SEO_PLANS: readonly Plan[] = [
  {
    id: "lokaal",
    name: "Lokaal",
    tagline: "Voor één vestiging die in de eigen gemeente gevonden wil worden.",
    price: euro(145),
    unit: "/ maand",
    note: "excl. btw",
    cta: seoCta("lokaal", "Lokaal"),
    tone: "light",
    features: [
      "Tot 2 gemeenten en 3 diensten",
      "Google Bedrijfsprofiel beheerd",
      "Vaste reviewflow",
      "Maandrapport",
    ],
  },
  {
    id: "regio",
    name: "Regio",
    tagline: "Voor KMO's die in de hele regio klanten willen.",
    price: euro(290),
    unit: "/ maand",
    note: "excl. btw",
    cta: seoCta("regio", "Regio"),
    tone: "featured",
    popular: true,
    features: [
      "Tot 6 gemeenten en 6 diensten",
      "2 nieuwe lokale pagina's per maand",
      "Vermeldingen en gidsen",
      "Maandrapport en gesprek",
    ],
  },
  {
    id: "opstart",
    name: "Opstart",
    tagline: "SEO-check, Google-profiel en je eerste lokale pagina's, klaar in twee weken.",
    price: euro(250),
    unit: "eenmalig",
    note: "€ 0 als je site door Kosifly gebouwd is",
    cta: { label: "Plan je gratis SEO-check", href: "/contact" },
    tone: "outline",
    features: [
      "Gratis SEO-check vooraf",
      "Google Bedrijfsprofiel ingericht",
      "Eerste lokale pagina's",
    ],
  },
];
