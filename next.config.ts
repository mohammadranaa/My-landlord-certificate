import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizeCss: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self), payment=(self)",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            // "same-origin-allow-popups" not "same-origin" — Stripe Checkout opens a popup
            value: "same-origin-allow-popups",
          },
          {
            key: "Cross-Origin-Resource-Policy",
            value: "same-site",
          },
        ],
      },
      {
        // Long cache for static assets
        source: "/accreditations/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Non-www → www (canonical domain consolidation)
      {
        source: "/:path*",
        has: [{ type: "host", value: "mylandlordcertificate.co.uk" }],
        destination: "https://www.mylandlordcertificate.co.uk/:path*",
        permanent: true,
      },
      // Nested commercial URLs → canonical top-level URLs
      { source: "/electrical-safety/commercial-eicr", destination: "/commercial-eicr", permanent: true },
      { source: "/gas-safety/cp42", destination: "/commercial-gas-safety-certificate", permanent: true },
      { source: "/epc/commercial-epc", destination: "/commercial-epc", permanent: true },
      // Old nested domestic URLs → canonical top-level URLs
      { source: "/electrical-safety/domestic-eicr", destination: "/eicr", permanent: true },
      { source: "/gas-safety/cp12", destination: "/gas-safety-certificate", permanent: true },
      { source: "/epc/domestic-epc", destination: "/epc", permanent: true },
      // Misplaced pages from prior build pass
      { source: "/fire-safety/asbestos-survey", destination: "/asbestos-survey", permanent: true },
      { source: "/fire-safety/commercial-fire-risk-assessment", destination: "/fire-risk-assessment", permanent: true },
      // Flatten electrical sub-pages
      { source: "/electrical-safety/electrical-diagnostic", destination: "/electrical-diagnostic", permanent: true },
      { source: "/electrical-safety/fuse-box-installation", destination: "/fuse-box-installation", permanent: true },
      { source: "/electrical-safety/emergency-lights-certificate", destination: "/emergency-lights-certificate", permanent: true },
      { source: "/electrical-safety/pat-testing", destination: "/pat-testing", permanent: true },
      // Flatten gas sub-pages
      { source: "/gas-safety/boiler-installation", destination: "/boiler-installation", permanent: true },
      // Flatten fire sub-pages
      { source: "/fire-safety/fire-safety-certificate", destination: "/fire-safety-certificate", permanent: true },
      { source: "/fire-safety/fire-risk-assessment", destination: "/fire-risk-assessment", permanent: true },
      { source: "/fire-safety/fire-alarm-installation", destination: "/fire-alarm-installation", permanent: true },
      { source: "/fire-safety/fire-door-certificate", destination: "/fire-door-certificate", permanent: true },
      { source: "/fire-safety/fire-extinguisher-testing", destination: "/fire-extinguisher-testing", permanent: true },
    ];
  },
};

export default withSentryConfig(nextConfig, {
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: true,
  widenClientFileUpload: true,
  disableLogger: true,
  sourcemaps: { disable: false },
});
