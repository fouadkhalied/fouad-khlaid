import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate to the about page when clicking the About link', async ({ page }) => {
    await page.goto('/');

    // The header is sticky, let's click the About link
    await page.click('text=About');

    // Wait for the URL to update to #about (smooth scrolling might take a bit)
    await expect(page).toHaveURL(/.*#about/);
    
    // Verify the About section is visible
    const aboutSection = page.locator('#about');
    await expect(aboutSection).toBeVisible();
  });

  test('should navigate to all major sections', async ({ page }) => {
    await page.goto('/');

    const sections = ['#home', '#about', '#projects', '#skills', '#experience', '#contact'];

    for (const section of sections) {
      const linkName = section.replace('#', '');
      const linkText = linkName.charAt(0).toUpperCase() + linkName.slice(1);
      
      await page.click(`header nav >> text=${linkText}`);
      await expect(page).toHaveURL(new RegExp(`.*${section}`));
      await expect(page.locator(section)).toBeVisible();
    }
  });
});
