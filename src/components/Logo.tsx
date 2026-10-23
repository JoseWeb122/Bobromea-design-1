import { useId } from "react";
import { cn } from "../utils/cn";

/**
 * Recreated BRC / Bob Romea Contracting identity mark.
 * The roofline and BRC monogram sit at left, with the company lockup at right.
 */
export function BrandLogo({
  className,
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  const uid = useId().replace(/:/g, "");
  const gold = `gold-${uid}`;
  const green = `green-${uid}`;
  return (
    <svg
      viewBox="0 0 348 92"
      className={cn("h-12 w-auto shrink-0", className)}
      role="img"
      aria-label="BRC — Bob Romea Contracting, Building on Truth"
    >
      <defs>
        <linearGradient id={gold} x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor="#e3c987" />
          <stop offset="33%" stopColor="#c3a15c" />
          <stop offset="58%" stopColor="#ad8a45" />
          <stop offset="82%" stopColor="#d5b875" />
          <stop offset="100%" stopColor="#a9853f" />
        </linearGradient>
        <linearGradient id={green} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2f7d55" />
          <stop offset="55%" stopColor="#1e6743" />
          <stop offset="100%" stopColor="#174f35" />
        </linearGradient>
      </defs>

      {/* Emblem: green roofline with BRC monogram */}
      <g>
        <path
          d="M60 12h10v27H60z"
          fill={`url(#${green})`}
          stroke="#164b32"
          strokeWidth="1.2"
        />
        <path
          d="M37 3 72 38H60L37 16 14 38H2Z"
          fill={`url(#${green})`}
          stroke="#164b32"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <path
          d="M37 23 57 43H46L37 34 28 43H17Z"
          fill={`url(#${green})`}
          stroke="#164b32"
          strokeWidth="1.1"
          strokeLinejoin="round"
        />
        <text
          x="1"
          y="86"
          fill={`url(#${gold})`}
          stroke="#8c6a2f"
          strokeWidth="0.55"
          paintOrder="stroke"
          fontFamily="Manrope, ui-sans-serif, system-ui, sans-serif"
          fontSize="42"
          fontWeight="800"
          letterSpacing="1"
        >
          BRC
        </text>
      </g>

      {/* Wordmark */}
      <g>
        <text
          x="100"
          y="32"
          fill={onDark ? "#ffffff" : "#2c323a"}
          fontFamily="Manrope, ui-sans-serif, system-ui, sans-serif"
          fontSize="22.5"
          fontWeight="800"
          letterSpacing="0.3"
        >
          BOB ROMEA
        </text>
        <text
          x="100"
          y="56"
          fill={onDark ? "#ffffff" : "#2c323a"}
          fontFamily="Manrope, ui-sans-serif, system-ui, sans-serif"
          fontSize="22.5"
          fontWeight="800"
          letterSpacing="0.3"
        >
          CONTRACTING
          <tspan fontSize="11" dx="1" dy="-9">
            ™
          </tspan>
        </text>
        <line
          x1="100"
          y1="65"
          x2="330"
          y2="65"
          stroke={onDark ? "rgba(255,255,255,0.3)" : "#cfc8b8"}
          strokeWidth="0.8"
        />
        <text
          x="100"
          y="83"
          fill={onDark ? "rgba(255,255,255,0.65)" : "#6e6a60"}
          fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
          fontSize="13.5"
          fontWeight="500"
          letterSpacing="0.2"
        >
          Building on Truth
          <tspan fontSize="8.5" dx="1" dy="-4">
            ™
          </tspan>
        </text>
      </g>
    </svg>
  );
}

/** Compact emblem used where the wordmark would be too small. */
export function BrandMark({ className }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const gold = `gold-mark-${uid}`;
  const green = `green-mark-${uid}`;
  return (
    <svg
      viewBox="0 0 76 92"
      className={cn("h-12 w-auto", className)}
      role="img"
      aria-label="BRC roofline emblem"
    >
      <defs>
        <linearGradient id={gold} x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor="#e3c987" />
          <stop offset="45%" stopColor="#c09a52" />
          <stop offset="100%" stopColor="#a9853f" />
        </linearGradient>
        <linearGradient id={green} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2f7d55" />
          <stop offset="100%" stopColor="#174f35" />
        </linearGradient>
      </defs>
      <path d="M60 12h10v27H60z" fill={`url(#${green})`} />
      <path d="M37 3 72 38H60L37 16 14 38H2Z" fill={`url(#${green})`} />
      <path d="M37 23 57 43H46L37 34 28 43H17Z" fill={`url(#${green})`} />
      <text
        x="1"
        y="86"
        fill={`url(#${gold})`}
        fontFamily="Manrope, ui-sans-serif, system-ui, sans-serif"
        fontSize="42"
        fontWeight="800"
      >
        BRC
      </text>
    </svg>
  );
}
