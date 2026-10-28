"use client";

import { useState, FormEvent } from "react";

type Status = { state: "idle" | "sending" | "sent" } | { state: "error"; message: string };

export default function NewsletterForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/nyhetsbrev", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error ?? "Det gick inte att anmäla dig.");
      form.reset();
      setStatus({ state: "sent" });
    } catch (err) {
      setStatus({ state: "error", message: err instanceof Error ? err.message : "Det gick inte att anmäla dig." });
    }
  };

  if (status.state === "sent") {
    return <p className="rounded-2xl bg-white/60 px-5 py-4 font-semibold text-ink">Tack! Du får nästa nyhetsbrev när det kommer.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="flex flex-col sm:flex-row gap-2">
        <label htmlFor="newsletter-email" className="sr-only">
          Din e-post
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          maxLength={200}
          autoComplete="email"
          placeholder="din@epost.se"
          className="flex-1 rounded-full bg-white px-5 py-3 text-ink outline-none ring-1 ring-ink/10 focus:ring-2 focus:ring-leaf"
        />
        {/* Fälla för botar: dold för människor, så ett ifyllt värde betyder spam. */}
        <div aria-hidden="true" className="absolute -left-[9999px]">
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>
        <button type="submit" disabled={status.state === "sending"} className="btn-leaf disabled:opacity-60">
          {status.state === "sending" ? "Skickar..." : "Prenumerera"}
        </button>
      </div>
      {status.state === "error" && <p className="mt-2 text-sm text-red-800">{status.message}</p>}
      <p className="mt-3 text-sm text-ink/60">
        Ungefär ett mejl i månaden. Avsluta när du vill. Se{" "}
        <a href="/integritet" className="underline">integritetspolicyn</a>.
      </p>
    </form>
  );
}
