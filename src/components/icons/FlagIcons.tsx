import type { SVGProps } from "react";

type FlagProps = SVGProps<SVGSVGElement> & { size?: number };

/**
 * Small flat national flags used as visual accents next to country/location
 * labels. Rendered as inline SVG rather than Unicode flag emoji because
 * Windows (Segoe UI Emoji) does not render flag emoji as flags — it falls
 * back to plain two-letter country codes, which would look broken.
 */
export function UsaFlagIcon({ size = 20, ...props }: FlagProps) {
  const height = (size * 14) / 20;
  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 20 14"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden={props["aria-hidden"] ?? "true"}
      {...props}
    >
      <rect width="20" height="14" fill="#B22234" />
      {[1, 3, 5, 7, 9, 11, 13].map((y) => (
        <rect key={y} y={y} width="20" height="1" fill="#ffffff" />
      ))}
      <rect width="9" height="7" fill="#3C3B6E" />
    </svg>
  );
}

export function VenezuelaFlagIcon({ size = 20, ...props }: FlagProps) {
  const height = (size * 14) / 20;
  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 20 14"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden={props["aria-hidden"] ?? "true"}
      {...props}
    >
      <rect width="20" height="14" fill="#00247D" />
      <rect width="20" height="4.67" fill="#FFCC00" />
      <rect y="9.33" width="20" height="4.67" fill="#CF142B" />
      {[...Array(7)].map((_, i) => {
        const angle = -90 + (i - 3) * 18;
        const rad = (angle * Math.PI) / 180;
        const cx = 10 + 3.1 * Math.cos(rad);
        const cy = 7 + 3.1 * Math.sin(rad);
        return <circle key={i} cx={cx} cy={cy} r="0.6" fill="#ffffff" />;
      })}
    </svg>
  );
}

export function ColombiaFlagIcon({ size = 20, ...props }: FlagProps) {
  const height = (size * 14) / 20;
  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 20 14"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden={props["aria-hidden"] ?? "true"}
      {...props}
    >
      <rect width="20" height="14" fill="#FCD116" />
      <rect y="7" width="20" height="3.5" fill="#003893" />
      <rect y="10.5" width="20" height="3.5" fill="#CE1126" />
    </svg>
  );
}
