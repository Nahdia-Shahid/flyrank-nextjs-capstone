import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import LeadScoreResult from "@/components/chat/LeadScoreResult";

describe("LeadScoreResult", () => {
  it("renders score and qualification details", () => { render(<LeadScoreResult score={95} category="High Priority" companySize="enterprise" monthlyBudget={7000} goal="Automate support" />); expect(screen.getByText("95")).toBeInTheDocument(); expect(screen.getByText("High Priority")).toBeInTheDocument(); expect(screen.getByText("Company: enterprise")).toBeInTheDocument(); });
  it("renders the lead goal", () => { render(<LeadScoreResult score={60} category="Good Fit" companySize="small" monthlyBudget={1000} goal="Improve lead qualification" />); expect(screen.getByText("Goal: Improve lead qualification")).toBeInTheDocument(); });
});
