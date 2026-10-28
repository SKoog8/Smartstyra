// Rubrik överst på översiktssidor som /guider och /produkter.
export default function PageIntro({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 pt-8 sm:pt-14 pb-10">
      {eyebrow && <p className="text-sm font-semibold text-leaf mb-3">{eyebrow}</p>}
      <h1 className="text-4xl sm:text-6xl font-extrabold leading-[1.02] text-ink max-w-3xl">{title}</h1>
      {children && <div className="mt-5 text-lg sm:text-xl text-ink/70 leading-relaxed max-w-2xl">{children}</div>}
    </div>
  );
}
