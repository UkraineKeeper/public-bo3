import { Locator, Page, expect } from "@playwright/test";

export class AllNewsLocators {
    protected page: Page;
    protected newsItem: Locator;
    protected tagsItem: Locator;
    protected categories: Locator;


    constructor(page: Page) {
        this.page = page;
        this.newsItem = this.page.locator('.c-widget-news-item');
        this.tagsItem = this.page.locator('.c-tags__item-inner')
        this.categories = this.page.locator('.o-input-checkbox__label')
    }
}

export class AllNews extends AllNewsLocators {
    
    async checkPageLoaded() {
        await expect(this.tagsItem.first()).toBeVisible()
    }
    
    async test() {
        await this.newsItem.first().click()
    }

}