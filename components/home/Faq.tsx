import { FaqIntro } from "@/components/FaqIntro";
import { ServiceFaq } from "@/components/services/Interactions";
import design from "@/data/services-design.json";
const questions = [
  "Hoelang duurt het bouwen van een website?",
  "Wat kost een website bij Kosifly?",
  "Hoelang duurt het voordat mijn website live gaat?",
  "Is de website daarna volledig van mij?",
  "Verzorgen jullie ook hosting en onderhoud?",
  "Bouwen jullie meer dan alleen websites?",
  "Kan ik de website nadien zelf aanpassen?",
  "Wat als het concept me niet overtuigt?",
];
const answers = [
  design.webdesign.faq[2].a,
  design.webdesign.faq[0].a,
  design.webdesign.faq[2].a,
  design.webdesign.faq[3].a,
  design.webdesign.faq[6].a,
  "Ja. We bouwen ook web apps en maatwerksoftware en helpen met lokale SEO en automatisaties.",
  design.webdesign.faq[4].a,
  design.webdesign.faq[7].a,
];
export function Faq() {
  return (
    <section className="service-section light-section faq-section home-faq">
      <FaqIntro />
      <ServiceFaq items={questions.map((q, i) => ({ q, a: answers[i] }))} initialOpen={null} />
    </section>
  );
}
