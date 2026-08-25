"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import { CTAButton } from "./CTAButton";
import { WhatsAppIcon } from "./WhatsAppIcon";
import type { Project } from "@/lib/site";
import { BRAND, WA_DEFAULT } from "@/lib/site";

const accentColor = {
  gold: "#C9A227",
  blue: "#1557B0",
  ink: "#FFFFFF",
} as const;

export function ProjectDialog({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 backdrop-blur-md sm:items-center"
        >
          <motion.div
            initial={{ y: 60, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
          >
            {/* Close */}
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-colors hover:bg-black/60"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Visual */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink">
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(120% 80% at 50% 10%, ${accentColor[project.accent]}33 0%, transparent 55%), linear-gradient(160deg, #141414 0%, #0A0A0A 100%)`,
                }}
              />
              <div className="bg-grain absolute inset-0 opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-40 w-40">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="absolute inset-0 rounded-full border border-white/10"
                      style={{ transform: `scale(${1 - i * 0.18})` }}
                    />
                  ))}
                  <div
                    className="absolute inset-1/4 rounded-full blur-xl"
                    style={{
                      background: `radial-gradient(circle, ${accentColor[project.accent]}80, transparent 70%)`,
                    }}
                  />
                  <div
                    className="absolute inset-[38%] rounded-full"
                    style={{ background: accentColor[project.accent] }}
                  />
                </div>
              </div>
              <div className="absolute bottom-4 left-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md ring-1 ring-white/10">
                  <span
                    className="h-1 w-1 rounded-full"
                    style={{ background: accentColor[project.accent] }}
                  />
                  {project.category}
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8">
              <p
                className="text-[10px] font-semibold uppercase tracking-[0.24em]"
                style={{ color: accentColor[project.accent] === "#FFFFFF" ? "#0A0A0A" : accentColor[project.accent] }}
              >
                {project.tag}
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                {project.title}
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/65">
                {project.blurb} This is a representative project format we produce
                for {project.category.toLowerCase()} brands — combining AI-powered
                visuals, brand-tone motion graphics and platform-native editing.
              </p>

              {/* Meta */}
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-black/5 pt-6 sm:grid-cols-3">
                <Meta label="Category" value={project.category} />
                <Meta label="Format" value={project.tag} />
                <Meta label="Studio" value={BRAND.name} />
              </div>

              {/* CTAs */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <CTAButton
                  href={WA_DEFAULT}
                  isWhatsApp
                  size="md"
                  variant="gold"
                  showArrow
                >
                  Start a Similar Project
                </CTAButton>
                <CTAButton href="/packages" size="md" variant="secondary">
                  View Packages
                </CTAButton>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.2em] text-ink/40">{label}</p>
      <p className="mt-1 text-sm font-semibold text-ink">{value}</p>
    </div>
  );
}
