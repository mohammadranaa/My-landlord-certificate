import Image from "next/image"
import { cn } from "@/lib/utils"
import {
  SERVICE_ACCREDITATIONS,
  type Accreditation,
} from "@/lib/accreditations"

interface TrustBadgesProps {
  serviceKey?: keyof typeof SERVICE_ACCREDITATIONS
  showAccreditations?: boolean
  variant?: "dark" | "light"
  className?: string
}

export function TrustBadges({
  serviceKey,
  showAccreditations = false,
  variant = "dark",
  className,
}: TrustBadgesProps) {
  const isDark = variant === "dark"
  const textPrimary = isDark ? "text-white" : "text-brand-charcoal"
  const textSecondary = isDark ? "text-blue-200" : "text-brand-grey"

  const accreditations: Accreditation[] = (showAccreditations && serviceKey)
    ? SERVICE_ACCREDITATIONS[serviceKey] ?? []
    : []

  return (
    <div className={cn("flex flex-wrap items-center gap-x-5 gap-y-3", className)}>

      {/* Accreditation logos — only shown when showAccreditations={true} */}
      {accreditations.map((acc) => (
        <div
          key={acc.id}
          className="flex items-center gap-2"
        >
          <div className={cn(
            "flex items-center justify-center rounded-lg px-2 py-1",
            isDark ? "bg-white/15" : "bg-white border border-border"
          )}>
            <Image
              src={acc.logoPath}
              alt={acc.name}
              width={acc.logoWidth}
              height={acc.logoHeight}
              className="object-contain h-6 w-auto"
            />
          </div>
          <span className={cn("text-sm font-medium", textPrimary)}>
            {acc.shortName}
          </span>
        </div>
      ))}

    </div>
  )
}
