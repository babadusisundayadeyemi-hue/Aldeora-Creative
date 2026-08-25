"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { CTAButton } from "./CTAButton";
import { NAV_ITEMS, WA_DEFAULT } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  // Close mobile menu when route changes — using the React-recommended
  // "adjust state during render" pattern instead of an effect.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-black/5 shadow-[0_4px_30px_-15px_rgba(0,0,0,0.15)]"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:h-18 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Aldeora Creative — Home"
          className="flex items-center transition-transform duration-300 hover:scale-[1.02]"
        >
          <Logo />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300",
                  isActive(item.href)
                    ? "text-royal"
                    : "text-ink/70 hover:text-ink"
                )}
              >
                {item.label}
                {isActive(item.href) && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-gold"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <CTAButton href={WA_DEFAULT} isWhatsApp size="sm" variant="gold">
            Get Started
          </CTAButton>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-paper-mute lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-ink text-white lg:hidden"
          >
            <div className="flex h-16 items-center justify-between px-5 sm:px-6">
              <Logo tone="light" />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
              className="flex flex-col gap-1 px-5 pt-6 sm:px-6"
            >
              {NAV_ITEMS.map((item, i) => (
                <motion.li
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between border-b border-white/10 py-4 font-display text-2xl font-medium tracking-tight transition-colors",
                      isActive(item.href) ? "text-gold" : "text-white/85 hover:text-white"
                    )}
                  >
                    <span>{item.label}</span>
                    <span className="font-sans text-xs text-white/40">
                      0{i + 1}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            <div className="px-5 pt-8 sm:px-6">
              <CTAButton
                href={WA_DEFAULT}
                isWhatsApp
                fullWidth
                size="lg"
                variant="gold"
              >
                Get Started
              </CTAButton>
              <p className="mt-4 text-center text-xs text-white/40">
                Or call <a href="tel:+2347012749962" className="text-gold">+234 701 274 9962</a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
