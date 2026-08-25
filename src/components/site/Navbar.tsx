"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./WhatsAppIcon";
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
          ? "bg-white/85 backdrop-blur-xl border-b border-black/[0.06]"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between px-5 sm:h-[68px] sm:px-8 lg:px-12">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Aldeora Creative — Home"
          className="flex items-center transition-transform duration-300 hover:opacity-80"
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
                  "relative rounded-full px-3.5 py-2 text-[13px] font-medium tracking-tight transition-colors duration-300",
                  isActive(item.href)
                    ? "text-ink"
                    : "text-ink/55 hover:text-ink"
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
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine group inline-flex h-10 items-center gap-2 rounded-full bg-ink px-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-gold hover:text-ink"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" />
            Get Started
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
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
            <div className="flex h-16 items-center justify-between px-5 sm:px-8">
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
                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
              }}
              className="flex flex-col gap-0 px-5 pt-8 sm:px-8"
            >
              {NAV_ITEMS.map((item, i) => (
                <motion.li
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between border-b border-white/10 py-5 font-display text-3xl font-light tracking-tight transition-colors",
                      isActive(item.href) ? "text-gold" : "text-white/90 hover:text-white"
                    )}
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">
                      /{item.href === "/" ? "home" : item.href.slice(1)}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="px-5 pt-10 sm:px-8"
            >
              <a
                href={WA_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gold py-4 text-sm font-semibold uppercase tracking-[0.16em] text-ink"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Get Started on WhatsApp
              </a>
              <p className="mt-4 text-center text-xs text-white/40">
                Or call{" "}
                <a href="tel:+2347012749962" className="text-gold">+234 701 274 9962</a>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
