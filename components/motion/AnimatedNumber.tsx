"use client";

import { animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { EASE } from "./presets";

/**
 * Telt zacht naar een nieuwe waarde. De eerste render toont meteen de eindwaarde,
 * zodat server-HTML en inhoud zonder JavaScript kloppen.
 */
export function AnimatedNumber({
  value,
  format = (n) => String(Math.round(n)),
}: {
  value: number;
  format?: (value: number) => string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const shown = useRef(value);

  useEffect(() => {
    const node = ref.current;
    if (!node || shown.current === value) return;
    const controls = animate(shown.current, value, {
      duration: 0.6,
      ease: EASE,
      onUpdate: (latest) => {
        shown.current = latest;
        node.textContent = format(latest);
      },
      onComplete: () => {
        shown.current = value;
        node.textContent = format(value);
      },
    });
    return () => controls.stop();
  }, [value, format]);

  return <span ref={ref}>{format(value)}</span>;
}
