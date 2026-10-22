type CalculatorPreset = { pakket?: string; onderhoud?: string; seo?: string; dienst?: "ai" };

/**
 * Link die de prijsberekenaar opent, eventueel met een voorgeselecteerd pakket, onderhouds- of SEO-plan
 * (zie `applyQuoteParams`) of meteen bij AI & automatisatie.
 */
export function calculatorHref(preset: CalculatorPreset = {}) {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(preset)) if (value) params.set(key, value);
  const query = params.toString();
  return `/prijzen${query ? `?${query}` : ""}#prijsberekenaar`;
}
