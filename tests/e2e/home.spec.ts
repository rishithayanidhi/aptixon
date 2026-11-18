import { test, expect } from "@playwright/test";

test("home page loads and exposes the iframe", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("iframe")).toBeVisible();
});

test("health route returns a degraded or healthy status", async ({ request }) => {
  const response = await request.get("/api/health");
  expect([200, 503]).toContain(response.status());
});
