import { test, expect } from '@playwright/test';

test.describe('Portfolio Content', () => {
  test('should render the intro section properly', async ({ page }) => {
    await page.goto('/');
    
    // Check if the hero image/heading is visible
    const introSection = page.locator('#home');
    await expect(introSection).toBeVisible();

    // Check for contact button
    await expect(page.locator('text=Contact me here')).toBeVisible();
  });

  test('should render the newly added projects and experiences', async ({ page }) => {
    await page.goto('/');
    
    // Mabrouk and Learning Rockets should be in the projects section
    const projectsSection = page.locator('#projects');
    await expect(projectsSection).toBeVisible();
    
    await expect(page.locator('text=Mabrouk - Core Platform & Dashboard')).toBeVisible();
    await expect(page.locator('text=Learning Rockets')).toBeVisible();

    // Tamiyouz updates
    await expect(page.locator('text=Connected and stabilized Meta integrations (Messenger & Instagram)')).toBeVisible();

    // Check for Dragify updates in experience
    const experienceSection = page.locator('#experience');
    await expect(experienceSection).toBeVisible();
    await expect(page.locator('text=Built Dragify\'s core integration nodes')).toBeVisible();
  });
});
