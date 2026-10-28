// Inramad faktaruta i löpande text, t.ex. ett räkneexempel eller en varning.
export default function Callout({
  title,
  tone = "mint",
  children,
}: {
  title: string;
  tone?: "mint" | "butter" | "clay";
  children: React.ReactNode;
}) {
  const bg = { mint: "bg-mint", butter: "bg-butter", clay: "bg-clay" }[tone];
  return (
    <aside className={`${bg} rounded-3xl px-6 py-5 my-8 [&>p:last-child]:mb-0`}>
      <p className="!text-ink font-bold !mb-1.5">{title}</p>
      {children}
    </aside>
  );
}
