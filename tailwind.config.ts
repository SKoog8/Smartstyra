import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Teknisk palett: marinblått för text och mörka ytor, signalorange för länkar och accenter
        // och bärnstensgult för siffror mot mörk bakgrund.
        ink: "#16213a",
        forest: { DEFAULT: "#16213a", light: "#24304d" },
        leaf: { DEFAULT: "#c2410c", dark: "#9a3412" },
        signal: "#ff5a1f",
        volt: { DEFAULT: "#ffb21f", dark: "#f59e0b" },
        sand: { DEFAULT: "#f4f3ef", dark: "#dedcd4" },
        // Ljusa toner för kort och sektioner
        mint: "#e8ecf4",
        sky: "#e4ebf6",
        butter: "#fbf1dc",
        clay: "#fbe8df",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      // Raka hörn i stället för mjuka – som en ritning eller en elcentral.
      borderRadius: {
        lg: "3px",
        xl: "3px",
        "2xl": "4px",
        "3xl": "4px",
      },
    },
  },
  plugins: [],
};

export default config;
