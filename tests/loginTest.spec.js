// @ts-check
const { test, expect } = require('@playwright/test');

test('Login to OrangeHRM with valid credentials', async ({ page }) => {
  // Step 1: Go to login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Step 2: Wait for username field and enter username
  await page.fill('input[name="username"]', 'Admin');

  // Step 3: Enter password
  await page.fill('input[name="password"]', 'admin123');

  // Step 4: Click Login button
  await page.click('button[type="submit"]');

  // Step 5: Assert that dashboard loaded
  await expect(page).toHaveURL(/dashboard/);
  await expect(page.locator('h6')).toHaveText('Dashboard');
});
