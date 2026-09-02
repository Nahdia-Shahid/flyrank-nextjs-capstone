import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import Chat from "@/components/chat/Chat";

const sendMessage = vi.fn();
const stop = vi.fn();
const regenerate = vi.fn();
let chatState: any;

vi.mock("@ai-sdk/react", () => ({ useChat: () => ({ ...chatState, sendMessage, stop, regenerate }) }));

beforeEach(() => {
  chatState = { messages: [], status: "ready", error: undefined };
  vi.clearAllMocks();
});

describe("Chat", () => {
  it("renders the empty state", () => { render(<Chat />); expect(screen.getByText("Start a conversation")).toBeInTheDocument(); });
  it("renders text message parts", () => { chatState.messages = [{ id: "1", role: "assistant", parts: [{ type: "text", text: "Hello from AI" }] }]; render(<Chat />); expect(screen.getByText("Hello from AI")).toBeInTheDocument(); });
  it("renders a tool input-streaming part", () => { chatState.messages = [{ id: "1", role: "assistant", parts: [{ type: "tool-scoreLead", state: "input-streaming" }] }]; render(<Chat />); expect(screen.getByText("Preparing lead score...")).toBeInTheDocument(); });
  it("renders a tool input-available part", () => { chatState.messages = [{ id: "1", role: "assistant", parts: [{ type: "tool-scoreLead", state: "input-available" }] }]; render(<Chat />); expect(screen.getByText("Scoring lead")).toBeInTheDocument(); });
  it("renders a completed tool result", () => { chatState.messages = [{ id: "1", role: "assistant", parts: [{ type: "tool-scoreLead", state: "output-available", output: { score: 95, category: "High Priority", companySize: "medium", monthlyBudget: 5000, goal: "Automate customer support" } }] }]; render(<Chat />); expect(screen.getByText("Lead Score")).toBeInTheDocument(); expect(screen.getByText("95")).toBeInTheDocument(); });
  it("renders a tool error part", () => { chatState.messages = [{ id: "1", role: "assistant", parts: [{ type: "tool-scoreLead", state: "output-error" }] }]; render(<Chat />); expect(screen.getByText("Lead scoring failed")).toBeInTheDocument(); });
  it("shows pending thinking state", () => { chatState.status = "submitted"; render(<Chat />); expect(screen.getByText("Thinking...")).toBeInTheDocument(); });
  it("shows streaming state and allows stopping", () => { chatState.status = "streaming"; render(<Chat />); fireEvent.click(screen.getByRole("button", { name: "Stop" })); expect(stop).toHaveBeenCalledTimes(1); expect(screen.getByPlaceholderText("Ask FlyRank AI...")).toBeDisabled(); });
  it("shows an error state and retries", () => { chatState.error = new Error("API failed"); render(<Chat />); fireEvent.click(screen.getByRole("button", { name: "Retry" })); expect(regenerate).toHaveBeenCalledTimes(1); });
  it("submits a non-empty message", () => { render(<Chat />); fireEvent.change(screen.getByPlaceholderText("Ask FlyRank AI..."), { target: { value: "Hello" } }); fireEvent.click(screen.getByRole("button", { name: "Send" })); expect(sendMessage).toHaveBeenCalledWith({ text: "Hello" }); });
});
