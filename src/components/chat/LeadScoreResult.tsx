type LeadScoreResultProps = {
  score: number;
  category: string;
  companySize: string;
  monthlyBudget: number;
  goal: string;
};

export default function LeadScoreResult({
  score,
  category,
  companySize,
  monthlyBudget,
  goal,
}: LeadScoreResultProps) {
  return (
    <div className="mt-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
        Lead Score
      </p>
      <div className="mt-2 flex items-end gap-3">
        <span className="text-4xl font-black text-emerald-400">{score}</span>
        <span className="pb-1 text-sm text-slate-300">/ 100</span>
      </div>
      <p className="mt-2 font-semibold text-white">{category}</p>
      <div className="mt-3 space-y-1 text-sm text-slate-300">
        <p>Company: {companySize}</p>
        <p>Monthly budget: ${monthlyBudget}</p>
        <p>Goal: {goal}</p>
      </div>
    </div>
  );
}
