"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Testimonial } from "@/lib/site";
import { cn } from "@/lib/utils";

type TestimonialCarouselProps = {
  testimonials: Testimonial[];
  autoRotate?: boolean;
  rotateInterval?: number;
};

/**
 * Premium testimonial carousel.
 * — Auto-rotates with subtle slide/fade transitions
 * — Manual navigation via arrows
 * — Quote on one side, photo + name on the other
 * — Slow, elegant animation (never distracting)
 */
export function TestimonialCarousel({
  testimonials,
  autoRotate = true,
  rotateInterval = 6000,
}: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = testimonials.length;

  const goTo = useCallback((newIndex: number, dir: number) => {
    setDirection(dir);
    setIndex(((newIndex % total) + total) % total);
  }, [total]);

  const next = useCallback(() => goTo(index + 1, 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1, -1), [index, goTo]);

  useEffect(() => {
    if (!autoRotate || total <= 1) return;
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((i) => ((i + 1) % total));
    }, rotateInterval);
    return () => clearInterval(timer);
  }, [autoRotate, total, rotateInterval]);

  if (total === 0) return null;

  const current = testimonials[index];

  return (
    <div className="relative">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
        {/* Quote */}
        <div className="lg:col-span-7 lg:order-1">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.blockquote
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction * 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -20 }}
              transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
              className="relative"
            >
              <span className="font-display text-7xl text-gold/30 leading-none" aria-hidden>
                &ldquo;
              </span>
              <p className="mt-2 font-display text-2xl font-light leading-snug tracking-tight text-balance sm:text-3xl lg:text-[34px]">
                {current.quote}
              </p>
            </motion.blockquote>
          </AnimatePresence>

          {/* Author */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`author-${index}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-8 flex items-center gap-4"
            >
              {current.photo && (
                <img
                  src={current.photo}
                  alt={current.author}
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-gold/20"
                />
              )}
              <div>
                <p className="font-display text-lg font-medium tracking-tight">{current.author}</p>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">{current.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Photo (if provided) */}
        {current.photo && (
          <div className="lg:col-span-5 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={`photo-${index}`}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
                className="relative overflow-hidden rounded-2xl"
              >
                <img
                  src={current.photo}
                  alt={current.author}
                  className="aspect-[4/5] w-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Navigation */}
      {total > 1 && (
        <div className="mt-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-ink transition-all duration-300 hover:bg-ink hover:text-white"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-ink transition-all duration-300 hover:bg-ink hover:text-white"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > index ? 1 : -1)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all duration-400",
                  i === index ? "w-8 bg-gold" : "w-2 bg-ink/20 hover:bg-ink/40"
                )}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
