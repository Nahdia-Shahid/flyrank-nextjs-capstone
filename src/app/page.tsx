import Link from "next/link";

export default function Home() {
  return (
    <section className="space-y-10">

      <div className="glass-card">

        <h1 className="hero-title">
          Build the Future with{" "}
          <span className="gradient-text">
            FlyRank AI Dashboard
          </span>
        </h1>

        <p className="hero-description">
          A modern Next.js 16 dashboard built with App Router, Tailwind CSS,
          glassmorphism UI, responsive layouts and production-ready architecture.
          This project demonstrates professional frontend engineering practices
          for the FlyRank AI Internship.
        </p>

        <Link href="/dashboard" className="button">
          Explore Dashboard →
        </Link>

      </div>

      <div className="grid">

        <div className="glass-card">
          <h2 className="text-2xl font-bold mb-4">
            ⚡ Next.js 16
          </h2>

          <p>
            Built using the latest App Router architecture with Server Components
            by default.
          </p>
        </div>

        <div className="glass-card">
          <h2 className="text-2xl font-bold mb-4">
            🎨 Modern UI
          </h2>

          <p>
            Glassmorphism, gradients, smooth animations and responsive layouts
            designed for a premium user experience.
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