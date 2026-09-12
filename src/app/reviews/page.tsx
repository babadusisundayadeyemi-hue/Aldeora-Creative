"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/site/Section";
import { CTAButton } from "@/components/site/CTAButton";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";
import { TESTIMONIALS, WA_DEFAULT } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function ReviewsPage() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const total = TESTIMONIALS.length;

  const paginate = useCallback((newDirection: number) => {
    setCurrent((prev) => (prev + newDirection + total) % total);
    setDirection(newDirection);
  }, [total]);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  useEffect(() => {
    if (!autoPlay || total <= 1) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearInterval(interval);
  }, [autoPlay, total]);

  const testimonial = TESTIMONIALS[current];

  return (
    <>
      <PageHeader
        eyebrow="Reviews"
        title={<>What clients <span className="italic text-gold">say</span>.</>}
        description="Real reviews from real clients."
      />

      <Section tone="light">
        <Container>
          <div
            className="relative mx-auto max-w-5xl"
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
              {/* Quote */}
              <div className="lg:col-span-7">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.blockquote
                    key={testimonial.id}
                    custom={direction}
                    initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
                    transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
                  >
                    <span className="font-display text-6xl leading-none text-gold/40">&ldquo;</span>
                    <p className="-mt-4 font-display text-3xl font-light leading-[1.2] tracking-tight text-ink sm:text-4xl lg:text-[40px]">
                      {testimonial.quote}
                    </p>
                  </motion.blockquote>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`info-${testimonial.id}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="mt-8 flex items-center gap-4"
                  >
                    {testimonial.photo ? (
                      <img src={testimonial.photo} alt={testimonial.name} className="h-14 w-14 rounded-full object-cover ring-2 ring-gold/30" />
                    ) : (
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ink/10 ring-2 ring-gold/30">
                        <span className="font-display text-lg text-ink/40">{testimonial.name.charAt(0)}</span>
                      </div>
                    )}
                    <div>
                      <p className="font-display text-lg font-medium text-ink">{testimonial.name}</p>
                      <p className="text-sm text-ink/50">{testimonial.role} · {testimonial.business}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation */}
              <div className="lg:col-span-5 lg:border-l lg:border-black/[0.06] lg:pl-12">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-ink/40">
                  {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </p>
                <p className="mt-4 text-lg leading-relaxed text-ink/55">
                  Real client reviews will rotate here automatically. Send us your testimonials and client photos to feature them.
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <button onClick={() => paginate(-1)} aria-label="Previous review"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-ink transition-all duration-300 hover:bg-ink hover:text-white">
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                  <button onClick={() => paginate(1)} aria-label="Next review"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-ink transition-all duration-300 hover:bg-ink hover:text-white">
                    <ArrowRight className="h-5 w-5" />
                  </button>
                  <div className="ml-4 flex items-center gap-2">
                    {TESTIMONIALS.map((_, i) => (
                      <button key={i} onClick={() => goTo(i)} aria-label={`Go to review ${i + 1}`}
                        className={cn("h-2 rounded-full transition-all duration-300", i === current ? "w-8 bg-gold" : "w-2 bg-ink/20 hover:bg-ink/40")} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 h-px w-full bg-black/[0.06]">
              <motion.div className="h-full bg-gold"
                initial={{ width: "0%" }}
                animate={{ width: `${((current + 1) / total) * 100}%` }}
                transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }} />
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="paper" className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-center gap-6 rounded-2xl border border-black/[0.06] bg-gradient-to-br from-paper-soft to-white p-10 text-center sm:p-14">
            <Eyebrow>Been a client?</Eyebrow>
            <h2 className="max-w-xl font-display text-4xl font-light leading-tight tracking-tight text-balance sm:text-5xl">
              Share your experience.
            </h2>
            <p className="max-w-md text-lg text-ink/55">We'd love to feature your review.</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CTAButton href={WA_DEFAULT} isWhatsApp size="lg" variant="gold" showArrow>Send Your Review</CTAButton>
              <CTAButton href="/contact" size="lg" variant="secondary">Contact Us</CTAButton>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
