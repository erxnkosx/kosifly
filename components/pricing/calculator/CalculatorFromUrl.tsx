"use client";

import { useSearchParams } from "next/navigation";
import { QuoteCalculator } from "./QuoteCalculator";
import { presetFromParams } from "./QuoteState";

/** Start de calculator met de keuzes uit ?pakket=, ?onderhoud= en ?seo=. */
export function CalculatorFromUrl() {
  const preset = presetFromParams(useSearchParams());
  return <QuoteCalculator key={JSON.stringify(preset)} preset={preset} />;
}
