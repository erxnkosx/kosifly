import Link from "next/link";
import type { ComponentProps } from "react";

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
  children: string;
};

/** Pilknop met pijl (Figma: Knop). Maat en typografie komen via `className`. */
export function PillButton({
  tone,
  radius = 40,
  className = "",
  children,
  ...props
}: PillButtonProps) {
  return (
    <Link
      {...props}
      aria-label={children}
      className={`pill-button pill-${tone} flex items-center justify-center font-inter font-semibold whitespace-nowrap ${RADII[radius]} ${TONES[tone]} ${className}`}
    >
      {/* Label en pijl in eigen elementen; de pijl is een lijnicoon (buttons-luxe.css). */}
      <span className="pill-label">{children}</span>{" "}
      <span className="btn-arrow" data-dir="right" aria-hidden="true">
        {"-->"}
      </span>
    </Link>
  );
}
