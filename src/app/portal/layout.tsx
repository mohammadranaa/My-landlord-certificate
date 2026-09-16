import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agent Portal — My Landlord Certificate",
  robots: { index: false, follow: false },
};

// Deliberately bare. The simple top-bar shell now lives in
// (auth)/layout.tsx (login/signup/pending only), and the full sidebar shell
// lives in (app)/layout.tsx (dashboard/jobs/account). This outer layout
// exists only because /portal/page.tsx needs *something* above it — it
// must never render its own header, or every (app) route gets two stacked
// headers.
export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
