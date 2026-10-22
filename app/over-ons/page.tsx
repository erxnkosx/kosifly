import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/Badge";
import { HeroBackdrop } from "@/components/ui/HeroBackdrop";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SwipeRow } from "@/components/about/SwipeRow";
import {
  IconLayout,
  IconMapPin,
  IconDashboard,
  IconSparkles,
  IconServer,
  IconSitemap,
  IconShieldCheck,
  IconZap,
  IconRefresh,
} from "@/components/about/Icons";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { BtnArrow } from "@/components/ui/BtnArrow";

export const metadata: Metadata = {
  title: "Over ons | Kosifly",
  description:
    "Een digitaal bureau voor KMO's in Puurs-Sint-Amands. Websites, lokale SEO, maatwerksoftware en automatisaties met een vaste prijs en één aanspreekpunt.",
  alternates: { canonical: "/over-ons" },
};
const expertiseIcons = [IconLayout, IconMapPin, IconDashboard, IconSparkles, IconServer];
const expertiseCopy = [
  "Websites op maat die bezoekers omzetten in klanten.",
  "Gevonden worden door klanten in je eigen regio.",
  "Software die past bij hoe je bedrijf werkt.",
  "Repetitief werk dat zichzelf afhandelt.",
  "Snel, veilig en altijd up-to-date.",
];
const principles = [
  {
    title: "Strategie eerst",
    body: "Elk project start bij je doelen, je klanten en je markt.",
    Icon: IconSitemap,
  },
  {
    title: "Transparant geprijsd",
    body: "Een vaste prijs vooraf en heldere afspraken, zonder kleine lettertjes.",
    Icon: IconShieldCheck,
  },
  {
    title: "Gebouwd om te presteren",
    body: "Snel, vindbaar en ontworpen om bezoekers om te zetten in klanten.",
    Icon: IconZap,
  },
  {
    title: "Partner op lange termijn",
    body: "Na de lancering onderhouden we je site en bouwen we mee verder.",
    Icon: IconRefresh,
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar active="About" />
      <main id="main-content">
        {/* Zelfde hero als /projecten (overview-hero): badge, kop, intro en één rij pillen. */}
        <section className="portfolio-hero overview-hero">
          <HeroBackdrop />
          <div className="portfolio-hero-copy page-content">
            <Badge section="Over ons" page="Kosifly" />
            <h1>
              We bouwen wat je
              <br />
              bedrijf <span>vooruit</span> helpt.
            </h1>
            <p>
              Kosifly is een digitaal bureau voor KMO&apos;s. Van website tot automatisatie:
              <br className="desktop-break" /> we bouwen oplossingen die meetbaar bijdragen aan je
              resultaat.
            </p>
            <nav className="project-filters" aria-label="Kennismaken of een dienst bekijken">
              <Link href="/contact" className="is-primary">
                Plan een kennismaking
              </Link>
              {services.map((s) => (
                <Link key={s.slug} href={`/diensten/${s.slug}`}>
                  {s.short}
                </Link>
              ))}
            </nav>
          </div>
        </section>
        <section className="portfolio-light page-section about-who">
          <div className="about-who-copy">
            <div>
              <span className="portfolio-eyebrow">WIE WE ZIJN</span>
              <h2>
                Een digitaal bureau dat bouwt op <span>resultaat</span>.
              </h2>
            </div>
            <div>
              <p>
                Kosifly helpt KMO&apos;s groeien met websites, lokale SEO, maatwerksoftware en
                automatisaties. Elk project vertrekt vanuit één vraag: wat moet dit opleveren voor
                je bedrijf?
              </p>
              <p>
                We werken met een vaste prijs, een duidelijke planning en één vast aanspreekpunt van
                begin tot oplevering. Na de lancering blijven we betrokken met onderhoud, hosting en
                doorontwikkeling.
              </p>
            </div>
          </div>
          <dl className="about-facts">
            {[
              ["Vestiging", "Puurs-Sint-Amands"],
              ["Prijs", "Vast, vooraf afgesproken"],
              ["Antwoord", "Binnen 24 uur"],
              ["Contact", "Eén vast aanspreekpunt"],
            ].map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </section>
        <section className="about-expertise page-section hero-surface">
          <HeroBackdrop />
          <div className="portfolio-heading">
            <span className="section-eyebrow">ONZE EXPERTISE</span>
            <h2>
              Vijf expertises, <span>één partner.</span>
            </h2>
          </div>
          <SwipeRow className="about-expertise-grid" label="Onze expertises" itemLabel="expertise">
            {services.map((s, index) => {
              const Icon = expertiseIcons[index];
              return (
                <Link key={s.slug} href={`/diensten/${s.slug}`} className="about-expertise-card">
                  <span className="about-icon-tile" aria-hidden="true">
                    <Icon />
                  </span>
                  <h3>{s.label}</h3>
                  <p>{expertiseCopy[index]}</p>
                  <span className="about-service-link">
                    Bekijk de dienst <span aria-hidden="true">→</span>
                  </span>
                </Link>
              );
            })}
          </SwipeRow>
        </section>
        <section className="portfolio-light page-section about-principles">
          <div className="portfolio-heading">
            <span className="section-eyebrow">ONZE PRINCIPES</span>
            <h2>
              Waar je op kan <span>rekenen.</span>
            </h2>
          </div>
          <div className="about-principle-grid">
            {principles.map(({ title, body, Icon }, index) => (
              <article key={title} className="about-principle-card">
                <div>
                  <span className="about-icon-tile" aria-hidden="true">
                    <Icon />
                  </span>
                  <span className="about-principle-number">0 {index + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="portfolio-light page-section about-work">
          <div className="portfolio-heading">
            <span className="section-eyebrow">ONS WERK</span>
            <h2>
              Werk waar we <span>trots</span> op zijn.
            </h2>
          </div>
          <SwipeRow className="project-grid" label="Projecten" itemLabel="project">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </SwipeRow>
          <Link href="/projecten" className="button primary">
            Bekijk alle projecten <BtnArrow />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
