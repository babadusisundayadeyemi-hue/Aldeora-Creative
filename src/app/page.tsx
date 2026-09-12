"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Video, Package, Share2, Sparkles, ArrowRight, ArrowUpRight } from "lucide-react";
import { Container, Section, Eyebrow, SectionHeading } from "@/components/site/Section";
import { CTAButton, TextLink } from "@/components/site/CTAButton";
import { Reveal } from "@/components/site/Reveal";
import { HeroVideo } from "@/components/site/HeroVideo";
import { TestimonialCarousel } from "@/components/site/TestimonialCarousel";
import { BRAND, FOUNDER, SERVICES, PROJECTS, TESTIMONIALS, WA_DEFAULT } from "@/lib/site";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Video, Package, Share2, Sparkles,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <ServicesPreview />
      <FeaturedWork />
      <ProcessSection />
      <TestimonialsSection />
      <FinalCTA />
    </>
  );
}

/* ---------------- HERO — full-bleed video background ---------------- */

function Hero() {
  return (
    <section className="relative flex min-h-[100vh] items-center overflow-hidden bg-ink text-white">
      {/* Background video */}
      <div className="absolute inset-0">
        <HeroVideo src={BRAND.heroVideo} />
        {/* Dark overlay for text legibility — gradient from left */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(105deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.75) 40%, rgba(10,10,10,0.35) 100%)",
          }}
        />
        <div className="bg-grain absolute inset-0 opacity-30" />
      </div>

      {/* Content */}
      <Container className="relative z-10 py-24 sm:py-28 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          className="max-w-3xl"
        >
          <Eyebrow tone="dark">
            <span className="text-gold">●</span> Aldeora Creative
          </Eyebrow>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
            className="mt-7 font-display text-5xl font-light leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-7xl xl:text-[84px]"
          >
            AI-powered visual content for brands that want to{" "}
            <span className="italic text-gold-gradient">stand out</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 max-w-lg text-lg leading-relaxed text-white/65"
          >
            Premium AI-assisted video for beauty, skincare, wellness and self-care brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <CTAButton href="/work" size="lg" variant="gold" showArrow>
              View Our Work
            </CTAButton>
            <CTAButton href={WA_DEFAULT} isWhatsApp size="lg" variant="outline-light">
              Let's Work Together
            </CTAButton>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/40">Scroll</span>
          <div className="h-12 w-px bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}

/* ---------------- BRAND INTRO — short statement ---------------- */

function BrandIntro() {
  return (
    <Section tone="light" className="py-20 sm:py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Eyebrow>What We Create</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-8 font-display text-4xl font-light leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-[56px]">
              We create premium AI-assisted video that makes brands{" "}
              <span className="italic text-sky-deep">look more valuable</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink/55">
              Visual content for beauty, skincare, haircare, wellness and lifestyle brands — cinematic, intentional, unmistakably premium.
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/* ---------------- SERVICES PREVIEW ---------------- */

function ServicesPreview() {
  return (
    <Section tone="paper">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionHeading
              eyebrow="Services"
              title={
                <>
                  What we do, <span className="italic text-sky-deep">briefly</span>.
                </>
              }
            />
          </div>
          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <TextLink href="/services" tone="blue">Explore Services</TextLink>
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-black/[0.06] bg-black/[0.06] sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Video;
            return (
              <Reveal key={service.id} delay={(i % 4) * 0.06}>
                <article className="group h-full bg-white p-8 transition-colors duration-400 hover:bg-paper-soft">
                  <div className="flex items-baseline justify-between">
                    <span className="editorial-num text-3xl text-ink/20">0{i + 1}</span>
                    <Icon className="h-6 w-6 text-ink/35 transition-colors duration-400 group-hover:text-gold" />
                  </div>
                  <h3 className="mt-8 font-display text-xl font-medium tracking-tight text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink/55">
                    {service.short}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

/* ---------------- FEATURED WORK — editorial showcase ---------------- */

function FeaturedWork() {
  const featured = PROJECTS.slice(0, 4);
  return (
    <Section tone="dark">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionHeading
              tone="dark"
              eyebrow="Featured Work"
              title={
                <>
                  Selected <span className="italic text-gold">work</span>.
                </>
              }
              description="A glimpse of recent visual content. Each piece is AI-assisted and cinematically art-directed."
            />
          </div>
          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <TextLink href="/work" tone="light">View All Work</TextLink>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-12">
          {featured.map((p, i) => (
            <Reveal
              key={p.id}
              delay={(i % 4) * 0.08}
              className={cn(
                i === 0 && "lg:col-span-6",
                i === 1 && "lg:col-span-3",
                i === 2 && "lg:col-span-3",
                i === 3 && "lg:col-span-6",
              )}
            >
              <FeaturedWorkCard project={p} large={i === 0 || i === 3} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function FeaturedWorkCard({ project, large }: { project: typeof PROJECTS[number]; large?: boolean }) {
  return (
    <article className="group relative h-full overflow-hidden rounded-2xl bg-ink-soft">
      {/* Video preview — autoplay muted loop on hover, poster otherwise */}
      <div className={cn("relative overflow-hidden", large ? "aspect-[16/10]" : "aspect-[4/5]")}>
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
        {/* Subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* Label */}
        <div className="absolute bottom-6 left-6 right-6">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-gold">{project.category}</p>
          <h3 className="mt-2 font-display text-2xl font-medium tracking-tight text-white">{project.title}</h3>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-white/40">{project.format}</p>
        </div>

        {/* Hover arrow */}
        <div className="absolute right-6 top-6 opacity-0 transition-all duration-400 group-hover:opacity-100">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
      </div>
    </article>
  );
}

/* ---------------- PROCESS — short ---------------- */

function ProcessSection() {
  const steps = [
    { n: "01", title: "Brief", desc: "We learn your brand, audience and goals." },
    { n: "02", title: "Direct", desc: "We design the creative — hooks, style, motion." },
    { n: "03", title: "Produce", desc: "AI-powered pipeline delivers premium video." },
    { n: "04", title: "Deliver", desc: "Platform-ready content, on-brand." },
  ];
  return (
    <Section tone="light">
      <Container>
        <SectionHeading
          eyebrow="Process"
          title={<>Four steps, <span className="italic text-sky-deep">done well</span>.</>}
        />
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="border-t border-ink/10 pt-6">
                <span className="editorial-num text-3xl text-gold">{s.n}</span>
                <h3 className="mt-5 font-display text-xl font-medium tracking-tight text-ink">{s.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-ink/55">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ---------------- TESTIMONIALS — only if real reviews exist ---------------- */

function TestimonialsSection() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <Section tone="paper">
      <Container>
        <SectionHeading
          eyebrow="Reviews"
          title={<>What clients <span className="italic text-sky-deep">say</span>.</>}
          align="center"
          className="mb-16"
        />
        <TestimonialCarousel testimonials={TESTIMONIALS} />
      </Container>
    </Section>
  );
}

/* ---------------- FINAL CTA ---------------- */

function FinalCTA() {
  return (
    <Section tone="dark" className="py-20 sm:py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow tone="dark">Let's begin</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-4xl font-light leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Let&apos;s create something{" "}
              <span className="italic text-gold">beautiful</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CTAButton href="/contact" size="lg" variant="gold" showArrow>
                Start a Project
              </CTAButton>
              <CTAButton href={WA_DEFAULT} isWhatsApp size="lg" variant="outline-light">
                Chat on WhatsApp
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
