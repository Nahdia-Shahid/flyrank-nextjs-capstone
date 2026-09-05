"use client";

import { useEffect, useState } from "react";

function StaticHero({ onLoadShader }: { onLoadShader: () => void }) {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-violet-950"
      onPointerMove={onLoadShader}
    >
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

            <div className="mt-8">
              <a
                href="/dashboard"
                className="inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              >
                Explore Dashboard
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ShaderHeroLoader() {
  const [loadShader, setLoadShader] = useState(false);

  const handleLoadShader = () => {
    setLoadShader(true);
  };

  if (!loadShader) {
    return <StaticHero onLoadShader={handleLoadShader} />;
  }

  return <DeferredShaderHero />;
}

function DeferredShaderHero() {
  const [ShaderHero, setShaderHero] = useState<
    typeof import("./ShaderHero").default | null
  >(null);

  useEffect(() => {
    import("./ShaderHero").then((module) => {
      setShaderHero(() => module.default);
    });
  }, []);

  if (!ShaderHero) {
    return <StaticHero onLoadShader={() => undefined} />;
  }

  return <ShaderHero />;
}