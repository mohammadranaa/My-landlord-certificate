import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  enabled: process.env.NODE_ENV === "production",
  tracesSampleRate: 0.1,
  // Session replays are handled by PostHog — keep Sentry replay off.
  replaysSessionSampleRate: 0,
  replaysOnErrorSampleRate: 0,
});
