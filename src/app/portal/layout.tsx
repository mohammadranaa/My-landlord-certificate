import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agent Portal — My Landlord Certificate",
  robots: { index: false, follow: false },
};

// Bare pass-through — the (auth) and (app) route groups each render their
// own shell (simple header vs. full sidebar app). This layout only exists
// to hold metadata shared across all of /portal/*.
export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
