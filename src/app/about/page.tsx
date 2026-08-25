"use client";

import { Sparkles, Cpu, Eye, Target, ShieldCheck, ArrowUpRight } from "lucide-react";
import { Container, Section, Eyebrow, SectionHeading } from "@/components/site/Section";
import { CTAButton } from "@/components/site/CTAButton";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";
import { LogoMark } from "@/components/site/Logo";
import { BRAND, FOUNDER, WA_DEFAULT } from "@/lib/site";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            About <span className="italic text-gold">Aldeora Creative</span>.
          </>
        }
        description="A creative studio focused on helping modern brands communicate through visual content, AI video, web design and digital solutions."
      />

      {/* Founder feature — Adeyemi Gold */}
      <FounderFeature />

      {/* Studio story */}
      <StudioStory />

      {/* Values */}
      <ValuesSection />

      {/* Who we serve */}
      <WhoWeServe />

      {/* CTA */}
      <FinalCTA />
    </>
  );
}

/* ---------------- FOUNDER FEATURE ---------------- */

function FounderFeature() {
  return (
    <Section tone="light">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Photo */}
          <div className="lg:col-span-5">
            <Reveal>
              <figure className="relative">
                <img
                  src={FOUNDER.photo}
                  alt={`${FOUNDER.name} — ${FOUNDER.role}`}
                  className="aspect-[4/5] w-full rounded-2xl object-cover ring-1 ring-black/[0.06]"
                />
                {/* Caption overlay */}
                <figcaption className="mt-4 flex items-baseline justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold-deep">
                      Founder · Creative Director
                    </p>
                    <p className="mt-1 font-display text-xl font-medium tracking-tight text-ink">
                      {FOUNDER.name}
                    </p>
                  </div>
                  <span className="editorial-num text-2xl text-ink/20">01</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>

          {/* Copy */}
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>Who&apos;s behind the studio</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-3xl font-light leading-[1.1] tracking-tight text-balance sm:text-4xl lg:text-[44px]">
                {FOUNDER.name} founded Aldeora Creative to give beauty &amp; wellness brands the cinematic treatment they deserve.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-ink/65 sm:text-base">
                {FOUNDER.longBio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </Reveal>

            {/* Quote pullout */}
            <Reveal delay={0.15}>
              <blockquote className="mt-8 border-l-2 border-gold pl-5">
                <p className="font-display text-xl font-light italic leading-snug tracking-tight text-ink sm:text-2xl">
                  {FOUNDER.quotes[0].text}
                </p>
                <footer className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/45">
                  — {FOUNDER.name}, {FOUNDER.quotes[0].context}
                </footer>
              </blockquote>
            </Reveal>

            {/* Credentials */}
            <Reveal delay={0.2}>
              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-black/[0.06] pt-6 sm:grid-cols-4">
                {FOUNDER.credentials.map((c) => (
                  <div key={c.label}>
                    <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink/40">
                      {c.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-ink">{c.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-8">
                <CTAButton href={WA_DEFAULT} isWhatsApp size="lg" variant="gold" showArrow>
                  Work With {FOUNDER.name.split(" ")[0]}
                </CTAButton>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ---------------- STUDIO STORY ---------------- */

function StudioStory() {
  return (
    <Section tone="paper">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow>The studio</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-3xl font-light leading-tight tracking-tight text-ink sm:text-4xl">
                A studio built for the way modern brands communicate.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <div className="space-y-5 text-[15px] leading-relaxed text-ink/65 sm:text-base">
                <p>
                  Aldeora Creative exists because beauty, wellness and self-care
                  brands deserve content that matches the quality of what they make —
                  without the cost and friction of traditional production.
                </p>
                <p>
                  We combine creative direction, AI tooling and a strong sense of
                  brand craft to produce video that feels premium, on-voice and built
                  for the platforms your audience actually uses. Our work spans product,
                  service, educational and brand-story formats — designed to look like
                  the brands we partner with.
                </p>
                <p>
                  We keep the process human. We listen first, direct with intent, and
                  deliver work that&apos;s both beautiful and useful. No fluff, no filler —
                  just craft that moves your brand forward.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ---------------- VALUES ---------------- */

function ValuesSection() {
  return (
    <Section tone="light">
      <Container>
        <SectionHeading
          eyebrow="What We Stand For"
          title={
            <>
              Five principles, <span className="italic text-royal">always</span>.
            </>
          }
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-black/[0.06] bg-black/[0.06] sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.06}>
              <article className="group relative h-full bg-white p-7 transition-colors duration-300 hover:bg-paper-soft">
                <div className="flex items-baseline justify-between">
                  <span className="editorial-num text-2xl text-ink/25">
                    0{i + 1}
                  </span>
                  <v.icon className="h-5 w-5 text-ink/40 transition-colors duration-300 group-hover:text-gold" />
                </div>
                <h3 className="mt-6 font-display text-xl font-medium tracking-tight text-ink">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/55">
                  {v.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

const VALUES = [
  {
    icon: Sparkles,
    title: "Creativity",
    desc: "We treat every brand as a unique creative challenge — not a template to fill.",
  },
  {
    icon: Cpu,
    title: "Technology",
    desc: "We use AI as a creative tool, not a shortcut. It amplifies craft, never replaces it.",
  },
  {
    icon: Eye,
    title: "Visual Quality",
    desc: "Premium feel is non-negotiable. Every frame, every cut, every caption has to earn its place.",
  },
  {
    icon: Target,
    title: "Business Results",
    desc: "Beautiful content that doesn't move the needle is decoration. We aim for both.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Execution",
    desc: "Clear process, on-time delivery, on-brand output. Reliability is part of the craft.",
  },
];

/* ---------------- WHO WE SERVE ---------------- */

function WhoWeServe() {
  return (
    <Section tone="dark">
      <Container>
        <SectionHeading
          tone="dark"
          eyebrow="Who We Serve"
          title={
            <>
              Built for <span className="italic text-gold">beauty, wellness & self-care</span>.
            </>
          }
          description="We serve a broad spectrum of brands across the beauty, wellness and self-care ecosystem — not a single niche."
        />

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] sm:grid-cols-3 lg:grid-cols-4">
          {WHO_WE_SERVE.map((label, i) => (
            <Reveal key={label} delay={(i % 4) * 0.05}>
              <div className="group flex h-full items-center gap-3 bg-ink p-5 transition-colors duration-300 hover:bg-ink-soft">
                <span className="h-1 w-1 shrink-0 rounded-full bg-gold" />
                <span className="text-sm font-medium text-white/85">{label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col items-center gap-5 text-center">
            <p className="max-w-xl text-sm text-white/55">
              If your brand lives in the beauty, wellness or self-care space, we&apos;d love to make content for you.
            </p>
            <CTAButton href={WA_DEFAULT} isWhatsApp size="lg" variant="gold" showArrow>
              Work With Us
            </CTAButton>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

const WHO_WE_SERVE = [
  "Skincare brands",
  "Haircare brands",
  "Body-care brands",
  "Beauty brands",
  "Massage therapists",
  "Spas",
  "Wellness businesses",
  "Salons",
  "Estheticians",
  "Nail businesses",
  "Lash & brow businesses",
  "Beauty professionals",
  "Self-care brands",
  "Related product brands",
  "Related service brands",
  "Modern lifestyle brands",
];

/* ---------------- FINAL CTA ---------------- */

function FinalCTA() {
  return (
    <Section tone="light" className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-col items-center gap-6 rounded-2xl border border-black/[0.06] bg-gradient-to-br from-paper-soft to-white p-10 text-center shadow-sm sm:p-14">
          <LogoMark className="h-12 w-12" />
          <h2 className="max-w-2xl font-display text-3xl font-light leading-tight tracking-tight text-balance sm:text-4xl">
            Let&apos;s build something your audience can&apos;t scroll past.
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <CTAButton href={WA_DEFAULT} isWhatsApp size="lg" variant="gold" showArrow>
              Work With Us
            </CTAButton>
            <CTAButton href="/packages" size="lg" variant="secondary">
              View Packages
            </CTAButton>
          </div>
        </div>
      </Container>
    </Section>
  );
}
