"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import { CTAButton } from "./CTAButton";
import { VideoEmbed } from "./VideoEmbed";
import type { Project } from "@/lib/site";
import { WA_DEFAULT } from "@/lib/site";

export function ProjectDialog({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
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
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/85 backdrop-blur-md sm:items-center sm:p-6"
        >
          <motion.div
            initial={{ y: 60, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
          >
            <button onClick={onClose} aria-label="Close"
              className="fixed right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-black/70 sm:absolute">
              <X className="h-5 w-5" />
            </button>

            <VideoEmbed videoId={project.videoId} title={project.title} aspect="video" label={`${project.category} · ${project.format}`} />

            <div className="p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  {project.category}
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-ink/45">{project.format}</span>
              </div>

              <h3 className="mt-5 font-display text-3xl font-light tracking-tight text-ink sm:text-4xl">{project.title}</h3>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink/65">{project.description} This is an AI-generated reference film representing the quality Aldeora Creative delivers.</p>

              <div className="mt-8">
                <CTAButton href={WA_DEFAULT} isWhatsApp size="lg" variant="gold" showArrow>Start a Similar Project</CTAButton>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
