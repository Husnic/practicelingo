import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "PracticeLingo — Clear Care. Every Language.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #003D80 0%, #005EB8 50%, #0B7A82 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "60px 70px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background dot pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.06,
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1.5px, transparent 0)",
            backgroundSize: "36px 36px",
          }}
        />

        {/* Top row: Logo text + NHS badge */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          {/* Logo mark */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                background: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "#005EB8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: 18,
                  fontWeight: 800,
                }}
              >
                PL
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ color: "white", fontSize: 28, fontWeight: 800, lineHeight: 1.1 }}>
                PracticeLingo
              </span>
              <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, letterSpacing: 2 }}>
                CLEAR CARE. EVERY LANGUAGE.
              </span>
            </div>
          </div>

          {/* NHS compatible badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 12,
              padding: "8px 16px",
            }}
          >
            <div
              style={{
                background: "#005EB8",
                color: "white",
                fontWeight: 900,
                fontSize: 14,
                padding: "4px 10px",
                borderRadius: 6,
                letterSpacing: 1,
              }}
            >
              NHS
            </div>
            <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 14, fontWeight: 600 }}>
              Compatible
            </span>
          </div>
        </div>

        {/* Main headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16, flex: 1, justifyContent: "center" }}>
          <div style={{ color: "white", fontSize: 58, fontWeight: 800, lineHeight: 1.1, maxWidth: 720 }}>
            Multilingual Patient Communication for UK Healthcare
          </div>
          <div style={{ color: "rgba(255,255,255,0.72)", fontSize: 24, lineHeight: 1.5, maxWidth: 660 }}>
            Waiting room displays · QR mobile continuation · 10+ languages · Audio guidance
          </div>
        </div>

        {/* Bottom row: language flags + stat pills */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          {/* Flags */}
          <div style={{ display: "flex", gap: 10 }}>
            {["🇬🇧", "🇸🇦", "🇨🇳", "🇵🇹", "🇮🇳", "🇫🇷"].map((flag) => (
              <div
                key={flag}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                }}
              >
                {flag}
              </div>
            ))}
            <div
              style={{
                padding: "0 14px",
                height: 44,
                borderRadius: 12,
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                color: "rgba(255,255,255,0.7)",
                fontSize: 15,
                fontWeight: 600,
              }}
            >
              +4 more
            </div>
          </div>

          {/* Pills */}
          <div style={{ display: "flex", gap: 10 }}>
            {[
              { label: "10+ Languages", color: "#98D37F" },
              { label: "GDPR Compliant", color: "#64D7FF" },
              { label: "No App Download", color: "#F59E0B" },
            ].map(({ label, color }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: 100,
                  padding: "6px 14px",
                  color: "rgba(255,255,255,0.85)",
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: color }} />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
