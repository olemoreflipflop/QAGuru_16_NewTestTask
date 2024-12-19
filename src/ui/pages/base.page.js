export class BasePage {
  constructor(page) {
    this.page = page;
    this.crushBugMessage = this.page
      .locator('.academy-bug-overlay')
      .or(this.page.locator('.academy-bug-info-overlay'));
    this.bugPopup = this.page.locator('#bug-popup');
    this.pageNotExistsBug = this.page.locator('#sq-page');
  }

  async open(url) {
    await this.page.goto(url);
  }
}
