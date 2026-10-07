import type { ComponentProps } from "react";

type DarkSectionProps = ComponentProps<"section"> & {
  /** Uit Figma geëxporteerde achtergrondafbeelding (gloed), over de volledige sectie uitgerekt. */
  backdrop: { src: string; width: number; height: number };
};

/**
 * Sectie op de donkere achtergrond (#080304) met een gloedafbeelding eronder.
 * Inhoud die boven de afbeelding moet liggen, krijgt zelf `relative`.
 */
export function DarkSection({ backdrop, className = "", children, ...props }: DarkSectionProps) {
  return (
    <section {...props} className={`relative bg-[#080304] ${className}`}>
      <img
        src={backdrop.src}
        width={backdrop.width}
        height={backdrop.height}
        alt=""
        className="absolute inset-0 size-full max-w-none"
      />
      {children}
    </section>
  );
}
