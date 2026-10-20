import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { ReviewCarousel, type ReviewItem } from "./ReviewCarousel";

function GoogleLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M18.8 10.21c0-.65-.06-1.28-.17-1.88H10v3.55h4.93c-.21 1.14-.86 2.1-1.84 2.74v2.33h2.97c1.74-1.6 2.74-3.95 2.74-6.74Z"
      />
      <path
        fill="#34A853"
        d="M10 19.17c2.47 0 4.55-.82 6.07-2.22l-2.98-2.33c-.81.55-1.85.9-3.09.9-2.38 0-4.41-1.61-5.13-3.77H1.82v2.36A9.17 9.17 0 0 0 10 19.17Z"
      />
      <path
        fill="#FBBC05"
        d="M4.87 11.74a5.5 5.5 0 0 1 0-3.48V5.89H1.82a9.16 9.16 0 0 0 0 8.22l3.05-2.37Z"
      />
      <path
        fill="#EA4335"
        d="M10 4.48c1.35 0 2.55.47 3.51 1.37l2.62-2.63A8.8 8.8 0 0 0 10 .83a9.17 9.17 0 0 0-8.18 5.06l3.05 2.37C5.59 6.09 7.62 4.48 10 4.48Z"
      />
    </svg>
  );
}
function Stars() {
  return (
    <svg
      className="testimonial-stars"
      width="143"
      height="26"
      viewBox="0 0 132 24"
      role="img"
      aria-label="Vijf sterren"
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          transform={"translate(" + i * 27 + " 0)"}
          fill="#F9AB00"
          d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z"
        />
      ))}
    </svg>
  );
}

// PLACEHOLDER: verzonnen reviews om het ontwerp mee af te werken. Vervang ze door echte
// Google-reviews voor de site live gaat.
const reviews: ReviewItem[] = [
  {
    title: "Meer ritten, minder telefoontjes.",
    text: "Klanten boeken nu zelf online, ook 's nachts. De site is snel, werkt perfect op de gsm en we worden veel beter gevonden in de regio.",
    name: "Taxi Bornem",
    company: "Personenvervoer · Bornem",
    initial: "TB",
  },
  {
    title: "Ons vakmanschap eindelijk goed in beeld.",
    text: "Kosifly begreep meteen wat we doen. De site legt onze inspecties helder uit en aanvragen komen nu gestructureerd binnen.",
    name: "Primelabs",
    company: "Drone-inspecties · België",
    initial: "PL",
  },
  {
    title: "Helder, persoonlijk en snel opgeleverd.",
    text: "Van het eerste gesprek tot de livegang wisten we waar we aan toe waren. Onze nieuwe site past helemaal bij wie we zijn.",
    name: "Panero",
    company: "Klant van Kosifly",
    initial: "PA",
  },
];

export function Reviews() {
  return (
    <section className="service-section light-section home-reviews">
      <Reveal className="section-heading">
        <span className="section-eyebrow">REVIEWS</span>
        <h2 className="reviews-heading">
          Bedrijven die op{" "}
          <Image src="/brand/kosifly-logo-text-red.png" alt="Kosifly" width={1600} height={194} />{" "}
          vertrouwen.
        </h2>
        <p>Een helder proces, korte lijnen en aandacht voor jouw zaak.</p>
      </Reveal>
      <Reveal>
        <ReviewCarousel
          reviews={reviews}
          topline={
            <>
              <Stars />
              <GoogleLogo />
            </>
          }
        />
      </Reveal>
    </section>
  );
}
