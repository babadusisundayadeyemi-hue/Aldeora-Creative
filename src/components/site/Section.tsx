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
    <div className={cn("mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16", className)}>
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
    <section id={id} className={cn("relative py-20 sm:py-24 lg:py-32", toneClass, className)}>
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
        "inline-flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.3em]",
        tone === "dark" ? "text-gold" : "text-ink/50",
        className
      )}
    >
      <span className="h-px w-8 bg-current opacity-40" />
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
        "flex flex-col gap-6",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "font-display text-4xl font-light leading-[1.08] tracking-tight sm:text-5xl lg:text-[56px]",
          align === "center" && "max-w-3xl text-balance"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-xl text-lg leading-relaxed",
            tone === "dark" ? "text-white/55" : "text-ink/55",
            align === "center" && "mx-auto text-pretty"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
