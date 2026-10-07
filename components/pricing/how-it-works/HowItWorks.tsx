import { Accent, Chip, LIGHT_CARD, LightSection, SectionHeading } from "../shared";
import { PAYMENT_TERMS, STEPS, type StepData } from "./HowItWorks.data";

function Step({ number, duration, title, text, you }: StepData & { number: number }) {
  return (
    <li className="flex flex-col items-center gap-[20px]">
      <span
        aria-hidden
        className="flex size-[56px] shrink-0 items-center justify-center rounded-[28px] bg-brand-gradient font-manrope text-[20px] font-extrabold leading-[normal] text-white shadow-[0_0_0_4px_#fff,0_0_20px_4px_rgba(232,51,79,0.45)]"
      >
        {number}
      </span>
      <div className={`flex w-full flex-1 flex-col items-start gap-[12px] p-[24px] ${LIGHT_CARD}`}>
        <Chip variant="small">{duration}</Chip>
        <h3 className="font-manrope text-[22px] font-extrabold leading-[28px] tracking-[-0.1914px] text-ink">
          {title}
        </h3>
        <p className="font-manrope text-[16px] leading-[24px] text-grey">{text}</p>
        <hr className="mt-auto h-px w-full shrink-0 border-0 bg-[#ebebeb]" />
        <p className="flex w-full gap-[10px] leading-[20px]">
          <span className="font-orbitron text-[10px] font-medium tracking-[1.8px] text-brand">
            JIJ
          </span>
          <span className="font-inter text-[14px] text-[#404040]">{you}</span>
        </p>
      </div>
    </li>
  );
}

/** Sectie "Zo werkt het" (1920 x 900): drie stappen en de betaalafspraken. */
export function HowItWorks() {
  return (
    <LightSection
      id="zo-werkt-het"
      aria-labelledby="zo-werkt-het-title"
      height={900}
      unstretched
      className="relative mx-auto flex w-[1920px] flex-col items-center"
    >
      <SectionHeading
        eyebrow="ZO WERKT HET"
        eyebrowVariant="rules"
        title={
          <>
            Van vraag tot <Accent>vaste prijs</Accent>.
          </>
        }
        titleId="zo-werkt-het-title"
        intro="In drie stappen weet je precies wat je krijgt en wat het kost. Pas dan beslis je."
      />
      <div className="relative mt-[50px] h-[330px] w-[1740px]">
        <span
          aria-hidden
          className="absolute left-[260px] top-[26px] h-[4px] w-[1220px] rounded-[2px] bg-linear-to-r from-[#f2d1d6] to-[#e8334f]"
        />
        <ol data-reveal-group className="relative grid h-full grid-cols-3 gap-x-[90px]">
          {STEPS.map((step, index) => (
            <Step key={step.title} number={index + 1} {...step} />
          ))}
        </ol>
      </div>
      <ul data-reveal-group className="mt-[56px] flex gap-[14px]">
        {PAYMENT_TERMS.map((term) => (
          <li
            key={term}
            className="whitespace-nowrap rounded-[30px] border border-[rgba(129,0,18,0.2)] bg-white px-[18px] py-[12px] font-inter text-[15px] font-semibold leading-[normal] text-ink"
          >
            {term}
          </li>
        ))}
      </ul>
    </LightSection>
  );
}
