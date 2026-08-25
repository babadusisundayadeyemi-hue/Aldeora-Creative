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
} from "lucide-react";
import { Container, Section, Eyebrow, SectionHeading } from "@/components/site/Section";
import { CTAButton } from "@/components/site/CTAButton";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";
import { SERVICES, WA_DEFAULT } from "@/lib/site";

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
            <span className="text-gold-gradient italic">modern</span> beauty &
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

      {/* AI VIDEO — primary, large feature */}
      <ServiceFeature />

      {/* WEB DESIGN + DIGITAL SOLUTIONS — secondary, paired */}
      <ServiceSecondary />

      {/* Process */}
      <ProcessSection />

      {/* Final CTA */}
      <FinalServicesCTA />
    </>
  );
}

function ServiceFeature() {
  const aiVideo = SERVICES.find((s) => s.id === "ai-video")!;
  const Icon = serviceIcons[aiVideo.icon] ?? Video;
  return (
    <Section tone="light">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: copy */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-gold-deep">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Flagship Service
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
                {aiVideo.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-base leading-relaxed text-ink/65 sm:text-lg">
                {aiVideo.description}
              </p>
            </Reveal>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {aiVideo.items.map((item, i) => {
                const ItemIcon = subItemIcons[i % subItemIcons.length];
                return (
                  <Reveal key={item} delay={0.12 + i * 0.05}>
                    <div className="group flex items-center gap-3 rounded-xl border border-black/5 bg-white p-4 transition-colors hover:border-gold/40">
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

          {/* Right: visual */}
          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <ServiceVisual />
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function ServiceVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl border border-black/5 bg-ink shadow-[0_40px_120px_-30px_rgba(0,0,0,0.5)]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 60% at 30% 20%, rgba(201,162,39,0.3), transparent 55%), radial-gradient(70% 50% at 80% 90%, rgba(21,87,176,0.4), transparent 55%), #0A0A0A",
        }}
      />
      <div className="bg-grain absolute inset-0 opacity-40" />

      {/* Grid of mini cards */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-3 p-6">
        {[
          { label: "Reels", icon: Film, accent: "gold" },
          { label: "TikTok", icon: Smartphone, accent: "blue" },
          { label: "Shorts", icon: Video, accent: "gold" },
          { label: "Story", icon: BookIcon, accent: "blue" },
          { label: "Ad", icon: Sparkles, accent: "gold" },
          { label: "Brand", icon: Palette, accent: "blue" },
          { label: "Educate", icon: Lightbulb, accent: "gold" },
          { label: "Launch", icon: Wand2, accent: "blue" },
          { label: "UGC", icon: Mic, accent: "gold" },
        ].map((cell, i) => {
          const Icon = cell.icon;
          const color = cell.accent === "gold" ? "#C9A227" : "#1557B0";
          return (
            <Reveal key={cell.label} delay={i * 0.04}>
              <div className="flex h-full flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-colors hover:bg-white/10">
                <Icon className="h-4 w-4" style={{ color }} />
                <span className="text-[10px] uppercase tracking-[0.18em] text-white/70">
                  {cell.label}
                </span>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}

// inline BookIcon (avoid extra import name clash)
function BookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M4 4v16a2 2 0 0 0 2 2h14V4H6a2 2 0 0 0-2 2z" />
      <path d="M9 8h6M9 12h6" />
    </svg>
  );
}
function Mic({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 19v3" />
    </svg>
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
                <article className="card-lift group relative h-full overflow-hidden rounded-2xl border border-black/5 bg-white p-8 hover:border-royal/30 hover:shadow-[0_30px_70px_-30px_rgba(0,0,0,0.25)]">
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-gold transition-all duration-500 group-hover:bg-royal group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-display text-4xl font-bold text-paper-mute">
                      0{i + 2}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-ink/75">
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-royal/10 text-royal">
                          <Check className="h-3 w-3" />
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

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08}>
              <div className="group relative h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-gold/40 hover:bg-white/[0.06]">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-4xl font-bold text-gold/30 transition-colors group-hover:text-gold">
                    {step.n}
                  </span>
                  <span className="h-px w-12 bg-gradient-to-r from-gold/40 to-transparent" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-white">
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
        <div className="flex flex-col items-center gap-6 rounded-3xl border border-black/5 bg-gradient-to-br from-paper-soft to-white p-10 text-center shadow-sm sm:p-14">
          <Eyebrow>Ready when you are</Eyebrow>
          <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl">
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
