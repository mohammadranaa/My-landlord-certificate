import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizeCss: true,
  },
  async redirects() {
    return [
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
      { source: "/fire-safety/commercial-fire-risk-assessment", destination: "/fire-safety/fire-risk-assessment", permanent: true },
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
