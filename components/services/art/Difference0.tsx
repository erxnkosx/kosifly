import Image from "next/image";

type ComparisonSide = "before" | "after";

function Arrow() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 19 19 5M5 5h14v14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MonzaMark() {
  return (
    <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 18V6l8 9 8-9v12M8 18v-3m8 3v-3"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

export default function Difference0({ active = "after" }: { active?: ComparisonSide }) {
  const after = active === "after";
  return (
    <div id="website-makeover" className={`makeover-preview is-${active}`}>
      <div className="makeover-browser" aria-hidden="true">
        <span className="makeover-browser-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="makeover-address">monza-motors.be</span>
        <span className="makeover-browser-mark">↗</span>
      </div>
      <div className="makeover-website">
        <div className="makeover-nav" aria-hidden="true">
          <span className="makeover-logo">
            <span className="makeover-logo-symbol">
              <MonzaMark />
            </span>
            MONZA<small>MOTORS</small>
          </span>
          <div className="makeover-menu">
            <span className="makeover-old-menu">Home</span>
            <span>De collectie</span>
            <span>Onze belofte</span>
            <span className="makeover-old-menu">Nieuws</span>
            <span className="makeover-nav-contact">
              <span className="makeover-contact-desktop">
                {after ? "Plan een proefrit" : "Contact"}
              </span>
              <span className="makeover-contact-mobile">{after ? "Proefrit" : "Contact"}</span>
              <Arrow />
            </span>
          </div>
        </div>
        <div className="makeover-hero">
          <div className="makeover-copy" key={active}>
            <span className="makeover-eyebrow">
              <i aria-hidden="true" />
              {after ? "ZORGVULDIG GEKOZEN. KLAAR VOOR JOU." : "WELKOM BIJ MONZA MOTORS"}
            </span>
            <h3>
              {after ? (
                <>
                  Rij iets
                  <br />
                  <em>bijzonders.</em>
                </>
              ) : (
                <>
                  Welkom op
                  <br />
                  onze website!
                </>
              )}
            </h3>
            <p>
              {after
                ? "Wagens met karakter. Geselecteerd met zorg. Ontdek jouw volgende wagen, met advies dat bij je past."
                : "Wij zijn een dynamisch autobedrijf met jarenlange ervaring. Bekijk onze website voor meer informatie over ons aanbod en onze diensten."}
            </p>
            <div className="makeover-actions" aria-hidden="true">
              <span className="makeover-main-action">
                {after ? "Bekijk de collectie" : "Meer informatie"}
                <Arrow />
              </span>
              <span className={after ? "makeover-secondary-action" : "makeover-extra-action"}>
                {after ? "Onze belofte" : "Lees meer"}
              </span>
            </div>
            <span className="makeover-note">
              {after
                ? "Persoonlijk advies. Een zorgeloze volgende stap."
                : "Uw partner voor nieuwe en tweedehands wagens."}
            </span>
          </div>
          <div className="makeover-art" aria-hidden="true">
            <Image
              src="/images/detailing-makeover.webp"
              alt=""
              fill
              sizes="(max-width: 760px) 90vw, 900px"
              className="makeover-car"
            />
            <span className="makeover-art-caption">THE MONZA COLLECTION</span>
          </div>
          <div className="makeover-featured" aria-hidden="true">
            <div className="makeover-featured-top">
              <span>UIT DE COLLECTIE</span>
              <span className="makeover-stock-dot">
                <i /> Beschikbaar
              </span>
            </div>
            <div className="makeover-featured-title">
              <strong>GT Coupé</strong>
              <span>
                € 64.900
                <Arrow />
              </span>
            </div>
            <p>
              2023 <i /> 18.400 km <i /> Automaat
            </p>
          </div>
          <div className="makeover-old-blocks" aria-hidden="true">
            {["Ons aanbod", "Over ons", "Laatste nieuws"].map((title) => (
              <div key={title}>
                <strong>{title}</strong>
                <i />
                <i />
                <i />
                <span>Lees meer »</span>
              </div>
            ))}
          </div>
        </div>
        <div className="makeover-search-strip" aria-hidden="true">
          <span className="makeover-search-heading">
            Vind jouw match.<small>Jouw volgende hoofdstuk begint hier.</small>
          </span>
          <div className="makeover-search-fields">
            <span>
              <small>MERK</small>Alle merken <i>⌄</i>
            </span>
            <span>
              <small>TYPE WAGEN</small>Alle modellen <i>⌄</i>
            </span>
            <span>
              <small>BUDGET</small>Jouw budget <i>⌄</i>
            </span>
            <span className="makeover-search-submit">
              <Arrow />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
