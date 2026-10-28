import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Mörk skogsgrön för text och mörka ytor, en klargrön för länkar och knappar
        // och en limegrön accent som bara används mot mörk bakgrund.
        ink: "#0d1f16",
        forest: { DEFAULT: "#143d2b", light: "#1f5139" },
        leaf: { DEFAULT: "#18794a", dark: "#12603a" },
        volt: { DEFAULT: "#c8f169", dark: "#b3e04a" },
        sand: { DEFAULT: "#f5f2ea", dark: "#e9e4d8" },
        // Pastellytor för kort och sektioner
        mint: "#dcefe0",
        sky: "#dbe9f3",
        butter: "#f5ebc6",
        clay: "#f2ddd2",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
