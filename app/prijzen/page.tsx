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
  PricingFaq,
  PricingHero,
  Websites,
} from "@/components/pricing";
import { DesignCanvas } from "@/components/ui/DesignCanvas";
import { PriceWizard } from "@/components/pricing/wizard/PriceWizard";
import { PriceWizardTeaser } from "@/components/pricing/wizard/PriceWizardTeaser";

export const metadata: Metadata = {
  title: "Prijzen | Websites, SEO, onderhoud en maatwerk | Kosifly",
  description:
    "Vaste prijzen voor websites, lokale SEO, onderhoud en maatwerk voor KMO's. Bereken in één minuut je eigen prijsindicatie.",
  alternates: { canonical: "/prijzen" },
};

export default function PricingPage() {
  return (
    <>
      <Navbar active="Pricing" />
      <main id="main-content" className="pricing-page">
        <PricingHero />
        <DesignCanvas>
          <AnchorBar />
          <Websites />
          <Comparison />
          <MonthlyPlans />
          <CustomWork />
          <Extras />
          <PriceWizardTeaser />
          <HowItWorks />
          <PricingFaq />
        </DesignCanvas>
        <PriceWizard />
      </main>
      <Footer />
    </>
  );
}
