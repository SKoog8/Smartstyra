// Märket är en vridratt i en signalorange ruta – att styra, inte bara spara.
export function LogoMark({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="2" fill="#ff5a1f" />
      <circle cx="16" cy="16" r="8.5" fill="none" stroke="#fff" strokeWidth="3" />
      <path d="M16 16l5.2-5.2" stroke="#16213a" strokeWidth="3.2" strokeLinecap="round" />
      <circle cx="16" cy="16" r="2" fill="#16213a" />
    </svg>
  );
}

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark />
      <span className={`font-mono text-[1.3rem] font-semibold tracking-[-0.04em] ${dark ? "text-white" : "text-ink"}`}>
        smartstyra
      </span>
    </span>
  );
}
