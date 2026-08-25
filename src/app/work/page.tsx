"use client";

import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Section, Eyebrow } from "@/components/site/Section";
import { CTAButton } from "@/components/site/CTAButton";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";
import { VideoEmbed } from "@/components/site/VideoEmbed";
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
            <span className="italic text-gold">beauty & wellness</span> brands.
          </>
        }
        description="A curated set of AI reference films across beauty, product, wellness and service brands. Tap any card to play. Each represents the kind of AI video Aldeora Creative produces in that category."
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
                      "group inline-flex shrink-0 items-center gap-2 rounded-full border px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-[0.16em] transition-all duration-300",
                      isActive
                        ? "border-ink bg-ink text-white"
                        : "border-black/10 bg-white text-ink/60 hover:border-ink/30 hover:text-ink"
                    )}
                  >
                    {f}
                    <span
                      className={cn(
                        "rounded-full px-1.5 py-0.5 text-[10px] font-bold",
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
          <motion.div layout className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.div
                  layout
                  key={p.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
                >
                  <WorkCard project={p} index={i} onOpen={() => setSelected(p)} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Caption */}
          <Reveal>
            <p className="mx-auto mt-14 max-w-2xl text-center font-mono text-sm leading-relaxed text-ink/45">
              The films above are real, embeddable AI-generated reference clips demonstrating the style and quality Aldeora Creative produces. Actual client work is shared during private briefings.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* CTA strip */}
      <Section tone="dark" className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center">
            <Eyebrow tone="dark">Your brand, next.</Eyebrow>
            <h2 className="max-w-2xl font-display text-4xl font-light leading-tight tracking-tight text-balance sm:text-5xl">
              Want your work to look like this — or better?
            </h2>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CTAButton href={WA_DEFAULT} isWhatsApp size="lg" variant="gold" showArrow>
                Start Your Project
              </CTAButton>
              <CTAButton href="/contact" size="lg" variant="outline-light">
                Contact Us
              </CTAButton>
            </div>
          </div>
        </Container>
      </Section>

      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </>
  );
}

function WorkCard({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  return (
    <article className="group h-full">
      {/* Video — fills its container, no ring/border */}
      <VideoEmbed
        videoId={project.videoId}
        title={project.title}
        aspect="portrait"
        label={`${project.category} · ${project.format}`}
      />

      {/* Caption — clickable to open dialog */}
      <button
        onClick={onOpen}
        className="mt-5 flex w-full items-start justify-between gap-3 text-left transition-opacity hover:opacity-70"
        aria-label={`View details for ${project.title}`}
      >
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-gold-deep">
              {project.tag}
            </span>
            <span className="h-px w-3 bg-ink/20" />
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-ink/45">
              {project.format}
            </span>
          </div>
          <h3 className="mt-2.5 font-display text-xl font-medium tracking-tight text-ink">
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink/60">
            {project.blurb}
          </p>
        </div>
        <span className="editorial-num text-xl text-ink/25">
          0{index + 1}
        </span>
      </button>
    </article>
  );
}
