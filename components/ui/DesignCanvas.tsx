import type { ReactNode } from "react";
import styles from "./DesignCanvas.module.css";

/**
 * Renders children on the 1920px Figma canvas and scales the canvas to the
 * available width, so Figma pixel values can be used 1:1 in section code.
 */
export function DesignCanvas({ children }: { children: ReactNode }) {
  return (
    <div className={styles.frame}>
      <div className={styles.canvas}>{children}</div>
    </div>
  );
}
