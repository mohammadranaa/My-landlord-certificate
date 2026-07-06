"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

type ConsentValue = "granted" | "denied" | "pending" | null;

interface ConsentCtx {
  consent: ConsentValue;
  accept: () => void;
  decline: () => void;
}

const ConsentContext = createContext<ConsentCtx>({
  consent: null,
  accept: () => {},
  decline: () => {},
});

const COOKIE = "mlc_cookie_consent";
const MAX_AGE = 60 * 60 * 24 * 365; // 12 months

function readCookie(): ConsentValue {
  if (typeof document === "undefined") return "pending";
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${COOKIE}=([^;]+)`));
  const val = match?.[1];
  return val === "granted" || val === "denied" ? val : "pending";
}

function writeCookie(value: "granted" | "denied") {
  document.cookie = `${COOKIE}=${value}; max-age=${MAX_AGE}; path=/; SameSite=Lax`;
}

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<ConsentValue>("pending");

  useEffect(() => {
    const stored = readCookie();
    setConsent(stored);
    // Re-apply a previously stored choice on load. The root layout defaults all
    // consent to "denied", so a returning visitor who already accepted (or
    // declined) needs an explicit update or their choice would be lost.
    if (
      typeof window !== "undefined" &&
      typeof window.gtag === "function" &&
      (stored === "granted" || stored === "denied")
    ) {
      const state = stored === "granted" ? "granted" : "denied";
      window.gtag("consent", "update", {
        analytics_storage: state,
        ad_storage: state,
        ad_user_data: state,
        ad_personalization: state,
      });
    }
  }, []);

  const accept = useCallback(() => {
    writeCookie("granted");
    setConsent("granted");
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
      });
    }
  }, []);

  const decline = useCallback(() => {
    writeCookie("denied");
    setConsent("denied");
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    }
  }, []);

  return (
    <ConsentContext.Provider value={{ consent, accept, decline }}>
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  return useContext(ConsentContext);
}
