/**
 * Waarde van één cel, in de volgorde van de pakketten:
 * tekst, `true` (inbegrepen), `null` (niet inbegrepen) of een vinkje met toelichting.
 */
export type Cell = string | true | null | { check: string };

type ComparisonRow = {
  label: string;
  cells: readonly [Cell, Cell, Cell];
};

export const COMPARISON_ROWS: readonly ComparisonRow[] = [
  { label: "Aantal pagina's", cells: ["tot 3", "tot 8", "tot 20"] },
  { label: "Design op maat", cells: [true, true, true] },
  { label: "Mobiel eerst", cells: [true, true, true] },
  { label: "SEO-basis", cells: [true, true, true] },
  { label: "Teksten", cells: ["zelf aanleveren", "we schrijven mee", "volledig door ons"] },
  {
    label: "Formulieren",
    cells: ["contactformulier", "+ automatische bevestiging", "+ koppeling met je CRM"],
  },
  { label: "Google Bedrijfsprofiel", cells: [null, true, true] },
  { label: "Analytics", cells: [null, true, { check: "+ conversiedoelen" }] },
  { label: "Meertalig", cells: [null, "als extra", "NL, FR, EN"] },
  { label: "Boekings- of offertemodule", cells: [null, "als extra", true] },
  { label: "Lokale landingspagina's", cells: [null, null, true] },
  { label: "Feedbackrondes", cells: ["1", "2", "3"] },
  { label: "Training", cells: [null, true, true] },
  { label: "Nazorg", cells: ["30 dagen", "30 dagen", "30 dagen"] },
  { label: "Levertijd", cells: ["3 weken", "5 weken", "6-8 weken"] },
];
