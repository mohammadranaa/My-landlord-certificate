"use client"

import dynamic from "next/dynamic"

const LondonCoverageMap = dynamic(
  () => import("@/components/ui/london-coverage-map").then((m) => m.LondonCoverageMap),
  {
    ssr: false,
    loading: () => (
      <div className="w-full max-w-3xl mx-auto h-[400px] rounded-2xl bg-blue-100 animate-pulse" />
    ),
  }
)

export function MapSection() {
  return <LondonCoverageMap />
}
