// Enkla linjeikoner för produktkategorierna, ritade för sajten.
const PATHS: Record<string, React.ReactNode> = {
  "smarta-uttag": (
    <>
      <rect x="8" y="8" width="32" height="32" rx="9" />
      <circle cx="24" cy="24" r="9" />
      <path d="M20.5 21.5v5M27.5 21.5v5" />
    </>
  ),
  elementtermostater: (
    <>
      <path d="M6 38V22M42 38V22M6 30h36" />
      <rect x="11" y="18" width="5" height="20" rx="2.5" />
      <rect x="21.5" y="18" width="5" height="20" rx="2.5" />
      <rect x="32" y="18" width="5" height="20" rx="2.5" />
      <rect x="20" y="5" width="8" height="9" rx="2" />
      <path d="M24 14v4" />
    </>
  ),
  varmepumpsstyrning: (
    <>
      <rect x="5" y="10" width="38" height="18" rx="5" />
      <path d="M10 22h28" />
      <path d="M16 33c0 2-2 2-2 4M24 33c0 2-2 2-2 4M32 33c0 2-2 2-2 4" />
    </>
  ),
  energimatare: (
    <>
      <path d="M8 32a16 16 0 1 1 32 0" />
      <path d="M24 32l7-9" />
      <circle cx="24" cy="32" r="2.5" />
      <path d="M8 40h32" />
    </>
  ),
  golvtermostater: (
    <>
      <rect x="15" y="5" width="18" height="22" rx="4" />
      <circle cx="24" cy="16" r="4.5" />
      <path d="M6 41c3-3 6 3 9 0s6 3 9 0 6 3 9 0 6 3 9 0M6 34h36" />
    </>
  ),
  "smarta-relaer": (
    <>
      <rect x="14" y="6" width="20" height="36" rx="3" />
      <path d="M6 24h8M34 24h8" />
      <rect x="19" y="13" width="10" height="7" rx="1.5" />
      <path d="M22 32l2-4 2 4" />
    </>
  ),
};

export default function CategoryIcon({ slug, className = "w-10 h-10" }: { slug: string; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[slug]}
    </svg>
  );
}
