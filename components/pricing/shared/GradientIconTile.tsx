/** Uit Figma geëxporteerd icoon met zijn natuurlijke maat en vaste positie binnen het icoonvak. */
export type Glyph = {
  src: string;
  width: number;
  height: number;
  left: number;
  top: number;
};

type GradientIconTileProps = {
  glyph: Glyph;
  /** Zijde van het icoonvak in px (Figma: 24 resp. 19,2). */
  glyphBox: number;
  /** Maat en afronding van de tegel zelf. */
  className: string;
};

/** Rode verloopstegel met een geëxporteerd icoon (Figma: Icoon). */
export function GradientIconTile({ glyph, glyphBox, className }: GradientIconTileProps) {
  return (
    <span className={`flex shrink-0 items-center justify-center bg-brand-gradient ${className}`}>
      <span className="relative block" style={{ width: glyphBox, height: glyphBox }}>
        <img
          src={glyph.src}
          alt=""
          width={glyph.width}
          height={glyph.height}
          className="absolute"
          style={{ left: glyph.left, top: glyph.top }}
        />
      </span>
    </span>
  );
}
