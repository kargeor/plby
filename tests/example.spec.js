import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 11'],
});

test('test', async ({ page }) => {

  // Go to http://localhost:3000/
  await page.goto('http://localhost:3000/');

  // Click text=PreySelect >> button
  await page.locator('text=PreySelect >> button').click();

  // Click text=Jeanne BalibarSelect >> button
  await page.locator('text=Jeanne BalibarSelect >> button').click();

  // Click text=Seth GreenSelect >> button
  await page.locator('text=Seth GreenSelect >> button').click();

  // Click text=Submit Ballot
  await page.locator('text=Submit Ballot').click();

  // Click text=SUCCESS
  await page.locator('text=SUCCESS').click();

});
