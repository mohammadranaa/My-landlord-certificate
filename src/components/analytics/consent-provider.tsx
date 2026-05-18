"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

type ConsentValue = "granted" | "denied" | null;

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
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${COOKIE}=([^;]+)`));
  const val = match?.[1];
  return val === "granted" || val === "denied" ? val : null;
}

function writeCookie(value: "granted" | "denied") {
  document.cookie = `${COOKIE}=${value}; max-age=${MAX_AGE}; path=/; SameSite=Lax`;
}

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<ConsentValue>(null);

  useEffect(() => {
    setConsent(readCookie());
  }, []);

  const accept = useCallback(() => {
    writeCookie("granted");
    setConsent("granted");
  }, []);

  const decline = useCallback(() => {
    writeCookie("denied");
    setConsent("denied");
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
