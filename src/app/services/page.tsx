"use client";

import {
  Video,
  Film,
  Wand2,
  Layers,
  Palette,
  Smartphone,
  Globe,
  Sparkles,
} from "lucide-react";
import { Container, Section, Eyebrow, SectionHeading } from "@/components/site/Section";
import { CTAButton } from "@/components/site/CTAButton";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";
import { VideoEmbed } from "@/components/site/VideoEmbed";
import { SERVICES, WA_DEFAULT, PROJECTS } from "@/lib/site";

const subItemIcons = [Film, Wand2, Layers, Palette, Smartphone, Globe];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={
          <>
            AI video for{" "}
            <span className="italic text-gold">beauty, wellness</span> &amp; self-care brands.
          </>
        }
        description="Our only service — and our obsession. We produce premium AI-generated video content that makes your brand look cinematic, at a fraction of traditional production cost."
      >
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <CTAButton href={WA_DEFAULT} isWhatsApp size="lg" variant="gold" showArrow>
            Get Started
          </CTAButton>
          <CTAButton href="/work" size="lg" variant="outline-light">
            View Our Work
          </CTAButton>
        </div>
      </PageHeader>

      <ServiceFeature />

      <FormatsSection />

      <ProcessSection />

      <FinalServicesCTA />
    </>
  );
}

function ServiceFeature() {
  const aiVideo = SERVICES[0];
  // Reference film — AI-generated skincare UGC ad
  const reference = PROJECTS.find((p) => p.id === "p06")!; // Glass Skin Facial

  return (
    <Section tone="light">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: copy */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Our Only Service
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-4xl font-light leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[52px]">
                {aiVideo.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-ink/65">
                {aiVideo.description}
              </p>
            </Reveal>

            <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-black/[0.06] bg-black/[0.06] sm:grid-cols-2">
              {aiVideo.items.map((item, i) => {
                const ItemIcon = subItemIcons[i % subItemIcons.length];
                return (
                  <Reveal key={item} delay={0.12 + i * 0.04}>
                    <div className="group flex items-center gap-3 bg-white p-5 transition-colors hover:bg-paper-soft">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
                        <ItemIcon className="h-5 w-5" />
                      </span>
                      <span className="text-base font-medium text-ink">{item}</span>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.3}>
              <div className="mt-9">
                <CTAButton href={WA_DEFAULT} isWhatsApp size="lg" variant="gold" showArrow>
                  Get Started
                </CTAButton>
              </div>
            </Reveal>
          </div>

          {/* Right: real AI-generated reference video */}
          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.22em] text-ink/50">
                    AI Reference Film · {reference.category}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.22em] text-gold-deep">
                    {reference.format}
                  </span>
                </div>
                <VideoEmbed
                  videoId={reference.videoId}
                  title={reference.title}
                  aspect="portrait"
                  label={reference.tag}
                />
                <p className="mt-4 font-display text-lg font-medium tracking-tight text-ink">
                  {reference.title}
                </p>
                <p className="mt-1.5 text-sm text-ink/50">
                  Example of the AI video quality our studio produces.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function FormatsSection() {
  const formats = [
    {
      icon: Film,
      title: "Product Films",
      desc: "Cinematic AI videos that make your products look premium — macro textures, water motion, product reveals.",
    },
    {
      icon: Smartphone,
      title: "Social Reels",
      desc: "AI-generated Reels, TikToks and Shorts engineered to stop the scroll and drive engagement.",
    },
    {
      icon: Palette,
      title: "Brand Story Films",
      desc: "Long-form AI storytelling that builds emotional connection to your brand and ritual.",
    },
    {
      icon: Sparkles,
      title: "AI UGC Ads",
      desc: "Realistic AI-generated UGC-style ads with AI presenters speaking directly to your audience.",
    },
    {
      icon: Globe,
      title: "Campaign Films",
      desc: "Multi-asset AI campaigns for launches — hero films, cutdowns, and platform-specific variations.",
    },
    {
      icon: Layers,
      title: "Educational Content",
      desc: "AI explainers that simplify ingredients, routines and rituals into shareable short videos.",
    },
  ];

  return (
    <Section tone="paper">
      <Container>
        <SectionHeading
          eyebrow="AI Video Formats"
          title={
            <>
              Six formats, <span className="italic text-royal">one AI engine</span>.
            </>
          }
          description="Every format below is delivered as fully AI-generated video — designed to look premium and convert across every platform your audience lives on."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-black/[0.06] bg-black/[0.06] sm:grid-cols-2 lg:grid-cols-3">
          {formats.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.06}>
              <article className="group relative h-full bg-white p-8 transition-colors duration-300 hover:bg-paper-soft">
                <div className="flex items-baseline justify-between">
                  <span className="editorial-num text-3xl text-ink/25">
                    0{i + 1}
                  </span>
                  <f.icon className="h-6 w-6 text-ink/40 transition-colors duration-300 group-hover:text-gold" />
                </div>
                <h3 className="mt-7 font-display text-2xl font-medium tracking-tight text-ink">
                  {f.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink/60">
                  {f.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex justify-center">
            <CTAButton href={WA_DEFAULT} isWhatsApp size="lg" variant="primary" showArrow>
              Get Started
            </CTAButton>
          </div>
        </Reveal>
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
          description="Four steps designed to make premium AI video production feel effortless on your side."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08}>
              <div className="group h-full bg-ink p-8 transition-colors duration-300 hover:bg-ink-soft">
                <div className="flex items-baseline justify-between">
                  <span className="editorial-num text-4xl text-gold/40 transition-colors group-hover:text-gold">
                    {step.n}
                  </span>
                  <span className="h-px w-12 bg-gradient-to-r from-gold/40 to-transparent" />
                </div>
                <h3 className="mt-6 font-display text-xl font-medium tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/55">
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
          <h2 className="max-w-2xl font-display text-4xl font-light leading-tight tracking-tight text-balance sm:text-5xl">
            Let&apos;s build your next premium piece of AI video.
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <CTAButton href={WA_DEFAULT} isWhatsApp size="lg" variant="gold" showArrow>
              Get Started
            </CTAButton>
            <CTAButton href="/contact" size="lg" variant="secondary">
              Contact Us
            </CTAButton>
          </div>
        </div>
      </Container>
    </Section>
  );
}
