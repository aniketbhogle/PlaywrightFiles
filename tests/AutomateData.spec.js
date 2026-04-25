import {test,expect} from '@playwright/test';
import data from '../tests/Z_testData.json';

test('Read Data-Login', async ({ page }) => {
await page.goto('https://teststore.automationtesting.co.uk/index.php');
await page.locator('span').filter({ hasText: 'Sign in' }).click();
await page.locator('#field-email').fill(data.login);
await page.locator('#field-password').fill(data.password);
await page.getByRole('button', { name: 'Sign in' }).click();

});