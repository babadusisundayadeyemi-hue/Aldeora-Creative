"use client";

import { Sparkles, Eye, Target, ShieldCheck } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/site/Section";
import { CTAButton } from "@/components/site/CTAButton";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";
import { BRAND, FOUNDER, WA_DEFAULT } from "@/lib/site";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={<>About <span className="italic text-gold">Aldeora Creative</span>.</>}
        description="A creative studio making premium AI-powered video for modern brands."
      />

      {/* Founder feature */}
      <Section tone="light">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 lg:items-center">
            {/* Photo */}
            <div className="lg:col-span-5">
              <Reveal>
                <figure className="relative">
                  <img
                    src={FOUNDER.photo}
                    alt={`${FOUNDER.name} — ${FOUNDER.role}`}
                    className="aspect-[4/5] w-full rounded-2xl object-cover"
                  />
                  <figcaption className="mt-5 flex items-baseline justify-between gap-4">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.24em] text-gold-deep">Founder · Creative Director</p>
                      <p className="mt-2 font-display text-2xl font-medium tracking-tight text-ink">{FOUNDER.name}</p>
                    </div>
                    <span className="editorial-num text-3xl text-ink/20">01</span>
                  </figcaption>
                </figure>
              </Reveal>
            </div>

            {/* Copy — short, personal */}
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Who we are</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 font-display text-4xl font-light leading-[1.1] tracking-tight text-balance sm:text-5xl">
                  A studio that treats every brand like it deserves.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/65">
                  {FOUNDER.longBio.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <blockquote className="mt-9 border-l-2 border-gold pl-6">
                  <p className="font-display text-2xl font-light italic leading-snug tracking-tight text-ink sm:text-3xl">
                    {FOUNDER.quotes[0].text}
                  </p>
                </blockquote>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-9">
                  <CTAButton href="/contact" size="lg" variant="gold" showArrow>Work With Us</CTAButton>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* What we do + Who we work with — visual, minimal */}
      <Section tone="paper">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            {/* What we do */}
            <div className="lg:col-span-6">
              <Reveal>
                <Eyebrow>What we create</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <ul className="mt-6 space-y-4">
                  {["AI Video Creation", "Product & Brand Videos", "Social Media Content", "Beauty & Wellness Content"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-lg text-ink/75">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            {/* Who we work with */}
            <div className="lg:col-span-6">
              <Reveal delay={0.1}>
                <Eyebrow>Who we work with</Eyebrow>
              </Reveal>
              <Reveal delay={0.15}>
                <ul className="mt-6 space-y-4">
                  {["Skincare & Haircare", "Spa & Wellness", "Beauty & Cosmetics", "Massage & Lifestyle"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-lg text-ink/75">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-royal" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values — minimal */}
      <Section tone="light">
        <Container>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-black/[0.06] bg-black/[0.06] sm:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <article className="h-full bg-white p-8">
                  <v.icon className="h-6 w-6 text-ink/40" />
                  <h3 className="mt-6 font-display text-2xl font-medium tracking-tight text-ink">{v.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-ink/55">{v.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section tone="dark" className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center">
            <Eyebrow tone="dark">Let's work together</Eyebrow>
            <h2 className="max-w-xl font-display text-4xl font-light leading-tight tracking-tight text-balance sm:text-5xl">
              Let's create something your audience can't scroll past.
            </h2>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CTAButton href="/contact" size="lg" variant="gold" showArrow>Work With Us</CTAButton>
              <CTAButton href={WA_DEFAULT} isWhatsApp size="lg" variant="outline-light">Chat on WhatsApp</CTAButton>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

const VALUES = [
  { icon: Sparkles, title: "Art Direction", desc: "Every frame is intentional, not automated." },
  { icon: Eye, title: "Visual Quality", desc: "Premium feel is non-negotiable." },
  { icon: Target, title: "Business Results", desc: "Beautiful content that moves the needle." },
];
