import { Eyebrow, LightSection } from "../shared";
import { faqItems } from "./PricingFaq.data";
import { PricingFaqAccordion } from "./PricingFaqAccordion";

const contactLinks = [
  {
    href: "mailto:info@kosifly.com",
    label: "info@kosifly.com",
    icon: "/figma/pricing/faq/2a629.svg",
    className: "-ml-px gap-[12px]",
    labelClassName: "mt-[9px]",
  },
  {
    href: "tel:+32483690426",
    label: "+32 (0)483 69 04 26",
    icon: "/figma/pricing/faq/8996d.svg",
    className: "mt-px gap-[11px]",
    labelClassName: "mt-[11px]",
  },
];

/** Sectie "Veelgestelde vragen" (1920 x min. 1080): kop met contactkaart en accordeon. */
export function PricingFaq() {
  return (
    <LightSection
      id="faq"
      aria-labelledby="faq-title"
      className="relative mx-auto flex min-h-[1080px] w-[1920px] items-start overflow-hidden pl-[89px] pt-[100px]"
    >
      <div className="mt-[34px] flex w-[702px] shrink-0 flex-col">
        <Eyebrow label="VEELGESTELDE VRAGEN" variant="ruleLeft" />
        <h2
          id="faq-title"
          className="relative ml-[23px] font-manrope text-[86px] font-extrabold leading-[90px] tracking-[-0.8704px] text-[#2b2929]"
        >
          Alles wat je wil <br />
          weten voor <br />
          we starten.
          <img
            src="/figma/pricing/faq/a1a9d.svg"
            alt=""
            width={194}
            height={8}
            className="absolute left-[277px] top-[181px]"
          />
          <img
            src="/figma/pricing/faq/cc911.svg"
            alt=""
            width={470}
            height={8}
            className="absolute left-px top-[272px]"
          />
        </h2>
        <div className="relative mt-[145px] h-[278px] w-[592px] rounded-[15px] border border-brand px-[33px] pt-[27px]">
          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 grid h-[1078px] w-[1392px] -translate-x-1/2 -translate-y-1/2 place-items-center [mask-composite:exclude] [mask-image:linear-gradient(#000,#000),linear-gradient(#000,#000)] [mask-position:0_0,center] [mask-repeat:no-repeat] [mask-size:100%_100%,592px_278px]"
          >
            <span className="h-[298px] w-[612px] rounded-[25px] border-[21px] border-brand blur-[125px]" />
          </span>
          <p className="w-[524px] font-manrope text-[24px] font-extrabold leading-[40px] tracking-[-0.8704px] text-black">
            Staat jouw vraag er niet bij?
            <br />
            Stel ze gerust — je krijgt binnen 24 uur antwoord van iemand die het project zelf zou
            bouwen.
          </p>
          <ul className="mt-[26px]">
            {contactLinks.map(({ href, label, icon, className, labelClassName }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`flex items-start font-inter text-[20px] leading-[24.288px] text-black ${className}`}
                >
                  <img src={icon} alt="" width={40} height={40} className="shrink-0" />
                  <span className={labelClassName}>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <PricingFaqAccordion items={faqItems} />
    </LightSection>
  );
}
