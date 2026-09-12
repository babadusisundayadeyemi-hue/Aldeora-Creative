"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type HeroVideoProps = {
  src: string;
  className?: string;
  /** Optional poster image (shown before video loads) */
  poster?: string;
};

/**
 * Autoplaying background video for the hero.
 * — Muted (required for autoplay)
 * — Loops infinitely
 * — No visible controls
 * — Plays inline (required for iOS)
 * — Lazy-loaded with a graceful fade-in
 */
export function HeroVideo({ src, className, poster }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onLoaded = () => {
      setLoaded(true);
      v.play().catch(() => {/* autoplay may fail in some browsers; poster will show */});
    };

    if (v.readyState >= 2) {
      onLoaded();
    } else {
      v.addEventListener("loadeddata", onLoaded);
      return () => v.removeEventListener("loadeddata", onLoaded);
    }
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      disablePictureInPicture
      disableRemotePlayback
      poster={poster}
      className={cn(
        "h-full w-full object-cover transition-opacity duration-700",
        loaded ? "opacity-100" : "opacity-0",
        className
      )}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
