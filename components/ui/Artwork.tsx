import type { CSSProperties, ReactNode } from "react";
/** Only decorative Figma compositions keep canvas coordinates. Page content uses normal flow. */
type ArtworkProps = {
  width: number;
  height: number;
  children: ReactNode;
  className?: string;
  label?: string;
  outsets?: Partial<Record<"top" | "right" | "bottom" | "left", number>>;
};

export function Artwork({
  width,
  height,
  children,
  className = "",
  label,
  outsets = {},
}: ArtworkProps) {
  const { top = 0, right = 0, bottom = 0, left = 0 } = outsets;
  const canvasWidth = width + left + right;
  const canvasHeight = height + top + bottom;
  return (
    <div
      className={`artwork ${className}`}
      style={
        {
          "--art-width": canvasWidth,
          "--art-height": canvasHeight,
          aspectRatio: `${canvasWidth}/${canvasHeight}`,
        } as CSSProperties
      }
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <div className="artwork-canvas">
        <div style={{ position: "absolute", left, top, width, height }}>{children}</div>
      </div>
    </div>
  );
}
