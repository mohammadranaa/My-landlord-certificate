/**
 * Shared class strings for the signed-out portal pages (login, request
 * access, pending, password reset). They mirror the signed-in portal:
 * square corners, Barlow Condensed uppercase labels, Compliance Blue buttons.
 */

export const condensed = "[font-family:var(--font-barlow-condensed)]";

export const kicker = `${condensed} text-[13px] font-semibold uppercase tracking-[.2em] text-[#0078b8]`;

export const pageTitle = `${condensed} mt-1 text-[40px] font-semibold leading-[1.05] text-[#1F2937]`;

export const pageIntro = "mt-2 text-[15px] leading-relaxed text-[#4B5563]";

export const label =
  "mb-1.5 block text-[12px] font-semibold uppercase tracking-[.12em] text-[#4B5563]";

export const input =
  "h-12 w-full border border-[#CFD6DE] bg-white px-3.5 text-base text-[#1F2937] placeholder:text-[#9CA3AF] focus:border-[#0093DB] focus:outline-none focus:ring-2 focus:ring-[#0093DB]/30 sm:text-[15.5px]";

export const fieldError = "mt-1.5 text-[13px] text-[#a52222]";

export const formAlert =
  "border border-[#D14343]/40 bg-[rgba(209,67,67,0.08)] px-3.5 py-3 text-sm text-[#a52222]";

const buttonBase = `${condensed} inline-flex h-[50px] w-full items-center justify-center px-5 text-[18px] font-semibold uppercase tracking-[.06em] transition-colors disabled:cursor-not-allowed disabled:opacity-60`;

export const primaryButton = `${buttonBase} bg-[#0093DB] text-[#FAFAF7] hover:bg-[#0078b8]`;

export const secondaryButton = `${buttonBase} border border-[#CFD6DE] bg-white text-[#1F2937] hover:border-[#0093DB] hover:text-[#0078b8]`;

export const textLink = "font-semibold text-[#0078b8] hover:text-[#0C447C] hover:underline";
