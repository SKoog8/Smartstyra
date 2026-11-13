import Link from "next/link";
import { TONE } from "@/lib/guides";
import type { TestMeta } from "@/lib/tests";

export default function TestCard({ test }: { test: TestMeta }) {
  return (
    <Link
      href={`/tester/${test.slug}`}
      className={`${TONE[test.tone]} group flex flex-col rounded-3xl p-6 sm:p-7 min-h-[14rem] transition-transform hover:-translate-y-1`}
    >
      <span className="self-start rounded-full bg-white/70 px-2.5 py-0.5 text-xs font-semibold text-ink">Testat hemma</span>
      <h3 className="mt-3 text-2xl font-extrabold leading-tight text-ink">{test.product}</h3>
      <p className="mt-2 text-ink/70 leading-relaxed line-clamp-3">{test.description}</p>
      <span className="mt-auto pt-5 text-sm font-semibold text-ink">
        Läs testet <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}
