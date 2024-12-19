import { test as base } from '@playwright/test';
import { App } from '../pages/app.page';
import { epic, feature } from 'allure-js-commons';

export const test = base.extend({
  allureMeta: [{ epic: '', feature: '' }, { option: true }],
  app: async ({ page, allureMeta }, use) => {
    if (allureMeta.epic) {
      epic(allureMeta.epic);
    }
    if (allureMeta.feature) {
      feature(allureMeta.feature);
    }
    const app = new App(page);
    await app.open();
    await use(app);
    await app.page.close();
  },
});
