// @ts-check
import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage.js';
import LeavePage from '../pages/LeavePage.js';
  

test('Login and apply leave in OrangeHRM', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const leavePage = new LeavePage(page);
  const username = 'Admin';
  const password = 'admin123';
  const leaveType = 'CAN - Personal';
  const startDate = '2025-08-20';
  const endDate = '2025-08-22';
  const comments = 'Applying leave for personal reason.';

  await loginPage.gotoLoginPage();
  await loginPage.login(username, password);

  await leavePage.navigateToApplyLeave();
  await leavePage.applyLeave(leaveType, startDate, endDate, comments);

  await expect(page.locator('.oxd-text--toast-message')).toContainText('Successfully');
});
