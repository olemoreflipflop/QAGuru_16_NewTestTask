import { BasePage } from './base.page';
import { step } from 'allure-js-commons';

export class ProductPage extends BasePage {
  constructor(page) {
    super(page);
    this.manufacturerLink = this.page.locator('#manufacturer-bug').locator('a');
    this.postCommentButton = this.page.getByRole('button', {
      name: 'Post Comment',
    });
    this.productDescription = this.page.locator('.ec_details_description');
  }

  async clickOnManufacturer() {
    await step(`Клик на производителя товара`, async () => {
      await this.manufacturerLink.click();
      await this.page.waitForURL(/stored/);
    });
  }

  async clickOnPostComment() {
    await step(`Клик на Отправить комментарий`, async () => {
      await this.postCommentButton.click();
    });
  }

  async clickOnProductDescription() {
    await step(`Клик на описание товара`, async () => {
      await this.productDescription.click();
    });
  }
}
