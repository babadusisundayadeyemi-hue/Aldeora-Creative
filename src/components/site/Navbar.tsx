"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { NAV_ITEMS, WA_DEFAULT } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

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
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-500",
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-black/[0.06]"
            : "bg-white/60 backdrop-blur-md"
        )}
      >
        <nav className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between px-5 sm:h-[72px] sm:px-8 lg:px-12">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Aldeora Creative — Home"
            className="flex items-center transition-opacity duration-300 hover:opacity-70"
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
                    "relative px-4 py-2.5 text-sm font-medium tracking-tight transition-colors duration-300",
                    isActive(item.href)
                      ? "text-ink"
                      : "text-ink/50 hover:text-ink"
                  )}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span className="absolute inset-x-4 -bottom-0.5 h-px bg-gold" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="btn-shine group inline-flex h-11 items-center gap-2 rounded-full bg-ink px-6 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-royal"
            >
              Let's Work Together
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-black/10 bg-white text-ink shadow-sm transition-all duration-300 hover:bg-paper-mute active:scale-95 lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {/* Mobile overlay — OUTSIDE header to avoid stacking context trap */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex flex-col lg:hidden"
          style={{ backgroundColor: "#0A0A0A" }}
        >
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-white/10 px-5 sm:h-[72px] sm:px-8">
            <Logo tone="light" />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition-all duration-300 hover:bg-white/15 active:scale-95"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-5 py-6 sm:px-8">
            <ul className="flex flex-col">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between border-b border-white/10 py-5 font-display text-3xl font-light tracking-tight transition-colors",
                      isActive(item.href) ? "text-gold" : "text-white/90 hover:text-white"
                    )}
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-xs uppercase tracking-[0.24em] text-white/40">
                      /{item.href === "/" ? "home" : item.href.slice(1)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="shrink-0 border-t border-white/10 p-5 sm:p-8">
            <Link
              href="/contact"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-gold py-4 text-base font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:bg-gold-deep"
            >
              Let's Work Together
            </Link>
            <p className="mt-4 text-center text-sm text-white/50">
              Or{" "}
              <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" className="text-gold">chat on WhatsApp</a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
