import Link from "next/link";
import { FaqIntro } from "@/components/FaqIntro";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import design from "@/data/services-design.json";
import { services, serviceHref, type ServiceSlug } from "@/lib/services";
import { Artwork } from "@/components/ui/Artwork";
import { ShowcaseLinks } from "./ShowcaseLinks";
import { BeforeAfter, ModulePicker, SavingsCalculator, ServiceFaq } from "./Interactions";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { scaleIn } from "@/components/motion/presets";
import { HeroBackdrop } from "@/components/ui/HeroBackdrop";
import Hero0 from "./art/Hero0";
import Hero1 from "./art/Hero1";
import Hero2 from "./art/Hero2";
import Hero3 from "./art/Hero3";
import Hero4 from "./art/Hero4";
import Difference1 from "./art/Difference1";
import Difference2 from "./art/Difference2";
import Difference4 from "./art/Difference4";
import WebFeatures from "./art/WebFeatures";
import AiFeatures from "./art/AiFeatures";
import SeoResults from "./art/SeoResults";
import Receipt from "./art/Receipt";
import Showcase0 from "./art/Showcase0";
import Showcase1 from "./art/Showcase1";
import Showcase2 from "./art/Showcase2";
import Showcase3 from "./art/Showcase3";
import Showcase4 from "./art/Showcase4";
import RelatedIcon0_0 from "./art/RelatedIcon0_0";
import RelatedIcon0_1 from "./art/RelatedIcon0_1";
import RelatedIcon0_2 from "./art/RelatedIcon0_2";
import RelatedIcon1_0 from "./art/RelatedIcon1_0";
import RelatedIcon1_1 from "./art/RelatedIcon1_1";
import RelatedIcon1_2 from "./art/RelatedIcon1_2";
import RelatedIcon2_0 from "./art/RelatedIcon2_0";
import RelatedIcon2_1 from "./art/RelatedIcon2_1";
import RelatedIcon2_2 from "./art/RelatedIcon2_2";
import RelatedIcon3_0 from "./art/RelatedIcon3_0";
import RelatedIcon3_1 from "./art/RelatedIcon3_1";
import RelatedIcon3_2 from "./art/RelatedIcon3_2";
import RelatedIcon4_0 from "./art/RelatedIcon4_0";
import RelatedIcon4_1 from "./art/RelatedIcon4_1";
import RelatedIcon4_2 from "./art/RelatedIcon4_2";
const relatedIcons = [
  [RelatedIcon0_0, RelatedIcon0_1, RelatedIcon0_2],
  [RelatedIcon1_0, RelatedIcon1_1, RelatedIcon1_2],
  [RelatedIcon2_0, RelatedIcon2_1, RelatedIcon2_2],
  [RelatedIcon3_0, RelatedIcon3_1, RelatedIcon3_2],
  [RelatedIcon4_0, RelatedIcon4_1, RelatedIcon4_2],
];
const heroes = [Hero0, Hero1, Hero2, Hero3, Hero4],
  showcases = [Showcase0, Showcase1, Showcase2, Showcase3, Showcase4];
const processSuffixes = [
  "wanneer je live gaat.",
  "wanneer gebeurt.",
  "waar je aan toe bent.",
  "wanneer alles draait.",
  "in één week geregeld.",
];
function ProcessHeading({ text, suffix }: { text: string; suffix: string }) {
  const start = text.lastIndexOf(suffix);
  return start < 0 ? (
    text
  ) : (
    <>
      {text.slice(0, start)}
      <span className="process-emphasis">{suffix}</span>
    </>
  );
}
function clean(t: string) {
  return t.replace(/\s+([.,])/g, "$1").replace(/\s{2,}/g, " ");
}
function Emphasis({ text, word }: { text: string; word: string }) {
  const index = text.lastIndexOf(word);
  return index < 0 ? (
    <>{clean(text)}</>
  ) : (
    <>
      {clean(text.slice(0, index))}
      <span>{word}</span>
      {clean(text.slice(index + word.length))}
    </>
  );
}
export function ServicePage({ slug }: { slug: ServiceSlug }) {
  const index = services.findIndex((s) => s.slug === slug),
    service = services[index],
    d = design[slug],
    Hero = heroes[index],
    Showcase = showcases[index];
  const featureWord = ["verkopen", "eerste keuze", "bedrijf werkt", "automatiseren", "denken"][
    index
  ];
  const diffWord = ["verkoopt", "vindbaar", "groeien", "slimmer", "scherp"][index];
  const showWord = ["verkoopt", "gevonden", "jouw software", "zichzelf", "maandrapport"][index];
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: d.faq.map((x) => ({
      "@type": "Question",
      name: x.q,
      acceptedAnswer: { "@type": "Answer", text: x.a },
    })),
  };
  return (
    <div className={"service-page service-" + slug}>
      <Navbar active="Services" />
      <main id="main-content">
        <section className="service-hero">
          <HeroBackdrop />
          <div className="hero-grid">
            <RevealGroup className="hero-copy" onMount delay={0.1}>
              <RevealItem className="service-breadcrumb">
                <img src="/figma/ce9df.svg" width="24" height="24" alt="" />
                <Link href="/services">Services</Link>
                <span>/</span>
                <span>{service.label}</span>
              </RevealItem>
              <RevealItem as="h1">
                {service.lines.map((l) => (
                  <span className="hero-line" key={l}>
                    {l}
                  </span>
                ))}
                <span className="hero-line">
                  <em>{service.accent}</em>
                  {"after" in service ? service.after : ""}.
                </span>
              </RevealItem>
              <RevealItem as="p">{service.body}</RevealItem>
              <RevealItem className="button-row">
                <Link
                  href={"/contact?dienst=" + encodeURIComponent(service.short)}
                  className="button primary"
                >
                  {service.cta} →
                </Link>
                <a className="projects-link" href="#etalage">
                  <span className="projects-link-label">Bekijk projecten</span>
                  <span className="projects-link-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </RevealItem>
              <RevealItem as="ul" className="hero-trust">
                {[
                  "Antwoord binnen 24 uur",
                  index === 0 ? "Vaste prijs vooraf" : "Gratis website-audit",
                  "Geen verplichtingen",
                ].map((t) => (
                  <li key={t}>
                    <img src="/figma/ffd4b.svg" width="18" height="18" alt="" />
                    {t}
                  </li>
                ))}
              </RevealItem>
            </RevealGroup>
            <Reveal className="hero-art" variants={scaleIn} onMount delay={0.25}>
              <Artwork
                width={d.heroSize.width}
                height={d.heroSize.height}
                outsets={
                  index === 1
                    ? { left: 159, right: 40, top: 40, bottom: 92 }
                    : { left: 60, right: 40, top: 40, bottom: 40 }
                }
                label={service.description}
              >
                <Hero />
              </Artwork>
              {index === 4 && <small className="example-label">Voorbeeld van monitoring</small>}
            </Reveal>
          </div>
        </section>
        <section className="service-section difference-section light-section">
          <div className="section-heading">
            <span className="section-eyebrow">{d.difference.label.replace(/-/g, "").trim()}</span>
            <h2>
              {d.difference.heading[0]}
              <br />
              <span className="highlight-title">
                <Emphasis text={d.difference.heading[1]} word={diffWord} />
              </span>
            </h2>
            <p>{d.difference.description}</p>
          </div>
          <div
            className={
              "difference-visual " +
              (index === 1 ? "region-visual" : index === 0 ? "website-difference" : "")
            }
          >
            {index === 0 ? (
              <BeforeAfter />
            ) : index === 3 ? (
              <SavingsCalculator />
            ) : (
              <Artwork
                width={d.difference.width}
                height={d.difference.height}
                label={clean(d.difference.heading.join(" "))}
              >
                {index === 1 ? <Difference1 /> : index === 2 ? <Difference2 /> : <Difference4 />}
              </Artwork>
            )}
          </div>
        </section>
        <section
          className={
            "service-section light-section features-section " +
            (index === 4 ? "receipt-section" : "")
          }
        >
          <div className="section-heading">
            <span className="section-eyebrow">WAT JE KRIJGT</span>
            <h2>
              <Emphasis text={d.features.heading} word={featureWord} />
            </h2>
            <p>{d.features.description}</p>
            {index === 4 && (
              <Link className="button primary" href="/contact?dienst=Onderhoud">
                Plan een gesprek →
              </Link>
            )}
          </div>
          <div className="features-content">
            {index === 0 ? (
              <WebFeatures />
            ) : index === 1 ? (
              <SeoResults />
            ) : index === 2 ? (
              <ModulePicker modules={design["web-apps"].modules} />
            ) : index === 3 ? (
              <AiFeatures />
            ) : (
              <Receipt />
            )}
          </div>
        </section>
        <section className="service-section light-section process-section">
          <div className="process-intro">
            <span className="line-label">HET PROCES</span>
            <h2>
              <ProcessHeading text={d.process.heading} suffix={processSuffixes[index]} />
            </h2>
            <p>{d.process.description}</p>
          </div>
          <ol className="process-steps">
            {d.process.steps.map((s, i) => (
              <li key={s.nummer}>
                <span className="step-number">{s.nummer}</span>
                <div className="step-card">
                  <span className="step-duration">{s.duur}</span>
                  <h3>{s.titel}</h3>
                  <p>{s.tekst}</p>
                  <div className="your-step">
                    <span>JIJ</span>
                    {s.jij}
                  </div>
                </div>
              </li>
            ))}
          </ol>
          <div className="process-end">
            <p>{d.process.note}</p>
            <span className="live-badge">
              <img src="/figma/63c5c.svg" width="8" height="8" alt="" />
              {d.process.badge}
            </span>
          </div>
        </section>
        <section id="etalage" className="service-section showcase-section">
          <div className="section-heading">
            <span className="section-eyebrow">DE ETALAGE</span>
            <h2>
              <Emphasis text={d.showcase.heading} word={showWord} />
            </h2>
            <p>{d.showcase.description}</p>
          </div>
          <Artwork width={1920} height={650} label={d.showcase.description}>
            <Showcase />
          </Artwork>
          <ShowcaseLinks slug={slug} />
        </section>
        <section className="service-section light-section related-section">
          <div className="section-heading">
            <span className="section-eyebrow">PAST GOED BIJ</span>
            <h2>
              Haal er nog <span>meer</span> uit.
            </h2>
          </div>
          <div className="related-grid">
            {d.related.map((r, i) => {
              const Icon = relatedIcons[index][i];
              return (
                <Link href={serviceHref(r.title)} key={r.title} className="related-card">
                  <Icon />
                  <h3>{r.title}</h3>
                  <p>{r.description}</p>
                  <strong>
                    Bekijk de dienst <img src="/figma/6aad4.svg" width="18" height="18" alt="" />
                  </strong>
                </Link>
              );
            })}
          </div>
        </section>
        <section className="service-section light-section faq-section">
          <FaqIntro />
          <ServiceFaq items={d.faq} />
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
}
