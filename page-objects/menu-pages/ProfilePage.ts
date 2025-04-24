import { Locator, Page, expect } from "@playwright/test";

class ProfileLocators {
    protected page: Page;
    protected commentsTab: Locator;

    constructor(page: Page) {
        this.page = page;
        this.commentsTab = this.page.locator('');
    }
}

export class ProfilePage extends ProfileLocators{

    async clickOnCommentsTab() {}

}