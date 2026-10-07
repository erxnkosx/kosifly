import { FaqIntro } from "@/components/FaqIntro";
import { Artwork } from "@/components/ui/Artwork";
import { ServiceFaq } from "@/components/services/Interactions";
import { RegionMap } from "@/components/services/art/RegionMap";

const steps = [
  {
    duration: "BINNEN 24 UUR",
    title: "We lezen je aanvraag",
    text: "We bekijken je vraag en stellen een moment voor om kennis te maken.",
    action: "krijgt meteen een bevestiging per mail",
  },
  {
    duration: "30 MIN",
    title: "Kennismakingsgesprek",
    text: "Je vertelt wat je wil bereiken. Wij stellen de juiste vragen en denken mee.",
    action: "kiest een moment dat jou past",
  },
  {
    duration: "BINNEN 2 WERKDAGEN",
    title: "Voorstel met vaste prijs",
    text: "Je krijgt een helder voorstel: wat we doen, wanneer en voor welke prijs.",
    action: "beslist in alle rust",
  },
];
const questions = [
  {
    q: "Hoe snel krijg ik antwoord?",
    a: "Binnen 24 uur op werkdagen, van de persoon die je project ook effectief bouwt.",
  },
  {
    q: "Kost een kennismakingsgesprek iets?",
    a: "Nee. Het kennismakingsgesprek is gratis en vrijblijvend. We bespreken je doelen en bekijken hoe we je kunnen helpen.",
  },
  {
    q: "Moet ik al precies weten wat ik nodig heb?",
    a: "Nee. Vertel wat je wil bereiken of waar je vandaag tegenaan loopt. We denken mee over een oplossing die bij je bedrijf past.",
  },
  {
    q: "Werken jullie ook buiten Puurs-Sint-Amands?",
    a: "Ja. We werken ook met bedrijven buiten onze regio. We kunnen kennismaken en samenwerken via een online gesprek.",
  },
  {
    q: "Wat gebeurt er met mijn gegevens?",
    a: "We gebruiken je gegevens om je aanvraag te beantwoorden en je project te bespreken. Je gegevens blijven bij ons.",
  },
  {
    q: "Kan ik ook meteen bellen?",
    a: "Ja. Je bereikt ons op +32 (0)483 69 04 26, maandag tot zondag van 9 tot 18 uur.",
  },
];

export function ContactDetails() {
  return (
    <>
      <section className="service-section light-section contact-next-steps">
        <div className="section-heading">
          <span className="section-eyebrow">ZO GAAT HET VERDER</span>
          <h2>
            Wat er gebeurt <span>na je aanvraag</span>.
          </h2>
        </div>
        <ol className="process-steps">
          {steps.map((step, index) => (
            <li key={step.title}>
              <span className="step-number">{index + 1}</span>
              <div className="step-card">
                <span className="step-duration">{step.duration}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <div className="your-step">
                  <span>JIJ</span>
                  {step.action}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="service-section contact-location">
        <Artwork
          width={700}
          height={595}
          outsets={{ top: 40, right: 40, bottom: 40, left: 40 }}
          label="Kosifly in Puurs-Sint-Amands, tussen Sint-Niklaas, Dendermonde en Mechelen"
        >
          <RegionMap />
        </Artwork>
        <div>
          <span className="tiny-label">LOCATIE</span>
          <h2>
            Dichtbij en makkelijk <span>bereikbaar</span>.
          </h2>
          <dl>
            {[
              ["REGIO", "Puurs-Sint-Amands, België"],
              ["OPENINGSUREN", "Maandag tot zondag, 9–18u"],
              ["E-MAIL", "info@kosifly.com"],
              ["TELEFOON", "+32 (0)483 69 04 26"],
            ].map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>
                  {label === "E-MAIL" ? (
                    <a href="mailto:info@kosifly.com">{value}</a>
                  ) : label === "TELEFOON" ? (
                    <a href="tel:+32483690426">{value}</a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <div className="contact-social">
            <span>Volg ons</span>
            {[
              ["f3cd6", "Instagram"],
              ["1eb49", "LinkedIn"],
              ["d3c6e", "Facebook"],
            ].map(([asset, label]) => (
              <span key={label} aria-label={label}>
                <img
                  src={`/figma/footer/${asset}.svg`}
                  width="48"
                  height="48"
                  alt=""
                  loading="lazy"
                />
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="service-section light-section faq-section">
        <FaqIntro />
        <ServiceFaq items={questions} />
      </section>
    </>
  );
}
