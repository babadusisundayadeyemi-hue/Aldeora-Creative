"use client";

import { Plus, Minus } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/site/Section";
import { CTAButton } from "@/components/site/CTAButton";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS, WA_DEFAULT } from "@/lib/site";

export default function FAQPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title={
          <>
            Questions, <span className="text-gold-gradient italic">answered</span>.
          </>
        }
        description="Everything you might want to know before getting started. Still curious about something? Send us a WhatsApp message."
      />

      <Section tone="light">
        <Container className="max-w-3xl">
          <Reveal>
            <Accordion
              type="single"
              collapsible
              defaultValue="item-0"
              className="w-full"
            >
              {FAQS.map((faq, i) => (
                <AccordionItem
                  key={faq.q}
                  value={`item-${i}`}
                  className="overflow-hidden border-b border-black/10 last:border-b-0"
                >
                  <AccordionTrigger className="group py-6 text-left hover:no-underline [&>svg:last-child]:hidden">
                    <div className="flex w-full items-start gap-4 pr-4">
                      <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink/5 font-display text-sm font-bold text-ink/40 transition-colors group-data-[state=open]:bg-gold group-data-[state=open]:text-ink">
                        0{i + 1}
                      </span>
                      <span className="font-display text-lg font-semibold leading-snug tracking-tight text-ink sm:text-xl">
                        {faq.q}
                      </span>
                    </div>
                    <span className="ml-auto inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-paper-mute text-ink transition-colors group-data-[state=open]:bg-ink group-data-[state=open]:text-gold">
                      <Plus className="h-4 w-4 rotate-0 transition-transform duration-300 group-data-[state=open]:rotate-45" />
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pl-12 pr-12 text-base leading-relaxed text-ink/65">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </Container>
      </Section>

      {/* Still have questions */}
      <Section tone="dark" className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center">
            <Eyebrow tone="dark">Still have questions?</Eyebrow>
            <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl">
              We&apos;re one message away.
            </h2>
            <p className="max-w-xl text-sm text-white/65">
              Tap below to chat with us on WhatsApp — we usually respond within a few hours.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CTAButton href={WA_DEFAULT} isWhatsApp size="lg" variant="gold" showArrow>
                Chat With Us on WhatsApp
              </CTAButton>
              <CTAButton href="/contact" size="lg" variant="outline-light">
                Contact Page
              </CTAButton>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
