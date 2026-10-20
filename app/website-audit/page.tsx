import type { Metadata } from "next";
import { AuditForm } from "@/components/audit/AuditForm";
import { Footer } from "@/components/Footer";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Navbar } from "@/components/Navbar";
import { ServiceFaq } from "@/components/services/Interactions";
import { BtnArrow } from "@/components/ui/BtnArrow";
import { HeroBackdrop } from "@/components/ui/HeroBackdrop";

export const metadata: Metadata = {
  title: "Gratis website-audit | Kosifly",
  description:
    "Laat je website gratis nakijken: snelheid, gebruik op de gsm, vindbaarheid in Google en hoe makkelijk bezoekers contact opnemen. Antwoord binnen 24 uur, zonder verplichtingen.",
  alternates: { canonical: "/website-audit" },
};

// TE BEVESTIGEN DOOR DE EIGENAAR: wat de audit precies inhoudt en hoe ze wordt aangeleverd.
const checks = [
  {
    title: "Snelheid",
    text: "Hoe snel laadt je site, vooral op een gsm met mobiele data? Elke seconde wachten kost bezoekers.",
    icon: "M4.5 17a8.5 8.5 0 1 1 15 0M12 13.5l4-4.5",
  },
  {
    title: "Gebruik op de gsm",
    text: "Is alles leesbaar, zijn knoppen makkelijk aan te tikken en vind je meteen wat je zoekt?",
    icon: "M8 3h8a1.5 1.5 0 0 1 1.5 1.5v15A1.5 1.5 0 0 1 16 21H8a1.5 1.5 0 0 1-1.5-1.5v-15A1.5 1.5 0 0 1 8 3ZM11 18h2",
  },
  {
    title: "Vindbaarheid in Google",
    text: "Begrijpt Google waar je bedrijf voor staat, en word je gevonden in je eigen regio?",
    icon: "M10.5 17a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13ZM15.5 15.5 20 20",
  },
  {
    title: "Van bezoeker naar klant",
    text: "Is er één duidelijke volgende stap? Bellen, een aanvraag of een afspraak moet moeiteloos gaan.",
    icon: "M4 12.5 9 17.5 20 6.5",
  },
  {
    title: "Techniek & veiligheid",
    text: "Een geldig SSL-certificaat, werkende formulieren en geen kapotte links of verouderde onderdelen.",
    icon: "M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6l-7-3Z",
  },
];

const steps = [
  {
    title: "Je vraagt de audit aan",
    text: "Je laat het adres van je website achter. Dat duurt minder dan een minuut.",
  },
  {
    title: "Wij bekijken je website",
    text: "We lopen je site na op snelheid, gsm, vindbaarheid en hoe makkelijk mensen contact opnemen.",
  },
  {
    title: "Je krijgt eerlijke verbeterpunten",
    text: "We nemen binnen 24 uur contact op en lichten de belangrijkste punten toe. Wat je ermee doet, beslis jij.",
  },
];

const faq = [
  {
    q: "Is de audit echt gratis?",
    a: "Ja. De audit is gratis en zonder verplichtingen. Je zit nergens aan vast.",
  },
  {
    q: "Wat heb je van mij nodig?",
    a: "Alleen het adres van je website en hoe we je kunnen bereiken. Inloggegevens of toegang tot je site zijn niet nodig.",
  },
  {
    q: "Mijn website is niet door Kosifly gemaakt. Kan dat?",
    a: "Natuurlijk. We bekijken elke website, ongeacht wie ze gebouwd heeft of met welk platform.",
  },
  {
    q: "Ik heb nog geen website. Wat nu?",
    a: "Dan valt er niets na te kijken, maar we denken graag met je mee. Plan via de contactpagina een vrijblijvend gesprek.",
  },
];

export default function WebsiteAudit() {
  return (
    <>
      <Navbar active="" />
      <main id="main-content" className="audit-page">
        <section className="service-hero audit-hero">
          <HeroBackdrop />
          <div className="audit-hero-grid">
            <RevealGroup className="audit-hero-copy" onMount delay={0.1}>
              <RevealItem className="service-breadcrumb">
                <span>Gratis</span>
                <span>/</span>
                <span>Website-audit</span>
              </RevealItem>
              <RevealItem as="h1">
                <span className="hero-line">Ontdek wat je</span>
                <span className="hero-line">website laat</span>
                <span className="hero-line">
                  <em>liggen</em>.
                </span>
              </RevealItem>
              <RevealItem as="p">
                We bekijken je huidige website en vertellen je eerlijk wat beter kan: snelheid,
                gebruik op de gsm, vindbaarheid in Google en hoe makkelijk bezoekers contact
                opnemen.
              </RevealItem>
              <RevealItem className="audit-hero-actions">
                <a href="#audit-aanvragen" className="audit-cta">
                  Vraag je gratis audit aan <BtnArrow />
                </a>
              </RevealItem>
              <RevealItem as="ul" className="audit-trust">
                {["Antwoord binnen 24 uur", "100% gratis", "Geen verplichtingen"].map((t) => (
                  <li key={t}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path
                        d="M5 12.5 10 17.5 19 7.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {t}
                  </li>
                ))}
              </RevealItem>
            </RevealGroup>

            <Reveal className="audit-report" onMount delay={0.35} aria-hidden="true">
              <div className="audit-report-head">
                <span>Websiterapport</span>
                <small>Voorbeeld</small>
              </div>
              <div className="audit-report-url">jouwbedrijf.be</div>
              <ul>
                {[
                  ["Snelheid", "warn", "Kan beter"],
                  ["Gebruik op de gsm", "bad", "Aandachtspunt"],
                  ["Vindbaarheid", "warn", "Kan beter"],
                  ["Contact opnemen", "bad", "Aandachtspunt"],
                  ["Veiligheid", "ok", "In orde"],
                ].map(([name, level, label]) => (
                  <li key={name} className={"is-" + level}>
                    <span>{name}</span>
                    <i>
                      <b />
                    </i>
                    <em>{label}</em>
                  </li>
                ))}
              </ul>
              <div className="audit-report-foot">3 verbeterpunten gevonden</div>
            </Reveal>
          </div>
        </section>

        <section className="service-section light-section audit-checks">
          <Reveal className="section-heading">
            <span className="section-eyebrow">WAT WE BEKIJKEN</span>
            <h2>
              Vijf dingen die bepalen of je site <span>klanten oplevert</span>.
            </h2>
          </Reveal>
          <RevealGroup as="ul" className="audit-check-grid" stagger={0.08}>
            {checks.map((c, i) => (
              <RevealItem as="li" key={c.title} className="audit-check">
                <span className="audit-check-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d={c.icon} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <span className="audit-check-no">0{i + 1}</span>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="service-section light-section audit-steps">
          <Reveal className="section-heading">
            <span className="section-eyebrow">ZO WERKT HET</span>
            <h2>
              In drie stappen <span>duidelijkheid</span>.
            </h2>
          </Reveal>
          <RevealGroup as="ol" className="process-timeline audit-timeline" stagger={0.1}>
            {steps.map((s, i) => (
              <RevealItem as="li" key={s.title} className="process-step">
                <span className="process-dot" aria-hidden="true">
                  {i + 1}
                </span>
                <div className="process-body">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section id="audit-aanvragen" className="audit-request">
          <div className="audit-request-grid">
            <Reveal className="audit-request-copy">
              <span className="section-eyebrow">GRATIS AUDIT</span>
              <h2>
                Laat ons even <span>meekijken</span>.
              </h2>
              <p>
                Vul het adres van je website in. We nemen binnen 24 uur contact met je op met de
                belangrijkste verbeterpunten.
              </p>
              <ul>
                <li>Je spreekt de persoon die je site ook effectief zou bouwen</li>
                <li>Geen verkooppraatje, wel eerlijk advies</li>
                <li>Geen toegang tot je website nodig</li>
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <AuditForm />
            </Reveal>
          </div>
        </section>

        <section className="service-section light-section faq-section audit-faq">
          <Reveal className="section-heading">
            <span className="section-eyebrow">VRAGEN</span>
            <h2>
              Goed om te <span>weten</span>.
            </h2>
          </Reveal>
          <ServiceFaq items={faq} initialOpen={null} />
        </section>
      </main>
      <Footer />
    </>
  );
}
