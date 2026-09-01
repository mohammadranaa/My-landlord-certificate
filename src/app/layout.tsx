import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ConsentProvider } from "@/components/analytics/consent-provider";
import { ConsentBanner } from "@/components/analytics/consent-banner";
import { AnalyticsScripts } from "@/components/analytics/analytics-scripts";
import { AttributionCapture } from "@/components/analytics/attribution-capture";
import { FloatingButtons } from "@/components/ui/floating-buttons";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

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
  verification: {
    google: "TVjZfQIOjAFUGDn9HnpH_bsIePXdUXM6BTOG0KL2470",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground w-full min-w-0 overflow-x-hidden" suppressHydrationWarning>
        {/* Consent Mode v2 default: deny everything until the visitor chooses.
            Must run before gtag.js loads so Google can collect cookieless
            signals (and model conversions) for visitors who decline or ignore. */}
        <Script
          id="gtag-consent-default"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  analytics_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  wait_for_update: 500
});
gtag('set', 'url_passthrough', true);
gtag('set', 'ads_data_redaction', true);`,
          }}
        />
        {/* Google Tag Manager — loads after the Consent Mode v2 default above */}
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-55T5TH5H');`,
          }}
        />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-55T5TH5H"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ConsentProvider>
          {children}
          <ConsentBanner />
          <AnalyticsScripts />
        </ConsentProvider>
        {/* Vercel Analytics & Speed Insights — cookieless, no consent required */}
        <Analytics />
        <SpeedInsights />
        <AttributionCapture />
        <FloatingButtons />
      </body>
    </html>
  );
}
