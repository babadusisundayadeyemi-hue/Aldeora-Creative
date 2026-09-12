"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { Instagram, Youtube, Mail, ArrowUpRight } from "lucide-react";
import { TikTokIcon } from "./SocialIcons";
import { BRAND, NAV_ITEMS, FOUNDER } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Footer() {
  return (
    <footer className="mt-auto bg-ink text-white">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16 py-16 sm:py-20">
        {/* Top — brand + WhatsApp */}
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
              Aldeora Creative
            </p>
            <h2 className="mt-6 max-w-2xl font-display text-4xl font-light leading-[1.1] tracking-tight sm:text-5xl">
              Let&apos;s make your brand{" "}
              <span className="italic text-gold">look the way it should</span>.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/55">
              {BRAND.positioning} Reach out — we reply within a few hours.
            </p>
          </div>

          <div className="lg:col-span-5 lg:flex lg:items-center lg:justify-end">
            <a
              href={BRAND.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-between gap-4 rounded-2xl border border-white/15 bg-white/[0.03] p-6 transition-all duration-400 hover:border-gold/40 hover:bg-white/[0.06] lg:w-auto"
            >
              <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
                <WhatsAppIcon className="h-6 w-6" />
              </span>
              <div className="flex-1">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/50">WhatsApp</p>
                <p className="mt-1 font-display text-xl font-medium tracking-tight">{BRAND.phoneDisplay}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 text-white/40 transition-transform duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold" />
            </a>
          </div>
        </div>

        {/* Middle — nav + contact */}
        <div className="grid gap-12 py-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo tone="light" />
            <p className="mt-6 max-w-sm text-base leading-relaxed text-white/55">
              A visual content studio for brands that take their image seriously. Founded by {FOUNDER.name}.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <SocialIcon href={BRAND.instagram} label="Instagram"><Instagram className="h-5 w-5" /></SocialIcon>
              <SocialIcon href={BRAND.tiktok} label="TikTok"><TikTokIcon className="h-5 w-5" /></SocialIcon>
              <SocialIcon href={BRAND.youtube} label="YouTube"><Youtube className="h-5 w-5" /></SocialIcon>
              <SocialIcon href={`mailto:${BRAND.email}`} label="Email"><Mail className="h-5 w-5" /></SocialIcon>
            </div>
          </div>

          <div className="lg:col-span-3">
            <FooterHeading>Navigation</FooterHeading>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-base text-white/60 transition-colors hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <FooterHeading>Get in touch</FooterHeading>
            <ul className="space-y-4 text-base">
              <li>
                <a href={`https://wa.me/${BRAND.whatsappNumber}`} target="_blank" rel="noopener noreferrer"
                   className="group flex items-center gap-3 text-white/75 transition-colors hover:text-gold">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition-colors group-hover:bg-gold group-hover:text-ink">
                    <WhatsAppIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-mono text-xs uppercase tracking-[0.24em] text-white/45">WhatsApp</span>
                    {BRAND.phoneDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${BRAND.email}`} className="group flex items-center gap-3 text-white/75 transition-colors hover:text-gold">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition-colors group-hover:bg-gold group-hover:text-ink">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-mono text-xs uppercase tracking-[0.24em] text-white/45">Email</span>
                    {BRAND.email}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-sm text-white/45">
            © {BRAND.year} Aldeora Creative. All rights reserved.
          </p>
          <p className="font-mono text-sm text-white/40">
            Founded by {FOUNDER.name}.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.3em] text-gold">
      {children}
    </h3>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
       className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/55 ring-1 ring-white/10 transition-all duration-400 hover:bg-gold hover:text-ink hover:ring-gold">
      {children}
    </a>
  );
}
