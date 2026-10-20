/*
 * Mobiele visuals voor de webdesign-kaarten zonder illustratie (Design op maat, Snel & SEO-ready,
 * Formulieren die opvolgen). Op desktop verborgen; daar blijft de bento-layout uit Figma.
 */

function DesignArt() {
  return (
    <div className="wfa wfa-design" aria-hidden="true">
      <div className="wfa-kit">
        <span className="wfa-type">
          Aa<small>Jouw lettertype</small>
        </span>
        <span className="wfa-swatches">
          <i />
          <i />
          <i />
          <i />
        </span>
      </div>
      <div className="wfa-mock">
        <span className="wfa-mock-logo">
          <b />
          jouwbedrijf
        </span>
        <span className="wfa-mock-line wfa-w80" />
        <span className="wfa-mock-line wfa-w60" />
        <span className="wfa-mock-cta">Vraag je offerte →</span>
      </div>
    </div>
  );
}

const scores = [
  { label: "Snelheid", value: 98 },
  { label: "SEO", value: 100 },
  { label: "Mobiel", value: 100 },
];

function SeoArt() {
  return (
    <div className="wfa wfa-seo" aria-hidden="true">
      <div className="wfa-result">
        <small>jouwbedrijf.be › diensten</small>
        <strong>Badkamerrenovatie in Mechelen | Jouw Bedrijf</strong>
        <span>Van ontwerp tot laatste tegel, met één vaste prijs vooraf.</span>
      </div>
      <ul className="wfa-scores">
        {scores.map((s) => (
          <li key={s.label}>
            <svg viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="16" />
              <circle cx="20" cy="20" r="16" pathLength="100" strokeDasharray={`${s.value} 100`} />
            </svg>
            <b>{s.value}</b>
            <span>{s.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FormArt() {
  return (
    <div className="wfa wfa-form" aria-hidden="true">
      <div className="wfa-fields">
        <span>
          <small>Naam</small>Sarah Peeters
        </span>
        <span>
          <small>Vraag</small>Offerte voor een nieuwe badkamer
        </span>
        <b>Verstuur aanvraag</b>
      </div>
      <ul className="wfa-flow">
        <li>
          <i>✓</i>
          <span>
            <strong>Bevestiging verstuurd</strong>
            <small>Automatisch naar je klant</small>
          </span>
        </li>
        <li>
          <i>✉</i>
          <span>
            <strong>Nieuwe aanvraag</strong>
            <small>Meteen in jouw inbox</small>
          </span>
        </li>
      </ul>
    </div>
  );
}

export function WebFeatureArt({ kind }: { kind: "design" | "seo" | "form" }) {
  return kind === "design" ? <DesignArt /> : kind === "seo" ? <SeoArt /> : <FormArt />;
}
