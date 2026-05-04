import { expect, test } from '@playwright/test';

test.describe('Logowanie', () => {
  test('wyświetla ekran logowania dla niezalogowanego użytkownika', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { name: 'Witaj w Rodzinnym Plannerze' })).toBeVisible();

    await expect(page.getByRole('button', { name: 'Zaloguj się przez Google' })).toBeVisible();
  });

  test('kliknięcie przycisku logowania otwiera popup Google/Firebase', async ({ page }) => {
    await page.goto('/');

    const popupPromise = page.waitForEvent('popup');

    await page.getByRole('button', { name: 'Zaloguj się przez Google' }).click();

    const popup = await popupPromise;

    await expect(popup).toHaveURL(/accounts\.google\.com|firebaseapp\.com/);

    await popup.close();
  });
});
