type CalculatorPreset = {
  pakket?: string;
  onderhoud?: string;
  seo?: string;
  /** Meteen bij een dienst beginnen (zie startFrom in PriceWizard.tsx). */
  dienst?: "software" | "ai";
  /** Hosting & onderhoud bij software op maat. */
  hosting?: string;
};

/**
 * Link die de prijsberekenaar opent, eventueel met een voorgeselecteerd pakket, onderhouds- of SEO-plan
 * (zie `applyQuoteParams`), of meteen bij software op maat (met een hostingpakket) of AI & automatisatie.
 */
export function calculatorHref(preset: CalculatorPreset = {}) {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(preset)) if (value) params.set(key, value);
  const query = params.toString();
  return `/prijzen${query ? `?${query}` : ""}#prijsberekenaar`;
}
