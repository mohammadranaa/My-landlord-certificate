"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";

interface SlideItem {
  src: string;
  alt: string;
  /** Optional caption overlay (shown at the bottom of the slide). */
  title?: string;
  caption?: string;
  /** Optional small circular badge, e.g. "FRA" / "EPC". */
  badge?: string;
}

export function ImageSlider({ images }: { images: readonly SlideItem[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const scroll = useCallback((direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-slide]");
    const distance = card ? card.offsetWidth + 16 : 360;
    el.scrollBy({ left: direction === "right" ? distance : -distance, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="relative">
        {/* Prev button */}
        <button
          type="button"
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 border border-border shadow-md flex items-center justify-center text-brand-charcoal hover:bg-white transition-colors -ml-1 sm:ml-0"
          aria-label="Previous image"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Next button */}
        <button
          type="button"
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 border border-border shadow-md flex items-center justify-center text-brand-charcoal hover:bg-white transition-colors -mr-1 sm:mr-0"
          aria-label="Next image"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* Scrollable track */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-7 sm:px-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
        >
          {images.map((img, i) => (
            <button
              key={img.src}
              data-slide
              type="button"
              onClick={() => setLightbox(i)}
              className="snap-start shrink-0 w-[280px] sm:w-[340px] md:w-[400px] group cursor-zoom-in text-left"
            >
              <div className="relative overflow-hidden rounded-2xl border border-border shadow-sm">
                <div className={img.title ? "relative aspect-[4/3]" : "relative"}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={800}
                    height={600}
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 340px, 400px"
                    className={
                      img.title
                        ? "absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        : "w-full h-auto transition-transform duration-300 group-hover:scale-105"
                    }
                  />
                </div>
                {img.title && (
                  <div className="absolute inset-x-0 bottom-0 p-4 pt-10 bg-gradient-to-t from-black/80 via-black/45 to-transparent">
                    <div className="flex items-end justify-between gap-2">
                      <div>
                        <p className="text-white font-semibold text-sm leading-tight">{img.title}</p>
                        {img.caption && <p className="text-white/80 text-xs leading-snug mt-0.5">{img.caption}</p>}
                      </div>
                      {img.badge && (
                        <span className="shrink-0 w-9 h-9 rounded-full bg-action-green text-white text-[11px] font-bold flex items-center justify-center">
                          {img.badge}
                        </span>
                      )}
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-2 shadow-md">
                    <svg className="w-5 h-5 text-brand-charcoal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                      <path d="M11 8v6M8 11h6" />
                    </svg>
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <p className="text-xs text-brand-grey text-center mt-3">Click any image to enlarge &middot; Use arrows to browse</p>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-label="Enlarged image view"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
            aria-label="Close"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Prev in lightbox */}
          {lightbox > 0 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1); }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          )}

          {/* Next in lightbox */}
          {lightbox < images.length - 1 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1); }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          )}

          {/* Image */}
          <div className="max-w-4xl max-h-[85vh] w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              width={1600}
              height={1067}
              sizes="(max-width: 768px) 100vw, 900px"
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              priority
            />
            <p className="text-white/70 text-sm text-center mt-3">
              {images[lightbox].alt} &middot; {lightbox + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
