const DIRECTIONS: Record<string, string> = { "↗": "up-right", "↓": "down" };

/**
 * Pijl achter een knoplabel. De vorm komt uit CSS (`app/styles/buttons-luxe.css`): een dun lijnicoon
 * waarvan de richting uit `data-dir` volgt. Gebruik: `Label <BtnArrow />` of `<BtnArrow glyph="↗" />`.
 */
export function BtnArrow({ glyph = "→" }: { glyph?: string }) {
  return (
    <span className="btn-arrow" data-dir={DIRECTIONS[glyph] ?? "right"} aria-hidden="true">
      {glyph}
    </span>
  );
}
