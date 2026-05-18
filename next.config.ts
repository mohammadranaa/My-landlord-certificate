import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
  },
  async redirects() {
    return [
      // Core service page moves (old flat URLs → new category URLs)
      { source: "/eicr", destination: "/electrical-safety/domestic-eicr", permanent: true },
      { source: "/pat-testing", destination: "/electrical-safety/pat-testing", permanent: true },
      { source: "/gas-safety-certificate", destination: "/gas-safety/cp12", permanent: true },
      { source: "/fire-risk-assessment", destination: "/fire-safety/fire-risk-assessment", permanent: true },
      // Cost guide redirects (old SEO pages → canonical service pages)
      { source: "/eicr-cost", destination: "/electrical-safety/domestic-eicr", permanent: true },
      { source: "/gas-safety-certificate-cost", destination: "/gas-safety/cp12", permanent: true },
      { source: "/epc-cost", destination: "/epc/domestic-epc", permanent: true },
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
  hideSourceMaps: true,
  disableLogger: true,
});
