"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Package,
  Hand,
  GraduationCap,
  Mic,
  BookOpen,
  Share2,
  ArrowUpRight,
  Play,
} from "lucide-react";
import { Container, Section, Eyebrow, SectionHeading } from "@/components/site/Section";
import { CTAButton, TextLink } from "@/components/site/CTAButton";
import { Reveal } from "@/components/site/Reveal";
import { VideoEmbed } from "@/components/site/VideoEmbed";
import {
  BRAND,
  FOUNDER,
  HERO_VIDEO,
  PROJECTS,
  SERVICE_CARDS,
  WA_DEFAULT,
} from "@/lib/site";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Package,
  Hand,
  GraduationCap,
  Mic,
  BookOpen,
  Share2,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesPreview />
      <ShowcaseReel />
      <PortfolioPreview />
      <FounderTeaser />
      <FinalCTA />
    </>
  );
}

/* ---------------- HERO (NO VIDEO — clean brand composition) ---------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      {/* Background — subtle, disciplined */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 80% at 75% 0%, rgba(21,87,176,0.20), transparent 50%), radial-gradient(60% 50% at 100% 100%, rgba(201,162,39,0.14), transparent 55%), #0A0A0A",
          }}
        />
        <div className="bg-grain absolute inset-0 opacity-40" />
      </div>

      <Container className="relative z-10 grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
        {/* Left: copy */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <Eyebrow tone="dark">
              <span className="text-gold">●</span> Aldeora Creative — AI Video Studio
            </Eyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 0.61, 0.36, 1] }}
            className="mt-7 font-display text-[44px] font-light leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-[68px] xl:text-[76px]"
          >
            AI video for{" "}
            <span className="italic text-gold">beauty, wellness</span>{" "}
            &amp; self-care brands.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-white/65 sm:text-xl"
          >
            We create scroll-stopping, AI-generated video that makes your products,
            services and brand look premium — without the cost of traditional production.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <CTAButton href={WA_DEFAULT} isWhatsApp size="lg" variant="gold" showArrow>
              Get Started
            </CTAButton>
            <CTAButton href="/work" size="lg" variant="outline-light">
              View Our Work
            </CTAButton>
          </motion.div>

          {/* Founder attribution */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-14 flex items-center gap-4 border-t border-white/10 pt-7"
          >
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-white/45">
              Founded by
            </span>
            <span className="font-display text-xl font-medium tracking-tight text-white">
              {FOUNDER.name}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-white/45">
              Creative Director
            </span>
          </motion.div>
        </div>

        {/* Right: hero AI video showcase */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <HeroVideoShowcase />
        </motion.div>
      </Container>
    </section>
  );
}

/**
 * Hero video showcase — a single, strong AI-generated cinematic beauty
 * commercial. The video fills its container edge-to-edge with no
 * overlays, rings, or background layers showing through.
 */
function HeroVideoShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Eyebrow label above the video */}
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-xs uppercase tracking-[0.24em] text-white/45">
          Now Showing — {HERO_VIDEO.tag}
        </span>
        <span className="font-mono text-xs uppercase tracking-[0.24em] text-gold">
          {HERO_VIDEO.format}
        </span>
      </div>

      <VideoEmbed
        videoId={HERO_VIDEO.videoId}
        title={HERO_VIDEO.title}
        aspect="portrait"
        label={HERO_VIDEO.tag}
      />

      {/* Caption */}
      <div className="mt-5 flex items-center justify-between gap-4">
        <div>
          <p className="font-display text-lg font-medium tracking-tight text-white">
            {HERO_VIDEO.title}
          </p>
          <p className="mt-1.5 text-sm text-white/50">
            AI-generated reference film · 100% AI
          </p>
        </div>
        <Link
          href="/work"
          className="group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.18em] text-gold transition-colors hover:text-gold-soft"
        >
          All Work
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}

/* ---------------- TRUST BAR ---------------- */

function TrustBar() {
  return (
    <Section tone="paper" className="py-14 sm:py-16">
      <Container>
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {[
            { k: "AI-Powered", v: "Creative pipeline" },
            { k: "Premium", v: "Cinematic quality" },
            { k: "Multi-platform", v: "Reels · TikTok · Shorts" },
            { k: "Brand-safe", v: "On-voice production" },
          ].map((s, i) => (
            <Reveal key={s.k} delay={i * 0.08}>
              <div>
                <p className="font-display text-2xl font-light tracking-tight text-ink sm:text-3xl">
                  {s.k}
                </p>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-ink/50">
                  {s.v}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ---------------- SERVICES PREVIEW ---------------- */

function ServicesPreview() {
  return (
    <Section tone="light">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="AI Video Formats"
              title={
                <>
                  Six AI formats to{" "}
                  <span className="italic text-royal">stop the scroll</span>.
                </>
              }
              description="Every format below is delivered as fully AI-generated video — designed to look premium and convert across every platform your audience lives on."
            />
          </div>
          <div className="lg:col-span-5 lg:flex lg:justify-end">
            <TextLink href="/services" tone="blue">
              All Services
            </TextLink>
          </div>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-black/[0.06] bg-black/[0.06] sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CARDS.map((card, i) => {
            const Icon = iconMap[card.icon] ?? Play;
            return (
              <Reveal key={card.title} delay={(i % 3) * 0.06}>
                <article className="group relative h-full bg-white p-8 transition-colors duration-300 hover:bg-paper-soft">
                  <div className="flex items-baseline justify-between">
                    <span className="editorial-num text-3xl text-ink/30">
                      0{i + 1}
                    </span>
                    <Icon className="h-6 w-6 text-ink/40 transition-colors duration-300 group-hover:text-gold" />
                  </div>
                  <h3 className="mt-7 font-display text-2xl font-medium tracking-tight text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink/60">
                    {card.description}
                  </p>
                  <div className="mt-7">
                    <TextLink href="/services" tone="blue">
                      Learn More
                    </TextLink>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

/* ---------------- SHOWCASE REEL — large featured video ---------------- */

function ShowcaseReel() {
  // Featured film — AI-generated perfume campaign
  const featured = PROJECTS.find((p) => p.id === "p07")!; // Maison Lumière — AI Perfume Ad
  return (
    <Section tone="dark" className="py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow tone="dark">Featured · {featured.category}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-4xl font-light leading-[1.1] tracking-tight sm:text-5xl lg:text-[52px]">
                {featured.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-white/60">
                {featured.blurb}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs uppercase tracking-[0.2em] text-white/45">
                <span><span className="text-gold">Format</span> · {featured.format}</span>
                <span><span className="text-gold">Tag</span> · {featured.tag}</span>
                <span><span className="text-gold">Category</span> · {featured.category}</span>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-9">
                <CTAButton href="/work" size="lg" variant="outline-light" showArrow>
                  View All Work
                </CTAButton>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <VideoEmbed
                videoId={featured.videoId}
                title={featured.title}
                aspect="cinematic"
                label={`Featured Film · ${featured.format}`}
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ---------------- PORTFOLIO PREVIEW ---------------- */

function PortfolioPreview() {
  const featured = PROJECTS.slice(0, 6);
  return (
    <Section tone="light">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Selected Work"
              title={
                <>
                  A look at the{" "}
                  <span className="italic text-royal">craft</span>.
                </>
              }
              description="A glimpse of recent AI reference films across beauty, product, wellness and service brands. Tap any card to play."
            />
          </div>
          <div className="lg:col-span-5 lg:flex lg:justify-end">
            <TextLink href="/work" tone="blue">
              View All Work
            </TextLink>
          </div>
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.08}>
              <PortfolioCardSmall project={p} index={i} />
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <CTAButton href="/work" size="lg" variant="primary" showArrow>
            View All Work
          </CTAButton>
        </div>
      </Container>
    </Section>
  );
}

function PortfolioCardSmall({ project, index }: { project: typeof PROJECTS[number]; index: number }) {
  return (
    <article className="group">
      <VideoEmbed
        videoId={project.videoId}
        title={project.title}
        aspect="portrait"
        label={`${project.category} · ${project.format}`}
      />
      <div className="mt-5 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-gold-deep">
            {project.tag}
          </p>
          <h3 className="mt-2 font-display text-xl font-medium tracking-tight text-ink">
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink/60">
            {project.blurb}
          </p>
        </div>
        <span className="editorial-num text-xl text-ink/25">
          0{index + 1}
        </span>
      </div>
    </article>
  );
}

/* ---------------- FOUNDER TEASER ---------------- */

function FounderTeaser() {
  return (
    <Section tone="dark">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          {/* Photo */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={FOUNDER.photo}
                  alt={`${FOUNDER.name} — ${FOUNDER.role}`}
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.24em] text-gold">
                      Founder
                    </p>
                    <p className="mt-2 font-display text-2xl font-medium tracking-tight text-white">
                      {FOUNDER.name}
                    </p>
                    <p className="mt-1 text-sm text-white/60">{FOUNDER.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Copy */}
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow tone="dark">Who&apos;s behind the studio</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-4xl font-light leading-[1.1] tracking-tight sm:text-5xl lg:text-[52px]">
                <span className="italic text-gold">&ldquo;Premium</span> isn&apos;t a budget.
                It&apos;s a decision about how your brand deserves to look.&rdquo;
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/60">
                {FOUNDER.shortBio}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-9">
                <CTAButton href="/about" size="lg" variant="outline-light" showArrow>
                  Meet the Founder
                </CTAButton>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ---------------- FINAL CTA ---------------- */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-white">
      <Container className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>Ready when you are</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-4xl font-light leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Ready to make your brand{" "}
              <span className="italic text-royal">look better</span> online?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-ink/55">
              Let&apos;s create AI video content your audience wants to stop and watch.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CTAButton href={WA_DEFAULT} isWhatsApp size="lg" variant="gold" showArrow>
                Start Your Project
              </CTAButton>
              <CTAButton href="/contact" size="lg" variant="ghost">
                Contact Us
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
