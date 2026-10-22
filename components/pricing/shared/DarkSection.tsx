import type { ComponentProps } from "react";
import { HeroBackdrop } from "@/components/ui/HeroBackdrop";

/**
 * Donkere sectie met dezelfde achtergrond als de hero's (verloop, gloed, puntraster en lijnen).
 * Inhoud die boven de achtergrond moet liggen, krijgt zelf `relative`.
 */
export function DarkSection({ className = "", children, ...props }: ComponentProps<"section">) {
  return (
    <section {...props} className={`hero-surface ${className}`}>
      <HeroBackdrop />
      {children}
    </section>
  );
}
