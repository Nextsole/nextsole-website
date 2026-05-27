"use client";

import { useState } from "react";

export default function WaitlistButton({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  function close() {
    setOpen(false);
    setError("");
    if (done) { setDone(false); setEmail(""); }
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setDone(true);
      } else {
        const json = await res.json().catch(() => ({}));
        setError(json.error ?? "Something went wrong, please try again.");
      }
    } catch {
      setError("Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className="w-full max-w-md rounded-2xl border border-neutral-700 bg-neutral-900 p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {done ? (
              <div className="text-center">
                <p className="text-4xl">🎉</p>
                <h3 className="mt-4 text-xl font-black">You&apos;re on the list!</h3>
                <p className="mt-2 text-neutral-400 leading-relaxed">
                  We&apos;ll reach out as soon as Pro opens up. Thanks for your early support — it means a lot.
                </p>
                <button
                  onClick={close}
                  className="mt-6 w-full rounded-xl bg-lime-400 px-4 py-3 font-bold text-black hover:bg-lime-300 transition"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-block rounded-full bg-lime-400/10 px-3 py-1 text-xs font-bold text-lime-400">
                      Early access
                    </span>
                    <h3 className="mt-3 text-2xl font-black">Join the Pro waitlist</h3>
                  </div>
                  <button
                    onClick={close}
                    className="mt-1 shrink-0 text-neutral-500 hover:text-white transition"
                    aria-label="Close"
                  >
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                  Nextsole is currently in beta and we&apos;re growing carefully. Pro is coming — leave your email and you&apos;ll be first in line when it opens up.
                </p>
                <form onSubmit={submit} className="mt-6 space-y-3">
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-white placeholder-neutral-500 outline-none focus:border-lime-400"
                  />
                  {error && <p className="text-sm text-red-400">{error}</p>}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl bg-lime-400 px-4 py-3 font-bold text-black hover:bg-lime-300 transition disabled:opacity-50"
                  >
                    {loading ? "Joining…" : "Join the waitlist"}
                  </button>
                </form>
                <p className="mt-4 text-center text-xs text-neutral-600">
                  No spam. Just a heads-up when Pro is ready.
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
