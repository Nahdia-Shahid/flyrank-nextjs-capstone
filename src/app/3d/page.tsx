import LeadIntelligenceExperience from "@/components/3d/LeadIntelligenceExperience";

export default function ThreeDPage() {
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

        <LeadIntelligenceExperience />
      </div>
    </main>
  );
}