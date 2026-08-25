"use client";

import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "horizontal" | "stacked" | "mark";
  tone?: "dark" | "light"; // dark = for light backgrounds, light = for dark backgrounds
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
};

/**
 * Aldeora Creative logo.
 *
 * The mark is an abstract aperture/peak formed by a black rounded square with
 * a stylized gold "A" stroke and a blue accent dot — symbolizing creative
 * focus, premium craft and digital precision.
 *
 * Wordmark: ALDEORA in tight uppercase + CREATIVE in spaced gold caps below.
 */
export function Logo({
  variant = "horizontal",
  tone = "dark",
  className,
  markClassName,
  showWordmark = true,
}: LogoProps) {
  const isDark = tone === "dark"; // dark text on light bg
  const wordColor = isDark ? "#0A0A0A" : "#FFFFFF";
  const subColor = "#C9A227"; // gold regardless

  const mark = <LogoMark className={markClassName} />;

  if (variant === "mark") {
    return mark;
  }

  if (variant === "stacked") {
    return (
      <div className={cn("flex flex-col items-center gap-3", className)}>
        {mark}
        {showWordmark && (
          <div className="flex flex-col items-center leading-none">
            <span
              className="font-display text-2xl font-bold tracking-[0.08em]"
              style={{ color: wordColor }}
            >
              ALDEORA
            </span>
            <span
              className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.55em]"
              style={{ color: subColor }}
            >
              Creative
            </span>
          </div>
        )}
      </div>
    );
  }

  // horizontal (default)
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      {mark}
      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span
            className="font-display text-[17px] font-bold tracking-[0.08em] sm:text-[19px]"
            style={{ color: wordColor }}
          >
            ALDEORA
          </span>
          <span
            className="mt-1 text-[9px] font-medium uppercase tracking-[0.42em] sm:text-[10px]"
            style={{ color: subColor }}
          >
            Creative
          </span>
        </div>
      )}
    </div>
  );
}

/**
 * The standalone mark — a black rounded square with a gold "A" and blue dot.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-9 w-9", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="aldeora-mark-bg" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0A0A0A" />
          <stop offset="1" stopColor="#1C1C1C" />
        </linearGradient>
        <linearGradient id="aldeora-mark-gold" x1="10" y1="36" x2="38" y2="12" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C9A227" />
          <stop offset="0.55" stopColor="#E8D58A" />
          <stop offset="1" stopColor="#C9A227" />
        </linearGradient>
      </defs>
      {/* rounded square background */}
      <rect x="0.5" y="0.5" width="47" height="47" rx="11" fill="url(#aldeora-mark-bg)" stroke="rgba(255,255,255,0.06)" />
      {/* subtle inner highlight */}
      <rect x="1.5" y="1.5" width="45" height="45" rx="10" fill="none" stroke="rgba(201,162,39,0.18)" />
      {/* gold A — two strokes meeting at apex */}
      <path
        d="M24 11 L34.5 37"
        stroke="url(#aldeora-mark-gold)"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M24 11 L13.5 37"
        stroke="url(#aldeora-mark-gold)"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      {/* crossbar */}
      <path
        d="M17.5 28.5 H30.5"
        stroke="#C9A227"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {/* blue accent dot — aperture / lens reference */}
      <circle cx="24" cy="22.5" r="2.2" fill="#1557B0" />
    </svg>
  );
}
