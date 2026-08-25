"use client";

import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12", className)}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  tone = "light",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark" | "paper";
  id?: string;
}) {
  const toneClass =
    tone === "dark"
      ? "bg-ink text-white"
      : tone === "paper"
      ? "bg-paper-soft text-ink"
      : "bg-white text-ink";
  return (
    <section id={id} className={cn("relative py-16 sm:py-20 lg:py-28", toneClass, className)}>
      {children}
    </section>
  );
}

export function Eyebrow({
  children,
  className,
  tone = "light",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-[0.28em]",
        tone === "dark" ? "text-gold" : "text-ink/60",
        className
      )}
    >
      <span className="h-px w-7 bg-current opacity-50" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "font-display text-4xl font-light leading-[1.1] tracking-tight sm:text-5xl lg:text-[52px]",
          align === "center" && "max-w-3xl"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-lg leading-relaxed sm:text-xl",
            tone === "dark" ? "text-white/60" : "text-ink/60",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
