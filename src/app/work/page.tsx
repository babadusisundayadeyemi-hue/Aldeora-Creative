"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/site/Section";
import { CTAButton } from "@/components/site/CTAButton";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";
import { PROJECTS, WA_DEFAULT, type Category } from "@/lib/site";
import { cn } from "@/lib/utils";

const FILTERS: Category[] = ["All", "Beauty", "Skincare", "Haircare", "Wellness", "Product", "Brand Content"];

export default function WorkPage() {
  const [active, setActive] = useState<Category>("All");

  const filtered = useMemo(() => {
    if (active === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.category === active);
  }, [active]);

  return (
    <>
      <PageHeader
        eyebrow="Work"
        title={
          <>
            Selected <span className="italic text-gold">work</span>.
          </>
        }
        description="AI-assisted visual content for beauty, skincare, wellness and lifestyle brands."
      />

      <Section tone="light">
        <Container>
          {/* Filter bar */}
          <Reveal>
            <div className="no-scrollbar -mx-6 flex items-center gap-2 overflow-x-auto px-6 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
              {FILTERS.map((f) => {
                const count = f === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.category === f).length;
                const isActive = active === f;
                return (
                  <button
                    key={f}
                    onClick={() => setActive(f)}
                    className={cn(
                      "shrink-0 rounded-full border px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-[0.16em] transition-all duration-300",
                      isActive
                        ? "border-ink bg-ink text-white"
                        : "border-black/10 bg-white text-ink/55 hover:border-ink/30 hover:text-ink"
                    )}
                  >
                    {f}
                    <span className={cn("ml-2 rounded-full px-1.5 py-0.5 text-[10px] font-bold", isActive ? "bg-gold text-ink" : "bg-paper-mute text-ink/50")}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Editorial layout — NOT a generic grid */}
          <motion.div layout className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-12">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => {
                // Vary sizes for editorial rhythm
                const sizeClass =
                  i % 5 === 0 ? "lg:col-span-7" :
                  i % 5 === 1 ? "lg:col-span-5" :
                  i % 5 === 2 ? "lg:col-span-4" :
                  i % 5 === 3 ? "lg:col-span-4" :
                  "lg:col-span-4";
                const aspectClass = i % 2 === 0 ? "aspect-[16/11]" : "aspect-[4/5]";
                return (
                  <motion.div
                    layout
                    key={p.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
                    className={sizeClass}
                  >
                    <WorkCard project={p} aspectClass={aspectClass} />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </Container>
      </Section>

      {/* CTA */}
      <Section tone="dark" className="py-20 sm:py-24">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center">
            <Eyebrow tone="dark">Your brand, next.</Eyebrow>
            <h2 className="max-w-2xl font-display text-4xl font-light leading-tight tracking-tight text-balance sm:text-5xl">
              Want your work to look like this?
            </h2>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CTAButton href={WA_DEFAULT} isWhatsApp size="lg" variant="gold" showArrow>
                Let's Work Together
              </CTAButton>
              <CTAButton href="/contact" size="lg" variant="outline-light">
                Start a Project
              </CTAButton>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

function WorkCard({ project, aspectClass }: { project: typeof PROJECTS[number]; aspectClass: string }) {
  return (
    <article className="group relative h-full overflow-hidden rounded-2xl bg-ink-soft">
      {/* Video preview — autoplay muted loop */}
      <div className={cn("relative overflow-hidden", aspectClass)}>
        {project.videoMp4 && (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          >
            <source src={project.videoMp4} type="video/mp4" />
          </video>
        )}
        {/* Gradient for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        {/* Category label */}
        <div className="absolute left-5 top-5">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1.5 font-mono text-xs font-medium uppercase tracking-[0.18em] text-white backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {project.category}
          </span>
        </div>

        {/* Title + format */}
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
          <div>
            <h3 className="font-display text-2xl font-medium tracking-tight text-white">{project.title}</h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-gold">{project.format}</p>
          </div>
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-ink opacity-0 transition-all duration-400 group-hover:opacity-100">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
      </div>
    </article>
  );
}
