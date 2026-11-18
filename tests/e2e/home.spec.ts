import { test, expect } from "@playwright/test";

test("home page loads and exposes primary navigation", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /Building the Future/ })).toBeVisible();
  await expect(page.getByRole("navigation", { name: "Primary navigation" })).toBeVisible();
});

test("health route returns a degraded or healthy status", async ({ request }) => {
  const response = await request.get("/api/health");
  expect([200, 503]).toContain(response.status());
});
