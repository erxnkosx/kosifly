/** Prijzen = VOORLOPIG, te bevestigen (zie overdrachtsblad Pricing in Figma). Alle bedragen excl. btw. */
export const PACKAGES = [
  { id: "starter", name: "Starter", price: 1490, pages: 1, weeks: 3, weeksMax: 3 },
  { id: "bedrijfssite", name: "Bedrijfssite", price: 3450, pages: 6, weeks: 6, weeksMax: 6 },
  { id: "groei", name: "Groei", price: 6900, pages: 12, weeks: 8, weeksMax: 10 },
] as const;
export const ONDERHOUD = [
  { id: "geen", name: "Geen", price: 0 },
  { id: "basis", name: "Basis", price: 39 },
  { id: "plus", name: "Plus", price: 79 },
  { id: "partner", name: "Partner", price: 149 },
] as const;
export const SEO = [
  { id: "geen", name: "Geen", price: 0 },
  { id: "lokaal", name: "Lokaal", price: 290 },
  { id: "regio", name: "Regio", price: 490 },
] as const;
export const EXTRAS = [
  { id: "copywriting", name: "Copywriting", unit: 120, perPage: true },
  { id: "taal", name: "Extra taal", unit: 490, perLanguage: true },
  { id: "boeking", name: "Boekings- of offertemodule", unit: 890 },
  { id: "logo", name: "Logo & huisstijl", unit: 790 },
  { id: "chatbot", name: "AI-chatbot", unit: 990 },
  { id: "nieuwsbrief", name: "Nieuwsbriefkoppeling", unit: 290 },
] as const;
export const SERVICES = [
  "Website",
  "Webshop",
  "Lokale SEO",
  "Onderhoud & hosting",
  "Web app",
  "Automatisatie",
] as const;

const WEBSHOP_PRICE = 1900;
/** Lokale SEO-opstart; gratis als de website ook door Kosifly gebouwd wordt. */
const SEO_SETUP_PRICE = 450;
/** Vanaf-prijzen van maatwerk; een exact bedrag volgt pas na analyse. */
const MAATWERK_FROM = { "Web app": 2500, Automatisatie: 1200 } as const;
export const QUANTITY_LIMITS = { pages: 50, languages: 5 } as const;

export type Service = (typeof SERVICES)[number];
export type PackageId = (typeof PACKAGES)[number]["id"];
export type SeoId = (typeof SEO)[number]["id"];
type Extra = (typeof EXTRAS)[number];

export const findPackage = (id: string) => PACKAGES.find((p) => p.id === id) ?? PACKAGES[1];
export const fmt = (n: number) => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

export type QuoteInput = {
  services: string[];
  pkg: string;
  extras: string[];
  onderhoud: string;
  seo: string;
  /** Aantal pagina's voor copywriting; zonder waarde het aantal pagina's van het pakket. */
  pages?: number;
  /** Aantal extra talen; zonder waarde 1. */
  languages?: number;
};

export type QuoteLine = {
  kind: "pakket" | "extra" | "maatwerk" | "opstart" | "maandelijks";
  label: string;
  price: number;
  /** Prijs is € 0 omdat de website door Kosifly gebouwd wordt. */
  bundled?: boolean;
};

/** Hoeveel keer een extra verrekend wordt: aantal pagina's, aantal talen of 1. */
export function extraQuantity(extra: Extra, q: QuoteInput) {
  if ("perPage" in extra) return q.pages ?? findPackage(q.pkg).pages;
  if ("perLanguage" in extra) return q.languages ?? 1;
  return 1;
}

const countLabel = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;
const total = (lines: QuoteLine[]) => lines.reduce((sum, line) => sum + line.price, 0);

/** Enige plek met rekenlogica: eenmalig (met bandbreedte), per maand en levertijd. */
export function calcQuote(q: QuoteInput) {
  const pkg = findPackage(q.pkg);
  const has = (service: Service) => q.services.includes(service);
  const hasSite = has("Website");
  const hasMaatwerk = has("Web app") || has("Automatisatie");
  const chosen = EXTRAS.filter((e) => q.extras.includes(e.id) && extraQuantity(e, q) > 0);
  const seoPlan = has("Lokale SEO") ? SEO.find((s) => s.id === q.seo) : undefined;
  const maintenance = has("Onderhoud & hosting")
    ? ONDERHOUD.find((o) => o.id === q.onderhoud)
    : undefined;

  const lines: QuoteLine[] = [];
  if (hasSite) lines.push({ kind: "pakket", label: pkg.name, price: pkg.price });
  if (has("Webshop")) lines.push({ kind: "extra", label: "Webshop", price: WEBSHOP_PRICE });
  for (const e of chosen) {
    const count = extraQuantity(e, q);
    const label =
      "perPage" in e
        ? `${e.name} · ${countLabel(count, "pagina", "pagina's")}`
        : "perLanguage" in e
          ? `${e.name} · ${countLabel(count, "taal", "talen")}`
          : e.name;
    lines.push({ kind: "extra", label, price: e.unit * count });
  }
  for (const service of ["Web app", "Automatisatie"] as const)
    if (has(service))
      lines.push({ kind: "maatwerk", label: service, price: MAATWERK_FROM[service] });
  if (seoPlan && seoPlan.price > 0)
    lines.push({
      kind: "opstart",
      label: "Lokale SEO-opstart",
      price: hasSite ? 0 : SEO_SETUP_PRICE,
      bundled: hasSite,
    });

  const monthlyLines: QuoteLine[] = [];
  if (maintenance && maintenance.price > 0)
    monthlyLines.push({
      kind: "maandelijks",
      label: `Onderhoud ${maintenance.name}`,
      price: maintenance.price,
    });
  if (seoPlan && seoPlan.price > 0)
    monthlyLines.push({
      kind: "maandelijks",
      label: `Lokale SEO ${seoPlan.name}`,
      price: seoPlan.price,
    });

  const once = total(lines.filter((line) => line.kind !== "maatwerk"));
  const high = Math.ceil((once * 11) / 100) * 10; // bovengrens = +10%, afgerond op € 10
  const extraWeek = chosen.some((e) => e.id === "taal" || e.id === "boeking") ? 1 : 0;
  const weeks = hasSite ? pkg.weeks + extraWeek : 0;
  const weeksMax = pkg.weeksMax + extraWeek;
  const delivery = !hasSite
    ? ""
    : weeks === weeksMax
      ? `${weeks} weken`
      : `${weeks}–${weeksMax} weken`;

  return {
    once,
    high,
    from: total(lines),
    monthly: total(monthlyLines),
    weeks,
    delivery,
    lines,
    monthlyLines,
    hasSite,
    hasMaatwerk,
    pkg,
  };
}

export type Quote = ReturnType<typeof calcQuote>;

/** Keuzes als URL-parameters, bv. voor /contact?tab=offerte&pakket=groei&... */
export function quoteToSearchParams(q: QuoteInput) {
  const params = new URLSearchParams({
    diensten: q.services.join(","),
    pakket: q.pkg,
    extras: q.extras.join(","),
    onderhoud: q.onderhoud,
    seo: q.seo,
  });
  if (q.pages !== undefined) params.set("paginas", String(q.pages));
  if (q.languages !== undefined) params.set("talen", String(q.languages));
  return params;
}

/** Leest geldige keuzes uit URL-parameters over `base` heen; onbekende of ongeldige waarden worden genegeerd. */
export function applyQuoteParams(
  base: QuoteInput,
  params: { get(name: string): string | null },
): QuoteInput {
  const next: QuoteInput = { ...base };
  const list = (name: string) => params.get(name)?.split(",");
  const count = (name: string, max: number) => {
    const raw = params.get(name);
    const n = raw === null || raw.trim() === "" ? NaN : Number(raw);
    return Number.isInteger(n) && n >= 0 && n <= max ? n : undefined;
  };
  const services = list("diensten");
  if (services) next.services = SERVICES.filter((s) => services.includes(s));
  const extras = list("extras");
  if (extras) next.extras = EXTRAS.filter((e) => extras.includes(e.id)).map((e) => e.id);
  next.pkg = PACKAGES.find((p) => p.id === params.get("pakket"))?.id ?? next.pkg;
  next.onderhoud = ONDERHOUD.find((o) => o.id === params.get("onderhoud"))?.id ?? next.onderhoud;
  next.seo = SEO.find((s) => s.id === params.get("seo"))?.id ?? next.seo;
  next.pages = count("paginas", QUANTITY_LIMITS.pages) ?? next.pages;
  next.languages = count("talen", QUANTITY_LIMITS.languages) ?? next.languages;
  return next;
}
