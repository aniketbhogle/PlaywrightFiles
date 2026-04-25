import { test, expect } from '@playwright/test';

test('Sample Automation', async ({ page }) => {
await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
await page.locator("//input[@value='radio3']").check();
await expect(page.locator("//input[@value='radio3']")).toBeChecked();
await page.locator("#autocomplete").pressSequentially('tes',{delay:150});
await page.locator('div').filter({ hasText: 'United States (USA)' }).click();
await page.locator('#dropdown-class-example').selectOption('Option2');
await page.locator('#checkBoxOption3').check();
await expect(page.locator('#checkBoxOption3')).toBeChecked();
await expect(page.getByPlaceholder("Hide/Show Example")).toBeVisible();
await page.locator("#hide-textbox").click();
await expect(page.getByPlaceholder("Hide/Show Example")).toBeHidden();
});