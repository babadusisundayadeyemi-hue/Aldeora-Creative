"use client";

import { Check, Sparkles, Star, Infinity as InfinityIcon } from "lucide-react";
import { Container, Section, Eyebrow, SectionHeading } from "@/components/site/Section";
import { CTAButton, TextLink } from "@/components/site/CTAButton";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";
import { PACKAGES, WA_DEFAULT, type Package } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function PackagesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Content Packages"
        title={
          <>
            Premium content, <span className="text-gold-gradient italic">transparent</span> pricing.
          </>
        }
        description="Three tiers built for different stages of growth. Every package includes AI-powered video production, captions and platform-ready formats."
      >
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <CTAButton href={WA_DEFAULT} isWhatsApp size="lg" variant="gold" showArrow>
            Get Started
          </CTAButton>
          <CTAButton href="/contact" size="lg" variant="outline-light">
            Contact Us
          </CTAButton>
        </div>
      </PageHeader>

      {/* Packages */}
      <Section tone="light">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
            {PACKAGES.map((pkg, i) => (
              <Reveal key={pkg.id} delay={i * 0.1}>
                <PackageCard pkg={pkg} />
              </Reveal>
            ))}
          </div>

          {/* Notes */}
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col items-center gap-2 text-center">
              <p className="text-xs text-ink/45">
                All packages include Reels + TikTok + Shorts formats and captions + subtitles.
              </p>
              <p className="text-xs text-ink/45">
                Need something custom? <TextLink href="/contact" tone="blue">Talk to us</TextLink>.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Comparison table */}
      <ComparisonTable />

      {/* CTA */}
      <Section tone="dark" className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center">
            <Eyebrow tone="dark">Still deciding?</Eyebrow>
            <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl">
              We&apos;ll help you pick the right package in 5 minutes.
            </h2>
            <p className="max-w-xl text-sm text-white/65">
              Send us a WhatsApp message and we&apos;ll recommend the best tier for your brand stage and goals.
            </p>
            <CTAButton href={WA_DEFAULT} isWhatsApp size="lg" variant="gold" showArrow>
              Chat With Us on WhatsApp
            </CTAButton>
          </div>
        </Container>
      </Section>
    </>
  );
}

function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white p-7 transition-all duration-500 sm:p-8",
        pkg.popular
          ? "border-gold/60 shadow-[0_30px_80px_-30px_rgba(201,162,39,0.45)] lg:-translate-y-3"
          : "border-black/5 hover:border-royal/30 hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]"
      )}
    >
      {pkg.badge && (
        <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gold px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-ink shadow-lg">
          <Star className="h-3 w-3" fill="currentColor" />
          {pkg.badge}
        </span>
      )}

      {/* Top accent strip */}
      <span
        className={cn(
          "absolute inset-x-0 top-0 h-1",
          pkg.popular
            ? "bg-gradient-to-r from-gold via-gold-soft to-gold-deep"
            : "bg-gradient-to-r from-royal/30 to-transparent"
        )}
      />

      <div className="flex items-center justify-between">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-royal">
          {pkg.name}
        </p>
        {pkg.popular && (
          <Sparkles className="h-4 w-4 text-gold" />
        )}
      </div>

      <div className="mt-4 flex items-baseline gap-1">
        <span className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          {pkg.price}
        </span>
        <span className="text-sm text-ink/50">{pkg.cadence}</span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-ink/60">{pkg.description}</p>

      {/* Feature list */}
      <ul className="mt-6 flex-1 space-y-3 border-t border-black/5 pt-6">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-ink/80">
            <span
              className={cn(
                "mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                pkg.popular
                  ? "bg-gold/15 text-gold-deep"
                  : "bg-royal/10 text-royal"
              )}
            >
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {/* Note */}
      {pkg.note && (
        <div className="mt-5 inline-flex items-center gap-2 rounded-lg bg-ink/5 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/60">
          <InfinityIcon className="h-3 w-3" />
          {pkg.note}
        </div>
      )}

      {/* CTA */}
      <div className="mt-7">
        <CTAButton
          href={pkg.ctaHref}
          isWhatsApp
          size="lg"
          fullWidth
          variant={pkg.popular ? "gold" : "secondary"}
          showArrow
        >
          {pkg.ctaLabel}
        </CTAButton>
      </div>
    </div>
  );
}

function ComparisonTable() {
  const rows: { label: string; values: (string | boolean)[] }[] = [
    { label: "Videos / month",    values: ["10 (one-time)", "12–15", "20–30"] },
    { label: "Revision rounds",   values: ["1", "2", "Unlimited"] },
    { label: "Motion graphics",   values: [true, true, true] },
    { label: "Custom thumbnails", values: ["5", true, true] },
    { label: "Voiceovers",        values: [true, true, true] },
    { label: "Monthly calendar",  values: [false, true, true] },
    { label: "Brand avatars",     values: [false, false, true] },
    { label: "Content strategy",  values: [false, false, true] },
    { label: "Format",            values: ["Reels + TikTok + Shorts", "Reels + TikTok + Shorts", "Reels + TikTok + Shorts"] },
  ];

  return (
    <Section tone="paper">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Compare"
          title={<>At a <span className="italic text-royal">glance</span>.</>}
          className="mx-auto"
        />

        <Reveal delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
            {/* Header row */}
            <div className="grid grid-cols-4 border-b border-black/5 bg-paper-soft">
              <div className="p-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-ink/50 sm:p-5">
                Feature
              </div>
              {PACKAGES.map((pkg) => (
                <div
                  key={pkg.id}
                  className={cn(
                    "p-4 text-center sm:p-5",
                    pkg.popular && "bg-gold/5"
                  )}
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-royal">
                    {pkg.name}
                  </p>
                  <p className="mt-1 font-display text-base font-bold text-ink sm:text-lg">
                    {pkg.price}
                  </p>
                </div>
              ))}
            </div>

            {/* Body */}
            <div>
              {rows.map((row, i) => (
                <div
                  key={row.label}
                  className={cn(
                    "grid grid-cols-4 border-b border-black/5 last:border-b-0",
                    i % 2 === 1 && "bg-paper-soft/50"
                  )}
                >
                  <div className="p-4 text-xs font-medium text-ink/70 sm:p-5 sm:text-sm">
                    {row.label}
                  </div>
                  {row.values.map((v, j) => (
                    <div
                      key={j}
                      className={cn(
                        "flex items-center justify-center p-4 text-center sm:p-5",
                        PACKAGES[j]?.popular && "bg-gold/[0.03]"
                      )}
                    >
                      {typeof v === "boolean" ? (
                        v ? (
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-royal/10 text-royal">
                            <Check className="h-3.5 w-3.5" strokeWidth={3} />
                          </span>
                        ) : (
                          <span className="text-ink/25">—</span>
                        )
                      ) : (
                        <span className="text-xs font-medium text-ink/80 sm:text-sm">{v}</span>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
