import type { ReactNode } from "react";

type Tone = "light" | "dark";

const TONES = {
  light: {
    eyebrow: "text-brand",
    title: "text-ink [--heading-accent:var(--color-brand)]",
    intro: "text-grey",
  },
  dark: {
    eyebrow: "text-brand",
    title: "text-white [--heading-accent:var(--color-brand-bright)]",
    intro: "text-white/70",
  },
} as const;

/**
 * Eyebrow-varianten. De streepjes zijn gewone tekens met een negatieve letterafstand, zodat ze als een doorlopende
 * lijn lezen. Figma levert per sectie een iets andere rij; die verschillen zijn pixelcompensaties.
 */
const DASHES = {
  /** 12 streepjes van 20 px, letterafstand −5 px (websites, vergelijking, maatwerk, extra's). */
  dashes: {
    box: "w-[490px] -translate-x-px translate-y-px leading-[16.5px]",
    dash: "font-extralight tracking-[-5px]",
    gap: "font-extralight",
    space: "",
    label: "tracking-[5px]",
  },
  /** Letterafstand −5,2 px in een breder vak (calculator). */
  dashesLoose: {
    box: "w-[640px] -translate-x-[2px] leading-[16.5px]",
    dash: "font-extralight tracking-[-5.2px]",
    gap: "font-extralight",
    space: "",
    label: "tracking-[5px]",
  },
  /** Streepjes van 16 px, letterafstand −3,2 px (maandpakketten). */
  dashesSmall: {
    box: "relative -left-[1.5px] top-px w-[490px] leading-[0]",
    dash: "text-[16px] font-extralight leading-[16.5px] tracking-[-3.2px]",
    gap: "text-[16px] font-extralight leading-[16.5px]",
    space: "leading-[16.5px]",
    label: "leading-[16.5px] tracking-[5px]",
  },
} as const;

const RULES = {
  /** Gecentreerd label tussen twee lijnen (zo werkt het). */
  rules: {
    box: "h-[27px] -translate-x-[2px] font-manrope text-[20px] font-extrabold leading-[16.5px] tracking-[5px] text-brand",
    rule: "mt-[9px] h-px w-[42px] bg-brand",
    label: "ml-[10px] mt-px",
    trailingRule: true,
  },
  /** Linksuitgelijnd label na een lijn (veelgestelde vragen). */
  ruleLeft: {
    box: "ml-[23px] h-[82px] font-michroma text-[22px] leading-[70px] tracking-[1px] text-brand",
    rule: "ml-px mt-[38px] h-[2px] w-[38px] bg-brand",
    label: "ml-[18.5px] mt-px",
    trailingRule: false,
  },
} as const;

type EyebrowVariant = keyof typeof DASHES | keyof typeof RULES;

function Dashes({ dash, gap }: { dash: string; gap: string }) {
  return (
    <>
      <span aria-hidden className={dash}>
        ------------
      </span>
      <span aria-hidden className={gap}>
        {" "}
      </span>
    </>
  );
}

/** Klein label boven een kop: tussen streepjes of lijnen. */
export function Eyebrow({
  label,
  variant = "dashes",
  tone = "light",
}: {
  label: string;
  variant?: EyebrowVariant;
  tone?: Tone;
}) {
  if (variant === "rules" || variant === "ruleLeft") {
    const { box, rule, label: labelClass, trailingRule } = RULES[variant];
    return (
      <p className={`flex items-start ${box}`}>
        <span aria-hidden className={rule} />
        <span className={labelClass}>{label}</span>
        {trailingRule && <span aria-hidden className={`ml-px ${rule}`} />}
      </p>
    );
  }

  const { box, dash, gap, space, label: labelClass } = DASHES[variant];
  return (
    <p
      className={`h-[27px] ${box} whitespace-pre-wrap text-center font-manrope text-[20px] font-extrabold uppercase tracking-[1.98px] ${TONES[tone].eyebrow}`}
    >
      <Dashes dash={dash} gap={gap} />
      <span className={space}> </span>
      <span className={labelClass}>{label}</span>
      <Dashes dash={dash} gap={gap} />
    </p>
  );
}

/** Accentwoord in een koptitel; de kleur volgt de `tone` van de omringende `SectionHeading`. */
export function Accent({ children }: { children: ReactNode }) {
  return <span className="text-(color:--heading-accent)">{children}</span>;
}

type SectionHeadingProps = {
  eyebrow: string;
  eyebrowVariant?: EyebrowVariant;
  tone?: Tone;
  /** Titel, met `<Accent>` voor het rode woord. */
  title: ReactNode;
  titleId?: string;
  /** Aantal regels van de titel: bij twee regels is de marge naar de inleiding 18 px i.p.v. 30 px (Figma). */
  titleLines?: 1 | 2;
  intro?: string;
};

/** Gecentreerde sectiekop van de prijzenpagina: eyebrow, titel en optionele inleiding. */
export function SectionHeading({
  eyebrow,
  eyebrowVariant,
  tone = "light",
  title,
  titleId,
  titleLines = 1,
  intro,
}: SectionHeadingProps) {
  const colors = TONES[tone];
  return (
    <div data-reveal className="relative flex flex-col items-center pt-[96px]">
      <Eyebrow label={eyebrow} variant={eyebrowVariant} tone={tone} />
      <h2
        id={titleId}
        className={`mt-[17px] w-[1108px] text-center font-manrope text-[70px] font-extrabold leading-[80px] tracking-[-0.8704px] ${colors.title}`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`${titleLines === 2 ? "mt-[18px]" : "mt-[30px]"} w-[934px] text-center font-manrope text-[23px] leading-[30px] tracking-[2.3px] ${colors.intro}`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
