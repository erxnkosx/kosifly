import design from "@/data/services-design.json";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

const process = design.webdesign.process;

/** "Zo werken we": de vijf fases van kennismaking tot livegang, als tijdlijn. */
export function Werkwijze() {
  return (
    <section className="service-section light-section home-process">
      <Reveal className="section-heading">
        <span className="section-eyebrow">ZO WERKEN WE</span>
        <h2>
          Live in <span>vijf weken</span>.
        </h2>
        <p>{process.description}</p>
      </Reveal>
      <RevealGroup as="ol" className="process-timeline" stagger={0.1}>
        {process.steps.map((step) => (
          <RevealItem as="li" key={step.nummer} className="process-step">
            <span className="process-dot" aria-hidden="true">
              {step.nummer}
            </span>
            <div className="process-body">
              <span className="process-week">{step.duur}</span>
              <h3>{step.titel}</h3>
              <p>{step.tekst}</p>
              <p className="process-you">
                <strong>Jij</strong> {step.jij}
              </p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
