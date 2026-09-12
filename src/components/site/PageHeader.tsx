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
      <DecorBackground isDark={isDark} />

      <Container className="relative z-10 py-24 sm:py-28 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          className={cn(
            "flex flex-col gap-6",
            align === "center" && "items-center text-center"
          )}
        >
          {eyebrow && <Eyebrow tone={isDark ? "dark" : "light"}>{eyebrow}</Eyebrow>}
          <h1
            className={cn(
              "font-display text-5xl font-light leading-[1.04] tracking-tight text-balance sm:text-6xl lg:text-7xl xl:text-[80px]",
              align === "center" && "max-w-4xl"
            )}
          >
            {title}
          </h1>
          {description && (
            <p
              className={cn(
                "max-w-xl text-lg leading-relaxed",
                isDark ? "text-white/55" : "text-ink/55",
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
      <div
        className="pointer-events-none absolute inset-x-0 -top-32 h-[480px] opacity-50"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(201,169,97,0.10), transparent 60%)",
        }}
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-0 opacity-[0.03]",
          isDark
            ? "bg-[linear-gradient(to_right,#fff_1px,transparent_1px)] bg-[size:120px_100%]"
            : "bg-[linear-gradient(to_right,#000_1px,transparent_1px)] bg-[size:120px_100%]"
        )}
      />
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
