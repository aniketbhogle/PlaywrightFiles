import { test, expect } from '@playwright/test';

test('e2e automation of SauceDemo', async ({ page }) => {
await page.goto('https://www.saucedemo.com/');
await expect(page).toHaveTitle("Swag Labs");
await page.getByPlaceholder('Username').fill('standard_user');
await page.getByPlaceholder('Password').fill('secret_sauce');
await page.getByRole('button', { name: 'Login' }).click();
await expect(page.locator('.title')).toHaveText('Products');
await page.locator("#add-to-cart-sauce-labs-bike-light").click();
await page.locator(".shopping_cart_link").click();
await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Bike Light');
await page.locator("#checkout").click();
await page.locator("#first-name").fill('John');
await page.locator("#last-name").fill('Abraham');
await page.locator("#postal-code").fill('400002');
await page.locator("#continue").click();
await expect(page.locator('.summary_value_label').nth(0)).toHaveText('SauceCard #31337');
});