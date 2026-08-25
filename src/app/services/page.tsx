"use client";

import {
  Video,
  MonitorSmartphone,
  Sparkles,
  Film,
  Wand2,
  Layers,
  Palette,
  Smartphone,
  Globe,
  Lightbulb,
  Check,
  Play,
} from "lucide-react";
import { Container, Section, Eyebrow, SectionHeading } from "@/components/site/Section";
import { CTAButton } from "@/components/site/CTAButton";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";
import { VideoEmbed } from "@/components/site/VideoEmbed";
import { SERVICES, WA_DEFAULT, PROJECTS } from "@/lib/site";

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Video,
  MonitorSmartphone,
  Sparkles,
};

const subItemIcons = [Film, Wand2, Layers, Palette, Smartphone, Globe];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={
          <>
            Creative content for{" "}
            <span className="italic text-gold">modern</span> beauty &
            wellness brands.
          </>
        }
        description="Creative content designed for modern beauty, wellness and self-care brands. AI Video is our flagship — supported by web design and digital solutions."
      >
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <CTAButton href={WA_DEFAULT} isWhatsApp size="lg" variant="gold" showArrow>
            Get Started
          </CTAButton>
          <CTAButton href="/packages" size="lg" variant="outline-light">
            View Packages
          </CTAButton>
        </div>
      </PageHeader>

      <ServiceFeature />

      <ServiceSecondary />

      <ProcessSection />

      <FinalServicesCTA />
    </>
  );
}

function ServiceFeature() {
  const aiVideo = SERVICES.find((s) => s.id === "ai-video")!;
  // Reference film for AI Video service — Tom Ford / luxury beauty campaign
  const reference = PROJECTS.find((p) => p.id === "p10")!;

  return (
    <Section tone="light">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: copy */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-deep">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Flagship Service
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-3xl font-light leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-[44px]">
                {aiVideo.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-base leading-relaxed text-ink/65 sm:text-lg">
                {aiVideo.description}
              </p>
            </Reveal>

            <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-black/[0.06] bg-black/[0.06] sm:grid-cols-2">
              {aiVideo.items.map((item, i) => {
                const ItemIcon = subItemIcons[i % subItemIcons.length];
                return (
                  <Reveal key={item} delay={0.12 + i * 0.04}>
                    <div className="group flex items-center gap-3 bg-white p-4 transition-colors hover:bg-paper-soft">
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ink text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
                        <ItemIcon className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium text-ink">{item}</span>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.3}>
              <div className="mt-8">
                <CTAButton href={WA_DEFAULT} isWhatsApp size="lg" variant="gold" showArrow>
                  Get Started
                </CTAButton>
              </div>
            </Reveal>
          </div>

          {/* Right: real reference video */}
          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/45">
                    Reference Film · {reference.category}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold-deep">
                    {reference.format}
                  </span>
                </div>
                <VideoEmbed
                  videoId={reference.videoId}
                  title={reference.title}
                  aspect="portrait"
                  label={reference.tag}
                  className="ring-1 ring-black/[0.06]"
                />
                <p className="mt-3 font-display text-base font-medium tracking-tight text-ink">
                  {reference.title}
                </p>
                <p className="mt-0.5 text-[11px] text-ink/45">
                  Example of the style &amp; quality our AI Video service produces.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function ServiceSecondary() {
  const others = SERVICES.filter((s) => s.id !== "ai-video");
  return (
    <Section tone="paper">
      <Container>
        <SectionHeading
          eyebrow="Also Offered"
          title={
            <>
              Beyond video — <span className="italic text-royal">complete digital</span> presence.
            </>
          }
          description="Web design and digital solutions complement our video work, giving your brand a consistent premium feel everywhere."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {others.map((service, i) => {
            const Icon = serviceIcons[service.icon] ?? Sparkles;
            return (
              <Reveal key={service.id} delay={i * 0.1}>
                <article className="card-lift group relative h-full overflow-hidden rounded-2xl border border-black/[0.06] bg-white p-8 hover:border-royal/20 hover:shadow-[0_30px_70px_-30px_rgba(0,0,0,0.2)]">
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-gold transition-all duration-500 group-hover:bg-royal group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="editorial-num text-3xl text-paper-mute group-hover:text-gold/30">
                      0{i + 2}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-medium tracking-tight text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-ink/70">
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-royal/10 text-royal">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7">
                    <CTAButton href={WA_DEFAULT} isWhatsApp variant="secondary" showArrow>
                      Get Started
                    </CTAButton>
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

function ProcessSection() {
  const steps = [
    { n: "01", title: "Discovery", desc: "We learn your brand, audience, voice and goals — and audit what content is already working in your space." },
    { n: "02", title: "Creative Direction", desc: "We design a content plan with hooks, formats, motion style and visual identity that fits your brand." },
    { n: "03", title: "AI Production", desc: "Our AI-powered pipeline produces premium video — visuals, voiceovers, captions and motion graphics." },
    { n: "04", title: "Review & Refine", desc: "You review, we revise based on your package. Then we deliver platform-ready exports." },
  ];
  return (
    <Section tone="dark">
      <Container>
        <SectionHeading
          tone="dark"
          eyebrow="How It Works"
          title={
            <>
              A clear process from{" "}
              <span className="italic text-gold">brief to broadcast</span>.
            </>
          }
          description="Four steps designed to make premium creative production feel effortless on your side."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08}>
              <div className="group h-full bg-ink p-7 transition-colors duration-300 hover:bg-ink-soft">
                <div className="flex items-baseline justify-between">
                  <span className="editorial-num text-3xl text-gold/40 transition-colors group-hover:text-gold">
                    {step.n}
                  </span>
                  <span className="h-px w-10 bg-gradient-to-r from-gold/40 to-transparent" />
                </div>
                <h3 className="mt-5 font-display text-lg font-medium tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function FinalServicesCTA() {
  return (
    <Section tone="light" className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-col items-center gap-6 rounded-2xl border border-black/[0.06] bg-gradient-to-br from-paper-soft to-white p-10 text-center shadow-sm sm:p-14">
          <Eyebrow>Ready when you are</Eyebrow>
          <h2 className="max-w-2xl font-display text-3xl font-light leading-tight tracking-tight text-balance sm:text-4xl">
            Let&apos;s build your next premium piece of content.
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <CTAButton href={WA_DEFAULT} isWhatsApp size="lg" variant="gold" showArrow>
              Get Started
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
