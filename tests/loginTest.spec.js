// @ts-check
import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';

test('Login to OrangeHRM with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Validcredentials
  const username = 'Admin';
  const password = 'admin123';

  // Go to login page
  await loginPage.gotoLoginPage();

  // Perform login
  await loginPage.login(username, password);

  // Assertion
  await expect(page).toHaveURL(/dashboard/);
  await expect(page.locator(loginPage.dashboardHeader)).toHaveText('Dashboard');
});
