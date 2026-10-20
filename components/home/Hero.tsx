import { Badge } from "@/components/ui/Badge";
import { CheckCircle } from "@/components/ui/icons";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { HeroBackdrop } from "@/components/ui/HeroBackdrop";
import { HeroFlow } from "./HeroFlow";
import { HeroVisual } from "./HeroVisual";
import { BtnArrow } from "@/components/ui/BtnArrow";

export function Hero() {
  return (
    <section className="service-hero home-hero">
      <HeroBackdrop />
      <div className="hero-grid">
        <RevealGroup className="hero-copy" onMount delay={0.1}>
          <RevealItem>
            <Badge section="Kosifly" page="Digitaal bureau voor KMO's" />
          </RevealItem>
          <RevealItem as="h1">
            <span className="hero-line">Websites, software</span>
            <span className="hero-line">en AI die je bedrijf</span>
            <span className="hero-line">
              <em>laten groeien</em>.
            </span>
          </RevealItem>
          <RevealItem as="p">
            Van een website die klanten oplevert tot automatisaties die je tijd besparen. Kosifly
            bouwt het, met een vaste prijs en één aanspreekpunt.
          </RevealItem>
          <RevealItem className="sbtn-row hero-actions">
            <a href="/website-audit" className="sbtn sbtn-primary sbtn-lg">
              Vraag je gratis website-audit <BtnArrow />
            </a>
            <a href="#projecten" className="sbtn sbtn-outline-dark sbtn-lg">
              Bekijk ons werk
            </a>
          </RevealItem>
          <RevealItem as="ul" className="hero-trust">
            {["Antwoord binnen 24 uur", "Vaste prijs vooraf", "Geen verplichtingen"].map((t) => (
              <li key={t}>
                <CheckCircle />
                {t}
              </li>
            ))}
          </RevealItem>
        </RevealGroup>
        <div className="hero-art">
          <HeroVisual />
        </div>
        <HeroFlow />
      </div>
    </section>
  );
}
