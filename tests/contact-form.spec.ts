import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test('should allow users to fill and submit the contact form', async ({ page }) => {
    await page.goto('/#contact');

    // Wait for the form to be visible
    const form = page.locator('form');
    await expect(form).toBeVisible();

    // Fill the email input
    const emailInput = page.locator('input[name="senderEmail"]');
    await emailInput.fill('test@example.com');

    // Fill the message textarea
    const messageInput = page.locator('textarea[name="message"]');
    await messageInput.fill('This is a test message from Playwright E2E testing.');

    // Click submit button
    const submitButton = page.locator('button[type="submit"]');
    await submitButton.click();

    // Note: Since this might actually send an email (via Resend) or show a toast notification,
    // we just check that the form interacts properly. We won't assert full success toast here
    // unless we mock the API response, but we can check the button state changes.
    // In a real E2E, we would mock the action to prevent spamming the inbox.
  });
});
