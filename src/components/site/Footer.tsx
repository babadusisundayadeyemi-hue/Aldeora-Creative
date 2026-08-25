"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { Instagram, Youtube, Mail, Phone } from "lucide-react";
import { TikTokIcon } from "./SocialIcons";
import { BRAND, NAV_ITEMS } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Footer() {
  return (
    <footer className="mt-auto bg-ink text-white">
      {/* Top accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Logo tone="light" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              {BRAND.positioning} We create scroll-stopping AI-powered videos,
              modern web design and digital solutions that make your brand look
              premium.
            </p>
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
              {BRAND.tagline}
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              <SocialIcon href={BRAND.instagram} label="Instagram">
                <Instagram className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href={BRAND.tiktok} label="TikTok">
                <TikTokIcon className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href={BRAND.youtube} label="YouTube">
                <Youtube className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href={`mailto:${BRAND.email}`} label="Email">
                <Mail className="h-4 w-4" />
              </SocialIcon>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <FooterHeading>Navigation</FooterHeading>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/65 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <FooterHeading>Get in touch</FooterHeading>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`https://wa.me/${BRAND.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-white/80 transition-colors hover:text-gold"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition-colors group-hover:bg-gold group-hover:text-ink">
                    <WhatsAppIcon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.24em] text-white/40">
                      WhatsApp
                    </span>
                    {BRAND.phoneDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BRAND.phoneRaw}`}
                  className="group flex items-center gap-3 text-white/80 transition-colors hover:text-gold"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition-colors group-hover:bg-gold group-hover:text-ink">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.24em] text-white/40">
                      Phone
                    </span>
                    {BRAND.phoneDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="group flex items-center gap-3 text-white/80 transition-colors hover:text-gold"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition-colors group-hover:bg-gold group-hover:text-ink">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.24em] text-white/40">
                      Email
                    </span>
                    {BRAND.email}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/45">
            © {BRAND.year} Aldeora Creative. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Built with intention. Crafted for beauty, wellness & self-care brands.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
      {children}
    </h3>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 ring-1 ring-white/10 transition-all duration-300 hover:bg-gold hover:text-ink hover:ring-gold"
    >
      {children}
    </a>
  );
}
