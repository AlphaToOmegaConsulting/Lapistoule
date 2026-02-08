import { test, expect } from '@playwright/test';

test.describe('Navigation Tests', () => {
    test('should have correct title on home page', async ({ page }) => {
        await page.goto('/');
        await expect(page).toHaveTitle(/Domaine de Lapistoule/);
    });

    test('should navigate to all main pages', async ({ page }) => {
        await page.goto('/');

        // Test navigation to Domaine page
        await page.click('a[href$="/domaine/"]:visible');
        await expect(page).toHaveURL(/\/domaine\/$/);

        // Test navigation to Vins page
        await page.goto('/');
        await page.click('a[href$="/vins/"]:visible');
        await expect(page).toHaveURL(/\/vins\/$/);

        // Test navigation to Visites page
        await page.goto('/');
        await page.click('a[href$="/visites/"]:visible');
        await expect(page).toHaveURL(/\/visites\/$/);

        // Test navigation to Contact page
        await page.goto('/');
        await page.click('a[href$="/contact/"]:visible');
        await expect(page).toHaveURL(/\/contact\/$/);
    });

    test('should show header on all pages', async ({ page }) => {
        const pages = ['/', '/domaine/', '/vins/', '/visites/', '/contact/'];

        for (const pagePath of pages) {
            await page.goto(pagePath);
            const header = page.locator('#main-header');
            await expect(header).toBeVisible();
        }
    });

    test('should show footer on all pages', async ({ page }) => {
        const pages = ['/', '/domaine/', '/vins/', '/visites/', '/contact/'];

        for (const pagePath of pages) {
            await page.goto(pagePath);
            const footer = page.locator('#footer');
            await expect(footer).toBeVisible();
        }
    });
});
