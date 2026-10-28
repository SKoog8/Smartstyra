// Märket är en vridratt: en ring med en limegrön visare – att styra, inte bara spara.
export function LogoMark({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="9" fill="#18794a" />
      <circle cx="16" cy="16" r="8.5" fill="none" stroke="#fff" strokeWidth="3" />
      <path d="M16 16l5.2-5.2" stroke="#c8f169" strokeWidth="3.2" strokeLinecap="round" />
      <circle cx="16" cy="16" r="2" fill="#c8f169" />
    </svg>
  );
}

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <LogoMark />
      <span className={`text-[1.35rem] font-extrabold tracking-[-0.03em] ${dark ? "text-white" : "text-ink"}`}>
        smartstyra
      </span>
    </span>
  );
}
