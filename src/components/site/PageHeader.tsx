"use client";

import { motion } from "framer-motion";
import { Container, Eyebrow } from "./Section";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  children?: React.ReactNode;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  tone = "dark",
  align = "center",
  children,
}: PageHeaderProps) {
  const isDark = tone === "dark";
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        isDark ? "bg-ink text-white" : "bg-white text-ink"
      )}
    >
      {/* Decorative grid + glow */}
      <DecorBackground isDark={isDark} />

      <Container className="relative z-10 py-20 sm:py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          className={cn(
            "flex flex-col gap-5",
            align === "center" && "items-center text-center"
          )}
        >
          {eyebrow && <Eyebrow tone={isDark ? "dark" : "light"}>{eyebrow}</Eyebrow>}
          <h1
            className={cn(
              "font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl",
              align === "center" && "max-w-4xl text-balance"
            )}
          >
            {title}
          </h1>
          {description && (
            <p
              className={cn(
                "max-w-2xl text-base leading-relaxed sm:text-lg",
                isDark ? "text-white/65" : "text-ink/65",
                align === "center" && "mx-auto text-pretty"
              )}
            >
              {description}
            </p>
          )}
          {children && <div className="mt-4">{children}</div>}
        </motion.div>
      </Container>
    </section>
  );
}

function DecorBackground({ isDark }: { isDark: boolean }) {
  return (
    <>
      {/* Radial glow top */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-32 h-[480px] opacity-70"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(201,162,39,0.18), transparent 60%)",
        }}
      />
      {/* Grid pattern */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 opacity-[0.06]",
          isDark ? "bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:64px_64px]"
                  : "bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:64px_64px]"
        )}
      />
      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
        style={{
          background: isDark
            ? "linear-gradient(to bottom, transparent, #0A0A0A)"
            : "linear-gradient(to bottom, transparent, #FFFFFF)",
        }}
      />
    </>
  );
}
