export function FaqIntro() {
  return (
    <div className="faq-intro">
      <span className="line-label">VEELGESTELDE VRAGEN</span>
      <h2>
        Alles wat je wil weten{" "}
        <u>
          voor
          <br />
          we starten.
        </u>
      </h2>
      <div className="faq-contact">
        <strong>
          Staat jouw vraag er niet bij?
          <br />
          Stel ze gerust — je krijgt binnen 24 uur antwoord van iemand die het project zelf zou
          bouwen.
        </strong>
        <a href="mailto:info@kosifly.com">
          <img src="/figma/2a629.svg" width="28" height="28" alt="" />
          info@kosifly.com
        </a>
        <a href="tel:+32483690426">
          <img src="/figma/8996d.svg" width="28" height="28" alt="" />
          +32 (0)483 69 04 26
        </a>
      </div>
    </div>
  );
}
