import { ProductPage, MainPage } from './index';
import { BasePage } from './base.page.js';

export class App extends BasePage {
  constructor(page) {
    super(page);
    this.productPage = new ProductPage(page);
    this.mainPage = new MainPage(page);
  }

  async open() {
    await this.page.goto('/find-bugs/');
  }
}
