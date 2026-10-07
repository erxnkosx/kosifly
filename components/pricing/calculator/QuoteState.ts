import { QUANTITY_LIMITS, applyQuoteParams, findPackage, type QuoteInput } from "@/lib/pricing";

const DEFAULT_ONDERHOUD = "plus";
const DEFAULT_SEO = "lokaal";

/** Standaardstaat uit het Figma-ontwerp. */
export const DEFAULT_QUOTE: QuoteInput = {
  services: ["Website", "Lokale SEO", "Onderhoud & hosting"],
  pkg: "bedrijfssite",
  extras: ["boeking"],
  onderhoud: DEFAULT_ONDERHOUD,
  seo: DEFAULT_SEO,
  pages: 0,
  languages: 0,
};

const clamp = (n: number, max: number) => Math.min(Math.max(n, 0), max);
const withItem = (items: string[], item: string, on: boolean) =>
  on ? (items.includes(item) ? items : [...items, item]) : items.filter((i) => i !== item);

/** Houdt afgeleide keuzes gelijk: een maandpakket betekent dienst aan, een aantal boven 0 betekent extra aan. */
export function normalizeQuote(q: QuoteInput): QuoteInput {
  const pages = clamp(q.pages ?? 0, QUANTITY_LIMITS.pages);
  const languages = clamp(q.languages ?? 0, QUANTITY_LIMITS.languages);
  const services = withItem(
    withItem(q.services, "Lokale SEO", q.seo !== "geen"),
    "Onderhoud & hosting",
    q.onderhoud !== "geen",
  );
  const extras = withItem(withItem(q.extras, "copywriting", pages > 0), "taal", languages > 0);
  return { ...q, services, extras, pages, languages };
}

export const presetFromParams = (params: { get(name: string): string | null }) =>
  normalizeQuote(applyQuoteParams(DEFAULT_QUOTE, params));

export function toggleService(q: QuoteInput, service: string): QuoteInput {
  if (service === "Lokale SEO")
    return normalizeQuote({ ...q, seo: q.seo === "geen" ? DEFAULT_SEO : "geen" });
  if (service === "Onderhoud & hosting")
    return normalizeQuote({ ...q, onderhoud: q.onderhoud === "geen" ? DEFAULT_ONDERHOUD : "geen" });
  return { ...q, services: withItem(q.services, service, !q.services.includes(service)) };
}

export function toggleExtra(q: QuoteInput, id: string): QuoteInput {
  const on = q.extras.includes(id);
  if (id === "copywriting")
    return normalizeQuote({ ...q, pages: on ? 0 : findPackage(q.pkg).pages });
  if (id === "taal") return normalizeQuote({ ...q, languages: on ? 0 : 1 });
  return { ...q, extras: withItem(q.extras, id, !on) };
}

export function stepQuantity(q: QuoteInput, id: "copywriting" | "taal", delta: 1 | -1): QuoteInput {
  return normalizeQuote(
    id === "copywriting"
      ? { ...q, pages: (q.pages ?? 0) + delta }
      : { ...q, languages: (q.languages ?? 0) + delta },
  );
}
