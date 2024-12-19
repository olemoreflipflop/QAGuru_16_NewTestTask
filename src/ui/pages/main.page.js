import { BasePage } from './base.page';
import { step } from 'allure-js-commons';

export class MainPage extends BasePage {
  constructor(page) {
    super(page);
    this.numberOfResultsButton = (num) =>
      this.page.getByRole('link', { name: num });
    this.currencySelector = this.page.locator('#ec_currency_conversion');
    this.productCard = (productName) =>
      this.page
        .locator('#ec_product_image_4481370')
        .filter({ has: this.productNameLink(productName) });
    this.productNameLink = (productName) =>
      this.page.getByRole('link', { name: 'DNK Yellow Shoes' });
  }

  async setNumberOfResults(num) {
    await step('Клик на количество товаров на странице', async () => {
      await this.numberOfResultsButton(num).click();
    });
  }

  async changeCurrencyTo(currency = 'EUR') {
    await step(`Выбрать валюту ${currency}`, async () => {
      await this.currencySelector.click();
      await this.currencySelector.selectOption(currency);
    });
  }

  async clickOnProduct(productName) {
    await step(`Клик на карточку товара ${productName}`, async () => {
      await this.productNameLink(productName).click();
      await this.page.waitForURL(/\/store\/*/);
    });
  }
}
