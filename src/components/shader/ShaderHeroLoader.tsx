"use client";

import dynamic from "next/dynamic";

const ShaderHero = dynamic(() => import("./ShaderHero"), {
  ssr: false,
  loading: () => (
    <section className="relative min-h-screen overflow-hidden bg-slate-950">
      <div className="flex min-h-screen items-center px-6 py-20">
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              FlyRank AI
            </p>

            <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
              Build the Future with{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                AI
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              Intelligent lead qualification and automation powered by a
              personalized WebGL experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  ),
});

export default function ShaderHeroLoader() {
  return <ShaderHero />;
}