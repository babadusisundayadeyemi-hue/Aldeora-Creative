"use client";

import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "horizontal" | "stacked" | "mark";
  tone?: "dark" | "light";
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
};

/**
 * Aldeora Creative logo.
 *
 * A refined editorial mark — a thin gold "A" formed by two strokes
 * inside a black rounded square, with a single blue accent dot at
 * the apex representing the creative lens / aperture.
 *
 * Wordmark pairs tight uppercase ALDEORA with spaced gold CREATIVE.
 */
export function Logo({
  variant = "horizontal",
  tone = "dark",
  className,
  markClassName,
  showWordmark = true,
}: LogoProps) {
  const isDark = tone === "dark";
  const wordColor = isDark ? "#0A0A0A" : "#FFFFFF";
  const subColor = "#C9A227";

  const mark = <LogoMark className={markClassName} />;

  if (variant === "mark") return mark;

  if (variant === "stacked") {
    return (
      <div className={cn("flex flex-col items-center gap-3", className)}>
        {mark}
        {showWordmark && (
          <div className="flex flex-col items-center leading-none">
            <span
              className="font-display text-2xl font-medium tracking-[0.04em]"
              style={{ color: wordColor }}
            >
              Aldeora
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

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      {mark}
      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span
            className="font-display text-[18px] font-medium tracking-[0.02em] sm:text-[20px]"
            style={{ color: wordColor }}
          >
            Aldeora
          </span>
          <span
            className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.42em] sm:text-[10px]"
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
 * Refined mark — thin gold "A" + blue dot, in a black rounded square.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-9 w-9", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="aldeora-mark-gold" x1="10" y1="34" x2="34" y2="10" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C9A227" />
          <stop offset="0.55" stopColor="#E8D58A" />
          <stop offset="1" stopColor="#C9A227" />
        </linearGradient>
      </defs>
      {/* rounded square background */}
      <rect x="0.5" y="0.5" width="43" height="43" rx="10" fill="#0A0A0A" />
      <rect x="1" y="1" width="42" height="42" rx="9.5" fill="none" stroke="rgba(201,162,39,0.18)" />
      {/* gold A — two thin strokes meeting at apex */}
      <path
        d="M22 10 L33 35"
        stroke="url(#aldeora-mark-gold)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M22 10 L11 35"
        stroke="url(#aldeora-mark-gold)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* crossbar */}
      <path
        d="M16 27 H28"
        stroke="#C9A227"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* blue accent dot — apex / lens */}
      <circle cx="22" cy="20.5" r="1.8" fill="#1557B0" />
    </svg>
  );
}
