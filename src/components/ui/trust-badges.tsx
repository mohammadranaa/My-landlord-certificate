import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  SERVICE_ACCREDITATIONS,
  type Accreditation,
} from "@/lib/accreditations"

interface TrustBadgesProps {
  serviceKey?: keyof typeof SERVICE_ACCREDITATIONS
  variant?: "dark" | "light"
  rating?: number
  reviewCount?: number
  className?: string
}

export function TrustBadges({
  serviceKey,
  variant = "dark",
  rating = 4.9,
  reviewCount = 1000,
  className,
}: TrustBadgesProps) {
  const isDark = variant === "dark"
  const textPrimary = isDark ? "text-white" : "text-brand-charcoal"
  const textSecondary = isDark ? "text-blue-200" : "text-brand-grey"

  const accreditations: Accreditation[] = serviceKey
    ? SERVICE_ACCREDITATIONS[serviceKey] ?? []
    : []

  return (
    <div className={cn("flex flex-wrap items-center gap-x-5 gap-y-3", className)}>

      {accreditations.map((acc) => (
        <Link
          key={acc.id}
          href={acc.website}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${acc.name} accredited — opens in new tab`}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
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
              unoptimized={acc.logoPath.endsWith(".gif")}
            />
          </div>
          <span className={cn("text-sm font-medium", textPrimary)}>
            {acc.shortName}
          </span>
        </Link>
      ))}

      {/* Trustpilot — always shown */}
      <Link
        href={
          process.env.NEXT_PUBLIC_TRUSTPILOT_PROFILE_URL ||
          "https://uk.trustpilot.com/review/mylandlordcertificate.co.uk"
        }
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        aria-label={`${rating} stars on Trustpilot — opens in new tab`}
      >
        <div className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
          {[1, 2, 3, 4, 5].map((i) => (
            <svg key={i} className="w-4 h-4 text-[#00B67A]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          ))}
        </div>
        <span className={cn("text-sm", textPrimary)}>
          <strong>{rating}</strong>
          <span className={textSecondary}> on </span>
          <span className="font-bold text-[#00B67A]">Trustpilot</span>
        </span>
        <span className={cn("text-sm", textSecondary)}>
          ({reviewCount.toLocaleString()}+)
        </span>
      </Link>

      {/* Google Reviews — always shown */}
      <Link
        href={process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        aria-label="4.9 stars on Google Reviews — opens in new tab"
      >
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        <span className={cn("text-sm", textPrimary)}>
          <strong>4.9</strong>
          <span className={textSecondary}> on Google</span>
        </span>
        <span className={cn("text-sm", textSecondary)}>(100+)</span>
      </Link>
    </div>
  )
}
