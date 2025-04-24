import { Locator, Page, expect } from "@playwright/test";
import { CommentsSection } from "../base-pages/CommentsSection";
import { Header } from "../base-pages/Header";

export class AllForumsLocators {
    protected page: Page;
    protected createNewTopicBtn: Locator;
    inputTitle: Locator;
    inputTopicBody: Locator;
    protected postTopicBtn: Locator;
    protected errorMsg: Locator;
    protected selectedLanguage: Locator;
    protected topicTitles: Locator;
    protected filtersCategoriesSection: Locator;
    protected highlightedTopic: Locator;
    protected notHighlightedTopic: Locator;


    constructor(page: Page) {
        this.page = page;
        this.createNewTopicBtn = this.page.locator('.c-widget-forum-topic-create__inner > button.o-widget__header');
        this.inputTitle = this.page.locator('input[id="title"]');
        this.inputTopicBody = this.page.locator('textarea[id="content"]');
        this.postTopicBtn = this.page.locator('button.c-button--primary');
        this.errorMsg = this.page.locator('.o-field__error-msgs');
        this.selectedLanguage = this.page.locator('.c-lang-switcher > ul > .o-list-bare__item.current');
        this.topicTitles = this.page.locator('div.header:not(.o-label) > span[class="title"]');
        this.filtersCategoriesSection = this.page.locator('div.c-filters-forum-categories');
        this.highlightedTopic = this.page.locator('.c-widget-forum-list-item--highlighted')
        this.notHighlightedTopic = this.page.locator('a.c-widget-forum-list-item:not(.c-widget-forum-list-item--highlighted)')
    }
}

export class AllForums extends AllForumsLocators {
    protected commentsSection: CommentsSection;
    protected header: Header;

    constructor(page: Page) {
        super(page)
        this.commentsSection = new CommentsSection(page);
        this.header = new Header(page);
    }

    async checkPageLoaded() {
        await expect(this.createNewTopicBtn).toBeVisible();
    }

    async createNewTopic() {
        const date = new Date()
        const formatter = new Intl.DateTimeFormat('uk-UA');
        const dateFormatted = formatter.format(date);
        const languageText = await this.selectedLanguage.innerText()
        const generatedTopicTitle = `Current locale: ${languageText}. ${dateFormatted}`

        await this.createNewTopicBtn.click();
        await this.inputTitle.fill(generatedTopicTitle);
        await this.inputTopicBody.fill(await this.generateCommentText());
        await this.postTopicBtn.click();
    }

    async openFirstNonHighlightedTopic() {
        await expect(this.topicTitles.first()).toBeVisible();
        await this.notHighlightedTopic.first().click()
    }

    async sidebarForumCategoriesPresent() {
        await expect(this.filtersCategoriesSection).toBeVisible()
    }

    async verifyTopicCreated(): Promise<void> {
        const date = new Date()
        const formatter = new Intl.DateTimeFormat('uk-UA');
        const dateFormatted = formatter.format(date);
        const languageText = await this.selectedLanguage.innerText()
        const generatedTopicTitle = `Current locale: ${languageText}. ${dateFormatted}`

        await expect(this.topicTitles.first()).toBeVisible();
        const topicTitles = await this.topicTitles.allInnerTexts();
        const isTopicFound = topicTitles.includes(generatedTopicTitle);
        if (!isTopicFound) {
            throw new Error(`Topic with title "${generatedTopicTitle}" not found!`);
        }
    }

    async topicCreationWithMissingTitleExpectErrorMsg() {
        await this.createNewTopicBtn.click()
        await this.inputTitle.fill(`some text`)
        await this.inputTitle.fill(``)
        await this.inputTopicBody.fill(`some text`)
        await this.postTopicBtn.click()
        await expect(this.errorMsg).toBeVisible()
    }

    async generateCommentText() {
        const date = new Date()
        const now = date.toLocaleString()
        const languageText = await this.selectedLanguage.innerText()
        const finalText = `Current locale: ${languageText}. ${now}. ${this.commentsSection.getRandomUrl()}`
        return finalText;
    }
}