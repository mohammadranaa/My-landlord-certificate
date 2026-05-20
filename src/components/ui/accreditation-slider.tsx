"use client"

import { useState } from "react"
import Image from "next/image"
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

  // Duplicate for seamless loop
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
            <div
              key={`${logo.id}-${index}`}
              aria-hidden={index >= logos.length ? true : undefined}
              className={cn(
                "flex items-center justify-center shrink-0 rounded-xl",
                "border",
                // Fixed uniform size for every card
                "w-[160px] h-[88px]",
                isDark
                  ? "bg-white/10 border-white/20"
                  : "bg-white border-border"
              )}
            >
              <Image
                src={logo.logoPath}
                alt={logo.name}
                width={160}
                height={64}
                // Consistent display box — object-contain handles any aspect ratio
                className="w-[128px] h-[56px] object-contain"
                unoptimized={logo.logoPath.endsWith(".gif")}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
