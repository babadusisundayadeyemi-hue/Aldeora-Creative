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
  Sparkles,
  Play,
} from "lucide-react";
import { Container, Section, Eyebrow, SectionHeading } from "@/components/site/Section";
import { CTAButton, TextLink } from "@/components/site/CTAButton";
import { Reveal } from "@/components/site/Reveal";
import { LogoMark } from "@/components/site/Logo";
import { ProjectThumbnail } from "@/components/site/ProjectCard";
import {
  BRAND,
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
      <PortfolioPreview />
      <PackagesPreview />
      <FinalCTA />
    </>
  );
}

/* ---------------- HERO ---------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 80% at 80% 0%, rgba(21,87,176,0.25), transparent 55%), radial-gradient(80% 60% at 10% 100%, rgba(201,162,39,0.22), transparent 50%), #0A0A0A",
          }}
        />
        <div className="bg-grain absolute inset-0 opacity-60" />
        {/* Vertical hairlines */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px)",
            backgroundSize: "16.66% 100%",
          }}
        />
      </div>

      <Container className="relative z-10 grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-12 lg:py-32">
        {/* Left: copy */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <Eyebrow tone="dark">Aldeora Creative — AI Video Studio</Eyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 0.61, 0.36, 1] }}
            className="mt-6 font-display text-4xl font-bold leading-[1.02] tracking-tight text-balance sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            AI Video Content for{" "}
            <span className="text-gold-gradient italic">Beauty, Wellness</span>{" "}
            & Self-Care Brands.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg"
          >
            We create scroll-stopping AI-powered videos that make your products,
            services and brand look premium — without the cost of traditional
            production.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <CTAButton href={WA_DEFAULT} isWhatsApp size="lg" variant="gold" showArrow>
              Get Started
            </CTAButton>
            <CTAButton href="/work" size="lg" variant="outline-light">
              View Our Work
            </CTAButton>
          </motion.div>

          {/* Mini stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-6"
          >
            {[
              { k: "3", v: "Service Tiers" },
              { k: "20+", v: "Videos / mo" },
              { k: "∞", v: "Revisions*" },
            ].map((s) => (
              <div key={s.v}>
                <p className="font-display text-2xl font-bold text-gold sm:text-3xl">
                  {s.k}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/50">
                  {s.v}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: visual composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <HeroVisual />
        </motion.div>
      </Container>

      {/* Bottom marquee strip */}
      <Marquee />
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
      {/* Main frame */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-soft via-ink to-black shadow-[0_40px_120px_-30px_rgba(0,0,0,0.8)]">
        {/* Gradient backdrop */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 80% at 50% 20%, rgba(201,162,39,0.35), transparent 55%), radial-gradient(80% 60% at 80% 80%, rgba(21,87,176,0.45), transparent 55%)",
          }}
        />
        {/* Aperture rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-56 w-56">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                animate={{ rotate: 360 }}
                transition={{ duration: 30 + i * 6, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-white/10"
                style={{ transform: `scale(${1 - i * 0.14})` }}
              />
            ))}
            {/* inner accent */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_12px_#C9A227]" />
            </motion.div>
            <div className="absolute inset-[36%] rounded-full bg-gradient-to-br from-gold via-gold-soft to-gold-deep shadow-[0_0_60px_rgba(201,162,39,0.6)]" />
            <div className="absolute inset-[44%] rounded-full bg-ink" />
            <div className="absolute inset-[48%] rounded-full bg-royal shadow-[0_0_16px_#1557B0]" />
          </div>
        </div>

        {/* Play chip */}
        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 p-3 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gold text-ink">
              <Play className="h-3.5 w-3.5 translate-x-0.5" fill="currentColor" />
            </span>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                Now Showing
              </p>
              <p className="text-xs font-semibold text-white">Beauty · Wellness · Self-Care</p>
            </div>
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-gold">
            AI · Reel
          </span>
        </div>
      </div>

      {/* Floating chip 1 */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-4 top-12 hidden rounded-2xl border border-white/10 bg-white/95 px-4 py-3 text-ink shadow-2xl sm:block"
      >
        <p className="text-[10px] uppercase tracking-[0.2em] text-ink/50">Reels</p>
        <p className="font-display text-lg font-bold">+38%</p>
        <p className="text-[10px] text-ink/60">engagement</p>
      </motion.div>

      {/* Floating chip 2 */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        className="absolute -right-4 bottom-24 hidden rounded-2xl border border-white/10 bg-white/95 px-4 py-3 text-ink shadow-2xl sm:block"
      >
        <p className="text-[10px] uppercase tracking-[0.2em] text-ink/50">TikTok</p>
        <p className="font-display text-lg font-bold text-royal">2.4M</p>
        <p className="text-[10px] text-ink/60">views / mo</p>
      </motion.div>
    </div>
  );
}

function Marquee() {
  const items = [
    "Skincare", "Haircare", "Body-care", "Beauty", "Spa", "Wellness",
    "Salons", "Estheticians", "Nail", "Lash & Brow", "Massage", "Self-care",
  ];
  const doubled = [...items, ...items];
  return (
    <div className="relative border-t border-white/10 bg-ink-soft py-5">
      <div className="flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
          className="flex shrink-0 items-center gap-8 pr-8"
        >
          {doubled.map((item, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="text-xs font-medium uppercase tracking-[0.32em] text-white/40">
                {item}
              </span>
              <Sparkles className="h-3 w-3 text-gold/60" />
            </div>
          ))}
        </motion.div>
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
                <p className="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">
                  {s.k}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-ink/50">
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
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="What We Create"
            title={
              <>
                Content engineered to{" "}
                <span className="italic text-royal">stop the scroll</span>.
              </>
            }
            description="Six formats, one creative engine. Each is designed to look premium and convert — across every platform your audience lives on."
            className="max-w-2xl"
          />
          <TextLink href="/services" tone="blue">
            All Services
          </TextLink>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CARDS.map((card, i) => {
            const Icon = iconMap[card.icon] ?? Sparkles;
            return (
              <Reveal key={card.title} delay={(i % 3) * 0.08}>
                <article className="card-lift group relative h-full overflow-hidden rounded-2xl border border-black/5 bg-white p-7 hover:border-gold/40 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)]">
                  {/* Number */}
                  <span className="absolute right-6 top-6 font-display text-5xl font-bold text-paper-mute transition-colors duration-500 group-hover:text-gold/15">
                    0{i + 1}
                  </span>

                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-ink">
                    <Icon className="h-5 w-5" />
                  </span>

                  <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">
                    {card.description}
                  </p>

                  <div className="mt-6">
                    <TextLink href="/services" tone="blue">
                      Learn More
                    </TextLink>
                  </div>

                  {/* Bottom accent line */}
                  <span className="absolute bottom-0 left-7 right-7 h-px origin-left scale-x-0 bg-gradient-to-r from-gold to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

/* ---------------- PORTFOLIO PREVIEW ---------------- */

function PortfolioPreview() {
  const featured = PROJECTS.slice(0, 6);
  return (
    <Section tone="dark">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            tone="dark"
            eyebrow="Selected Work"
            title={
              <>
                A look at the{" "}
                <span className="italic text-gold">craft</span>.
              </>
            }
            description="A glimpse of recent projects across beauty, product, wellness and service brands. Every piece is built to feel cinematic and on-brand."
            className="max-w-2xl"
          />
          <TextLink href="/work" tone="gold">
            View All Work
          </TextLink>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <ProjectThumbnail key={p.id} project={p} index={i} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <CTAButton href="/work" size="lg" variant="gold" showArrow>
            View All Work
          </CTAButton>
        </div>
      </Container>
    </Section>
  );
}

/* ---------------- PACKAGES PREVIEW ---------------- */

function PackagesPreview() {
  return (
    <Section tone="light">
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
                    ? "border-gold/50 shadow-[0_30px_70px_-30px_rgba(201,162,39,0.4)] lg:-translate-y-3"
                    : "border-black/5 hover:border-royal/30 hover:shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)]"
                }`}
              >
                {pkg.badge && (
                  <span className="absolute -top-3 left-7 inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-ink shadow-lg">
                    <Sparkles className="h-3 w-3" />
                    {pkg.badge}
                  </span>
                )}
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-royal">
                  {pkg.name}
                </p>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold tracking-tight text-ink">
                    {pkg.price}
                  </span>
                  <span className="text-sm text-ink/50">{pkg.cadence}</span>
                </div>
                <p className="mt-3 text-sm text-ink/60">{pkg.description}</p>
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
          <CTAButton href="/packages" size="lg" variant="secondary" showArrow>
            View All Packages
          </CTAButton>
        </div>
      </Container>
    </Section>
  );
}

/* ---------------- FINAL CTA ---------------- */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 60% at 50% 100%, rgba(201,162,39,0.25), transparent 60%), radial-gradient(60% 50% at 50% 0%, rgba(21,87,176,0.2), transparent 60%), #0A0A0A",
        }}
      />
      <div className="bg-grain absolute inset-0 opacity-50" />

      <Container className="relative z-10 py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-8 inline-flex items-center justify-center"
          >
            <LogoMark className="h-14 w-14" />
          </motion.div>

          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-[1.05] tracking-tight text-balance sm:text-4xl lg:text-5xl xl:text-6xl">
              Ready to make your brand{" "}
              <span className="text-gold-gradient italic">look better</span> online?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-xl text-base text-white/65 sm:text-lg">
              Let&apos;s create content your audience wants to stop and watch.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CTAButton href={WA_DEFAULT} isWhatsApp size="lg" variant="gold" showArrow>
                Start Your Project
              </CTAButton>
              <CTAButton href={WA_DEFAULT} isWhatsApp size="lg" variant="outline-light">
                WhatsApp Us
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
