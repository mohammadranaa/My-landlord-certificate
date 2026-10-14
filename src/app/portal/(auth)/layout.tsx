import { Barlow, Barlow_Condensed } from "next/font/google";
import { AuthBrandPanel } from "@/components/portal/auth-brand-panel";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

// Signed-out portal pages (login, request access, pending, password reset).
// Split screen: brand panel matching the signed-in portal sidebar on the left,
// the form on the right. Stacks on screens below `lg`. The full sidebar shell
// for signed-in pages lives separately in (app)/layout.tsx.
export default function PortalAuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${barlow.variable} ${barlowCondensed.variable} flex min-h-screen flex-col bg-[#FAFAF7] [font-family:var(--font-barlow)] text-[#1F2937] lg:flex-row`}
    >
      <AuthBrandPanel />
      <main className="flex flex-1 items-start justify-center px-5 py-8 sm:px-8 lg:items-center lg:py-12">
        <div className="w-full max-w-[440px]">{children}</div>
      </main>
    </div>
  );
}
