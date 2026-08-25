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
  ArrowRight,
  ArrowUpRight,
  Play,
} from "lucide-react";
import { Container, Section, Eyebrow, SectionHeading } from "@/components/site/Section";
import { CTAButton, TextLink } from "@/components/site/CTAButton";
import { Reveal } from "@/components/site/Reveal";
import { VideoEmbed } from "@/components/site/VideoEmbed";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import {
  BRAND,
  FOUNDER,
  PACKAGES,
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
      <PackagesPreview />
      <FounderTeaser />
      <FinalCTA />
    </>
  );
}

/* ---------------- HERO ---------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      {/* Background — disciplined, no over-design */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 80% at 75% 0%, rgba(21,87,176,0.18), transparent 50%), radial-gradient(60% 50% at 100% 100%, rgba(201,162,39,0.12), transparent 55%), #0A0A0A",
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
            className="mt-6 font-display text-[40px] font-light leading-[1.02] tracking-tight text-balance sm:text-5xl lg:text-[64px] xl:text-[72px]"
          >
            AI video for{" "}
            <span className="italic text-gold">beauty, wellness</span>{" "}
            &amp; self-care brands.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg"
          >
            We create scroll-stopping, AI-powered video that makes your products,
            services and brand look premium — without the cost of traditional production.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <CTAButton href={WA_DEFAULT} isWhatsApp size="lg" variant="gold" showArrow>
              Get Started
            </CTAButton>
            <CTAButton href="/work" size="lg" variant="outline-light">
              View Our Work
            </CTAButton>
          </motion.div>

          {/* Founder attribution — credibility */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 flex items-center gap-4 border-t border-white/10 pt-6"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">
              Founded by
            </span>
            <span className="font-display text-lg font-medium tracking-tight text-white">
              {FOUNDER.name}
            </span>
            <span className="h-1 w-1 rounded-full bg-gold" />
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">
              Creative Director
            </span>
          </motion.div>
        </div>

        {/* Right: real video showcase */}
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

function HeroVideoShowcase() {
  // Use a strong skincare/beauty film as the hero reference
  const heroProject = PROJECTS[0]; // Hydra Glow Serum
  return (
    <div className="relative">
      {/* Eyebrow label above the video */}
      <div className="mb-3 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">
          Now Showing — {heroProject.tag}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold">
          {heroProject.format}
        </span>
      </div>

      <VideoEmbed
        videoId={heroProject.videoId}
        title={heroProject.title}
        aspect="portrait"
        label={heroProject.tag}
        className="ring-1 ring-white/10"
      />

      {/* Caption */}
      <div className="mt-3 flex items-center justify-between gap-4">
        <div>
          <p className="font-display text-base font-medium tracking-tight text-white">
            {heroProject.title}
          </p>
          <p className="mt-0.5 text-[11px] text-white/45">
            Reference film · {heroProject.category}
          </p>
        </div>
        <Link
          href="/work"
          className="group inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-gold transition-colors hover:text-gold-soft"
        >
          All Work
          <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}

/* ---------------- TRUST BAR ---------------- */

function TrustBar() {
  return (
    <Section tone="paper" className="py-12 sm:py-14">
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
                <p className="font-display text-xl font-light tracking-tight text-ink sm:text-2xl">
                  {s.k}
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/45">
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
              eyebrow="What We Create"
              title={
                <>
                  Content engineered to{" "}
                  <span className="italic text-royal">stop the scroll</span>.
                </>
              }
              description="Six formats, one creative engine. Each is designed to look premium and convert — across every platform your audience lives on."
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
                <article className="group relative h-full bg-white p-7 transition-colors duration-300 hover:bg-paper-soft">
                  <div className="flex items-baseline justify-between">
                    <span className="editorial-num text-2xl text-ink/30">
                      0{i + 1}
                    </span>
                    <Icon className="h-5 w-5 text-ink/40 transition-colors duration-300 group-hover:text-gold" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-medium tracking-tight text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/55">
                    {card.description}
                  </p>
                  <div className="mt-6">
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
  // Featured film — Tom Ford caliber editorial beauty campaign
  const featured = PROJECTS.find((p) => p.id === "p10")!; // Maison Lumière
  return (
    <Section tone="dark" className="py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow tone="dark">Featured · {featured.category}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-3xl font-light leading-[1.1] tracking-tight sm:text-4xl lg:text-[44px]">
                {featured.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-base leading-relaxed text-white/55">
                {featured.blurb}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                <span><span className="text-gold">Format</span> · {featured.format}</span>
                <span><span className="text-gold">Tag</span> · {featured.tag}</span>
                <span><span className="text-gold">Category</span> · {featured.category}</span>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8">
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
                className="ring-1 ring-white/10"
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
              description="A glimpse of recent reference films across beauty, product, wellness and service brands. Tap any card to play."
            />
          </div>
          <div className="lg:col-span-5 lg:flex lg:justify-end">
            <TextLink href="/work" tone="blue">
              View All Work
            </TextLink>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.08}>
              <PortfolioCardSmall project={p} index={i} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
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
        className="ring-1 ring-black/[0.06]"
      />
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold-deep">
            {project.tag}
          </p>
          <h3 className="mt-1 font-display text-lg font-medium tracking-tight text-ink">
            {project.title}
          </h3>
          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-ink/55">
            {project.blurb}
          </p>
        </div>
        <span className="editorial-num text-lg text-ink/25">
          0{index + 1}
        </span>
      </div>
    </article>
  );
}

/* ---------------- PACKAGES PREVIEW ---------------- */

function PackagesPreview() {
  return (
    <Section tone="paper">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Choose Your Package"
          title={
            <>
              Clear packages, <span className="italic text-royal">no surprises</span>.
            </>
          }
          description="Pick the tier that fits your stage. Every package includes premium AI video production, captions and platform-ready formats."
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PACKAGES.map((pkg, i) => (
            <Reveal key={pkg.id} delay={i * 0.1}>
              <div
                className={`relative h-full rounded-2xl border bg-white p-7 transition-all duration-500 ${
                  pkg.popular
                    ? "border-gold/50 shadow-[0_30px_70px_-30px_rgba(201,162,39,0.35)] lg:-translate-y-3"
                    : "border-black/[0.06] hover:border-royal/20 hover:shadow-[0_20px_50px_-30px_rgba(0,0,0,0.2)]"
                }`}
              >
                {pkg.badge && (
                  <span className="absolute -top-3 left-7 inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-ink shadow-lg">
                    ★ {pkg.badge}
                  </span>
                )}
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-royal">
                  {pkg.name}
                </p>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-light tracking-tight text-ink sm:text-5xl">
                    {pkg.price}
                  </span>
                  <span className="text-xs text-ink/45">{pkg.cadence}</span>
                </div>
                <p className="mt-3 text-sm text-ink/55">{pkg.description}</p>
                <div className="mt-6">
                  <TextLink href="/packages" tone="blue">
                    View Details
                  </TextLink>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <CTAButton href="/packages" size="lg" variant="primary" showArrow>
            View All Packages
          </CTAButton>
        </div>
      </Container>
    </Section>
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
              <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10">
                <img
                  src={FOUNDER.photo}
                  alt={`${FOUNDER.name} — ${FOUNDER.role}`}
                  className="aspect-[4/5] w-full object-cover"
                />
                {/* Subtle gradient for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold">
                      Founder
                    </p>
                    <p className="mt-1 font-display text-xl font-medium tracking-tight text-white">
                      {FOUNDER.name}
                    </p>
                    <p className="text-[11px] text-white/55">{FOUNDER.role}</p>
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
              <h2 className="mt-5 font-display text-3xl font-light leading-[1.1] tracking-tight sm:text-4xl lg:text-[44px]">
                <span className="italic text-gold">&ldquo;Premium</span> isn&apos;t a budget.
                It&apos;s a decision about how your brand deserves to look.&rdquo;
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/55">
                {FOUNDER.shortBio}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8">
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
            <h2 className="mt-5 font-display text-4xl font-light leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Ready to make your brand{" "}
              <span className="italic text-royal">look better</span> online?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-xl text-base text-ink/55 sm:text-lg">
              Let&apos;s create content your audience wants to stop and watch.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CTAButton href={WA_DEFAULT} isWhatsApp size="lg" variant="gold" showArrow>
                Start Your Project
              </CTAButton>
              <CTAButton href={WA_DEFAULT} isWhatsApp size="lg" variant="ghost">
                WhatsApp Us
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
