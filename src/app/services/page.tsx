"use client";

import { Video, Package, Share2, Sparkles, ArrowUpRight, Check } from "lucide-react";
import { Container, Section, Eyebrow, SectionHeading } from "@/components/site/Section";
import { CTAButton } from "@/components/site/CTAButton";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";
import { VideoEmbed } from "@/components/site/VideoEmbed";
import { SERVICES, PROJECTS, PROCESS_STEPS, WA_DEFAULT } from "@/lib/site";
import Link from "next/link";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Video, Package, Share2, Sparkles,
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={<>Premium visual content for <span className="italic text-gold">modern brands</span>.</>}
        description="AI-powered video and visual content designed for beauty, wellness and lifestyle brands."
      >
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <CTAButton href="/contact" size="lg" variant="gold" showArrow>Start a Project</CTAButton>
          <CTAButton href="/work" size="lg" variant="outline-light">View Our Work</CTAButton>
        </div>
      </PageHeader>

      {/* Services list — editorial, minimal */}
      <Section tone="light">
        <Container>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-black/[0.06] bg-black/[0.06]">
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon] ?? Video;
              return (
                <Reveal key={service.id} delay={i * 0.08}>
                  <div className="group grid gap-8 bg-white p-8 transition-colors duration-300 hover:bg-paper-soft lg:grid-cols-12 lg:items-center lg:gap-12 lg:p-12">
                    {/* Left: number + icon */}
                    <div className="lg:col-span-3">
                      <div className="flex items-center gap-4">
                        <span className="editorial-num text-4xl text-ink/25">{service.number}</span>
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
                          <Icon className="h-6 w-6" />
                        </span>
                      </div>
                    </div>
                    {/* Middle: title + description */}
                    <div className="lg:col-span-6">
                      <h2 className="font-display text-3xl font-light leading-tight tracking-tight text-ink sm:text-4xl">
                        {service.title}
                      </h2>
                      <p className="mt-4 text-lg leading-relaxed text-ink/55">
                        {service.description}
                      </p>
                    </div>
                    {/* Right: CTA */}
                    <div className="lg:col-span-3 lg:text-right">
                      <Link
                        href="/contact"
                        className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-royal transition-colors hover:text-royal-deep"
                      >
                        <span className="link-underline">Get Started</span>
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Featured video reference */}
      <Section tone="dark">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow tone="dark">Reference Film</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 font-display text-4xl font-light leading-[1.1] tracking-tight sm:text-5xl">
                  The quality we deliver.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 text-lg leading-relaxed text-white/55">
                  Every project is art-directed, not automated. This is the standard.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8">
                  <CTAButton href="/work" size="lg" variant="outline-light" showArrow>View All Work</CTAButton>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <VideoEmbed
                  videoId={PROJECTS[0].videoId}
                  title={PROJECTS[0].title}
                  aspect="cinematic"
                  label={`AI Film · ${PROJECTS[0].format}`}
                />
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section tone="paper">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="How We Work"
            title={<>From <span className="italic text-royal">brief to broadcast</span>.</>}
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

      {/* CTA */}
      <Section tone="light" className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-center gap-6 rounded-2xl border border-black/[0.06] bg-gradient-to-br from-paper-soft to-white p-10 text-center sm:p-14">
            <Eyebrow>Ready when you are</Eyebrow>
            <h2 className="max-w-xl font-display text-4xl font-light leading-tight tracking-tight text-balance sm:text-5xl">
              Let's build your next premium piece of content.
            </h2>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CTAButton href="/contact" size="lg" variant="gold" showArrow>Start a Project</CTAButton>
              <CTAButton href={WA_DEFAULT} isWhatsApp size="lg" variant="secondary">Chat on WhatsApp</CTAButton>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
