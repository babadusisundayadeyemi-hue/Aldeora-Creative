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

      <div className="mx-auto w-full max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-12 lg:gap-16">
          {/* Brand statement */}
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-gold">
              {BRAND.name}
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-light leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
              Premium visual content that makes brands{" "}
              <span className="italic text-gold">look more valuable</span>.
            </h2>
          </div>

          {/* WhatsApp + Email */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            <a
              href={BRAND.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-white/15 bg-white/[0.03] p-5 transition-all duration-300 hover:border-gold/40"
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/55">WhatsApp</p>
                  <p className="mt-1 font-display text-lg font-medium tracking-tight">{BRAND.phoneDisplay}</p>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-white/40 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold" />
            </a>
            <a
              href={`mailto:${BRAND.email}`}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-white/15 bg-white/[0.03] p-5 transition-all duration-300 hover:border-gold/40"
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold text-ink">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/55">Email</p>
                  <p className="mt-1 font-display text-lg font-medium tracking-tight">{BRAND.email}</p>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-white/40 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold" />
            </a>
          </div>
        </div>

        {/* Nav + socials */}
        <div className="grid gap-12 py-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo tone="light" />
            <p className="mt-6 max-w-sm text-base leading-relaxed text-white/55">
              {BRAND.positioning} Founded by {FOUNDER.name}.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <SocialIcon href={BRAND.instagram} label="Instagram"><Instagram className="h-5 w-5" /></SocialIcon>
              <SocialIcon href={BRAND.tiktok} label="TikTok"><TikTokIcon className="h-5 w-5" /></SocialIcon>
              <SocialIcon href={BRAND.youtube} label="YouTube"><Youtube className="h-5 w-5" /></SocialIcon>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.28em] text-gold">Navigation</h3>
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
            <h3 className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.28em] text-gold">Contact</h3>
            <ul className="space-y-4 text-base">
              <li>
                <a href={`mailto:${BRAND.email}`} className="text-white/70 transition-colors hover:text-gold">
                  {BRAND.email}
                </a>
              </li>
              <li>
                <a href={BRAND.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-white/70 transition-colors hover:text-gold">
                  {BRAND.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-sm text-white/45">
            © {BRAND.year} {BRAND.name}. All rights reserved.
          </p>
          <p className="font-mono text-sm text-white/40">
            Founded by {FOUNDER.name}. Crafted for beauty, wellness &amp; self-care.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-white/55 ring-1 ring-white/10 transition-all duration-300 hover:bg-gold hover:text-ink hover:ring-gold">
      {children}
    </a>
  );
}
