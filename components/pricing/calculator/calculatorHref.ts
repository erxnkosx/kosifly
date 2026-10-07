type CalculatorPreset = { pakket?: string; onderhoud?: string; seo?: string };

/** Link naar de calculator, eventueel met een voorgeselecteerd pakket, onderhouds- of SEO-plan (zie `applyQuoteParams`). */
export function calculatorHref(preset: CalculatorPreset = {}) {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(preset)) if (value) params.set(key, value);
  const query = params.toString();
  return `/prijzen${query ? `?${query}` : ""}#bereken-je-prijs`;
}
