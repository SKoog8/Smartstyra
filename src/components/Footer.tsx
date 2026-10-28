import Link from "next/link";
import Logo from "./Logo";
import { amazonTag } from "@/lib/products";

const COLUMNS: [string, [string, string][]][] = [
  [
    "Läs",
    [
      ["/guider", "Alla guider"],
      ["/produkter", "Produkter vi rekommenderar"],
      ["/kalkylator", "Räkna på din besparing"],
    ],
  ],
  [
    "Smartstyra",
    [
      ["/om", "Om oss"],
      ["/kontakt", "Kontakt"],
      ["/integritet", "Integritetspolicy"],
    ],
  ],
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-10">
        <div className="grid gap-10 sm:grid-cols-[2fr_1fr_1fr]">
          <div>
            <Logo dark />
            <p className="mt-4 max-w-sm leading-relaxed">
              Raka guider om hur du använder mindre el i villan – och använder den när den är billig.
            </p>
          </div>
          {COLUMNS.map(([heading, links]) => (
            <div key={heading}>
              <h2 className="text-white font-semibold mb-3">{heading}</h2>
              <ul className="space-y-2">
                {links.map(([href, label]) => (
                  <li key={href}>
                    <Link href={href} className="hover:text-white transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-sm text-white/50 leading-relaxed">
          © {new Date().getFullYear()} Smartstyra. Länkarna till butiker är affiliatelänkar – köper du något via dem kan
          vi få en liten ersättning, utan att det kostar dig något extra.
          {amazonTag && " Som Amazon-partner tjänar Smartstyra pengar på kvalificerande köp."}{" "}
          <Link href="/om#finansiering" className="underline hover:text-white">
            Så finansieras sajten
          </Link>
          .
        </div>
      </div>
    </footer>
  );
}
