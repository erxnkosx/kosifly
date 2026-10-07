import Link from "next/link";
import type { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/Badge";
import { HeroBackdrop } from "@/components/ui/HeroBackdrop";

export type LegalSection = { id: string; title: string; content: ReactNode };
export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <Navbar active="" />
      <main id="main-content">
        <section className="portfolio-hero legal-hero">
          <HeroBackdrop />
          <div className="portfolio-hero-copy page-content">
            <Badge section="Kosifly" page="Juridisch" />
            <h1>{title}</h1>
            <p>{intro}</p>
          </div>
        </section>
        <section className="portfolio-light page-section legal-content">
          <aside className="legal-toc">
            <h2>Op deze pagina</h2>
            <nav aria-label={`Inhoud ${title}`}>
              {sections.map((section) => (
                <a href={`#${section.id}`} key={section.id}>
                  {section.title}
                </a>
              ))}
            </nav>
            <Link href="/contact">Neem contact op →</Link>
          </aside>
          <div className="legal-article">
            <div className="legal-draft">
              <strong>Concept — nog te bevestigen</strong>
              <p>
                De officiële bedrijfsgegevens en definitieve afspraken worden nog aangevuld. Deze
                tekst is nog niet de definitieve privacyverklaring of contracttekst.
              </p>
            </div>
            {sections.map((section) => (
              <section id={section.id} key={section.id}>
                <h2>{section.title}</h2>
                {section.content}
              </section>
            ))}
            <p className="legal-updated">Conceptversie · 5 oktober 2026</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
