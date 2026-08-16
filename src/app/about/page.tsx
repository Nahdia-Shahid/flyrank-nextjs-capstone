export default function AboutPage() {
    return (
      <main className="space-y-10">
        <section className="glass-card">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            About FlyRank AI
          </p>
  
          <h1 className="hero-title text-5xl">
            Building intelligent
            <span className="gradient-text"> digital experiences.</span>
          </h1>
  
          <p className="hero-description">
            FlyRank AI is a modern frontend engineering capstone focused on
            building polished, responsive and production-ready interfaces with
            Next.js, TypeScript and Tailwind CSS.
          </p>
        </section>
  
        <section className="grid gap-6 md:grid-cols-3">
          <div className="glass-card">
            <div className="mb-4 text-4xl">⚡</div>
  
            <h2 className="mb-3 text-xl font-bold">
              Modern Architecture
            </h2>
  
            <p className="text-sm leading-6 text-slate-300">
              Built with the Next.js App Router and server-first architecture
              for a scalable frontend foundation.
            </p>
          </div>
  
          <div className="glass-card">
            <div className="mb-4 text-4xl">🎨</div>
  
            <h2 className="mb-3 text-xl font-bold">
              Premium Interface
            </h2>
  
            <p className="text-sm leading-6 text-slate-300">
              Glassmorphism, gradients, motion and responsive layouts create a
              polished experience across different screen sizes.
            </p>
          </div>
  
          <div className="glass-card">
            <div className="mb-4 text-4xl">🚀</div>
  
            <h2 className="mb-3 text-xl font-bold">
              Production Ready
            </h2>
  
            <p className="text-sm leading-6 text-slate-300">
              Structured routing, reusable components and deployment-friendly
              configuration keep the project ready for production.
            </p>
          </div>
        </section>
  
        <section className="glass-card">
          <h2 className="mb-6 text-2xl font-bold">
            Technology Stack
          </h2>
  
          <div className="flex flex-wrap gap-3">
            {[
              "Next.js 16",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Framer Motion",
              "App Router",
              "Vercel",
            ].map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/10"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>
      </main>
    );
  }