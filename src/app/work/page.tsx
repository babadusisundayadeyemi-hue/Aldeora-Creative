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

const FILTERS: Category[] = ["All", "Beauty", "Skincare", "Haircare", "Wellness", "Product", "Brand Content"];

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
        title={<>Selected work for <span className="italic text-gold">premium brands</span>.</>}
        description="AI-generated reference films across beauty, skincare, haircare, wellness and product. Each represents the quality Aldeora Creative delivers."
      />

      <Section tone="light">
        <Container>
          {/* Filter bar */}
          <Reveal>
            <div className="no-scrollbar -mx-5 flex items-center gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
              {FILTERS.map((f) => {
                const count = f === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.category === f).length;
                const isActive = active === f;
                return (
                  <button
                    key={f}
                    onClick={() => setActive(f)}
                    className={cn(
                      "inline-flex shrink-0 items-center gap-2 rounded-full border px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-[0.16em] transition-all duration-300",
                      isActive ? "border-ink bg-ink text-white" : "border-black/10 bg-white text-ink/60 hover:border-ink/30 hover:text-ink"
                    )}
                  >
                    {f}
                    <span className={cn("rounded-full px-1.5 py-0.5 text-[10px] font-bold", isActive ? "bg-gold text-ink" : "bg-paper-mute text-ink/50")}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Editorial layout — NOT a generic grid.
              Uses varying spans and aspect ratios for visual rhythm. */}
          <motion.div layout className="mt-12 grid gap-6 lg:grid-cols-12">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => {
                // Alternate layout sizes for editorial rhythm
                const layoutClass = getLayoutClass(i, filtered.length);
                const aspect = getAspect(p.size);
                return (
                  <motion.div
                    layout
                    key={p.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
                    className={layoutClass}
                  >
                    <WorkCard project={p} index={i} onOpen={() => setSelected(p)} aspect={aspect} />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </Container>
      </Section>

      {/* CTA */}
      <Section tone="dark" className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center">
            <Eyebrow tone="dark">Your brand, next.</Eyebrow>
            <h2 className="max-w-2xl font-display text-4xl font-light leading-tight tracking-tight text-balance sm:text-5xl">
              Want your work to look like this?
            </h2>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CTAButton href="/contact" size="lg" variant="gold" showArrow>Start a Project</CTAButton>
              <CTAButton href={WA_DEFAULT} isWhatsApp size="lg" variant="outline-light">Chat on WhatsApp</CTAButton>
            </div>
          </div>
        </Container>
      </Section>

      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </>
  );
}

/** Editorial layout — alternating spans for visual rhythm */
function getLayoutClass(index: number, total: number): string {
  // Pattern: 7/5, 5/7, 4/4/4, 6/6, repeat
  const pattern = index % 6;
  switch (pattern) {
    case 0: return "lg:col-span-7";
    case 1: return "lg:col-span-5";
    case 2: return "lg:col-span-4";
    case 3: return "lg:col-span-4";
    case 4: return "lg:col-span-4";
    case 5: return "lg:col-span-6";
    default: return "lg:col-span-6";
  }
}

function getAspect(size: string): "video" | "portrait" | "cinematic" {
  switch (size) {
    case "large": return "video";
    case "tall": return "portrait";
    case "wide": return "cinematic";
    case "medium": return "video";
    case "small": return "portrait";
    default: return "video";
  }
}

function WorkCard({ project, index, onOpen, aspect }: { project: Project; index: number; onOpen: () => void; aspect: "video" | "portrait" | "cinematic" }) {
  return (
    <article className="group h-full">
      <VideoEmbed
        videoId={project.videoId}
        title={project.title}
        aspect={aspect}
        label={`${project.category} · ${project.format}`}
      />
      <button
        onClick={onOpen}
        className="mt-5 flex w-full items-start justify-between gap-3 text-left transition-opacity hover:opacity-70"
        aria-label={`View details for ${project.title}`}
      >
        <div className="min-w-0">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-gold-deep">{project.category}</p>
          <h3 className="mt-2 font-display text-xl font-medium tracking-tight text-ink">{project.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-ink/55">{project.description}</p>
        </div>
        <span className="editorial-num text-xl text-ink/25">0{index + 1}</span>
      </button>
    </article>
  );
}
