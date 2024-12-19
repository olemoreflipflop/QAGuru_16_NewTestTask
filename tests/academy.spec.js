import { expect } from '@playwright/test';
import { test } from '../src/ui/fixtures/app.fixture';

test.describe('Academybugs', () => {
  test.use({ allureMeta: { epic: 'Academybugs', feature: 'Баги' } });

  test('Изменение количества товаров на странице', async ({ app }) => {
    const num = 10;
    await app.mainPage.setNumberOfResults(num);
    await expect(app.crushBugMessage).toContainText('You found a crash bug');
  });

  test('Переход на страницу производителя', async ({ app }) => {
    await app.mainPage.clickOnProduct('DNK Yellow Shoes');
    await app.productPage.clickOnManufacturer();
    await expect(app.pageNotExistsBug).toContainText(
      'Oops! That page can’t be found.',
    );
  });

  test('Изменение валюты', async ({ app }) => {
    await app.mainPage.clickOnProduct('DNK Yellow Shoes');
    await app.mainPage.changeCurrencyTo('EUR');
    await expect(app.crushBugMessage).toContainText('You found a crash bug');
  });

  test('Отправка комментария к товару', async ({ app }) => {
    await app.mainPage.clickOnProduct('DNK Yellow Shoes');
    await app.productPage.clickOnPostComment();
    await expect(app.crushBugMessage).toContainText('You found a crash bug');
  });

  test('Проверка описания товара', async ({ app }) => {
    await app.mainPage.clickOnProduct('DNK Yellow Shoes');
    await app.productPage.clickOnProductDescription();
    await expect(app.bugPopup).toContainText('What did you find out?');
  });
});
