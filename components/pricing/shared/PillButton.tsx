import Link from "next/link";
import type { ComponentProps } from "react";
import { withArrow } from "./arrow";

const TONES = {
  /** Omlijnd, op een lichte kaart. */
  outline: "text-brand ring-[1.5px] ring-inset ring-brand",
  /** Wit, op een donkere of rode kaart. */
  white: "bg-white text-brand",
  brand: "bg-brand text-white",
} as const;

const RADII = { 30: "rounded-[30px]", 40: "rounded-[40px]" } as const;

type PillButtonProps = Omit<ComponentProps<typeof Link>, "children" | "aria-label"> & {
  tone: keyof typeof TONES;
  radius?: keyof typeof RADII;
  /**
   * Zet de pijl in een eigen tekstknoop in plaats van in dezelfde als het label. Chrome rekent de tekst dan 1/64 px
   * breder, wat de pil bij "Maatwerk" 1 px breder maakt; dat is de bestaande afmeting.
   */
  splitArrow?: boolean;
  children: string;
};

/** Pilknop met pijl (Figma: Knop). Maat en typografie komen via `className`. */
export function PillButton({
  tone,
  radius = 40,
  splitArrow,
  className = "",
  children,
  ...props
}: PillButtonProps) {
  return (
    <Link
      {...props}
      aria-label={splitArrow ? undefined : children}
      className={`flex items-center justify-center font-inter font-semibold whitespace-nowrap ${RADII[radius]} ${TONES[tone]} ${className}`}
    >
      {splitArrow ? (
        <span>
          {children} <span aria-hidden>{"-->"}</span>
        </span>
      ) : (
        withArrow(children)
      )}
    </Link>
  );
}
