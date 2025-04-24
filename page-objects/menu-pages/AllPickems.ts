import { Locator, Page } from "@playwright/test";

class AllPageLocators {
    private page: Page;
    protected firstLivePickem: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstLivePickem = this.page.locator('//div[contains(@class, "c-table-pickems__group live")]//a[contains(@class, "c-table-cell-pickem")]').first();
    }
}

export class AllPickems extends AllPageLocators{

    async clickOnFirstLivePickem() {
        await this.firstLivePickem.click();
    }
}