"use client";

import { useState } from "react";
import { calcQuote, type QuoteInput } from "@/lib/pricing";
import { ExtraRows } from "./ExtraRows";
import { MonthlyChoices } from "./MonthlyChoices";
import { PackageCards } from "./PackageCards";
import {
  DEFAULT_QUOTE,
  normalizeQuote,
  stepQuantity,
  toggleExtra,
  toggleService,
} from "./QuoteState";
import { QuoteSummary } from "./QuoteSummary";
import { ServiceChips } from "./ServiceChips";

export function QuoteCalculator({ preset = DEFAULT_QUOTE }: { preset?: QuoteInput }) {
  const [quote, setQuote] = useState(preset);
  const result = calcQuote(quote);

  return (
    <div className="flex w-[1556px] items-start gap-[12px] rounded-[28px] bg-white p-[12px] shadow-[0_0_80px_rgba(153,5,20,0.45),0_30px_70px_rgba(0,0,0,0.5)]">
      <div className="flex min-w-0 flex-1 flex-col gap-[34px] px-[44px] py-[40px]">
        <ServiceChips
          selected={quote.services}
          onToggle={(service) => setQuote((q) => toggleService(q, service))}
        />
        <PackageCards value={quote.pkg} onChange={(pkg) => setQuote((q) => ({ ...q, pkg }))} />
        <ExtraRows
          quote={quote}
          onToggle={(id) => setQuote((q) => toggleExtra(q, id))}
          onStep={(id, direction) => setQuote((q) => stepQuantity(q, id, direction))}
        />
        <MonthlyChoices
          values={{ onderhoud: quote.onderhoud, seo: quote.seo }}
          onChange={(field, optionId) =>
            setQuote((q) => normalizeQuote({ ...q, [field]: optionId }))
          }
        />
      </div>
      <QuoteSummary quote={quote} result={result} />
    </div>
  );
}
