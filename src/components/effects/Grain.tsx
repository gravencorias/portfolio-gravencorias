export function Grain() {
  return (
    <svg className="gn-grain" xmlns="http://www.w3.org/2000/svg">
      <filter id="gnNoise">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#gnNoise)" />
    </svg>
  );
}
