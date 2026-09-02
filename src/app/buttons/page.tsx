"use client";

import { useState } from "react";
import StatefulSendButton from "@/components/buttons/StatefulSendButton";

type DemoMode = "random" | "success" | "error";

export default function ButtonsPage() {
  const [mode, setMode] = useState<DemoMode>("random");

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-2xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-400">
          FE-AA1 · Motion & State
        </p>

        <h1 className="text-4xl font-bold">
          Buttons with a Brain
        </h1>

        <p className="mt-4 text-slate-300">
          An accessible Send Message button with idle, hover/focus,
          loading, success, error, and disabled states.
        </p>

        <section className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8">
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setMode("success")}
              className="rounded-lg border border-white/10 px-4 py-2 text-sm transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              Force Success
            </button>

            <button
              type="button"
              onClick={() => setMode("error")}
              className="rounded-lg border border-white/10 px-4 py-2 text-sm transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              Force Error
            </button>

            <button
              type="button"
              onClick={() => setMode("random")}
              className="rounded-lg border border-white/10 px-4 py-2 text-sm transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              Random (20% Error)
            </button>
          </div>

          <div className="mt-10 flex justify-center">
            <StatefulSendButton mode={mode} />
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-semibold">Motion decisions</h2>

          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>• State transitions use 200ms ease-out.</li>
            <li>• Hover/tap feedback uses transform only.</li>
            <li>• Loading uses an 800ms rotation loop.</li>
            <li>• Error uses a short transform-based shake.</li>
            <li>• prefers-reduced-motion removes animation but keeps feedback.</li>
            <li>• Button stays disabled during the async operation.</li>
          </ul>
        </section>

        <section className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-semibold">Disabled state</h2>

          <button
            type="button"
            disabled
            className="mt-4 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white opacity-50"
          >
            Disabled Button
          </button>
        </section>
      </div>
    </main>
  );
}