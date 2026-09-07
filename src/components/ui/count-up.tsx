"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface CountUpProps {
  /** Final value to count to. */
  end: number;
  /** Appended after the number, e.g. "+". */
  suffix?: string;
  /** Animation length in ms. */
  duration?: number;
  className?: string;
}

/**
 * Counts up from 0 to `end` when scrolled into view.
 * Respects reduced-motion (renders the final value immediately).
 */
export function CountUp({ end, suffix = "", duration = 1500, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(end);
      return;
    }

    const run = () => {
      if (started.current) return;
      started.current = true;
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(end * eased));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(el);

    // Fail-safe: if the observer never delivers but the element is on screen,
    // run the count anyway so the value is never stuck at 0.
    const failSafe = window.setTimeout(() => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) run();
    }, 1800);

    return () => {
      observer.disconnect();
      window.clearTimeout(failSafe);
    };
  }, [end, duration]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {value.toLocaleString("en-GB")}
      {suffix}
    </span>
  );
}
