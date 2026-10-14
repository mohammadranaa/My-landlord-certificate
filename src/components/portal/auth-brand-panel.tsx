import Image from "next/image";
import Link from "next/link";
import { PHONE_DISPLAY, TEL, WHATSAPP_URL } from "@/lib/constants";
import { RegistrationMarks } from "@/components/portal/registration-marks";
import { condensed } from "@/components/portal/auth-ui";

/** Same background as the signed-in portal sidebar in (app)/layout.tsx. */
export const PORTAL_BRAND_BACKGROUND: React.CSSProperties = {
  background: "#1F2937",
  backgroundImage:
    "linear-gradient(to right, rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.04) 1px, transparent 1px), radial-gradient(70% 90% at 100% 0%, rgba(0,147,219,.28), transparent 68%)",
  backgroundSize: "44px 44px, 44px 44px, auto",
};

// Illustrative only — signed-out pages never query real data.
const SAMPLE_ROWS = [
  { code: "EICR", address: "41 Amhurst Road, E8", state: "Valid", color: "#9BE03A" },
  { code: "GAS", address: "27 Stroud Green Rd, N4", state: "Due in 18 days", color: "#F5B941" },
  { code: "EPC", address: "12 Lavender Hill, SW11", state: "Booked in", color: "#4FB8EC" },
] as const;

const FEATURES = [
  "Every certificate for every property, in one place",
  "Live job status — from booking to certificate",
  "Download PDFs and book renewals in a couple of clicks",
] as const;

/**
 * Left-hand brand panel for the signed-out portal pages. On screens below
 * `lg` it collapses to a compact header band (logo, kicker, headline).
 */
export function AuthBrandPanel() {
  return (
    <aside
      className="relative flex flex-col gap-5 px-5 py-6 text-[#FAFAF7] sm:px-8 lg:min-h-screen lg:w-[46%] lg:max-w-[680px] lg:gap-10 lg:px-12 lg:py-10"
      style={PORTAL_BRAND_BACKGROUND}
    >
      <div className="flex flex-col gap-2.5">
        <Link href="/" aria-label="My Landlord Certificate — home" className="w-fit">
          <Image
            src="/logo-white-wordmark.png"
            alt="My Landlord Certificate"
            width={968}
            height={276}
            priority
            className="h-auto w-[150px] lg:w-[200px]"
          />
        </Link>
        <p className={`${condensed} text-[13px] font-semibold uppercase tracking-[.18em] text-[#80D100] lg:text-[14px]`}>
          Client portal
        </p>
      </div>

      <div className="flex max-w-[470px] flex-col gap-4">
        <h2 className={`${condensed} text-[28px] font-semibold leading-[1.04] lg:text-[46px]`}>
          Every property.
          <br className="hidden lg:block" /> Every certificate.
          <br className="hidden lg:block" /> One login.
        </h2>
        <p className="hidden text-[16.5px] leading-relaxed text-[rgba(250,250,247,.78)] lg:block">
          Track compliance across your portfolio, follow every job from booking to certificate, and
          download your certificates whenever you need them.
        </p>
      </div>

      <div className="relative hidden max-w-[430px] border border-white/15 bg-[rgba(15,23,32,.35)] p-[18px] lg:block">
        <RegistrationMarks tone="dark" />
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className={`${condensed} text-[13px] font-semibold uppercase tracking-[.16em] text-[rgba(250,250,247,.7)]`}>
              Portfolio compliance
            </p>
            <p className={`${condensed} text-[40px] font-semibold leading-tight`}>94%</p>
          </div>
          <p className="text-xs text-[rgba(250,250,247,.55)]">Sample view</p>
        </div>
        <div className="mb-3.5 mt-2 h-1 w-full bg-white/15">
          <div className="h-1 w-[94%] bg-[#80D100]" />
        </div>
        <ul>
          {SAMPLE_ROWS.map((row) => (
            <li key={row.code} className="flex items-center gap-3 border-t border-white/[.08] py-2.5">
              <span
                className={`${condensed} grid h-7 w-[46px] shrink-0 place-items-center border text-[13px] font-semibold tracking-[.08em]`}
                style={{ color: row.color, borderColor: row.color }}
              >
                {row.code}
              </span>
              <span className="min-w-0 flex-1 truncate text-sm text-[rgba(250,250,247,.9)]">{row.address}</span>
              <span className="text-[12.5px] font-semibold" style={{ color: row.color }}>
                {row.state}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <ul className="hidden flex-col gap-2.5 lg:flex">
        {FEATURES.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-[15px] text-[rgba(250,250,247,.85)]">
            <span aria-hidden className="mt-[7px] h-2 w-2 shrink-0 bg-[#80D100]" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto hidden flex-wrap gap-x-5 gap-y-2 text-[13.5px] text-[rgba(250,250,247,.66)] lg:flex">
        <span>
          Need help?{" "}
          <a href={TEL} className="font-semibold text-[#FAFAF7] hover:underline">
            {PHONE_DISPLAY}
          </a>
        </span>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#FAFAF7] hover:underline">
          WhatsApp us
        </a>
        <Link href="/" className="hover:text-[#FAFAF7] hover:underline">
          ← Back to main site
        </Link>
      </div>
    </aside>
  );
}
