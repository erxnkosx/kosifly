import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import {
  AnchorBar,
  Comparison,
  CustomWork,
  Extras,
  HowItWorks,
  MonthlyPlans,
  PriceCalculator,
  PricingFaq,
  PricingHero,
  Websites,
} from "@/components/pricing";
import { DesignCanvas } from "@/components/ui/DesignCanvas";

export const metadata: Metadata = {
  title: "Prijzen | Websites, SEO, onderhoud en maatwerk | Kosifly",
  description:
    "Vaste prijzen voor websites, lokale SEO, onderhoud en maatwerk voor KMO's. Bereken in één minuut je eigen prijsindicatie.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar active="Pricing" />
      <main id="main-content">
        <PricingHero />
        <DesignCanvas>
          <AnchorBar />
          <Websites />
          <Comparison />
          <MonthlyPlans />
          <CustomWork />
          <Extras />
          <PriceCalculator />
          <HowItWorks />
          <PricingFaq />
        </DesignCanvas>
      </main>
      <Footer />
    </>
  );
}
