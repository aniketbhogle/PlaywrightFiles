# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: OrangeHRM.spec.js >> OrangeHRM End-to-End Employee Search
- Location: tests\OrangeHRM.spec.js:3:5

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('input[name="username"]')

```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | 
  3  | test('OrangeHRM End-to-End Employee Search', async ({ page }) => {
  4  |   
  5  |   // 1. STEP: Navigate to the OrangeHRM login page
  6  |   await page.goto('https://orangehrmlive.com');
  7  |   
  8  |   // Verify that the login page loaded successfully by checking the title
  9  |   await expect(page).toHaveTitle(/OrangeHRM/);
  10 | 
  11 |   // 2. STEP: Log in using the standard demo credentials
  12 |   // We target the semantic input names for higher test reliability
> 13 |   await page.locator('input[name="username"]').fill('Admin');
     |                                                ^ Error: locator.fill: Target page, context or browser has been closed
  14 |   await page.locator('input[name="password"]').fill('admin123');
  15 |   
  16 |   // Click the submit button to log in
  17 |   await page.locator('button[type="submit"]').click();
  18 | 
  19 |   // 3. STEP: Verify successful login by checking the dashboard header
  20 |   const dashboardHeader = page.locator('h6', { hasText: 'Dashboard' });
  21 |   await expect(dashboardHeader).toBeVisible();
  22 | 
  23 |   // 4. STEP: Navigate to the "PIM" (Employee Management) module
  24 |   await page.locator('span', { hasText: 'PIM' }).click();
  25 |   
  26 |   // Verify that the PIM module is loaded
  27 |   await expect(page.locator('h6', { hasText: 'PIM' })).toBeVisible();
  28 | 
  29 |   // 5. STEP: Search for an employee by name
  30 |   // Locating the input field by its placeholder text
  31 |   const employeeNameInput = page.locator('input[placeholder="Type for hints..."]').first();
  32 |   await employeeNameInput.fill('Linda');
  33 |   
  34 |   // Click the search button to filter results
  35 |   await page.locator('button[type="submit"]').click();
  36 | 
  37 |   // 6. STEP: Verify that search results appear in the table
  38 |   // OrangeHRM takes a second to load dynamic table results
  39 |   const tableResult = page.locator('.oxd-table-card').first();
  40 |   await expect(tableResult).toContainText('Linda');
  41 | 
  42 |   // 7. STEP: Log out of the application
  43 |   // Click the user profile dropdown on the top right corner
  44 |   await page.locator('.oxd-userdropdown-name').click();
  45 |   
  46 |   // Click the 'Logout' link in the dropdown menu
  47 |   await page.locator('text=Logout').click();
  48 | 
  49 |   // 8. STEP: Verify that the user is redirected back to the login screen
  50 |   await expect(page).toHaveURL(/.*auth\/login/);
  51 | });
```