"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

type Variant = "primary" | "secondary" | "ghost" | "gold" | "outline-light" | "whatsapp";
type Size = "sm" | "md" | "lg";

type CTAButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  isWhatsApp?: boolean;
  showArrow?: boolean;
  className?: string;
  fullWidth?: boolean;
};

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-4 text-xs",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-sm sm:text-base",
};

const variantClasses: Record<Variant, string> = {
  // Blue solid — primary CTA
  primary:
    "bg-royal text-white hover:bg-royal-deep shadow-[0_8px_24px_-12px_rgba(21,87,176,0.7)]",
  // Black solid
  secondary:
    "bg-ink text-white hover:bg-ink-soft shadow-[0_8px_24px_-12px_rgba(0,0,0,0.5)]",
  // Gold solid
  gold:
    "bg-gold text-ink hover:bg-gold-deep shadow-[0_8px_24px_-12px_rgba(201,162,39,0.6)]",
  // Subtle gray
  ghost:
    "bg-paper-mute text-ink hover:bg-paper-soft border border-black/5",
  // Outline on dark backgrounds
  "outline-light":
    "bg-transparent text-white border border-white/25 hover:border-white/60 hover:bg-white/5",
  // WhatsApp brand green
  whatsapp:
    "bg-[#25D366] text-[#0A0A0A] hover:bg-[#1ebe57] shadow-[0_8px_24px_-12px_rgba(37,211,102,0.7)]",
};

export function CTAButton({
  children,
  href,
  variant = "primary",
  size = "md",
  external = false,
  isWhatsApp = false,
  showArrow = false,
  className,
  fullWidth = false,
}: CTAButtonProps) {
  const classes = cn(
    "btn-shine group inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase tracking-[0.12em] transition-all duration-300 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-royal focus-visible:ring-offset-white",
    sizeClasses[size],
    variantClasses[variant],
    fullWidth && "w-full",
    className
  );

  const content = (
    <>
      {isWhatsApp && <WhatsAppIcon className="h-4 w-4" />}
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (external || isWhatsApp) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

/** Compact link-style button with arrow */
export function TextLink({
  children,
  href,
  external = false,
  tone = "dark",
  className,
}: {
  children: React.ReactNode;
  href: string;
  external?: boolean;
  tone?: "dark" | "light" | "gold" | "blue";
  className?: string;
}) {
  const toneClass =
    tone === "light"
      ? "text-white"
      : tone === "gold"
      ? "text-gold"
      : tone === "blue"
      ? "text-royal"
      : "text-ink";

  const classes = cn(
    "group inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-[0.16em] transition-colors",
    toneClass,
    "hover:opacity-80",
    className
  );

  const content = (
    <>
      <span className="link-underline">{children}</span>
      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }
  return <Link href={href} className={classes}>{content}</Link>;
}
