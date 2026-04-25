import {test,expect} from '@playwright/test';

test("Auto Suggestions", async ({ page }) => {
await page.goto("https://www.automationtesting.co.uk/predictive.html");
await page.getByPlaceholder("Country").pressSequentially("ind", { delay: 150 });
await page.getByText('India', { exact: true }).click();
const value = await page.getByPlaceholder("Country").inputValue();
expect(value).toEqual("India");
});

test("Parent & Child Tab", async ({ browser }) => {
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://www.automationtesting.co.uk/browserTabs.html");
const newPagePromise = context.waitForEvent('page');
await page.screenshot({ path: 'full-page.png', fullPage: true });
await page.locator('//input[@value="Open Tab"]').click();
const newPage = await newPagePromise;
await expect(newPage).toHaveTitle("Google");
await context.close();
});