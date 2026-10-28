import Link from "next/link";
import { REFERRALS } from "@/lib/referrals";

// Ruta med inbjudningslänk till Tibber i guider som handlar om Tibber.
export default function TibberInvite() {
  const { url, bonus } = REFERRALS.tibber;
  return (
    <aside className="not-prose my-10 rounded-3xl bg-forest p-6 sm:p-8 text-white">
      <p className="!mb-0 text-sm font-semibold !text-volt">Inbjudan till Tibber</p>
      <p className="!mb-0 mt-2 text-xl sm:text-2xl font-extrabold leading-tight !text-white">
        Tänker du byta? Använd vår inbjudningslänk och få {bonus}.
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
        <a href={url} target="_blank" rel="sponsored noopener" className="btn-volt !text-ink !no-underline">
          Teckna Tibber via inbjudan <span aria-hidden="true">→</span>
        </a>
        <p className="!mb-0 text-sm !text-white/70 max-w-sm">
          Smartstyra får samma bonus när du tecknar via länken. Det påverkar inte vad vi skriver om Tibber.{" "}
          <Link href="/om#finansiering" className="!text-white/90 !font-normal !decoration-white/50 hover:!text-white">
            Läs mer
          </Link>
        </p>
      </div>
    </aside>
  );
}
