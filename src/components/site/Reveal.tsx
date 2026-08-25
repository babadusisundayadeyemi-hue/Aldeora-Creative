"use client";

import { motion, useInView, type Variant } from "framer-motion";
import { useRef, useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  as?: "div" | "section" | "li" | "span" | "article";
};

/**
 * Scroll-triggered reveal wrapper.
 *
 * Uses framer-motion's `useInView` with a generous margin so elements animate
 * in slightly before they're fully visible. If IntersectionObserver hasn't
 * fired within 800ms of mount (e.g. element already in viewport on load, or
 * observer not supported), the content becomes visible as a fallback.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 20,
  once = true,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "0px 0px -10% 0px" });
  const [fallbackVisible, setFallbackVisible] = useState(false);

  // Fallback: if IntersectionObserver doesn't fire within 800ms, show content.
  // This protects against environments where IO doesn't work (headless
  // renderers, some crawlers, reduced-motion users).
  useEffect(() => {
    if (inView) return;
    const t = setTimeout(() => setFallbackVisible(true), 800);
    return () => clearTimeout(t);
  }, [inView]);

  const MotionTag = motion[as] as typeof motion.div;

  const variants: Record<string, Variant> = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
  };

  const shouldShow = inView || fallbackVisible;

  return (
    <MotionTag
      ref={ref as never}
      className={cn(className)}
      initial="hidden"
      animate={shouldShow ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
