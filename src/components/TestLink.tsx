import Link from "next/link";
import { test } from "@/lib/tests";

// Hänvisning från en guide till ett test av samma produkt.
export default function TestLink({ slug }: { slug: string }) {
  const t = test(slug);
  return (
    <aside className="not-prose my-8 flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-white px-6 py-5">
      <p className="text-ink">
        <span className="mr-2 rounded-full bg-volt px-2.5 py-0.5 text-xs font-semibold">Testat hemma</span>
        Martin har använt {t.product} hemma {t.used}.
      </p>
      <Link href={`/tester/${t.slug}`} className="font-semibold text-leaf hover:text-leaf-dark">
        Läs testet →
      </Link>
    </aside>
  );
}
