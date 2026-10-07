const entries = [
  {
    title: "Snelle hosting",
    description:
      "Je site draait op snelle, betrouwbare servers met een SSL-certificaat, zodat hij overal vlot en veilig laadt.",
    icon: "253c4",
    width: 17,
    height: 16,
  },
  {
    title: "Updates",
    description:
      "Software, plugins en beveiliging blijven up-to-date. We testen elke update voor hij live gaat.",
    icon: "ee741",
    width: 15,
    height: 15,
  },
  {
    title: "Dagelijkse back-ups",
    description:
      "Elke dag een volledige back-up. Loopt er iets mis, dan staat je site snel terug zoals hij was.",
    icon: "60a51",
    width: 15,
    height: 16,
  },
  {
    title: "Monitoring",
    description:
      "We krijgen een melding zodra je site traag wordt of offline gaat, en grijpen in voor jij het merkt.",
    icon: "713a8",
    width: 17,
    height: 15,
  },
  {
    title: "Kleine aanpassingen",
    description:
      "Een tekst wijzigen, een foto vervangen of een pagina toevoegen? Stuur een berichtje, wij regelen het.",
    icon: "4c724",
    width: 16,
    height: 16,
  },
  {
    title: "Maandelijks rapport",
    description:
      "Elke maand een kort overzicht van snelheid, bezoekers en wat we voor je gedaan hebben. Zonder vakjargon.",
    icon: "0bfdc",
    width: 15,
    height: 16,
  },
];
const barcode = [
  [0, 3.2],
  [7.2, 4.8],
  [16, 1.6],
  [23.2, 6.4],
  [33.6, 3.2],
  [40.8, 4.8],
  [51.2, 1.6],
  [56.8, 4.8],
  [65.6, 3.2],
  [77.6, 1.6],
  [84.8, 1.6],
  [90.4, 4.8],
  [100.8, 1.6],
  [108, 1.6],
  [116.8, 1.6],
  [124, 3.2],
  [131.2, 6.4],
  [141.6, 1.6],
  [148.8, 4.8],
  [157.6, 3.2],
];

/** The receipt stays in document flow so its text remains readable on narrow screens. */
export default function Receipt() {
  return (
    <div className="maintenance-receipt">
      <div className="receipt-paper">
        <div className="receipt-heading">
          <p>K O S I F L Y</p>
          <span>ONDERHOUD & HOSTING · PER MAAND</span>
        </div>
        <div className="receipt-divider" aria-hidden="true" />
        <ul className="receipt-lines">
          {entries.map((entry) => (
            <li key={entry.title}>
              <span className="receipt-icon">
                <img
                  src={`/figma/${entry.icon}.svg`}
                  width={entry.width}
                  height={entry.height}
                  alt=""
                  loading="lazy"
                />
              </span>
              <div>
                <div className="receipt-line-title">
                  <h3>{entry.title}</h3>
                  <span>INBEGREPEN</span>
                </div>
                <p>{entry.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="receipt-divider" aria-hidden="true" />
        <div className="receipt-total">
          <span>TOTAAL</span>
          <div>
            <strong>Eén vast bedrag</strong>
            <p>per maand, alles hierboven inbegrepen</p>
          </div>
        </div>
        <p className="receipt-note">Geen kleine lettertjes. Geen verrassingen.</p>
        <div className="receipt-barcode" aria-hidden="true">
          {barcode.map(([left, width]) => (
            <span key={left} style={{ left, width }} />
          ))}
        </div>
        <p className="receipt-thanks">BEDANKT EN TOT VOLGENDE MAAND</p>
      </div>
      <svg
        className="receipt-edge"
        viewBox="0 0 600 14"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 0H600L580 14L560 0L540 14L520 0L500 14L480 0L460 14L440 0L420 14L400 0L380 14L360 0L340 14L320 0L300 14L280 0L260 14L240 0L220 14L200 0L180 14L160 0L140 14L120 0L100 14L80 0L60 14L40 0L20 14L0 0Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
