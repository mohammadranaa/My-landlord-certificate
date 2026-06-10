import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ConsentProvider } from "@/components/analytics/consent-provider";
import { ConsentBanner } from "@/components/analytics/consent-banner";
import { AnalyticsScripts } from "@/components/analytics/analytics-scripts";
import { PostHogProvider } from "@/components/analytics/posthog-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const defaultTitle = "My Landlord Certificate — UK Property Compliance";
const defaultDescription =
  "Book EICR, Gas Safety, EPC, Fire Risk Assessment and PAT testing online. NICEIC & Gas Safe accredited engineers. Next-day appointments across London. Fixed prices, no surprises.";
const siteUrl = "https://www.mylandlordcertificate.co.uk";

export const metadata: Metadata = {
  title: {
    default: defaultTitle,
    template: "%s | My Landlord Certificate",
  },
  description: defaultDescription,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "My Landlord Certificate",
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "My Landlord Certificate — UK Property Compliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/header-logo.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ConsentProvider>
          {children}
          <ConsentBanner />
          <AnalyticsScripts />
          <PostHogProvider />
        </ConsentProvider>
        {/* Vercel Analytics & Speed Insights — cookieless, no consent required */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
