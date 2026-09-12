"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Container, Section, Eyebrow, SectionHeading } from "@/components/site/Section";
import { CTAButton, TextLink } from "@/components/site/CTAButton";
import { Reveal } from "@/components/site/Reveal";
import { VideoEmbed } from "@/components/site/VideoEmbed";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { BRAND, FOUNDER, SERVICES, PROJECTS, PROCESS_STEPS, TESTIMONIALS, WA_DEFAULT } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <ServicesPreview />
      <FeaturedWork />
      <Process />
      <TestimonialPreview />
      <FinalCTA />
    </>
  );
}

/* ============== HERO — Cinematic video, minimal text ============== */

function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-ink text-white">
      {/* Background video — autoplay, muted, loop, no controls */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        poster="/founder/adeyemi-gold.jpg"
      >
        <source src="/videos/hero-serum.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-transparent" />

      <Container className="relative z-10 flex min-h-[90vh] flex-col justify-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 0.61, 0.36, 1] }}
          className="max-w-3xl"
        >
          {/* Brand name */}
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-gold">
            {BRAND.name}
          </p>

          {/* Headline */}
          <h1 className="mt-6 font-display text-5xl font-light leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-7xl xl:text-[88px]">
            AI-powered visual content for brands that want to{" "}
            <span className="italic text-gold">stand out</span>.
          </h1>

          {/* Short supporting text */}
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70 sm:text-xl">
            Premium video content for beauty, wellness and lifestyle brands.
          </p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <CTAButton href="/work" size="lg" variant="gold" showArrow>
              View Our Work
            </CTAButton>
            <CTAButton href="/contact" size="lg" variant="outline-light">
              Let's Work Together
            </CTAButton>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">Scroll</span>
          <div className="h-10 w-px bg-white/20" />
        </div>
      </motion.div>
    </section>
  );
}

/* ============== BRAND INTRO — Very short ============== */

function BrandIntro() {
  return (
    <Section tone="light" className="py-20 sm:py-24 lg:py-32">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <Eyebrow>The Studio</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-4xl font-light leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl">
                We create premium visual content that makes brands{" "}
                <span className="italic text-royal">look more valuable</span>.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-4">
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-ink/55">
                A creative studio led by {FOUNDER.name}, producing AI-powered video for modern brands.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ============== SERVICES PREVIEW — Visual, minimal text ============== */

function ServicesPreview() {
  return (
    <Section tone="paper">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="What We Create"
              title={<>Four ways we make your brand <span className="italic text-royal">look premium</span>.</>}
            />
          </div>
          <div className="lg:col-span-5 lg:flex lg:justify-end">
            <TextLink href="/services" tone="blue">Explore Services</TextLink>
          </div>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-black/[0.06] bg-black/[0.06] sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <Reveal key={service.id} delay={(i % 4) * 0.06}>
              <Link href="/services" className="group block h-full bg-white p-8 transition-colors duration-300 hover:bg-paper-soft">
                <span className="editorial-num text-3xl text-ink/25">0{i + 1}</span>
                <h3 className="mt-6 font-display text-2xl font-medium tracking-tight text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink/55">
                  {service.short}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.18em] text-royal opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Learn More <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ============== FEATURED WORK — Editorial, not generic grid ============== */

function FeaturedWork() {
  const featured = PROJECTS.slice(0, 4);
  return (
    <Section tone="dark">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHeading
              tone="dark"
              eyebrow="Selected Work"
              title={<>A look at the <span className="italic text-gold">craft</span>.</>}
            />
          </div>
          <div className="lg:col-span-5 lg:flex lg:justify-end">
            <TextLink href="/work" tone="gold">View All Work</TextLink>
          </div>
        </div>

        {/* Editorial layout — different sizes */}
        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08} className={
              i === 0 ? "lg:col-span-7" :
              i === 1 ? "lg:col-span-5" :
              i === 2 ? "lg:col-span-5" :
              "lg:col-span-7"
            }>
              <div className="group">
                <VideoEmbed
                  videoId={p.videoId}
                  title={p.title}
                  aspect={i === 0 || i === 3 ? "video" : "portrait"}
                  label={`${p.category} · ${p.format}`}
                />
                <div className="mt-5 flex items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-gold">{p.category}</p>
                    <h3 className="mt-2 font-display text-xl font-medium tracking-tight text-white">{p.title}</h3>
                    <p className="mt-1 text-sm text-white/50">{p.description}</p>
                  </div>
                  <span className="editorial-num text-xl text-white/25">0{i + 1}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ============== PROCESS — Short, visual ============== */

function Process() {
  return (
    <Section tone="light">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="How We Work"
          title={<>Four steps from <span className="italic text-royal">brief to broadcast</span>.</>}
          className="mx-auto"
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-black/[0.06] bg-black/[0.06] sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08}>
              <div className="h-full bg-white p-8">
                <span className="editorial-num text-4xl text-gold/40">{step.n}</span>
                <h3 className="mt-5 font-display text-2xl font-medium tracking-tight text-ink">{step.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-ink/55">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ============== TESTIMONIAL PREVIEW ============== */

function TestimonialPreview() {
  const t = TESTIMONIALS[0];
  return (
    <Section tone="paper">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>Reviews</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <blockquote className="mt-6">
                <p className="font-display text-3xl font-light leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[44px]">
                  <span className="text-gold">"</span>{t.quote}<span className="text-gold">"</span>
                </p>
              </blockquote>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink/10">
                  <span className="font-display text-lg text-ink/40">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-display text-lg font-medium text-ink">{t.name}</p>
                  <p className="text-sm text-ink/50">{t.role} · {t.business}</p>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <p className="text-lg leading-relaxed text-ink/55">
                Real reviews from real clients will appear here. We're collecting testimonials from the brands we've worked with.
              </p>
              <div className="mt-8">
                <TextLink href="/reviews" tone="blue">Read All Reviews</TextLink>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ============== FINAL CTA ============== */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      >
        <source src="/videos/hero-serum.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/60" />

      <Container className="relative z-10 py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow tone="dark" className="justify-center">Let's create</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-4xl font-light leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Let's create something{" "}
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
    </section>
  );
}
