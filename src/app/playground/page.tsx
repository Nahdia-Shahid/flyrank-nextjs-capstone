"use client";

import { useState } from "react";

import Modal from "./components/Modal";
import Tabs from "./components/Tabs";
import Disclosure from "./components/Disclosure";

export default function PlaygroundPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">

        {/* Page Header */}
        <section className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            FE-05 Accessibility Playground
          </p>

          <h1 className="text-5xl font-black">
            Accessible Components
          </h1>

          <p className="mt-4 max-w-2xl text-slate-400">
            A keyboard-first component playground built from scratch
            using React and TypeScript.
          </p>
        </section>

        {/* Modal Section */}
        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">
              Modal
            </h2>

            <p className="mt-2 text-slate-400">
              Test keyboard navigation, focus trapping, Escape handling,
              and focus restoration.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold shadow-lg transition hover:-translate-y-0.5 hover:shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Open Accessible Modal
          </button>
        </section>

        {/* Modal Component */}
        <Modal
          open={isModalOpen}
          title="Welcome to the playground"
          onClose={() => setIsModalOpen(false)}
        >
          <p>
            This modal demonstrates keyboard accessibility and focus
            management.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-xl bg-cyan-500 px-4 py-2 font-semibold text-slate-950 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            >
              Primary Action
            </button>

            <button
              type="button"
              className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 font-semibold hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              Secondary Action
            </button>
          </div>
        </Modal>

        {/* Tabs Section */}
        <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">
              Tabs
            </h2>

            <p className="mt-2 text-slate-400">
              Test arrow-key navigation, Home, End, focus management,
              and ARIA tab semantics.
            </p>
          </div>

          <Tabs />
        </section>

        {/* Disclosure Section */}
        <section className="mt-8">
          <Disclosure />
        </section>

      </div>
    </main>
  );
}