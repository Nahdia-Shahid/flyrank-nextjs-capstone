import { tool } from "ai";
import { z } from "zod";

export const scoreLead = tool({
  description:
    "Score a potential FlyRank AI customer lead based on company size, monthly budget, and primary goal.",

  inputSchema: z.object({
    companySize: z
      .enum(["startup", "small", "medium", "enterprise"])
      .describe("The approximate company size"),

    monthlyBudget: z
      .number()
      .min(0)
      .describe("Expected monthly AI budget in USD"),

    goal: z
      .string()
      .min(3)
      .describe("The main business goal for using FlyRank AI"),
  }),

  execute: async ({ companySize, monthlyBudget, goal }) => {
    let score = 50;

    if (companySize === "enterprise") score += 20;
    else if (companySize === "medium") score += 15;
    else if (companySize === "small") score += 10;

    if (monthlyBudget >= 5000) score += 20;
    else if (monthlyBudget >= 2000) score += 15;
    else if (monthlyBudget >= 500) score += 10;

    if (goal.length >= 20) score += 10;

    score = Math.min(score, 100);

    const category =
      score >= 80 ? "High Priority" : score >= 60 ? "Good Fit" : "Needs Review";

    return {
      score,
      category,
      companySize,
      monthlyBudget,
      goal,
    };
  },
});