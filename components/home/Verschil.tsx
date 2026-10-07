const bad = [
  { c: 663, t: 667, text: "Een online brochure zonder verkooplogica" },
  { c: 733, t: 737, text: "Bezoekers zonder richting, dus zonder actie" },
  { c: 793, t: 797, text: "Leads die blijven liggen in een inbox" },
  { c: 853, t: 857, text: "Bezoek dat een kostenpost blijft" },
];
const good = [
  { c: 662, k: 668, t: 666, text: "Een strategische laag op maat van uw aanbod" },
  { c: 732, k: 738, t: 736, text: "Eén helder pad naar de volgende stap" },
  { c: 792, k: 798, t: 796, text: "Een systeem dat elke lead opvangt en opvolgt" },
  { c: 852, k: 858, t: 856, text: "Elke stap meetbaar, van klik tot klant" },
];

export function Verschil() {
  return (
    <section id="over-ons" className="service-section light-section home-difference">
      <div className="home-wing" aria-hidden="true" />
      <div className="section-heading">
        <span className="section-eyebrow">HET VERSCHIL</span>
        <h2>
          De meeste websites zijn een visitekaartje.
          <br />
          De jouwe{" "}
          <span className="highlight-title">
            <span>verkoopt.</span>
          </span>
        </h2>
        <p>
          Uw website hoort geen digitaal visitekaartje te zijn, maar een leadmachine. Het verschil
          zit in de strategische laag die bezoekers feilloos aanzet tot actie.
        </p>
      </div>
      <div className="home-comparison-grid">
        <article className="home-comparison-card">
          <h3>De meeste websites</h3>
          <ul>
            {bad.map((r) => (
              <li key={r.text}>
                <span aria-hidden="true">×</span>
                {r.text}
              </li>
            ))}
          </ul>
        </article>
        <article className="home-comparison-card home-comparison-good">
          <h3>
            <img src="/brand/wing.png" width={44} height={24} alt="" />K O S I F L Y
          </h3>
          <ul>
            {good.map((r) => (
              <li key={r.text}>
                <span aria-hidden="true">✓</span>
                {r.text}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
