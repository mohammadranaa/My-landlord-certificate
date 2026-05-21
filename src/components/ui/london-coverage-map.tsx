"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { getPriceForEICR } from "@/lib/pricing";

const EICR_FROM = `£${getPriceForEICR("studio").toFixed(2)}`;

interface Borough {
  name: string;
  slug: string;
  d: string;
  labelX: number;
  labelY: number;
}

// Simplified but topologically correct London borough polygons
// ViewBox: 0 0 760 580 — north up, Thames at ~y320 in centre
const BOROUGHS: Borough[] = [
  // ── Far north ──────────────────────────────────────────────────────────────
  {
    name: "Enfield",
    slug: "enfield",
    labelX: 430,
    labelY: 62,
    d: "M 325,30 L 540,30 L 548,80 L 530,105 L 480,112 L 430,118 L 375,112 L 335,92 Z",
  },
  // ── North ──────────────────────────────────────────────────────────────────
  {
    name: "Barnet",
    slug: "barnet",
    labelX: 310,
    labelY: 150,
    d: "M 215,100 L 325,90 L 335,112 L 375,112 L 430,118 L 428,158 L 395,172 L 355,178 L 302,168 L 248,148 L 215,125 Z",
  },
  {
    name: "Haringey",
    slug: "haringey",
    labelX: 448,
    labelY: 148,
    d: "M 430,118 L 480,112 L 510,118 L 530,138 L 510,163 L 478,172 L 438,178 L 428,158 Z",
  },
  {
    name: "Waltham Forest",
    slug: "waltham-forest",
    labelX: 555,
    labelY: 150,
    d: "M 530,105 L 578,98 L 608,112 L 615,145 L 598,168 L 565,178 L 530,172 L 510,158 L 510,138 L 530,118 Z",
  },
  // ── Outer north ────────────────────────────────────────────────────────────
  {
    name: "Harrow",
    slug: "harrow",
    labelX: 190,
    labelY: 200,
    d: "M 130,158 L 215,148 L 248,158 L 228,192 L 208,218 L 162,222 L 128,208 Z",
  },
  {
    name: "Brent",
    slug: "brent",
    labelX: 285,
    labelY: 208,
    d: "M 228,192 L 248,158 L 302,168 L 355,178 L 360,192 L 332,215 L 282,228 L 242,228 L 208,218 Z",
  },
  {
    name: "Redbridge",
    slug: "redbridge",
    labelX: 628,
    labelY: 198,
    d: "M 578,98 L 655,98 L 682,122 L 668,162 L 642,178 L 598,178 L 565,178 L 598,168 L 615,145 L 608,112 Z",
  },
  {
    name: "Havering",
    slug: "havering",
    labelX: 705,
    labelY: 178,
    d: "M 655,98 L 752,102 L 758,148 L 742,188 L 705,208 L 668,198 L 642,178 L 668,162 L 682,122 Z",
  },
  // ── Central north ──────────────────────────────────────────────────────────
  {
    name: "Camden",
    slug: "camden",
    labelX: 350,
    labelY: 232,
    d: "M 302,168 L 355,178 L 360,198 L 358,238 L 332,252 L 308,258 L 288,248 L 278,228 L 285,198 Z",
  },
  {
    name: "Islington",
    slug: "islington",
    labelX: 418,
    labelY: 232,
    d: "M 428,158 L 438,178 L 438,218 L 428,248 L 408,258 L 382,258 L 358,248 L 358,222 L 358,198 L 395,172 Z",
  },
  {
    name: "Hackney",
    slug: "hackney",
    labelX: 492,
    labelY: 225,
    d: "M 478,172 L 510,163 L 530,172 L 565,178 L 568,208 L 545,228 L 510,238 L 475,238 L 448,228 L 438,218 L 438,178 Z",
  },
  {
    name: "Barking and Dagenham",
    slug: "barking-dagenham",
    labelX: 688,
    labelY: 242,
    d: "M 668,198 L 705,208 L 748,202 L 752,242 L 735,272 L 698,278 L 665,268 L 652,248 L 658,222 Z",
  },
  {
    name: "Newham",
    slug: "newham",
    labelX: 598,
    labelY: 252,
    d: "M 568,208 L 598,202 L 642,212 L 658,232 L 652,258 L 620,268 L 578,262 L 548,248 L 545,228 Z",
  },
  // ── Central (Thames-side north bank) ───────────────────────────────────────
  {
    name: "Hillingdon",
    slug: "hillingdon",
    labelX: 95,
    labelY: 272,
    d: "M 42,198 L 130,158 L 162,222 L 148,252 L 132,292 L 108,322 L 52,332 L 42,298 Z",
  },
  {
    name: "Ealing",
    slug: "ealing",
    labelX: 185,
    labelY: 262,
    d: "M 162,222 L 208,218 L 242,228 L 242,272 L 218,292 L 182,298 L 148,282 L 148,252 Z",
  },
  {
    name: "Kensington and Chelsea",
    slug: "kensington-chelsea",
    labelX: 302,
    labelY: 290,
    d: "M 288,248 L 318,258 L 318,298 L 302,318 L 275,322 L 255,308 L 248,288 L 255,268 Z",
  },
  {
    name: "Hammersmith and Fulham",
    slug: "hammersmith-fulham",
    labelX: 240,
    labelY: 300,
    d: "M 242,272 L 288,262 L 288,298 L 255,308 L 242,328 L 218,322 L 205,308 L 215,288 Z",
  },
  {
    name: "Westminster",
    slug: "westminster",
    labelX: 355,
    labelY: 288,
    d: "M 318,258 L 368,248 L 382,262 L 385,298 L 368,318 L 338,328 L 318,320 L 302,308 L 318,278 Z",
  },
  {
    name: "City of London",
    slug: "city-of-london",
    labelX: 422,
    labelY: 270,
    d: "M 382,258 L 408,258 L 428,268 L 428,288 L 415,298 L 395,298 L 382,282 Z",
  },
  {
    name: "Tower Hamlets",
    slug: "tower-hamlets",
    labelX: 490,
    labelY: 278,
    d: "M 428,248 L 475,248 L 512,252 L 548,258 L 548,288 L 518,298 L 482,302 L 448,292 L 428,278 L 428,268 L 415,262 Z",
  },
  // ── South of Thames ────────────────────────────────────────────────────────
  {
    name: "Richmond upon Thames",
    slug: "richmond-upon-thames",
    labelX: 185,
    labelY: 368,
    d: "M 148,322 L 215,322 L 235,338 L 228,378 L 208,402 L 178,412 L 148,398 L 132,372 L 132,348 Z",
  },
  {
    name: "Hounslow",
    slug: "hounslow",
    labelX: 108,
    labelY: 352,
    d: "M 52,332 L 108,322 L 148,322 L 148,348 L 132,372 L 115,398 L 75,402 L 45,382 L 42,352 Z",
  },
  {
    name: "Wandsworth",
    slug: "wandsworth",
    labelX: 298,
    labelY: 362,
    d: "M 242,328 L 295,328 L 338,332 L 348,358 L 338,388 L 302,398 L 265,392 L 248,378 L 235,352 Z",
  },
  {
    name: "Lambeth",
    slug: "lambeth",
    labelX: 372,
    labelY: 362,
    d: "M 338,328 L 382,322 L 418,332 L 425,362 L 412,392 L 378,402 L 348,398 L 338,378 L 348,358 Z",
  },
  {
    name: "Southwark",
    slug: "southwark",
    labelX: 448,
    labelY: 345,
    d: "M 382,312 L 428,308 L 468,312 L 488,332 L 488,362 L 462,378 L 432,378 L 412,362 L 418,332 Z",
  },
  {
    name: "Lewisham",
    slug: "lewisham",
    labelX: 508,
    labelY: 368,
    d: "M 488,332 L 538,332 L 568,348 L 568,378 L 542,398 L 508,402 L 472,392 L 458,372 L 462,348 Z",
  },
  {
    name: "Greenwich",
    slug: "greenwich",
    labelX: 602,
    labelY: 352,
    d: "M 548,298 L 598,298 L 648,308 L 672,332 L 662,368 L 628,378 L 588,378 L 558,362 L 542,342 L 542,318 Z",
  },
  {
    name: "Bexley",
    slug: "bexley",
    labelX: 688,
    labelY: 362,
    d: "M 665,268 L 708,282 L 748,292 L 752,342 L 738,372 L 698,382 L 662,372 L 648,352 L 652,322 L 662,308 Z",
  },
  // ── Far south ──────────────────────────────────────────────────────────────
  {
    name: "Kingston upon Thames",
    slug: "kingston-upon-thames",
    labelX: 175,
    labelY: 432,
    d: "M 148,398 L 208,402 L 225,422 L 215,452 L 188,468 L 158,462 L 138,442 L 132,415 Z",
  },
  {
    name: "Merton",
    slug: "merton",
    labelX: 290,
    labelY: 422,
    d: "M 265,392 L 308,392 L 348,398 L 358,422 L 348,452 L 312,468 L 272,462 L 252,442 L 250,418 Z",
  },
  {
    name: "Sutton",
    slug: "sutton",
    labelX: 322,
    labelY: 492,
    d: "M 252,462 L 312,462 L 352,462 L 368,492 L 358,518 L 312,528 L 268,512 L 252,488 Z",
  },
  {
    name: "Croydon",
    slug: "croydon",
    labelX: 408,
    labelY: 468,
    d: "M 348,432 L 408,432 L 452,442 L 462,472 L 448,508 L 408,518 L 368,512 L 348,492 L 348,462 Z",
  },
  {
    name: "Bromley",
    slug: "bromley",
    labelX: 558,
    labelY: 452,
    d: "M 468,402 L 538,402 L 588,412 L 638,432 L 648,478 L 612,512 L 562,518 L 508,508 L 478,482 L 462,452 Z",
  },
];

interface TooltipState {
  name: string;
  x: number;
  y: number;
}

export function LondonCoverageMap() {
  const router = useRouter();
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const [touchedSlug, setTouchedSlug] = useState<string | null>(null);

  const handleMouseEnter = useCallback((borough: Borough, e: React.MouseEvent<SVGPathElement>) => {
    setHoveredSlug(borough.slug);
    const rect = (e.currentTarget.closest("svg") as SVGSVGElement).getBoundingClientRect();
    const svgX = e.clientX - rect.left;
    const svgY = e.clientY - rect.top;
    setTooltip({ name: borough.name, x: svgX, y: svgY });
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<SVGPathElement>) => {
    const rect = (e.currentTarget.closest("svg") as SVGSVGElement).getBoundingClientRect();
    setTooltip((prev) =>
      prev ? { ...prev, x: e.clientX - rect.left, y: e.clientY - rect.top } : prev,
    );
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredSlug(null);
    setTooltip(null);
  }, []);

  const handleClick = useCallback(
    (slug: string) => {
      router.push(`/eicr-${slug}`);
    },
    [router],
  );

  const handleTouch = useCallback(
    (borough: Borough) => {
      if (touchedSlug === borough.slug) {
        router.push(`/eicr-${borough.slug}`);
        setTouchedSlug(null);
      } else {
        setTouchedSlug(borough.slug);
        setHoveredSlug(borough.slug);
      }
    },
    [touchedSlug, router],
  );

  return (
    <div className="relative max-w-3xl mx-auto select-none">
      <svg
        viewBox="0 0 760 580"
        className="w-full h-auto drop-shadow-sm rounded-xl border border-border bg-white"
        role="img"
        aria-label="Interactive map of London boroughs — click a borough to see local EICR pricing"
      >
        {/* Thames river */}
        <path
          d="M 42,332 C 100,328 148,330 215,322 C 270,316 310,322 355,325 C 400,328 445,332 490,330 C 545,328 598,312 660,312 C 695,312 730,325 755,342"
          fill="none"
          stroke="#bfdbfe"
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.7"
        />

        {/* Borough paths */}
        {BOROUGHS.map((borough) => {
          const isHovered = hoveredSlug === borough.slug;
          return (
            <path
              key={borough.slug}
              d={borough.d}
              fill={isHovered ? "#0093DB" : "#0093DB"}
              fillOpacity={isHovered ? 0.85 : 0.18}
              stroke="#0093DB"
              strokeWidth={isHovered ? 1.5 : 0.75}
              strokeOpacity={isHovered ? 1 : 0.4}
              className="cursor-pointer transition-all duration-100"
              aria-label={`EICR in ${borough.name}`}
              onMouseEnter={(e) => handleMouseEnter(borough, e)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(borough.slug)}
              onTouchEnd={(e) => {
                e.preventDefault();
                handleTouch(borough);
              }}
            />
          );
        })}

        {/* Borough name labels */}
        {BOROUGHS.map((borough) => {
          const isHovered = hoveredSlug === borough.slug;
          if (!isHovered) return null;
          return (
            <text
              key={`label-${borough.slug}`}
              x={borough.labelX}
              y={borough.labelY}
              textAnchor="middle"
              dominantBaseline="middle"
              className="pointer-events-none"
              fill="white"
              fontSize="9"
              fontWeight="600"
            >
              {borough.name}
            </text>
          );
        })}
      </svg>

      {/* Tooltip */}
      {tooltip && (
        <div
          className="absolute pointer-events-none z-10 bg-brand-charcoal text-white text-xs rounded-lg px-3 py-2 shadow-lg whitespace-nowrap"
          style={{
            left: tooltip.x + 12,
            top: tooltip.y - 36,
            transform: tooltip.x > 580 ? "translateX(-110%)" : undefined,
          }}
          aria-hidden="true"
        >
          <p className="font-semibold">{tooltip.name}</p>
          <p className="text-blue-200">EICR from {EICR_FROM}</p>
        </div>
      )}
    </div>
  );
}
