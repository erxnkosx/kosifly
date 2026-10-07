import Link from "next/link";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { HeroBackdrop } from "@/components/ui/HeroBackdrop";
import { ArrowRight, CalendarIcon, CheckCircle, MailIcon, PhoneIcon } from "@/components/ui/icons";
import { ContactForm } from "./ContactForm";

const options = [
  { icon: MailIcon, title: "Mail ons", sub: "info@kosifly.com", href: "mailto:info@kosifly.com" },
  {
    icon: PhoneIcon,
    title: "Bel ons",
    sub: "+32 (0)483 69 04 26  ·  ma–zo, 9–18u",
    href: "tel:+32483690426",
  },
  {
    icon: CalendarIcon,
    title: "Plan een gesprek van 30 minuten",
    sub: "Kies zelf een moment dat jou past",
    href: "mailto:info@kosifly.com?subject=Gesprek%20van%2030%20minuten",
  },
];

export function ContactHero() {
  return (
    <section className="service-hero contact-section">
      <HeroBackdrop />

      <div className="relative flex items-center justify-between px-[160px] py-[110px]">
        <RevealGroup
          className="contact-copy flex w-[620px] flex-col items-start"
          onMount
          delay={0.1}
        >
          <RevealItem>
            <Badge section="Contact" page="Laten we praten" />
          </RevealItem>
          <RevealItem
            as="h1"
            className="font-geist text-[88px] font-extrabold leading-[94px] tracking-[-0.04em] text-white"
          >
            Laten we
            <br />
            <span className="text-accent-gradient">kennismaken</span>.
          </RevealItem>
          <RevealItem
            as="p"
            className="font-inter text-[20px] leading-[32px] tracking-[0.02em] text-white/82"
          >
            Vertel ons wat je wil bereiken. Je krijgt binnen 24 uur
            <br />
            antwoord van de persoon die je project ook effectief bouwt.
          </RevealItem>
          <RevealItem className="mt-[44px] flex flex-col gap-[12px]">
            {options.map(({ icon: Icon, title, sub, href }) => (
              <Link
                key={title}
                href={href}
                className="flex w-[620px] items-center gap-[16px] rounded-[18px] border border-white/12 bg-white/5 py-[16px] pl-[16px] pr-[22px] backdrop-blur-[16px]"
              >
                <span className="flex size-[46px] shrink-0 items-center justify-center rounded-[12px] bg-accent-gradient text-white shadow-[0_0_16px_rgba(232,51,79,0.45)]">
                  <Icon />
                </span>
                <span className="flex flex-1 flex-col gap-[3px]">
                  <span className="font-inter text-[17px] font-semibold leading-[normal] text-white">
                    {title}
                  </span>
                  <span className="font-inter text-[15px] leading-[normal] text-white/65">
                    {sub}
                  </span>
                </span>
                <ArrowRight className="text-white/70" />
              </Link>
            ))}
          </RevealItem>
          <RevealItem as="ul" className="mt-[36px] flex gap-[26px] whitespace-nowrap">
            {["Antwoord binnen 24 uur", "Gratis en vrijblijvend", "Je spreekt de bouwer zelf"].map(
              (t) => (
                <li
                  key={t}
                  className="flex items-center gap-[8px] font-inter text-[15px] leading-[normal] text-white/70"
                >
                  <CheckCircle />
                  {t}
                </li>
              ),
            )}
          </RevealItem>
        </RevealGroup>
        <ContactForm />
      </div>
    </section>
  );
}
