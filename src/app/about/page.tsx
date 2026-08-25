"use client";

import { Sparkles, Cpu, Eye, Target, ShieldCheck } from "lucide-react";
import { Container, Section, Eyebrow, SectionHeading } from "@/components/site/Section";
import { CTAButton } from "@/components/site/CTAButton";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";
import { LogoMark } from "@/components/site/Logo";
import { BRAND, WA_DEFAULT } from "@/lib/site";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            About <span className="text-gold-gradient italic">Aldeora Creative</span>.
          </>
        }
        description="A creative studio focused on helping modern brands communicate through visual content, AI video, web design and digital solutions."
      />

      {/* Intro */}
      <Section tone="light">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Who we are</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
                  A creative studio built for the way modern brands communicate.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-6 space-y-5 text-base leading-relaxed text-ink/70 sm:text-lg">
                  <p>
                    Aldeora Creative is a creative studio focused on helping modern
                    brands communicate through visual content, AI video, web design
                    and digital solutions. We exist because beauty, wellness and
                    self-care brands deserve content that matches the quality of
                    what they make — without the cost and friction of traditional
                    production.
                  </p>
                  <p>
                    We combine creative direction, AI tooling and a strong sense of
                    brand craft to produce video that feels premium, on-voice and
                    built for the platforms your audience actually uses. Our work
                    spans product, service, educational and brand-story formats —
                    designed to look like the brands we partner with.
                  </p>
                  <p>
                    We keep the process human. We listen first, direct with intent,
                    and deliver work that&apos;s both beautiful and useful. No fluff,
                    no filler — just craft that moves your brand forward.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-8">
                  <CTAButton href={WA_DEFAULT} isWhatsApp size="lg" variant="gold" showArrow>
                    Work With Us
                  </CTAButton>
                </div>
              </Reveal>
            </div>

            {/* Side panel */}
            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-ink p-8 text-white shadow-[0_40px_120px_-30px_rgba(0,0,0,0.5)]">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(80% 60% at 100% 0%, rgba(201,162,39,0.25), transparent 55%), radial-gradient(60% 50% at 0% 100%, rgba(21,87,176,0.3), transparent 55%)",
                    }}
                  />
                  <div className="bg-grain absolute inset-0 opacity-40" />
                  <div className="relative">
                    <LogoMark className="h-12 w-12" />
                    <p className="mt-6 font-display text-xl font-medium leading-snug">
                      “We make premium creative production feel effortless — so your brand can show up like it should.”
                    </p>
                    <div className="mt-6 border-t border-white/10 pt-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
                        Aldeora Creative
                      </p>
                      <p className="mt-1 text-xs text-white/55">
                        {BRAND.tagline}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section tone="paper">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="What We Stand For"
            title={
              <>
                Five principles, <span className="italic text-royal">always</span>.
              </>
            }
            className="mx-auto"
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <article className="card-lift group relative h-full overflow-hidden rounded-2xl border border-black/5 bg-white p-7 hover:border-gold/40 hover:shadow-[0_30px_70px_-30px_rgba(0,0,0,0.25)]">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-ink">
                    <v.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">
                    {v.desc}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Who we serve */}
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

          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {WHO_WE_SERVE.map((label, i) => (
              <Reveal key={label} delay={(i % 4) * 0.06}>
                <div className="group flex h-full items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-gold/40 hover:bg-white/[0.06]">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span className="text-sm font-medium text-white/85">{label}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-12 flex flex-col items-center gap-5 text-center">
              <p className="max-w-xl text-sm text-white/65">
                If your brand lives in the beauty, wellness or self-care space,
                we&apos;d love to make content for you.
              </p>
              <CTAButton href={WA_DEFAULT} isWhatsApp size="lg" variant="gold" showArrow>
                Work With Us
              </CTAButton>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
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
