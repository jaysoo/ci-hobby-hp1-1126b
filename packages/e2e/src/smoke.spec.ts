import { test, expect } from '@playwright/test';
test('renders', async ({ page, browserName }) => {
  await page.setContent('<h1>hello ' + browserName + '</h1>');
  await expect(page.locator('h1')).toHaveText('hello ' + browserName);
});
