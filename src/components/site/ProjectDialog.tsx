"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Play, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { CTAButton } from "./CTAButton";
import { VideoEmbed } from "./VideoEmbed";
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
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/80 backdrop-blur-md sm:items-center sm:p-6"
        >
          <motion.div
            initial={{ y: 60, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
          >
            {/* Close */}
            <button
              onClick={onClose}
              aria-label="Close"
              className="fixed right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-colors hover:bg-black/60 sm:absolute"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Video */}
            <div className="relative">
              <VideoEmbed
                videoId={project.videoId}
                title={project.title}
                aspect="video"
                label={`${project.category} · ${project.format}`}
              />
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.2em]"
                  style={{
                    background: `${accentColor[project.accent]}15`,
                    color: accentColor[project.accent] === "#FFFFFF" ? "#0A0A0A" : accentColor[project.accent],
                  }}
                >
                  <span
                    className="h-1 w-1 rounded-full"
                    style={{ background: accentColor[project.accent] }}
                  />
                  {project.category}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/40">
                  {project.format}
                </span>
              </div>

              <h3 className="mt-4 font-display text-2xl font-light tracking-tight text-ink sm:text-3xl">
                {project.title}
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/65">
                {project.blurb} This is a reference film representing the style and quality Aldeora Creative produces for {project.category.toLowerCase()} brands.
              </p>

              {/* Meta */}
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-black/[0.06] pt-6 sm:grid-cols-4">
                <Meta label="Category" value={project.category} />
                <Meta label="Format" value={project.format} />
                <Meta label="Tag" value={project.tag} />
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
      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink/40">{label}</p>
      <p className="mt-1 text-sm font-medium text-ink">{value}</p>
    </div>
  );
}
