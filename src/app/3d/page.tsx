"use client";

import { useState } from "react";
import LeadIntelligenceCanvas from "@/components/3d/LeadIntelligenceCanvas";

export default function ThreeDPage() {
  const [score, setScore] = useState(80);

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-widest text-cyan-400">
            FlyRank 3D Experience
          </p>

          <h1 className="mt-2 text-4xl font-bold text-white">
            Lead Intelligence
          </h1>

          <p className="mt-3 max-w-2xl text-white/60">
            Explore a 3D lead intelligence orb and change its appearance
            based on lead score.
          </p>
        </div>

        <LeadIntelligenceCanvas score={score} />

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="mr-2 text-sm text-white/60">Lead Score:</span>

          {[25, 50, 80].map((value) => (
            <button
              key={value}
              onClick={() => setScore(value)}
              className="rounded-xl border border-white/10 px-5 py-2 text-sm text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}