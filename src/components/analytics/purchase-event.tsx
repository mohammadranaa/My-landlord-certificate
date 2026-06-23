"use client";

import { useEffect } from "react";

interface PurchaseItem {
  item_name: string;
  price?: number;
  quantity?: number;
}

interface PurchaseEventProps {
  transactionId: string;
  value: number;
  currency?: string;
  items?: PurchaseItem[];
}

/**
 * Pushes a GA4-style `purchase` event to the dataLayer on the booking success
 * page (GTM trigger: Custom Event = "purchase"). Deduplicated per transaction
 * via sessionStorage so a page refresh does not fire it twice; Google Ads also
 * dedupes on transaction_id.
 */
export function PurchaseEvent({
  transactionId,
  value,
  currency = "GBP",
  items = [],
}: PurchaseEventProps) {
  useEffect(() => {
    if (!transactionId) return;
    try {
      const key = `purchase_pushed_${transactionId}`;
      if (sessionStorage.getItem(key)) return;
      sessionStorage.setItem(key, "1");

      const w = window as unknown as { dataLayer: unknown[] };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({ ecommerce: null }); // clear previous ecommerce object
      w.dataLayer.push({
        event: "purchase",
        ecommerce: {
          transaction_id: transactionId,
          value,
          currency,
          items,
        },
      });
    } catch {
      // Never block rendering.
    }
  }, [transactionId, value, currency, items]);

  return null;
}
