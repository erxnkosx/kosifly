export type StepData = {
  duration: string;
  title: string;
  text: string;
  /** Wat de klant in deze stap doet. */
  you: string;
};

export const STEPS: readonly StepData[] = [
  {
    duration: "30 MIN",
    title: "Gratis gesprek",
    text: "Je vertelt wat je wil bereiken. Wij stellen de juiste vragen en denken mee.",
    you: "plant een moment dat jou past",
  },
  {
    duration: "BINNEN 2 WERKDAGEN",
    title: "Voorstel met vaste prijs",
    text: "Je krijgt een helder voorstel: wat we doen, wanneer en voor welke prijs.",
    you: "keurt het voorstel goed",
  },
  {
    duration: "40 % BIJ START",
    title: "We gaan van start",
    text: "We plannen de kick-off. De andere helft betaal je pas bij de livegang.",
    you: "betaalt de rest bij de livegang",
  },
];

export const PAYMENT_TERMS: readonly string[] = [
  "Alle prijzen excl. 21 % btw",
  "Projecten: 40 % bij start, 60 % bij livegang",
  "Maandpakketten: per maand gefactureerd",
];
