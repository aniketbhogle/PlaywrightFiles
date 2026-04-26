import { test, expect } from '@playwright/test';

test.skip('Automate InternetHerokuapp-A/B Testing', async ({ page }) => {
await page.goto('https://the-internet.herokuapp.com/');
await expect(page).toHaveTitle("The Internet");
await page.getByRole('link', { name: 'A/B Testing' }).click();
const header=await page.getByRole('heading');
await expect(header).toHaveText('A/B Test Variation 1');
});

test.skip('Automate InternetHerokuapp-Add&Remove Elements', async ({ page }) => {
await page.goto('https://the-internet.herokuapp.com/');
await expect(page).toHaveTitle("The Internet");
await page.getByRole('link', { name: 'Add/Remove Elements' }).click();
await page.getByRole('button', { name: 'Add Element' }).click();
await expect(page.getByRole('button', { name: 'Delete' })).toBeVisible();
await page.getByRole('button', { name: 'Delete' }).click();
await expect(page.getByRole('button', { name: 'Delete' })).toBeHidden();

});

test.skip('Automate InternetHerokuapp-Basic Auth Login', async ({ page }) => {
await page.goto('https://the-internet.herokuapp.com/');
await expect(page).toHaveTitle("The Internet");
await page.getByRole('link', { name: 'Basic Auth' }).click();
await page.getByPlaceholder('Username').fill('admin');
await page.getByPlaceholder('Password').fill('admin');
await page.getByRole('button', { name: 'Submit' }).click();
const header=await page.getByRole('heading');
await expect(header).toHaveText('Basic Auth');

});

test.skip('Automate InternetHerokuapp-Check boxes', async ({ page }) => {
await page.goto('https://the-internet.herokuapp.com/');
await expect(page).toHaveTitle("The Internet");
await page.getByRole('link', { name: 'Checkboxes' }).click();
await page.getByRole('checkbox', { name: 'checkbox 1' }).check();
await expect(page.getByRole('checkbox', { name: 'checkbox 1' })).toBeChecked();
await page.getByRole('checkbox', { name: 'checkbox 2' }).uncheck();
await expect(page.getByRole('checkbox', { name: 'checkbox 2' })).not.toBeChecked(); 

});

test.skip('Automate InternetHerokuapp-Drag & Drop', async ({ page }) => {
await page.goto('https://the-internet.herokuapp.com/');
await expect(page).toHaveTitle("The Internet");
await page.getByRole('link', { name: 'Drag and Drop' }).click();
await page.locator('#column-a').dragTo(page.locator('#column-b'));
const headerA=await page.locator('#column-a').getByRole('heading');
const headerB=await page.locator('#column-b').getByRole('heading');
await expect(headerA).toHaveText('B');
await expect(headerB).toHaveText('A');
});

test.skip('Automate InternetHerokuapp-DropDown', async ({ page }) => {
await page.goto('https://the-internet.herokuapp.com/');
await expect(page).toHaveTitle("The Internet");
await page.getByRole('link', { name: 'Dropdown' }).click();
await page.locator('#dropdown').selectOption('Option 1');
const selectedOption=await page.locator('#dropdown').inputValue();
console.log(selectedOption);
});

test.skip('Automate InternetHerokuapp-Multiple Windows', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://the-internet.herokuapp.com/');
  await expect(page).toHaveTitle('The Internet');
  await page.getByRole('link', { name: 'Multiple Windows' }).click();
  const newPagePromise = context.waitForEvent('page');
  await page.getByRole('link', { name: 'Click Here' }).click();
  const newPage = await newPagePromise;
  await expect(newPage).toHaveURL('https://the-internet.herokuapp.com/windows/new');
  await expect(newPage.getByRole('heading')).toHaveText('New Window');
  await context.close();
});

test.skip('Automate InternetHerokuapp-Alerts1', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await expect(page).toHaveTitle('The Internet');
  await page.getByRole('link', { name: 'JavaScript Alerts' }).click();
  page.on('dialog',dialog => dialog.dismiss());
  await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
});

test.skip('Automate InternetHerokuapp-Alerts2', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await expect(page).toHaveTitle('The Internet');
  await page.getByRole('link', { name: 'JavaScript Alerts' }).click();
  page.on('dialog',dialog => dialog.accept());
  await page.getByRole('button', { name: 'Click for JS Alert' }).click();
  await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
});

test.skip('Automate InternetHerokuapp-Alerts3', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await expect(page).toHaveTitle('The Internet');
  await page.getByRole('link', { name: 'Click for JS Prompt' }).click();
  page.on('dialog',dialog => dialog.accept('Playwright'));
  await page.getByRole('button', { name: 'Click for JS Alert' }).click();
  await expect(page.locator('#result')).toHaveText('You entered: Playwright');
});

test.skip('Automate InternetHerokuapp-SingleFileUpload', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await expect(page).toHaveTitle('The Internet');
  await page.getByRole('link', { name: 'File Upload' }).click();
  await page.locator('#file-upload').setInputFiles('tests/Assets/image9.png');
  await page.locator('#file-upload').setInputFiles([]);
  await page.locator('#file-upload').setInputFiles('tests/Assets/image8.png');
  await page.locator('input[type="submit"]').click();
  await expect(page.locator('#uploaded-files')).toHaveText('image8.png');
});


test.skip('Automate InternetHerokuapp-Dynamic Controls', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await expect(page).toHaveTitle('The Internet');
  await page.getByRole('link', { name: 'Dynamic Controls' }).click();
  await page.getByRole('button', { name: 'Remove' }).click();
  await expect(page.locator('input[type="checkbox"]')).toBeHidden();
  await expect(page.locator('input[type="text"]')).toBeDisabled();
  await page.getByRole('button', { name: 'Enable' }).click();
  await expect(page.locator('input[type="text"]')).toBeEnabled();

});

test.skip('Automate InternetHerokuapp-Hover', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/hovers');
  const profiles = page.locator('.figure');
  const count = await profiles.count();
  for (let i = 0; i < count; i++) {
    const profile = profiles.nth(i);
    await profile.hover();
    const caption = profile.locator('.figcaption');
    await expect(caption).toBeVisible();
    const text = await caption.textContent();
    console.log(text);
    expect(text).toContain('user');
  }
});

test.skip('Automate InternetHerokuapp-Right Click Alerts', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/context_menu');
  const box = page.locator('#hot-spot');
  await box.click({ button: 'right' });
  const dialog = await page.waitForEvent('dialog');
  expect(dialog.message()).toBe('You selected a context menu');
  await dialog.accept();
});