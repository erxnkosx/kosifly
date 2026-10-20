import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { BtnArrow } from "@/components/ui/BtnArrow";
import { HeroBackdrop } from "@/components/ui/HeroBackdrop";

// Next.js zet zelf noindex op de 404-pagina.
export const metadata: Metadata = { title: "Pagina niet gevonden | Kosifly" };

/** 404: zelfde hero als de auditpagina, met de weg terug naar de belangrijkste pagina's. */
export default function NotFound() {
  return (
    <>
      <Navbar active="" />
      <main id="main-content" className="audit-page">
        <section className="service-hero audit-hero">
          <HeroBackdrop />
          <div className="audit-hero-grid">
            <div className="audit-hero-copy">
              <div className="service-breadcrumb">
                <span>404</span>
                <span>/</span>
                <span>Niet gevonden</span>
              </div>
              <h1>
                <span className="hero-line">Deze pagina</span>
                <span className="hero-line">
                  bestaat <em>niet</em>.
                </span>
              </h1>
              <p>
                De link is misschien verouderd of er zit een typfout in het adres. Via de knoppen
                hieronder ben je meteen terug op weg.
              </p>
              <div className="audit-hero-actions button-row">
                <Link href="/" className="audit-cta">
                  Naar de homepage <BtnArrow />
                </Link>
                <Link href="/contact" className="portfolio-text-link">
                  Contact <BtnArrow />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
