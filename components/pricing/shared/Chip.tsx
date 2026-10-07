import type { ReactNode } from "react";

const BASE = "font-orbitron font-medium uppercase whitespace-nowrap";

const VARIANTS = {
  /** Levertijd op een lichte kaart. */
  pink: "rounded-[20px] bg-pink px-[12px] py-[6px] text-[10px] leading-[13px] tracking-[1.8px] text-brand",
  /** Levertijd op een donkere kaart. */
  glass:
    "rounded-[20px] bg-white/12 px-[12px] py-[6px] text-[10px] leading-[13px] tracking-[1.8px] text-white",
  /** Duur van een stap (kleiner). */
  small:
    "rounded-[20px] bg-pink px-[10px] py-[5px] text-[10px] leading-[13px] tracking-[1.8px] text-brand",
  /** "Meest gekozen" op de donkere websitekaart. */
  popularGlow:
    "rounded-[20px] bg-[linear-gradient(169.862deg,var(--brand-gradient-stops))] px-[12px] py-[7px] text-[10px] leading-[13px] tracking-[2.2px] text-white shadow-[0_0_18px_rgba(232,51,79,0.55)]",
  /** "Meest gekozen" op de uitgelichte maandkaart. */
  popularWhite:
    "rounded-[20px] bg-white px-[12px] py-[7px] text-[10px] leading-[13px] tracking-[2.2px] text-brand",
  /** "Meest gekozen" boven een kolom van de vergelijkingstabel. */
  popularCompact:
    "rounded-[12px] bg-brand px-[10px] py-[4px] text-[9px] leading-[11px] tracking-[1.62px] text-white",
} as const;

type ChipVariant = keyof typeof VARIANTS;

/** Orbitron-chip (Figma: Chip); plaatsing en breedte komen via `className`. */
export function Chip({
  variant,
  className = "",
  children,
}: {
  variant: ChipVariant;
  className?: string;
  children: ReactNode;
}) {
  return <span className={`${BASE} ${VARIANTS[variant]} ${className}`}>{children}</span>;
}

/** Het label "Meest gekozen" op een uitgelichte kaart of kolom. */
export function MostChosen({
  variant,
  className,
}: {
  variant: Extract<ChipVariant, `popular${string}`>;
  className?: string;
}) {
  return (
    <Chip variant={variant} className={className}>
      Meest gekozen
    </Chip>
  );
}
