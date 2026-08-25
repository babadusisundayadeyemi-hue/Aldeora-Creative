"use client";

import { useState, useRef, useEffect } from "react";
import { Play, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

type VideoEmbedProps = {
  videoId: string;
  title: string;
  poster?: string; // optional custom poster (YouTube hqdefault used by default)
  className?: string;
  aspect?: "video" | "portrait" | "square" | "cinematic";
  label?: string; // small label shown bottom-left
};

const aspectClass: Record<NonNullable<VideoEmbedProps["aspect"]>, string> = {
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  cinematic: "aspect-[21/9]",
};

/**
 * Lazy YouTube embed.
 *
 * Renders a poster thumbnail (YouTube's hqdefault) until clicked —
 * this avoids loading 12+ iframes on a portfolio page and keeps the
 * page fast. Clicking the poster loads the iframe with autoplay=1.
 *
 * Uses youtube-nocookie.com for privacy-friendly embedding.
 */
export function VideoEmbed({
  videoId,
  title,
  className,
  aspect = "video",
  label,
}: VideoEmbedProps) {
  const [activated, setActivated] = useState(false);
  const [posterLoaded, setPosterLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Preload poster using Image() so we can fade it in nicely
  useEffect(() => {
    if (posterLoaded) return;
    const img = new Image();
    img.onload = () => setPosterLoaded(true);
    img.src = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
    // Fallback: if maxres fails (some videos), use hqdefault
    img.onerror = () => {
      const fallback = new Image();
      fallback.onload = () => setPosterLoaded(true);
      fallback.src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
      // Last resort: mark as loaded after 1.5s anyway
      setTimeout(() => setPosterLoaded(true), 1500);
    };
  }, [videoId, posterLoaded]);

  const posterUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
  const posterFallback = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div
      ref={containerRef}
      className={cn(
        "group relative overflow-hidden rounded-xl bg-ink",
        aspectClass[aspect],
        className
      )}
    >
      {activated ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={title}
          loading="lazy"
          allow="accelerated-decoded-media; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setActivated(true)}
          aria-label={`Play video: ${title}`}
          className="absolute inset-0 h-full w-full"
        >
          {/* Poster */}
          <img
            src={posterUrl}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = posterFallback;
            }}
            alt={title}
            loading="lazy"
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-105",
              posterLoaded ? "opacity-100" : "opacity-0"
            )}
          />
          {/* Dark gradient overlay for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/20" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-ink shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:bg-gold">
              <Play className="ml-0.5 h-5 w-5" fill="currentColor" />
              <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-white/30" style={{ animationDuration: "2.5s" }} />
            </span>
          </div>

          {/* Label */}
          {label && (
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 text-left">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
                  {label}
                </p>
                <p className="mt-1 line-clamp-2 text-sm font-semibold text-white/95">
                  {title}
                </p>
              </div>
              <ExternalLink className="h-3.5 w-3.5 shrink-0 text-white/50" />
            </div>
          )}
        </button>
      )}
    </div>
  );
}
