"use client";

import { useEffect, useRef, useState } from "react";
import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  /** Element to render. Defaults to a div. */
  as?: ElementType;
  /** Stagger delay in ms before this element animates in. */
  delay?: number;
  className?: string;
}

/**
 * Fades + slides its children up as they scroll into view.
 * - Text is always present in the DOM (SEO-safe) — only opacity/transform animate.
 * - Respects `prefers-reduced-motion` (shows content immediately).
 * - Fail-safe timer guarantees content appears even if the observer never fires.
 */
export function Reveal({ children, as: Tag = "div", delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(el);

    // Fail-safe: never leave content hidden.
    const failSafe = window.setTimeout(() => setShown(true), 1600);

    return () => {
      observer.disconnect();
      window.clearTimeout(failSafe);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn("reveal", shown && "reveal-in", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
