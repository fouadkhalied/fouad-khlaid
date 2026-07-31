import { test, expect } from '@playwright/test';

test.describe('Responsiveness and UX', () => {
  test('should layout correctly on mobile viewport', async ({ page }) => {
    // Set a mobile viewport size
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    
    // Check if the hamburger menu is visible for mobile (if implemented)
    // Note: Assuming a standard responsive navbar, the standard links might be hidden or inside a menu
    // We will just verify that the main container fits within the viewport width
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(bodyWidth).toBeLessThanOrEqual(375); // No horizontal scrolling

    // Check if the intro section is visible and stacked correctly
    const introSection = page.locator('#home');
    await expect(introSection).toBeVisible();
  });

  test('should have hover effects on main buttons (UX)', async ({ page }) => {
    await page.goto('/');

    // Test the "Contact me here" button hover UX
    const contactBtn = page.locator('text=Contact me here').first();
    
    // Check initial classes to ensure it has transition and hover utilities
    const btnClasses = await contactBtn.getAttribute('class');
    // Ensure it includes hover scale or background change (Framer motion or Tailwind)
    expect(btnClasses).toMatch(/hover:|transition|group-hover:/);
  });
});
