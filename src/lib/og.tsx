import { ImageResponse } from "next/og";

// Delningsbilder (Open Graph) som visas när en länk delas i sociala medier och chattar.
export const OG_SIZE = { width: 1200, height: 630 };

function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
      <svg width="64" height="64" viewBox="0 0 32 32">
        <rect width="32" height="32" rx="9" fill="#18794a" />
        <circle cx="16" cy="16" r="8.5" fill="none" stroke="#fff" strokeWidth="3" />
        <path d="M16 16l5.2-5.2" stroke="#c8f169" strokeWidth="3.2" strokeLinecap="round" />
        <circle cx="16" cy="16" r="2" fill="#c8f169" />
      </svg>
      <span style={{ fontSize: 44, fontWeight: 800, color: "#fff", letterSpacing: -1.5 }}>smartstyra</span>
    </div>
  );
}

export function ogImage({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#143d2b",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <Logo />
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {eyebrow && <span style={{ fontSize: 32, color: "#c8f169" }}>{eyebrow}</span>}
          <span style={{ fontSize: title.length > 40 ? 60 : 76, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
            {title}
          </span>
          <span style={{ fontSize: 32, color: "rgba(255,255,255,0.75)" }}>{subtitle}</span>
        </div>
      </div>
    ),
    OG_SIZE
  );
}
