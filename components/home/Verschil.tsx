import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { VerschilToggle } from "./VerschilToggle";

const pairs = [
  {
    bad: "Mooi, maar niemand neemt contact op",
    good: "Elke pagina leidt naar één duidelijke actie",
  },
  { bad: "Traag en onhandig op de gsm", good: "Snel en gebouwd voor de gsm" },
  { bad: "Aanvragen blijven liggen in je inbox", good: "Elke aanvraag automatisch opgevolgd" },
  { bad: "Geen idee wat je site oplevert", good: "Je ziet wat elke klik oplevert" },
];

export function Verschil() {
  return (
    <section id="over-ons" className="service-section light-section home-difference">
      <Reveal className="section-heading">
        <span className="section-eyebrow">HET VERSCHIL</span>
        <h2>
          De meeste websites zijn een visitekaartje.
          <br /> De jouwe{" "}
          <span className="highlight-title">
            <span>verkoopt.</span>
          </span>
        </h2>
        <p className="verschil-intro-desktop">
          Een goede website is geen digitaal visitekaartje, maar een systeem dat bezoekers omzet in
          klanten.
        </p>
        <p className="verschil-intro-mobile">Schakel en zie het verschil.</p>
      </Reveal>
      <RevealGroup className="home-comparison-grid" stagger={0.15}>
        <RevealItem as="article" className="home-comparison-card">
          <h3>De meeste websites</h3>
          <ul>
            {pairs.map((p) => (
              <li key={p.bad}>
                <span aria-hidden="true">×</span>
                {p.bad}
              </li>
            ))}
          </ul>
        </RevealItem>
        <RevealItem as="article" className="home-comparison-card home-comparison-good">
          <h3>
            <img src="/brand/wing.png" width={44} height={24} alt="" />K O S I F L Y
          </h3>
          <ul>
            {pairs.map((p) => (
              <li key={p.good}>
                <span aria-hidden="true">✓</span>
                {p.good}
              </li>
            ))}
          </ul>
        </RevealItem>
      </RevealGroup>
      <Reveal className="verschil-toggle-wrap">
        <VerschilToggle pairs={pairs} />
      </Reveal>
    </section>
  );
}
