const CHECKS = {
  /** Merkrode cirkel op een lichte achtergrond. */
  brand: { src: "/figma/pricing/shared/check-brand.svg", size: 20 },
  /** Idem, iets groter (vergelijkingstabel). */
  brandLarge: { src: "/figma/pricing/shared/check-brand-large.svg", size: 22 },
  /** Doorschijnend witte cirkel op een donkere achtergrond. */
  onDark: { src: "/figma/pricing/shared/check-on-dark.svg", size: 20 },
  /** Idem, met 16 % in plaats van 20 % dekking (uitgelicht websitepakket). */
  onDarkSoft: { src: "/figma/pricing/shared/check-on-dark-soft.svg", size: 20 },
} as const;

export type CheckTone = keyof typeof CHECKS;

/** Vinkje in een cirkel (Figma: Vinkje); `alt` blijft leeg tenzij het icoon zelf betekenis draagt. */
export function CheckIcon({ tone, alt = "" }: { tone: CheckTone; alt?: string }) {
  const { src, size } = CHECKS[tone];
  return <img src={src} width={size} height={size} alt={alt} className="shrink-0" />;
}
