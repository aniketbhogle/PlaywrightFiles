import { test, expect } from '@playwright/test';

test('ENV File Automate', async ({ page }) => {
await page.goto('/');
await page.locator('.ico-login').click();
await page.locator('#Email').fill(process.env.Login || 'aniketog19@gmail.com');
await page.locator('#Password').fill(process.env.Password || 'Sanika@0310');
await page.locator('input[value="Log in"]').click();
});