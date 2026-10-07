import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { scaleIn } from "@/components/motion/presets";
import { Artwork } from "@/components/ui/Artwork";
import { HeroBackdrop } from "@/components/ui/HeroBackdrop";
import { HeroQuoteScene } from "./HeroQuoteScene";
import { TRUST_POINTS } from "./PricingHero.data";

/** Hero van de prijzenpagina: dezelfde opbouw en uitlijning als de hero's van home en diensten. */
export function PricingHero() {
  return (
    <section id="hero" aria-labelledby="hero-title" className="service-hero">
      <HeroBackdrop />
      <div className="hero-grid">
        <RevealGroup className="hero-copy" onMount delay={0.1}>
          <RevealItem className="service-breadcrumb">
            <img src="/figma/ce9df.svg" width="24" height="24" alt="" />
            <span>Prijzen</span>
            <span>/</span>
            <span>Alle diensten</span>
          </RevealItem>
          <RevealItem as="h1" id="hero-title">
            <span className="hero-line">Een vaste prijs,</span>
            <span className="hero-line">vooraf en zonder</span>
            <span className="hero-line">
              <em>verrassingen</em>.
            </span>
          </RevealItem>
          <RevealItem as="p">
            Bekijk wat een website, SEO, onderhoud of maatwerk kost, of bereken in één minuut je
            eigen prijsindicatie.
          </RevealItem>
          <RevealItem className="button-row">
            <a href="#bereken-je-prijs" className="button primary">
              Bereken je prijs →
            </a>
            <Link href="/contact" className="projects-link">
              <span className="projects-link-label">Plan een gesprek</span>
              <span className="projects-link-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </RevealItem>
          <RevealItem as="ul" className="hero-trust">
            {TRUST_POINTS.map((point) => (
              <li key={point}>
                <img src="/figma/ffd4b.svg" width="18" height="18" alt="" />
                {point}
              </li>
            ))}
          </RevealItem>
        </RevealGroup>
        <Reveal className="hero-art" variants={scaleIn} onMount delay={0.25}>
          <Artwork
            width={820}
            height={760}
            outsets={{ top: 60, right: 60, bottom: 60, left: 60 }}
            label="Voorbeeld van een vast prijsvoorstel"
          >
            <HeroQuoteScene />
          </Artwork>
        </Reveal>
      </div>
    </section>
  );
}
