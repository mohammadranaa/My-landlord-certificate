"use client";

import Script from "next/script";
import { GA4_MEASUREMENT_ID, GOOGLE_ADS_ID, CLARITY_PROJECT_ID } from "@/lib/constants";
import { useConsent } from "./consent-provider";

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

function MicrosoftClarity() {
  return (
    <Script
      id="microsoft-clarity"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window,document,"clarity","script","${CLARITY_PROJECT_ID}");`,
      }}
    />
  );
}

function MetaPixel({ pixelId }: { pixelId: string }) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${pixelId}');fbq('track','PageView');`,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}

export function AnalyticsScripts() {
  const { consent } = useConsent();

  // The Google tag loads in ALL cases so Consent Mode v2 can model conversions
  // for visitors who decline (it sends cookieless pings). It respects the
  // "denied" default set in the root layout until the visitor accepts. Meta
  // Pixel has no consent mode, so it stays gated behind explicit consent.
  return (
    <>
      {consent === "granted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script
            id="ga4-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('consent', 'update', {
                  'analytics_storage': 'granted',
                  'ad_storage': 'granted',
                  'ad_user_data': 'granted',
                  'ad_personalization': 'granted',
                });
                gtag('config', '${GA4_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                  anonymize_ip: true,
                  cookie_flags: 'SameSite=None;Secure',
                });
                gtag('config', '${GOOGLE_ADS_ID}');
              `,
            }}
          />
        </>
      )}
      {consent === "granted" && META_PIXEL_ID && <MetaPixel pixelId={META_PIXEL_ID} />}
      {consent === "granted" && <MicrosoftClarity />}
    </>
  );
}
