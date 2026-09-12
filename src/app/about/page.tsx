"use client";

import { Sparkles, Eye, Target, ArrowUpRight } from "lucide-react";
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
            A visual content studio for brands that take their{" "}
            <span className="italic text-gold">image seriously</span>.
          </>
        }
        description="Founded by Adeyemi Gold. We make beauty, wellness and self-care brands look premium through AI-assisted video."
      />

      {/* Founder feature */}
      <Section tone="light">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Photo */}
            <div className="lg:col-span-5">
              <Reveal>
                <figure className="relative overflow-hidden rounded-2xl">
                  <img
                    src={FOUNDER.photo}
                    alt={`${FOUNDER.name} — ${FOUNDER.role}`}
                    className="aspect-[4/5] w-full object-cover"
                  />
                  <figcaption className="mt-5 flex items-baseline justify-between">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.24em] text-gold-deep">{FOUNDER.role}</p>
                      <p className="mt-2 font-display text-2xl font-medium tracking-tight text-ink">{FOUNDER.name}</p>
                    </div>
                    <span className="editorial-num text-3xl text-ink/15">01</span>
                  </figcaption>
                </figure>
              </Reveal>
            </div>

            {/* Copy — short */}
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Who we are</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 font-display text-3xl font-light leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-[44px]">
                  {FOUNDER.quote}
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/60">
                  {FOUNDER.longBio.map((para, i) => <p key={i}>{para}</p>)}
                </div>
              </Reveal>

              {/* Credentials */}
              <Reveal delay={0.15}>
                <dl className="mt-9 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-ink/10 pt-7 sm:grid-cols-4">
                  {FOUNDER.credentials.map((c) => (
                    <div key={c.label}>
                      <dt className="font-mono text-xs uppercase tracking-[0.2em] text-ink/40">{c.label}</dt>
                      <dd className="mt-1.5 text-base font-medium text-ink">{c.value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-9">
                  <CTAButton href={WA_DEFAULT} isWhatsApp size="lg" variant="gold" showArrow>
                    Let's Work Together
                  </CTAButton>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* What we do — very short */}
      <Section tone="paper">
        <Container>
          <SectionHeading
            eyebrow="What we create"
            title={<>Premium AI video for <span className="italic text-sky-deep">visual brands</span>.</>}
            description="Beauty, skincare, haircare, wellness, massage and lifestyle — each treated with cinematic creative direction."
          />

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-black/[0.06] bg-black/[0.06] sm:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <article className="h-full bg-white p-8 transition-colors duration-400 hover:bg-paper-soft">
                  <div className="flex items-baseline justify-between">
                    <span className="editorial-num text-3xl text-ink/20">0{i + 1}</span>
                    <v.icon className="h-6 w-6 text-ink/35" />
                  </div>
                  <h3 className="mt-7 font-display text-xl font-medium tracking-tight text-ink">{v.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-ink/55">{v.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Who we serve — visual list */}
      <Section tone="dark">
        <Container>
          <SectionHeading
            tone="dark"
            eyebrow="Who we serve"
            title={<>Built for <span className="italic text-gold">visual brands</span>.</>}
          />
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] sm:grid-cols-3 lg:grid-cols-4">
            {WHO_WE_SERVE.map((label, i) => (
              <Reveal key={label} delay={(i % 4) * 0.05}>
                <div className="flex h-full items-center gap-3 bg-ink p-6 transition-colors duration-400 hover:bg-ink-soft">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span className="text-base font-medium text-white/85">{label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section tone="light" className="py-20 sm:py-24">
        <Container>
          <div className="flex flex-col items-center gap-6 rounded-2xl border border-ink/10 bg-gradient-to-br from-paper-soft to-white p-12 text-center shadow-sm sm:p-16">
            <LogoMark className="h-12 w-12" />
            <h2 className="max-w-xl font-display text-4xl font-light leading-tight tracking-tight text-balance sm:text-5xl">
              Let&apos;s build something your audience can&apos;t scroll past.
            </h2>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CTAButton href={WA_DEFAULT} isWhatsApp size="lg" variant="gold" showArrow>
                Let's Work Together
              </CTAButton>
              <CTAButton href="/contact" size="lg" variant="secondary">
                Start a Project
              </CTAButton>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

const VALUES = [
  { icon: Sparkles, title: "Creativity", desc: "Every brand is a unique creative challenge." },
  { icon: Eye, title: "Visual Quality", desc: "Premium feel is non-negotiable." },
  { icon: Target, title: "Results", desc: "Beautiful content that moves the needle." },
];

const WHO_WE_SERVE = [
  "Skincare", "Haircare", "Body care", "Beauty",
  "Spas", "Salons", "Massage", "Estheticians",
  "Lash & Brow", "Nail", "Wellness", "Self-care",
];
