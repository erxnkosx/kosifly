import { Suspense } from "react";
import { Accent, DarkSection, SectionHeading } from "../shared";
import { CalculatorFromUrl } from "./CalculatorFromUrl";
import { QuoteCalculator } from "./QuoteCalculator";

/** Sectie "Bereken je prijs" (1920 x min. 1410): kop en interactieve calculator. */
export function PriceCalculator() {
  return (
    <DarkSection
      id="bereken-je-prijs"
      aria-labelledby="bereken-je-prijs-titel"
      backdrop={{ src: "/figma/pricing/calculator/6c3cb.svg", width: 1920, height: 1410 }}
      className="flex min-h-[1410px] flex-col items-center overflow-clip pb-[120px]"
    >
      <SectionHeading
        tone="dark"
        eyebrow="Bereken je prijs"
        eyebrowVariant="dashesLoose"
        title={
          <>
            Stel je project <Accent>samen</Accent>.
          </>
        }
        titleId="bereken-je-prijs-titel"
        intro="Kies wat je nodig hebt en zie meteen je prijsindicatie. Je vaste prijs krijg je na een gratis gesprek."
      />
      <div data-reveal className="relative mt-[60px]">
        <Suspense fallback={<QuoteCalculator />}>
          <CalculatorFromUrl />
        </Suspense>
      </div>
    </DarkSection>
  );
}
