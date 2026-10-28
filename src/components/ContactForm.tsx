"use client";

import { useState, FormEvent } from "react";

type Status = { state: "idle" | "sending" | "sent" } | { state: "error"; message: string };

const FIELD =
  "w-full rounded-xl border border-sand-dark bg-white px-3.5 py-2.5 text-ink outline-none focus:border-leaf focus:ring-1 focus:ring-leaf";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error ?? "Meddelandet kunde inte skickas.");
      form.reset();
      setStatus({ state: "sent" });
    } catch (err) {
      setStatus({ state: "error", message: err instanceof Error ? err.message : "Meddelandet kunde inte skickas." });
    }
  };

  if (status.state === "sent") {
    return (
      <div className="not-prose bg-mint rounded-3xl px-6 py-5 text-ink font-semibold my-6">
        Tack! Ditt meddelande är skickat. Vi svarar till e-postadressen du angav.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="not-prose space-y-4 my-6 bg-white rounded-3xl p-6">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-ink mb-1">
          Namn <span className="text-ink/50 font-normal">(valfritt)</span>
        </label>
        <input id="contact-name" name="name" type="text" maxLength={100} autoComplete="name" className={FIELD} />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-ink mb-1">
          Din e-post
        </label>
        <input id="contact-email" name="email" type="email" required maxLength={200} autoComplete="email" className={FIELD} />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-ink mb-1">
          Meddelande
        </label>
        <textarea id="contact-message" name="message" required minLength={10} maxLength={5000} rows={6} className={FIELD} />
      </div>
      {/* Fälla för botar: dold för människor, så ett ifyllt värde betyder spam. */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label htmlFor="contact-website">Lämna tomt</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      {status.state === "error" && <p className="text-sm text-red-800">{status.message}</p>}
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={status.state === "sending"}
          className="btn-leaf disabled:opacity-60"
        >
          {status.state === "sending" ? "Skickar..." : "Skicka meddelande"}
        </button>
        <span className="text-xs text-ink/60">
          Vi använder bara dina uppgifter för att svara. Se <a href="/integritet" className="underline">integritetspolicyn</a>.
        </span>
      </div>
    </form>
  );
}
