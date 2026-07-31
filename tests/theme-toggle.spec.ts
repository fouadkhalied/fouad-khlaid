import { test, expect } from '@playwright/test';

test.describe('Theme Toggle', () => {
  test('should toggle dark and light mode', async ({ page }) => {
    await page.goto('/');

    // Initially, it should be light mode by default, wait for the toggle button
    const themeSwitch = page.locator('button.bg-white.w-\\[3rem\\]'); // using the class from theme-switch
    // or we can select it by its fixed position or Aria label if it had one.
    // Let's use a more robust locator since it might be the only fixed bottom-right button
    const themeButton = page.locator('.fixed.bottom-5.right-5');
    
    // Store the initial class
    const initialClass = await page.locator('html').getAttribute('class') || '';
    const hasDarkInitially = initialClass.includes('dark');
    
    // Click the theme button
    await themeButton.click();
    
    // The class should change
    if (hasDarkInitially) {
      await expect(page.locator('html')).not.toHaveClass(/.*dark.*/);
    } else {
      await expect(page.locator('html')).toHaveClass(/.*dark.*/);
    }
    
    // Click it again
    await themeButton.click();
    
    // The class should revert
    if (hasDarkInitially) {
      await expect(page.locator('html')).toHaveClass(/.*dark.*/);
    } else {
      await expect(page.locator('html')).not.toHaveClass(/.*dark.*/);
    }
  });
});
