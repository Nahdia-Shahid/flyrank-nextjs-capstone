import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ValidatedContactForm from "@/components/forms/ValidatedContactForm";

describe("ValidatedContactForm", () => {
  it("shows accessible validation errors for invalid input", () => { render(<ValidatedContactForm />); fireEvent.click(screen.getByRole("button", { name: "Send Message" })); expect(screen.getAllByRole("alert")).toHaveLength(3); });
  it("accepts valid values and reports success", () => { render(<ValidatedContactForm />); fireEvent.change(screen.getByLabelText("Name"), { target: { value: "Nahdia" } }); fireEvent.change(screen.getByLabelText("Email"), { target: { value: "nahdia@example.com" } }); fireEvent.change(screen.getByLabelText("Message"), { target: { value: "This is a valid message." } }); fireEvent.click(screen.getByRole("button", { name: "Send Message" })); expect(screen.getByRole("status")).toHaveTextContent("Message validated successfully."); });
});
