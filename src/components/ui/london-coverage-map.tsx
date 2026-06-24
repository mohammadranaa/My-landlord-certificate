"use client"

import { useState, useCallback } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { BOROUGH_PATHS } from "@/data/london-borough-paths"
import { BOROUGH_SLUG_MAP, BOROUGH_DISPLAY_NAME } from "@/data/borough-slug-map"

interface TooltipState {
  visible: boolean
  x: number
  y: number
  name: string
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

export function LondonCoverageMap({ interactive = true }: { interactive?: boolean } = {}) {
  const router = useRouter()
  const [hovered, setHovered] = useState<string | null>(null)
  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false, x: 0, y: 0, name: "",
  })

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
    const coords = getSVGCoords(e as React.MouseEvent<SVGElement>)
    setHovered(geoName)
    setTooltip({ visible: true, ...coords, name: BOROUGH_DISPLAY_NAME[slug] ?? geoName })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleMove = useCallback((e: React.MouseEvent<SVGPathElement>) => {
    const coords = getSVGCoords(e as React.MouseEvent<SVGElement>)
    setTooltip((prev) => ({ ...prev, ...coords }))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLeave = useCallback(() => {
    setHovered(null)
    setTooltip((prev) => ({ ...prev, visible: false }))
  }, [])

  return (
    <div className="w-full">
      {/* SVG map — tablet and up */}
      <div className="hidden sm:block relative w-full max-w-4xl mx-auto select-none">
        <svg
          viewBox="0 0 800 600"
          className="w-full h-auto max-h-[600px] drop-shadow-sm"
          aria-label="Map of London boroughs covered by My Landlord Certificate"
        >
          <rect width="800" height="600" fill="#f0f7ff" rx="12" />

          {entries.map(({ geoName, slug, pathData }, i) => {
            const isHovered = hovered === geoName
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
                onClick={interactive ? () => router.push(`/eicr/${slug}`) : undefined}
              />
            )
          })}

          {/* Borough name labels */}
          {entries.map(({ geoName, slug, pathData }) => {
            const [cx, cy] = getPathCentroid(pathData)
            const display = BOROUGH_DISPLAY_NAME[slug] ?? geoName
            const label = abbreviate(display)
            const isHovered = hovered === geoName
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

          {/* Hover tooltip */}
          {tooltip.visible && (
            <foreignObject
              x={Math.min(tooltip.x + 10, 655)}
              y={Math.max(tooltip.y - 58, 4)}
              width="135"
              height="54"
              className="pointer-events-none overflow-visible"
            >
              <div className="bg-brand-charcoal text-white rounded-xl px-3 py-2 text-xs shadow-lg">
                <p className="font-semibold leading-tight">{tooltip.name}</p>
                <p className="text-blue-200 text-xs mt-0.5">
                  {interactive ? "Book EICR from £67.99 →" : "In our coverage area"}
                </p>
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
              <Link
                key={slug}
                href={`/eicr/${slug}`}
                className="text-xs text-center py-2 px-2 rounded-lg border border-border
                  bg-white text-brand-charcoal hover:border-compliance-blue hover:text-compliance-blue transition-colors"
              >
                {name}
              </Link>
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
      </div>
    </div>
  )
}
