"use client";

import { useState, useEffect, useCallback } from "react";

interface SaveQuotePromptProps {
  email: string;
  name: string;
  services: Array<{ type: string; variant?: string; price: number }>;
  totalPrice: number;
  onDismiss: () => void;
}

export function SaveQuotePrompt({
  email,
  name,
  services,
  totalPrice,
  onDismiss,
}: SaveQuotePromptProps) {
  const [visible, setVisible] = useState(false);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleExitIntent = useCallback(
    (e: MouseEvent) => {
      if (e.clientY < 50 && email && !sent) {
        setVisible(true);
      }
    },
    [email, sent],
  );

  useEffect(() => {
    document.addEventListener("mouseleave", handleExitIntent);
    return () => document.removeEventListener("mouseleave", handleExitIntent);
  }, [handleExitIntent]);

  const handleSaveQuote = async () => {
    setSending(true);
    try {
      await fetch("/api/save-quote-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, services, totalPrice }),
      });
    } catch {
      // dismiss either way
    } finally {
      setSent(true);
      setSending(false);
    }
  };

  if (!visible || !email) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Save your quote"
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8">
        {!sent ? (
          <>
            <div className="w-12 h-12 rounded-full bg-compliance-blue/10 flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-compliance-blue"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>

            <h2 className="text-xl font-bold text-brand-charcoal mb-2">
              Before you go — save your quote
            </h2>
            <p className="text-brand-grey text-sm mb-5">
              We&apos;ll email your price breakdown to{" "}
              <strong className="text-brand-charcoal">{email}</strong> so you
              can come back and book when you&apos;re ready.
            </p>

            {services.length > 0 && (
              <div className="bg-warm-white rounded-xl p-4 mb-5 text-sm">
                <p className="text-xs font-semibold text-brand-grey uppercase tracking-wide mb-2">
                  Your quote
                </p>
                {services.map((s, i) => (
                  <div
                    key={i}
                    className="flex justify-between text-brand-charcoal mb-1"
                  >
                    <span>{s.variant ?? s.type}</span>
                    <span className="font-medium">£{s.price.toFixed(2)}</span>
                  </div>
                ))}
                <div className="flex justify-between font-bold text-brand-charcoal border-t border-border mt-2 pt-2">
                  <span>Total</span>
                  <span className="text-compliance-blue">
                    £{totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={handleSaveQuote}
                disabled={sending}
                className="flex-1 bg-compliance-blue hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-xl text-sm transition-colors disabled:opacity-60"
              >
                {sending ? "Sending…" : "Email my quote"}
              </button>
              <button
                onClick={() => {
                  setVisible(false);
                  onDismiss();
                }}
                className="px-4 py-2.5 text-sm text-brand-grey hover:text-brand-charcoal transition-colors"
              >
                No thanks
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="w-12 h-12 rounded-full bg-action-green/15 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-action-green"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="font-semibold text-brand-charcoal mb-1">
              Quote saved!
            </p>
            <p className="text-sm text-brand-grey mb-4">
              Check your inbox — we&apos;ve sent your price breakdown to {email}
            </p>
            <button
              onClick={() => {
                setVisible(false);
                onDismiss();
              }}
              className="text-sm text-compliance-blue hover:underline"
            >
              Continue booking
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
