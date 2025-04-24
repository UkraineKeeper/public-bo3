import { expect, Locator, Page } from "@playwright/test";
import { AllForumsLocators, AllForums } from "../menu-pages/AllForums";

class ForumPageLocators {
    protected page: Page;
    protected kebabMenuBtn: Locator;
    protected editTopicBtn: Locator;
    protected deleteTopicBtn: Locator;
    protected deleteConfirmationBtn: Locator;
    protected deleteCloseBtn: Locator;
    protected submitEditing: Locator;
    protected categoryLabels: Locator;
    protected topicTitle: Locator;
    protected manageTopicDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.kebabMenuBtn = this.page.locator('.o-icon--kebab-menu');
        this.editTopicBtn = this.page.locator('button.o-link.edit')
        this.deleteTopicBtn = this.page.locator('button.o-link.delete')
        this.deleteConfirmationBtn = this.page.locator('button.c-button--primary')
        this.deleteCloseBtn = this.page.locator('button.o-link--icon-circle.close')
        this.submitEditing = this.page.locator('div.actions > button.c-button--primary')
        this.categoryLabels = this.page.locator('.list > label')
        this.topicTitle = this.page.locator('div.c-widget-forum-post h1')
        this.manageTopicDropdown = this.page.locator('.c-dropdown__wrapper') // .c-dropdown__menu.o-list-bare
    }
}

export class ForumPage extends ForumPageLocators{
    protected allForumsLocators: AllForumsLocators;
    protected allForums: AllForums;

    constructor(page: Page) {
        super(page)
        this.allForumsLocators = new AllForumsLocators(page);
        this.allForums = new AllForums(page);
    }

    async checkPageLoaded() {
        // await expect(this.)
    }

    async clickOnBreadcrumbs() {}

    async deleteTopic() {
        await this.kebabMenuBtn.click()
        await this.deleteTopicBtn.click()
        await this.deleteConfirmationBtn.click()
    }

    async editTopic() {
        const date = new Date()
        const text = `Updated topic. ${date}`
        await this.kebabMenuBtn.click()
        await this.editTopicBtn.click()
        await this.categoryLabels.nth(1).click()
        await this.allForumsLocators.inputTitle.fill(`${text}`)
        await this.allForumsLocators.inputTopicBody.fill(`${text}`)
        await this.submitEditing.click()
        await expect(this.allForumsLocators.inputTitle).not.toBeVisible()
        await expect(this.topicTitle).toHaveText(`${text}`)
    }

    async deleteTopicIfPossible() {
        await this.kebabMenuBtn.click()
        await expect(this.manageTopicDropdown).toBeVisible()
        const deleteBtn = await this.deleteTopicBtn.count()
        if(deleteBtn === 1) {
            await this.deleteTopicBtn.click()
            await this.deleteConfirmationBtn.click()
            await expect(this.kebabMenuBtn).not.toBeVisible()
        }
    }
}
