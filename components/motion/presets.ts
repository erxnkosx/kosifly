import type { Transition, Variants } from "framer-motion";

/** Zachte "ease-out-expo"-curve, gedeeld door alle animaties zodat de site één beweging heeft. */
export const EASE = [0.22, 1, 0.36, 1] as const;

export const REVEAL_DISTANCE = 12;

export const REVEAL_TRANSITION: Transition = { duration: 0.28, ease: EASE };

export const STAGGER = 0.04;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: REVEAL_DISTANCE },
  show: { opacity: 1, y: 0, transition: REVEAL_TRANSITION },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.28, ease: EASE } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: REVEAL_DISTANCE },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.28, ease: EASE } },
};

/** Dezelfde varianten, maar met een vertraging op de `show`-overgang. */
export function delayed(variants: Variants, delay: number): Variants {
  const show = variants.show;
  if (typeof show !== "object" || show === null) return variants;
  const transition = "transition" in show ? show.transition : undefined;
  return { ...variants, show: { ...show, transition: { ...transition, delay } } };
}
