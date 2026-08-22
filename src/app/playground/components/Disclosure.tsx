"use client";

import { useState } from "react";

export default function Disclosure() {
  const [isOpen, setIsOpen] = useState(false);

  const contentId = "flyrank-disclosure-content";

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
      <h2 className="text-2xl font-bold">
        Disclosure
      </h2>

      <p className="mt-2 text-slate-400">
        Test keyboard interaction, ARIA state, and accessible
        show/hide behavior.
      </p>

      <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70">
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={() => setIsOpen((current) => !current)}
          className="flex w-full items-center justify-between px-5 py-4 text-left font-semibold transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-inset"
        >
          <span>What is FlyRank AI?</span>

          <span
            aria-hidden="true"
            className="text-xl"
          >
            {isOpen ? "⌄" : "›"}
          </span>
        </button>

        {isOpen && (
          <div
            id={contentId}
            className="border-t border-white/10 px-5 py-4 text-slate-300"
          >
            FlyRank AI is a frontend engineering project focused on
            building modern, accessible, and AI-powered web
            experiences.
          </div>
        )}
      </div>
    </section>
  );
}