import type { ComponentProps, CSSProperties } from "react";

/** Hoek van het ongerekte Figma-kader (1920 x 1080), zoals Figma die toont. */
const DESIGN_ANGLE = 240.64;
const DESIGN_HEIGHT = 1080;
const DESIGN_WIDTH = 1920;
const STOPS = "#a5a5a5 0%, #fff 34.621%, #fff 69.719%, #a5a5a5 100%";

/**
 * Lichte sectieachtergrond (grijs, wit, wit, grijs). Zonder hoogte is dat het ongerekte ontwerp. Figma rekt het
 * verloop mee met het kader, waardoor de hoek met de hoogte meegroeit:
 * tan(hoek − 180°) = hoogte / (1080² / 1920). Afgerond op drie decimalen, zoals Figma.
 */
function lightSectionBackground(heightPx?: number): CSSProperties {
  const angle =
    heightPx === undefined
      ? DESIGN_ANGLE
      : 180 +
        (Math.atan(heightPx / ((DESIGN_HEIGHT * DESIGN_HEIGHT) / DESIGN_WIDTH)) * 180) / Math.PI;
  return { backgroundImage: `linear-gradient(${Number(angle.toFixed(3))}deg, ${STOPS})` };
}

type LightSectionProps = ComponentProps<"section"> & {
  /** Vaste hoogte in px; het verloop wordt op deze hoogte uitgerekt. Zonder waarde bepaalt de inhoud de hoogte. */
  height?: number;
  /** Houd het ongerekte ontwerpverloop ondanks `height` (sectie die korter is dan het kader van 1080 px). */
  unstretched?: boolean;
};

/** Sectie op de lichte achtergrond met het Figma-verloop. */
export function LightSection({ height, unstretched, style, ...props }: LightSectionProps) {
  return (
    <section
      {...props}
      style={{ height, ...lightSectionBackground(unstretched ? undefined : height), ...style }}
    />
  );
}
