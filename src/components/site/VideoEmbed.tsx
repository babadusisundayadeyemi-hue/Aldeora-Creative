"use client";

import { useState, useRef, useEffect } from "react";
import { Play, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

type VideoEmbedProps = {
  videoId: string;
  title: string;
  poster?: string;
  className?: string;
  aspect?: "video" | "portrait" | "square" | "cinematic";
  label?: string;
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
 * Renders a poster thumbnail until clicked, then loads the iframe.
 * The video fills its container edge-to-edge — no borders, no rings,
 * no background layers showing through.
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

  // Preload poster so we can fade it in nicely
  useEffect(() => {
    if (posterLoaded) return;
    const img = new Image();
    img.onload = () => setPosterLoaded(true);
    img.src = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
    img.onerror = () => {
      const fallback = new Image();
      fallback.onload = () => setPosterLoaded(true);
      fallback.src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
      setTimeout(() => setPosterLoaded(true), 1500);
    };
  }, [videoId, posterLoaded]);

  const posterUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
  const posterFallback = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div
      ref={containerRef}
      className={cn(
        // No background color, no ring, no border — video fills entirely
        "group relative overflow-hidden rounded-lg",
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
          className="absolute inset-0 h-full w-full cursor-pointer"
        >
          {/* Poster — fills entire container */}
          <img
            src={posterUrl}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = posterFallback;
            }}
            alt={title}
            loading="lazy"
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.03]",
              posterLoaded ? "opacity-100" : "opacity-0"
            )}
          />
          {/* Subtle gradient overlay only at bottom for label legibility */}
          {label && (
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
          )}

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-ink shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:bg-gold">
              <Play className="ml-0.5 h-6 w-6" fill="currentColor" />
            </span>
          </div>

          {/* Label */}
          {label && (
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 text-left">
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {label}
                </p>
                <p className="mt-1.5 line-clamp-2 text-sm font-semibold text-white sm:text-base">
                  {title}
                </p>
              </div>
              <ExternalLink className="h-4 w-4 shrink-0 text-white/60" />
            </div>
          )}
        </button>
      )}
    </div>
  );
}
