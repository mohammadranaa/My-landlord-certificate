"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import type { Accreditation } from "@/lib/accreditations"

interface AccreditationSliderProps {
  logos: Accreditation[]
  variant?: "light" | "dark"
  heading?: string
  className?: string
}

export function AccreditationSlider({
  logos,
  variant = "light",
  heading,
  className,
}: AccreditationSliderProps) {
  const [paused, setPaused] = useState(false)
  const isDark = variant === "dark"

  const doubled = [...logos, ...logos]

  return (
    <div className={cn("w-full overflow-hidden", className)}>
      {heading && (
        <p className={cn(
          "text-center text-xs font-semibold uppercase tracking-widest mb-6",
          isDark ? "text-blue-200" : "text-brand-grey"
        )}>
          {heading}
        </p>
      )}

      <div
        className="marquee-mask overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        role="region"
        aria-label="Professional accreditations and memberships"
      >
        <div
          className={cn(
            "flex gap-4 w-max animate-marquee",
            paused && "animate-marquee-paused"
          )}
        >
          {doubled.map((logo, index) => (
            <Link
              key={`${logo.id}-${index}`}
              href={logo.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${logo.name} — opens in new tab`}
              aria-hidden={index >= logos.length ? true : undefined}
              tabIndex={index >= logos.length ? -1 : 0}
              className={cn(
                "flex items-center justify-center shrink-0 rounded-xl",
                "border transition-all duration-200",
                "w-[160px] h-[80px]",
                isDark
                  ? "bg-white/10 border-white/20 hover:bg-white/20"
                  : "bg-white border-border hover:border-compliance-blue hover:shadow-sm"
              )}
            >
              <Image
                src={logo.logoPath}
                alt={logo.name}
                width={120}
                height={48}
                className="w-[120px] h-[48px] object-contain"
                unoptimized={logo.logoPath.endsWith(".gif")}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
