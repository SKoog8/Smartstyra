import Link from "next/link";
import { TONE, type GuideMeta } from "@/lib/guides";

export default function GuideCard({ guide }: { guide: GuideMeta }) {
  return (
    <Link
      href={`/guider/${guide.slug}`}
      className={`${TONE[guide.tone]} group flex flex-col rounded-3xl p-6 sm:p-7 min-h-[16rem] transition-transform hover:-translate-y-1`}
    >
      <span className="text-sm font-semibold text-ink/60">{guide.theme}</span>
      <h3 className="mt-3 text-2xl font-extrabold leading-tight text-ink">{guide.title}</h3>
      <p className="mt-3 text-ink/70 leading-relaxed line-clamp-3">{guide.description}</p>
      <span className="mt-auto pt-5 text-sm font-semibold text-ink">
        Läs guiden <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
        <span className="ml-3 font-normal text-ink/60">{guide.minutes} min</span>
      </span>
    </Link>
  );
}
