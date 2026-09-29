"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { BOROUGH_PATHS } from "@/data/london-borough-paths"
import { BOROUGH_SLUG_MAP, BOROUGH_DISPLAY_NAME } from "@/data/borough-slug-map"
import { FROM_PRICES } from "@/lib/pricing"

/**
 * Single source of truth for which services appear in the borough tooltip —
 * add a new service here and it shows up on every borough automatically.
 */
export const BOROUGH_SERVICES: { label: string; hrefBase: string; fromPrice: string }[] = [
  { label: "EICR", hrefBase: "/eicr", fromPrice: FROM_PRICES.eicr },
  { label: "Gas Safety Certificate", hrefBase: "/gas-safety-certificate", fromPrice: FROM_PRICES["gas-safety-cp12"] },
  { label: "EPC", hrefBase: "/epc", fromPrice: FROM_PRICES.epc },
  { label: "Fire Risk Assessment", hrefBase: "/fire-risk-assessment", fromPrice: FROM_PRICES["fire-risk-assessment"] },
  { label: "PAT Testing", hrefBase: "/pat-testing", fromPrice: FROM_PRICES.pat },
]

interface TooltipState {
  visible: boolean
  pinned: boolean
  x: number
  y: number
  geoName: string
  slug: string
  name: string
}

const EMPTY_TOOLTIP: TooltipState = {
  visible: false, pinned: false, x: 0, y: 0, geoName: "", slug: "", name: "",
}

function getPathCentroid(pathData: string): [number, number] {
  let sumX = 0, sumY = 0, count = 0
  for (const m of pathData.matchAll(/[ML]([\d.]+),([\d.]+)/g)) {
    sumX += parseFloat(m[1])
    sumY += parseFloat(m[2])
    count++
  }
  return count > 0 ? [sumX / count, sumY / count] : [0, 0]
}

function abbreviate(display: string): string {
  return display
    .replace("upon Thames", "")
    .replace("& Dagenham", "& Dag.")
    .replace("Hammersmith & Fulham", "H & F")
    .replace("Kensington & Chelsea", "K & C")
    .trim()
}

const BOROUGH_COLOURS = [
  "#60A5FA", // blue-400
  "#34D399", // emerald-400
  "#A78BFA", // violet-400
  "#F472B6", // pink-400
  "#FBBF24", // amber-400
  "#2DD4BF", // teal-400
  "#FB923C", // orange-400
  "#818CF8", // indigo-400
]

const getBoroughColour = (index: number) =>
  BOROUGH_COLOURS[index % BOROUGH_COLOURS.length]

const entries = Object.entries(BOROUGH_PATHS)
  .map(([geoName, pathData]) => ({
    geoName,
    slug: BOROUGH_SLUG_MAP[geoName] ?? "",
    pathData,
  }))
  .filter((e) => e.slug)

/** The per-service link list + "Book in [Borough]" CTA shared by the desktop tooltip and mobile panel. */
function BoroughServiceList({ slug, name, onNavigate }: { slug: string; name: string; onNavigate?: () => void }) {
  return (
    <div>
      <p className="font-semibold leading-tight text-white">{name}</p>
      <ul className="mt-1.5 space-y-1">
        {BOROUGH_SERVICES.map((service) => (
          <li key={service.hrefBase}>
            <Link
              href={`${service.hrefBase}/${slug}`}
              onClick={onNavigate}
              className="block text-blue-100 hover:text-white hover:underline"
            >
              {service.label} — {service.fromPrice}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/book"
        onClick={onNavigate}
        className="mt-2 block font-semibold text-action-green hover:underline"
      >
        Book in {name} →
      </Link>
    </div>
  )
}

export function LondonCoverageMap({ interactive = true }: { interactive?: boolean } = {}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState<string | null>(null)
  const [tooltip, setTooltip] = useState<TooltipState>(EMPTY_TOOLTIP)
  const [openMobileSlug, setOpenMobileSlug] = useState<string | null>(null)
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearHideTimer = () => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current)
      hideTimer.current = null
    }
  }

  // Tap/click outside the map closes any pinned tooltip or open mobile panel.
  useEffect(() => {
    if (!tooltip.pinned && !openMobileSlug) return
    const handleOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setTooltip(EMPTY_TOOLTIP)
        setOpenMobileSlug(null)
      }
    }
    document.addEventListener("mousedown", handleOutside)
    return () => document.removeEventListener("mousedown", handleOutside)
  }, [tooltip.pinned, openMobileSlug])

  const getSVGCoords = (e: React.MouseEvent<SVGElement>): { x: number; y: number } => {
    const svg = e.currentTarget.closest("svg") as SVGSVGElement
    const rect = svg.getBoundingClientRect()
    return {
      x: ((e.clientX - rect.left) / rect.width) * 800,
      y: ((e.clientY - rect.top) / rect.height) * 600,
    }
  }

  const handleEnter = useCallback((
    geoName: string, slug: string, e: React.MouseEvent<SVGPathElement>
  ) => {
    clearHideTimer()
    setHovered(geoName)
    setTooltip((prev) => {
      if (prev.pinned) return prev
      const coords = getSVGCoords(e as React.MouseEvent<SVGElement>)
      return { visible: true, pinned: false, ...coords, geoName, slug, name: BOROUGH_DISPLAY_NAME[slug] ?? geoName }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleMove = useCallback((e: React.MouseEvent<SVGPathElement>) => {
    setTooltip((prev) => {
      if (prev.pinned) return prev
      const coords = getSVGCoords(e as React.MouseEvent<SVGElement>)
      return { ...prev, ...coords }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLeave = useCallback(() => {
    setHovered(null)
    // Small delay so the cursor can travel from the path onto the tooltip
    // (which sits just outside the path) without the tooltip vanishing first.
    clearHideTimer()
    hideTimer.current = setTimeout(() => {
      setTooltip((prev) => (prev.pinned ? prev : EMPTY_TOOLTIP))
    }, 200)
  }, [])

  const handleClick = useCallback((geoName: string, slug: string, e: React.MouseEvent<SVGPathElement>) => {
    if (!interactive) return
    clearHideTimer()
    const coords = getSVGCoords(e as React.MouseEvent<SVGElement>)
    setTooltip((prev) => {
      if (prev.pinned && prev.geoName === geoName) return EMPTY_TOOLTIP
      return { visible: true, pinned: true, ...coords, geoName, slug, name: BOROUGH_DISPLAY_NAME[slug] ?? geoName }
    })
  }, [interactive])

  const tooltipWidth = interactive ? 210 : 150
  const tooltipHeight = interactive ? 190 : 54

  return (
    <div ref={containerRef} className="w-full">
      {/* SVG map — tablet and up */}
      <div className="hidden sm:block relative w-full max-w-4xl mx-auto select-none">
        <svg
          viewBox="0 0 800 600"
          className="w-full h-auto max-h-[600px] drop-shadow-sm"
          aria-label="Map of London boroughs covered by My Landlord Certificate"
        >
          <rect width="800" height="600" fill="#f0f7ff" rx="12" />

          {entries.map(({ geoName, slug, pathData }, i) => {
            const isHovered = hovered === geoName || tooltip.geoName === geoName
            return (
              <path
                key={geoName}
                d={pathData}
                fill={isHovered ? "#0093DB" : getBoroughColour(i)}
                stroke="#ffffff"
                strokeWidth={isHovered ? 1.5 : 0.8}
                strokeLinejoin="round"
                style={{ transition: "fill 0.12s ease", cursor: interactive ? "pointer" : "default" }}
                aria-label={BOROUGH_DISPLAY_NAME[slug] ?? geoName}
                onMouseEnter={(e) => handleEnter(geoName, slug, e)}
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                onClick={(e) => handleClick(geoName, slug, e)}
              />
            )
          })}

          {/* Borough name labels */}
          {entries.map(({ geoName, slug, pathData }) => {
            const [cx, cy] = getPathCentroid(pathData)
            const display = BOROUGH_DISPLAY_NAME[slug] ?? geoName
            const label = abbreviate(display)
            const isHovered = hovered === geoName || tooltip.geoName === geoName
            const words = label.split(" ")
            const mid = Math.ceil(words.length / 2)
            return (
              <text
                key={`lbl-${geoName}`}
                x={cx}
                y={cy}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="7"
                fontFamily="Inter, system-ui, sans-serif"
                fontWeight="600"
                fill={isHovered ? "#ffffff" : "#1e3a5f"}
                className="pointer-events-none select-none"
                aria-hidden="true"
              >
                {words.length > 2 ? (
                  <>
                    <tspan x={cx} dy="-4">{words.slice(0, mid).join(" ")}</tspan>
                    <tspan x={cx} dy="9">{words.slice(mid).join(" ")}</tspan>
                  </>
                ) : (
                  label
                )}
              </text>
            )
          })}

          {/* Tooltip */}
          {tooltip.visible && (
            <foreignObject
              x={Math.min(tooltip.x + 10, 800 - tooltipWidth - 5)}
              y={Math.min(Math.max(tooltip.y - tooltipHeight / 2, 4), 600 - tooltipHeight - 4)}
              width={tooltipWidth}
              height={tooltipHeight}
              className="overflow-visible"
              style={{ pointerEvents: tooltip.pinned || interactive ? "auto" : "none" }}
              onMouseEnter={clearHideTimer}
              onMouseLeave={handleLeave}
            >
              <div className="rounded-xl bg-brand-charcoal px-3 py-2.5 text-xs shadow-lg">
                {interactive ? (
                  <BoroughServiceList
                    slug={tooltip.slug}
                    name={tooltip.name}
                    onNavigate={() => setTooltip(EMPTY_TOOLTIP)}
                  />
                ) : (
                  <>
                    <p className="font-semibold leading-tight text-white">{tooltip.name}</p>
                    <p className="mt-0.5 text-xs text-blue-200">In our coverage area</p>
                  </>
                )}
              </div>
            </foreignObject>
          )}
        </svg>
      </div>

      {/* Mobile borough grid */}
      <div className="sm:hidden">
        <div className="grid grid-cols-2 gap-2">
          {Object.entries(BOROUGH_DISPLAY_NAME).map(([slug, name]) =>
            interactive ? (
              <button
                key={slug}
                type="button"
                onClick={() => setOpenMobileSlug((prev) => (prev === slug ? null : slug))}
                aria-expanded={openMobileSlug === slug}
                className={`text-xs text-center py-2 px-2 rounded-lg border transition-colors ${
                  openMobileSlug === slug
                    ? "border-compliance-blue bg-compliance-blue/10 text-compliance-blue"
                    : "border-border bg-white text-brand-charcoal hover:border-compliance-blue hover:text-compliance-blue"
                }`}
              >
                {name}
              </button>
            ) : (
              <span
                key={slug}
                className="text-xs text-center py-2 px-2 rounded-lg border border-border bg-white text-brand-charcoal"
              >
                {name}
              </span>
            ),
          )}
        </div>

        {interactive && openMobileSlug && (
          <div className="mt-3 rounded-xl bg-brand-charcoal px-4 py-3 text-xs shadow-lg">
            <BoroughServiceList
              slug={openMobileSlug}
              name={BOROUGH_DISPLAY_NAME[openMobileSlug] ?? openMobileSlug}
              onNavigate={() => setOpenMobileSlug(null)}
            />
          </div>
        )}
      </div>
    </div>
  )
}
