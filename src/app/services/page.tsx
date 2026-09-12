"use client";

import { Video, Package, Share2, Sparkles, ArrowUpRight } from "lucide-react";
import { Container, Section, Eyebrow, SectionHeading } from "@/components/site/Section";
import { CTAButton, TextLink } from "@/components/site/CTAButton";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";
import { SERVICES, WA_DEFAULT } from "@/lib/site";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Video, Package, Share2, Sparkles,
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={
          <>
            Premium AI visual content for{" "}
            <span className="italic text-gold">modern brands</span>.
          </>
        }
        description="Four ways we help beauty, wellness and self-care brands look more valuable."
      >
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <CTAButton href={WA_DEFAULT} isWhatsApp size="lg" variant="gold" showArrow>
            Let's Work Together
          </CTAButton>
          <CTAButton href="/work" size="lg" variant="outline-light">
            View Our Work
          </CTAButton>
        </div>
      </PageHeader>

      {/* Services list — editorial alternating layout */}
      <Section tone="light">
        <Container>
          <div className="flex flex-col">
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon] ?? Video;
              const isReversed = i % 2 === 1;
              return (
                <Reveal key={service.id} delay={0.05}>
                  <article
                    className={`grid gap-10 border-t border-ink/10 py-16 lg:grid-cols-12 lg:gap-16 lg:py-20 ${
                      isReversed ? "" : ""
                    } ${i === SERVICES.length - 1 ? "border-b" : ""}`}
                  >
                    {/* Number + Icon */}
                    <div className="lg:col-span-3">
                      <div className="flex items-baseline gap-4">
                        <span className="editorial-num text-5xl text-gold/40">0{i + 1}</span>
                        <Icon className="h-7 w-7 text-ink/30" />
                      </div>
                    </div>

                    {/* Title + description */}
                    <div className="lg:col-span-6">
                      <h2 className="font-display text-3xl font-light tracking-tight text-ink sm:text-4xl lg:text-[40px]">
                        {service.title}
                      </h2>
                      <p className="mt-5 max-w-md text-lg leading-relaxed text-ink/55">
                        {service.description}
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="flex items-start lg:col-span-3 lg:justify-end">
                      <CTAButton href={WA_DEFAULT} isWhatsApp variant="secondary" showArrow>
                        Start a Project
                      </CTAButton>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* CTA strip */}
      <Section tone="dark" className="py-20 sm:py-24">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center">
            <Eyebrow tone="dark">Ready to begin?</Eyebrow>
            <h2 className="max-w-2xl font-display text-4xl font-light leading-tight tracking-tight text-balance sm:text-5xl">
              Let&apos;s create content that makes your brand look more valuable.
            </h2>
            <CTAButton href={WA_DEFAULT} isWhatsApp size="lg" variant="gold" showArrow>
              Let's Work Together
            </CTAButton>
          </div>
        </Container>
      </Section>
    </>
  );
}
