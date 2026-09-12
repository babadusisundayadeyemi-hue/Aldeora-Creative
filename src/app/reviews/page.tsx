"use client";

import { Container, Section, Eyebrow } from "@/components/site/Section";
import { CTAButton } from "@/components/site/CTAButton";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";
import { TestimonialCarousel } from "@/components/site/TestimonialCarousel";
import { TESTIMONIALS, WA_DEFAULT } from "@/lib/site";
import { Mail } from "lucide-react";

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Reviews"
        title={
          <>
            What clients <span className="italic text-gold">say</span>.
          </>
        }
        description="Real reviews from real clients. We don't invent testimonials — these are the words of brands we've worked with."
      />

      {TESTIMONIALS.length > 0 ? (
        /* If real testimonials exist — show the animated carousel */
        <Section tone="light">
          <Container>
            <TestimonialCarousel testimonials={TESTIMONIALS} autoRotate rotateInterval={6000} />
          </Container>
        </Section>
      ) : (
        /* Placeholder — no fake reviews, just an honest, premium placeholder */
        <Section tone="light">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <Reveal>
                <div className="inline-flex items-center justify-center">
                  <span className="font-display text-6xl text-gold/30" aria-hidden>&ldquo;</span>
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-4 font-display text-3xl font-light leading-tight tracking-tight text-ink sm:text-4xl">
                  Client reviews <span className="italic text-sky-deep">coming soon</span>.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-ink/55">
                  We&apos;re collecting real reviews from our clients. In the meantime, see our work — or start a project and become our next review.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <CTAButton href="/work" size="lg" variant="primary" showArrow>
                    View Our Work
                  </CTAButton>
                  <CTAButton href={WA_DEFAULT} isWhatsApp size="lg" variant="gold">
                    Start a Project
                  </CTAButton>
                </div>
              </Reveal>
            </div>
          </Container>
        </Section>
      )}

      {/* CTA strip */}
      <Section tone="dark" className="py-20 sm:py-24">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center">
            <Eyebrow tone="dark">Become our next review</Eyebrow>
            <h2 className="max-w-2xl font-display text-4xl font-light leading-tight tracking-tight text-balance sm:text-5xl">
              Let&apos;s create something worth talking about.
            </h2>
            <p className="max-w-md text-base text-white/55">
              Work with us and add your voice to this page.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CTAButton href={WA_DEFAULT} isWhatsApp size="lg" variant="gold" showArrow>
                Let's Work Together
              </CTAButton>
              <CTAButton href="/contact" size="lg" variant="outline-light">
                Contact Us
              </CTAButton>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
