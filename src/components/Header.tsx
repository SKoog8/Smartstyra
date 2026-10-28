import Link from "next/link";
import Logo from "./Logo";

const NAV = [
  ["/guider", "Guider"],
  ["/produkter", "Produkter"],
  ["/kalkylator", "Räkna på det"],
  ["/om", "Om oss"],
];

export default function Header() {
  return (
    <header className="bg-sand">
      {/* På mobil får menyn inte plats bredvid loggan, så den läggs på en egen rad under. */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 gap-3 flex flex-col sm:flex-row sm:items-center sm:justify-between sm:h-20 sm:py-0">
        <Link href="/" aria-label="Smartstyra – till startsidan" className="self-start sm:self-auto">
          <Logo />
        </Link>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.95rem] font-medium">
          {NAV.map(([href, label]) => (
            <Link key={href} href={href} className="text-ink/75 hover:text-ink transition-colors">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
