import {
  Accent,
  CheckIcon,
  GradientIconTile,
  LIGHT_CARD,
  LightSection,
  ORBITRON_LABEL,
  SectionHeading,
} from "../shared";
import { EXTRAS, INCLUDED, type Extra } from "./Extras.data";

function ExtraCard({ extra }: { extra: Extra }) {
  const { title, price, unit, glyph } = extra;

  return (
    <li
      className={`flex h-[190px] flex-col items-start gap-[14px] overflow-clip p-[28px] ${LIGHT_CARD}`}
    >
      <GradientIconTile glyph={glyph} glyphBox={19.2} className="size-[40px] rounded-[10px]" />
      <h3 className="w-full font-manrope text-[20px] font-extrabold leading-[normal] text-ink">
        {title}
      </h3>
      <p className="flex items-baseline gap-[8px] whitespace-nowrap leading-[normal]">
        <span className="font-manrope text-[22px] font-extrabold text-brand">{price}</span>
        <span className="font-inter text-[13px] text-grey">{unit}</span>
      </p>
    </li>
  );
}

/** Sectie "Extra's" (1920 x 1088): losse onderdelen met prijs, en wat altijd inbegrepen is. */
export function Extras() {
  return (
    <LightSection id="extras" height={1088} className="overflow-clip">
      <SectionHeading
        eyebrow="Extra's"
        title={
          <>
            Extra&apos;s, wanneer
            <br />
            je ze <Accent>nodig</Accent> hebt.
          </>
        }
        titleLines={2}
        intro="Voeg toe wat je project nodig heeft, nu of later. Aan de prijzen hieronder, exclusief btw."
      />
      <ul data-reveal-group className="mx-[182px] mt-[62px] grid grid-cols-4 gap-[24px]">
        {EXTRAS.map((extra) => (
          <ExtraCard key={extra.title} extra={extra} />
        ))}
      </ul>
      <div
        data-reveal
        className="mx-[182px] mt-[48px] flex h-[76px] items-center justify-between rounded-[40px] border border-brand/18 bg-white px-[32px]"
      >
        <p className={`-mr-[2.42px] text-brand ${ORBITRON_LABEL.medium}`}>Altijd inbegrepen</p>
        <ul className="contents">
          {INCLUDED.map((item) => (
            <li key={item} className="flex items-center gap-[8px]">
              <CheckIcon tone="brand" />
              <span className="whitespace-nowrap font-inter text-[15px] font-semibold leading-[18px] text-ink">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </LightSection>
  );
}
