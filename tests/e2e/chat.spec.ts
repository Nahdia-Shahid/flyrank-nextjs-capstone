import { test, expect } from "@playwright/test";

test("primary chat flow submits without calling the real AI API", async ({ page }) => {
  await page.route("**/api/chat", async (route) => {
    await route.fulfill({ status: 200, contentType: "text/event-stream", body: "" });
  });
  await page.goto("/chat");
  const input = page.getByPlaceholder("Ask FlyRank AI...");
  await input.fill("How can FlyRank automate lead qualification?");
  await page.getByRole("button", { name: "Send" }).click();
  await expect(input).toHaveValue("");
});
