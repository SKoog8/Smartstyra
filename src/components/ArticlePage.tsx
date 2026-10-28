import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import JsonLd from "./JsonLd";
import { SITE_NAME, SITE_URL } from "@/lib/site";

interface Props {
  title: string;
  subtitle: string;
  path: string;
  /** Sätts för guider: ger brödsmulor, lästid och artikelmärkning för sökmotorer. */
  guide?: { updated: string; minutes: number };
  children: React.ReactNode;
}

const formatDate = (d: string) =>
  new Date(d).toLocaleDateString("sv-SE", { dateStyle: "long", timeZone: "Europe/Stockholm" });

// Gemensam ram för guider och informationssidor.
export default function ArticlePage({ title, subtitle, path, guide, children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="max-w-3xl mx-auto w-full px-4 sm:px-6 pt-8 sm:pt-14 pb-4">
        {guide && (
          <nav aria-label="Brödsmulor" className="text-sm text-ink/60 mb-6">
            <Link href="/" className="hover:text-ink">Start</Link>
            <span className="mx-2">/</span>
            <Link href="/guider" className="hover:text-ink">Guider</Link>
          </nav>
        )}
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.05] text-ink">{title}</h1>
        <p className="mt-5 text-lg sm:text-xl text-ink/70 leading-relaxed">{subtitle}</p>
        {guide && (
          <p className="mt-6 text-sm text-ink/60">
            Uppdaterad {formatDate(guide.updated)} · {guide.minutes} min läsning
          </p>
        )}
      </div>
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 py-8">
        <article className="article">{children}</article>
      </main>
      {guide && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            description: subtitle,
            dateModified: guide.updated,
            inLanguage: "sv-SE",
            mainEntityOfPage: `${SITE_URL}${path}`,
            publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
          }}
        />
      )}
      <Footer />
    </div>
  );
}
