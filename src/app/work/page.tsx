"use client";

import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Section, Eyebrow } from "@/components/site/Section";
import { CTAButton, TextLink } from "@/components/site/CTAButton";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";
import { ProjectThumbnail } from "@/components/site/ProjectCard";
import { ProjectDialog } from "@/components/site/ProjectDialog";
import { PROJECTS, WA_DEFAULT, type Category, type Project } from "@/lib/site";
import { cn } from "@/lib/utils";

const FILTERS: Category[] = ["All", "Beauty", "Product", "Wellness", "Service"];

export default function WorkPage() {
  const [active, setActive] = useState<Category>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    if (active === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.category === active);
  }, [active]);

  return (
    <>
      <PageHeader
        eyebrow="Our Work"
        title={
          <>
            Selected work for{" "}
            <span className="text-gold-gradient italic">beauty & wellness</span> brands.
          </>
        }
        description="A curated look at recent projects. Filter by category to explore how we apply premium AI video craft across product, service and brand formats."
      />

      <Section tone="light">
        <Container>
          {/* Filter bar */}
          <Reveal>
            <div className="no-scrollbar -mx-5 flex items-center gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
              {FILTERS.map((f) => {
                const count =
                  f === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.category === f).length;
                const isActive = active === f;
                return (
                  <button
                    key={f}
                    onClick={() => setActive(f)}
                    className={cn(
                      "group inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300",
                      isActive
                        ? "border-ink bg-ink text-white shadow-[0_8px_24px_-12px_rgba(0,0,0,0.5)]"
                        : "border-black/10 bg-white text-ink/65 hover:border-ink/30 hover:text-ink"
                    )}
                  >
                    {f}
                    <span
                      className={cn(
                        "rounded-full px-1.5 py-0.5 text-[9px] font-bold",
                        isActive ? "bg-gold text-ink" : "bg-paper-mute text-ink/50"
                      )}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Grid */}
          <motion.div
            layout
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.button
                  layout
                  key={p.id}
                  onClick={() => setSelected(p)}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
                  className="text-left"
                >
                  <ProjectThumbnail project={p} index={i} />
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Caption */}
          <Reveal>
            <p className="mx-auto mt-12 max-w-2xl text-center text-xs text-ink/45">
              Project thumbnails are visual representations. Actual client work is
              shared during private briefings.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* CTA strip */}
      <Section tone="dark" className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center">
            <Eyebrow tone="dark">Your brand, next.</Eyebrow>
            <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl">
              Want your work to look like this — or better?
            </h2>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CTAButton href={WA_DEFAULT} isWhatsApp size="lg" variant="gold" showArrow>
                Start Your Project
              </CTAButton>
              <CTAButton href="/packages" size="lg" variant="outline-light">
                View Packages
              </CTAButton>
            </div>
          </div>
        </Container>
      </Section>

      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
