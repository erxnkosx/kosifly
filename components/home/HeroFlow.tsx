import Image from "next/image";

const outputs = [
  {
    label: "Offerte verstuurd",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M7 3.5h7l4 4V20a.5.5 0 0 1-.5.5h-10A.5.5 0 0 1 7 20V3.5Z" />
        <path d="M14 3.5V8h4M9.5 12.5h6M9.5 16h4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Inspectie gepland",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3.5" y="5" width="17" height="15.5" rx="3" />
        <path d="M3.5 10h17M8 3v4M16 3v4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Klant opgevolgd",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 12.5 9 17.5 20 6.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

/**
 * Mobiele hero-visual: in één lus zie je wat Kosifly doet.
 * Een aanvraag komt binnen via de website, AI verwerkt ze en levert meteen resultaat op.
 */
export function HeroFlow() {
  return (
    <figure
      className="hero-flow"
      aria-label="Een aanvraag komt binnen via je website, AI verwerkt ze en verstuurt automatisch een offerte, plant een afspraak en volgt de klant op."
    >
      <div className="hero-flow-step hero-flow-site" aria-hidden="true">
        <span className="hero-flow-tag">01 · Jouw website</span>
        <div className="hero-flow-device">
          <div className="hero-flow-browser">
            <div className="hero-flow-chrome">
              <span className="hero-flow-dots">
                <i />
                <i />
                <i />
              </span>
              <span className="hero-flow-url">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <rect x="5" y="11" width="14" height="10" rx="2" />
                  <path d="M8 11V8a4 4 0 0 1 8 0v3" />
                </svg>
                primelabs.be
              </span>
            </div>
            <div className="hero-flow-screen">
              <Image
                src="/images/primelabs-home.webp"
                alt=""
                width={1586}
                height={854}
                sizes="(max-width: 760px) 100vw, 1px"
                priority
              />
              <span className="hero-flow-click" />
            </div>
          </div>
          <div className="hero-flow-toast">
            <span>✓</span>
            <div>
              <strong>Inspectie aangevraagd</strong>
              <small>Dakinspectie · Mechelen</small>
            </div>
            <em>nu</em>
          </div>
        </div>
      </div>

      <div className="hero-flow-wire" aria-hidden="true">
        <i />
      </div>

      <div className="hero-flow-step hero-flow-ai" aria-hidden="true">
        <span className="hero-flow-tag">02 · AI-automatisatie</span>
        <div className="hero-flow-core">
          <span className="hero-flow-orb">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 3.5c.4 3.6 2.4 5.6 6 6-3.6.4-5.6 2.4-6 6-.4-3.6-2.4-5.6-6-6 3.6-.4 5.6-2.4 6-6Z" />
              <path d="M17.5 13c.2 1.9 1.1 2.8 3 3-1.9.2-2.8 1.1-3 3-.2-1.9-1.1-2.8-3-3 1.9-.2 2.8-1.1 3-3Z" />
            </svg>
          </span>
          <div className="hero-flow-status">
            <span className="hero-flow-busy">
              AI verwerkt de aanvraag<b>.</b>
              <b>.</b>
              <b>.</b>
            </span>
            <span className="hero-flow-done">Verwerkt in 4 seconden</span>
          </div>
        </div>
      </div>

      <div className="hero-flow-wire" aria-hidden="true">
        <i />
      </div>

      <div className="hero-flow-step" aria-hidden="true">
        <span className="hero-flow-tag">03 · Resultaat</span>
        <ul className="hero-flow-outputs">
          {outputs.map((o) => (
            <li key={o.label}>
              <span>{o.icon}</span>
              {o.label}
            </li>
          ))}
        </ul>
      </div>
    </figure>
  );
}
