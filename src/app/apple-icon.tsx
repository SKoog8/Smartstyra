import { ImageResponse } from "next/og";

// Ikonen som visas när någon sparar sajten på hemskärmen i iPhone/iPad.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#18794a" }}>
        <svg width="180" height="180" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="8.5" fill="none" stroke="#fff" strokeWidth="3" />
          <path d="M16 16l5.2-5.2" stroke="#c8f169" strokeWidth="3.2" strokeLinecap="round" />
          <circle cx="16" cy="16" r="2" fill="#c8f169" />
        </svg>
      </div>
    ),
    size
  );
}
