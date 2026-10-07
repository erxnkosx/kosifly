/** Gloed achter de hero-scène van de homepage. */
export function SceneGlow({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width="1120"
      height="820"
      viewBox="0 0 1120 820"
      fill="none"
      className={className}
      style={style}
      aria-hidden
    >
      <defs>
        <filter
          id="scene-blur"
          x="0"
          y="0"
          width="1120"
          height="820"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="75" />
        </filter>
      </defs>
      <g filter="url(#scene-blur)">
        <ellipse cx="560" cy="410" rx="410" ry="260" fill="#B30A1F" fillOpacity="0.5" />
      </g>
    </svg>
  );
}
