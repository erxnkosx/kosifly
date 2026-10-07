"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";
import { REVEAL_TRANSITION } from "./presets";

/** Zet de standaardovergang en respecteert de systeemvoorkeur voor verminderde beweging. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={REVEAL_TRANSITION}>
      {children}
    </MotionConfig>
  );
}
