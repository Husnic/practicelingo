"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F7F9FC",
          fontFamily: "sans-serif",
          padding: "24px",
        }}
      >
        <div style={{ maxWidth: 400, textAlign: "center" }}>
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: "#FEF2F2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 24px",
            }}
          >
            <span style={{ fontSize: 36 }}>⚠️</span>
          </div>
          <h1 style={{ color: "#1A1A1A", marginBottom: 12, fontSize: 28 }}>Something went wrong</h1>
          <p style={{ color: "#5F6368", marginBottom: 24, lineHeight: 1.6 }}>
            A critical error occurred. Please refresh or try again.
          </p>
          {error.digest && (
            <p style={{ color: "#9CA3AF", fontSize: 12, fontFamily: "monospace", marginBottom: 24 }}>
              {error.digest}
            </p>
          )}
          <button
            onClick={reset}
            style={{
              background: "#005EB8",
              color: "white",
              border: "none",
              borderRadius: 12,
              padding: "12px 28px",
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Try Again
          </button>
          <p style={{ marginTop: 32, fontSize: 12, color: "#9CA3AF" }}>
            Emergency? Call <strong style={{ color: "#1A1A1A" }}>999</strong> or <strong style={{ color: "#1A1A1A" }}>NHS 111</strong>
          </p>
        </div>
      </body>
    </html>
  );
}
