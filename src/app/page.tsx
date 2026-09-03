import Link from "next/link";
import ShaderHero from "@/components/shader/ShaderHero";

export default function Home() {
  return (
    <section className="space-y-10">
      {/* Fullscreen custom GLSL shader hero */}
      <ShaderHero />

      {/* Existing project information */}
      <div className="glass-card">
        <h2 className="text-2xl font-bold mb-4">
          FlyRank AI Dashboard
        </h2>

        <p>
          A modern Next.js 16 dashboard built with App Router, Tailwind CSS,
          glassmorphism UI, responsive layouts and production-ready
          architecture.
        </p>

        <div className="mt-6">
          <Link href="/dashboard" className="button">
            Explore Dashboard →
          </Link>
        </div>
      </div>

      {/* Project highlights */}
      <div className="grid">
        <div className="glass-card">
          <h2 className="text-2xl font-bold mb-4">
            ⚡ Next.js 16
          </h2>

          <p>
            Built using the latest App Router architecture with Server
            Components by default.
          </p>
        </div>

        <div className="glass-card">
          <h2 className="text-2xl font-bold mb-4">
            🎨 Interactive Shader
          </h2>

          <p>
            A custom GLSL fullscreen hero using time, resolution and mouse
            interaction for a personalized WebGL experience.
          </p>
        </div>

        <div className="glass-card">
          <h2 className="text-2xl font-bold mb-4">
            🚀 Deployment Ready
          </h2>

          <p>
            Structured for Vercel deployment with scalable routing and clean
            project architecture.
          </p>
        </div>
      </div>
    </section>
  );
}