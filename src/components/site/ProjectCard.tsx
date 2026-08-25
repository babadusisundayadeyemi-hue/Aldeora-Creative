"use client";

import { cn } from "@/lib/utils";
import type { Project } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const accentMap = {
  gold: { from: "#C9A227", to: "#A88517", text: "text-gold", ring: "ring-gold/30" },
  blue: { from: "#1557B0", to: "#0F4490", text: "text-royal", ring: "ring-royal/30" },
  ink:  { from: "#2A2A2A", to: "#0A0A0A", text: "text-white", ring: "ring-white/20" },
} as const;

/** A premium abstract project thumbnail (no real client images required). */
export function ProjectThumbnail({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const accent = accentMap[project.accent];

  return (
    <Reveal delay={(index % 6) * 0.06} as="article">
      <div className="card-lift group relative h-full overflow-hidden rounded-2xl border border-black/5 bg-ink shadow-[0_20px_60px_-30px_rgba(0,0,0,0.4)] hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.55)]">
      {/* Visual */}
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        {/* Gradient backdrop */}
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
          style={{
            background: `radial-gradient(120% 80% at 50% 10%, ${accent.from}33 0%, transparent 50%), linear-gradient(160deg, #141414 0%, #0A0A0A 100%)`,
          }}
        />
        {/* Aperture-like rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-44 w-44">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={cn(
                  "absolute inset-0 rounded-full border transition-all duration-700 group-hover:scale-110",
                  i % 2 === 0 ? "border-white/10" : "border-white/5"
                )}
                style={{
                  transform: `scale(${1 - i * 0.18})`,
                }}
              />
            ))}
            <div
              className="absolute inset-1/4 rounded-full blur-xl"
              style={{ background: `radial-gradient(circle, ${accent.from}80, transparent 70%)` }}
            />
            <div
              className="absolute inset-[38%] rounded-full"
              style={{ background: accent.from }}
            />
          </div>
        </div>

        {/* Grain */}
        <div className="bg-grain pointer-events-none absolute inset-0 opacity-50" />

        {/* Category chip */}
        <div className="absolute left-4 top-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-md ring-1 ring-white/10">
            <span
              className="h-1 w-1 rounded-full"
              style={{ background: accent.from }}
            />
            {project.category}
          </span>
        </div>

        {/* Hover view chip */}
        <div className="absolute right-4 top-4 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-ink">
            View <ArrowUpRight className="h-3 w-3" />
          </span>
        </div>
      </div>

      {/* Caption */}
      <div className="flex items-end justify-between gap-3 bg-white p-5">
        <div className="min-w-0">
          <p className={cn("text-[10px] font-semibold uppercase tracking-[0.24em]", accent.text)}>
            {project.tag}
          </p>
          <h3 className="mt-1 truncate font-display text-lg font-bold tracking-tight text-ink">
            {project.title}
          </h3>
          <p className="mt-1 line-clamp-2 text-xs text-ink/55">{project.blurb}</p>
        </div>
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-paper-mute text-ink transition-all duration-300 group-hover:bg-ink group-hover:text-white">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
      </div>
    </Reveal>
  );
}
