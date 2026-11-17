"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  AGES,
  CONTRACTS,
  EMPTY,
  EXTRAS,
  HEATING,
  SYSTEMS,
  buildPlan,
  fromQuery,
  toQuery,
  type Answers,
} from "@/lib/husplan";

function Choice({
  label,
  selected,
  onClick,
  multi,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
  multi?: boolean;
}) {
  return (
    <button
      type="button"
      role={multi ? "checkbox" : "radio"}
      aria-checked={selected}
      onClick={onClick}
      className={`rounded-2xl px-4 py-3 text-left font-semibold transition-colors ${
        selected ? "bg-forest text-white" : "bg-white text-ink hover:bg-mint"
      }`}
    >
      {multi && <span aria-hidden="true" className="mr-2">{selected ? "✓" : "+"}</span>}
      {label}
    </button>
  );
}

function Question({ n, title, hint, children, multi }: { n: number; title: string; hint?: string; children: React.ReactNode; multi?: boolean }) {
  return (
    <fieldset className="border-t border-sand-dark pt-6">
      <legend className="text-lg font-extrabold text-ink">
        <span className="text-leaf">{n}.</span> {title}
      </legend>
      {hint && <p className="mt-1 text-sm text-ink/60">{hint}</p>}
      <div role={multi ? "group" : "radiogroup"} aria-label={title} className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </fieldset>
  );
}

const THEME_STYLE: Record<string, string> = {
  Mät: "bg-sky",
  "Använd mindre": "bg-butter",
  "Flytta i tid": "bg-mint",
  "Styr automatiskt": "bg-clay",
};

export default function HusPlan() {
  const [a, setA] = useState<Answers>(EMPTY);
  const [loaded, setLoaded] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setA(fromQuery(window.location.search));
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    const q = toQuery(a);
    window.history.replaceState(null, "", q ? `?${q}` : window.location.pathname);
  }, [a, loaded]);

  const toggle = <K extends "extras" | "systems">(key: K, id: Answers[K][number]) =>
    setA((s) => {
      const list = s[key] as string[];
      return { ...s, [key]: list.includes(id) ? list.filter((x) => x !== id) : [...list, id] };
    });

  const ready = a.age !== "" && a.heating !== "" && a.contract !== "";
  const plan = useMemo(() => (ready ? buildPlan(a) : []), [a, ready]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {}
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1fr] items-start">
      <div className="space-y-8">
        <Question n={1} title="När är huset byggt?">
          {AGES.map((x) => (
            <Choice key={x.id} label={x.label} selected={a.age === x.id} onClick={() => setA({ ...a, age: x.id })} />
          ))}
        </Question>
        <Question n={2} title="Hur värms huset främst?">
          {HEATING.map((x) => (
            <Choice key={x.id} label={x.label} selected={a.heating === x.id} onClick={() => setA({ ...a, heating: x.id })} />
          ))}
        </Question>
        <Question n={3} title="Vad mer finns i huset?" hint="Välj allt som stämmer." multi>
          {EXTRAS.map((x) => (
            <Choice key={x.id} multi label={x.label} selected={a.extras.includes(x.id)} onClick={() => toggle("extras", x.id)} />
          ))}
        </Question>
        <Question n={4} title="Vilket elavtal har du?">
          {CONTRACTS.map((x) => (
            <Choice key={x.id} label={x.label} selected={a.contract === x.id} onClick={() => setA({ ...a, contract: x.id })} />
          ))}
        </Question>
        <Question n={5} title="Använder du redan något av det här?" hint="Hoppa över om inget stämmer." multi>
          {SYSTEMS.map((x) => (
            <Choice key={x.id} multi label={x.label} selected={a.systems.includes(x.id)} onClick={() => toggle("systems", x.id)} />
          ))}
        </Question>
      </div>

      <section aria-labelledby="planen" className="lg:sticky lg:top-6">
        <div className="rounded-3xl bg-forest p-6 sm:p-8 text-white">
          <h2 id="planen" className="text-2xl font-extrabold">
            Din plan
          </h2>
          {!ready ? (
            <p className="mt-3 text-white/75">
              Svara på fråga 1, 2 och 4 så tar vi fram en plan för ditt hus – de viktigaste åtgärderna först.
            </p>
          ) : (
            <>
              <p className="mt-3 text-white/75">
                {plan.length} steg för ditt hus, i den ordning vi tror ger mest. Börja uppifrån.
              </p>
              <button type="button" onClick={copy} className="btn-volt mt-5 py-2 text-[0.95rem]">
                {copied ? "Länken är kopierad" : "Kopiera länk till planen"}
              </button>
            </>
          )}
        </div>

        {ready && (
          <ol className="mt-4 space-y-4" aria-live="polite">
            {plan.map((s, i) => (
              <li key={s.id} className="rounded-3xl bg-white p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold text-ink ${THEME_STYLE[s.theme]}`}>{s.theme}</span>
                </div>
                <h3 className="mt-3 text-xl font-extrabold text-ink">{s.title}</h3>
                <p className="mt-2 text-ink/75 leading-relaxed">{s.why}</p>
                <ul className="mt-3 space-y-1.5 text-[0.95rem] text-ink/80">
                  {s.todo.map((x) => (
                    <li key={x} className="flex gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" aria-hidden="true" />
                      {x}
                    </li>
                  ))}
                </ul>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="inline-flex items-center gap-2 rounded-full bg-sand px-3 py-1.5 text-sm font-semibold text-ink hover:bg-mint">
                        <span className="text-xs font-medium text-ink/60">{l.kind}</span>
                        {l.label} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        )}
      </section>
    </div>
  );
}
