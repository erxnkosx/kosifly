import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { HeroBackdrop } from "@/components/ui/HeroBackdrop";
import { PriceWizardLink } from "../wizard/PriceWizard";

/** Hero van de prijzenpagina: zelfde opbouw en stijl als de hero van /projecten (overview-hero). */
export function PricingHero() {
  return (
    <section id="hero" aria-labelledby="hero-title" className="portfolio-hero overview-hero">
      <HeroBackdrop />
      <div className="portfolio-hero-copy page-content">
        <Badge section="Prijzen" page="Alle diensten" />
        {/* Geen vaste <br>: text-wrap: balance verdeelt de kop gelijk over 2 (desktop) of 3 regels (mobiel). */}
        <h1 id="hero-title" style={{ textWrap: "balance" }}>
          Een vaste prijs, vooraf en zonder <span>verrassingen</span>.
        </h1>
        <p>
          Bekijk wat een website, SEO, onderhoud of maatwerk kost,
          <br className="desktop-break" /> of bereken in één minuut je eigen prijsindicatie.
        </p>
        <nav className="project-filters" aria-label="Prijs berekenen of een gesprek plannen">
          <PriceWizardLink className="is-primary">Bereken je prijs</PriceWizardLink>
          <Link href="/contact">Plan een gesprek</Link>
        </nav>
      </div>
    </section>
  );
}
