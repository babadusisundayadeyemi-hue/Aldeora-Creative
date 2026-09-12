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
 * Scroll-triggered reveal — slow and refined.
 * Uses a generous margin so elements animate in slightly before
 * they're fully visible. Fallback visible after 800ms if IO doesn't fire.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 16,
  once = true,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "0px 0px -8% 0px" });
  const [fallbackVisible, setFallbackVisible] = useState(false);

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
        duration: 0.8,
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
