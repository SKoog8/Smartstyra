import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/site";

// Typsnittet laddas från sajten själv i stället för från Google, så att det inte blockerar sidan.
const sans = Schibsted_Grotesk({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

const description =
  "Guider och smarta prylar som hjälper dig att sänka elförbrukningen i villan – och att flytta den till timmarna då elen är billig.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Smartstyra – Sänk elräkningen i villan",
    template: `%s | ${SITE_NAME}`,
  },
  description,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "sv_SE",
    title: "Smartstyra – Sänk elräkningen i villan",
    description,
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className={sans.variable}>
      <body className="min-h-screen bg-sand">
        {children}
        {/* Besöksstatistik utan kakor. Slås på under Analytics i Vercel; utan det skickas ingenting. */}
        <Analytics />
      </body>
    </html>
  );
}
