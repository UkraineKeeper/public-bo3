import { Locator, Page, expect } from "@playwright/test";
import { Header, HeaderLocators } from "./Header";
import { urls } from "../urls";
import { BasePage } from "./BasePage";
import { step } from "../../helpers/step";

class CommentsLocators {
    protected page: Page;
    protected commentInput: Locator;
    protected sendComment: Locator;
    protected replyBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.commentInput = this.page.locator('div.o-input');
        this.sendComment = this.page.locator('.submit-wrapper')
        this.replyBtn = this.page.locator('.reply-form-switch')
    }
}

export class CommentsSection extends CommentsLocators{
    protected header: Header;
    protected headerLocators: HeaderLocators;
    protected basePage: BasePage;

    constructor(page: Page) {
        super(page)
        this.header = new Header(page);
        this.headerLocators = new HeaderLocators(page);
        this.basePage = new BasePage(page);
    }

    @step()
    async writeComment(testInfo?: any) {
        const now = new Date();
        const formattedDate = now.toLocaleDateString('uk-UA'); 
        const formattedTime = now.toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' });
        const currentLocale = await this.header.returnLanguageLocale();
        
        let triggeredEnv = '..';

        if (process.env.TEST_ENV === 'prod') {
            triggeredEnv = '... prod';
        } else if (process.env.TEST_ENV === 'stage') {
            triggeredEnv = '... stage'; 
        }

        const testName = testInfo ? testInfo.title : '..';

        const commentText = `${formattedDate} ... ${formattedTime} ... Current locale: ${currentLocale} ${triggeredEnv} ${testName}`;

        await this.commentInput.fill(commentText);
        await this.sendComment.click();
        await this.basePage.getPageUrl();

        // Guest Logo === guestTests.spec
        // API Logo === Postman API
        // Postman Logo === Postman Local Json
        // User 13 or 15 === userDev.spec
    }    

    @step()
    async writeRandomUrlComment() {
        await this.commentInput.fill(`${this.getRandomUrl()}`);
        await this.sendComment.click()
        await this.basePage.getPageUrl();
    }

    @step()
    async writeReply() {
        const date = new Date()
        const now = date.toLocaleString()
        await this.replyBtn.first().click()
        await this.commentInput.fill(`${now}`);
        await this.sendComment.click()
    }

    @step()
    async storeTranslateComment() {
        const date = new Date()
        const now = date.toLocaleString('uk-UA', { hour12: false });
        const currentLocale = await this.header.returnLanguageLocale();
        const menuText = await this.header.returnMenuTranslate();
        const currentDiscipline = await this.headerLocators.selectedDiscipline.innerText()
        const storedComment = `${now} ... Discipline: ${currentDiscipline}. Changed locale: ${currentLocale}. Menu pages: ${menuText}`
        console.log(`${storedComment}`)
        return storedComment;
    }

    @step()
    async sentTranslateComment() {
        await this.commentInput.fill(await this.storeTranslateComment());
        await this.sendComment.click()
    }

    getRandomUrl(): string {
        const categories = Object.keys(urls) as Array<keyof typeof urls>;
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        const subcategories = Object.keys(urls[randomCategory]) as Array<keyof typeof urls[typeof randomCategory]>;
        const randomSubcategory = subcategories[Math.floor(Math.random() * subcategories.length)];
        const keys = Object.keys(urls[randomCategory][randomSubcategory]) as string[];
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        const randomValue = urls[randomCategory][randomSubcategory][randomKey];
        const finalComment = `Check out our interesting content: https://bo3.gg${randomValue}`
        console.log(`Random resource: ${randomValue}`);
        return finalComment;
    }
}