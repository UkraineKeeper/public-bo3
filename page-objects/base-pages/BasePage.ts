import { Page, expect, Locator } from '@playwright/test';
import { HeaderLocators } from './Header';
import { step } from '../../helpers/step';

export class BasePage {
    readonly page: Page;
    readonly testName?: string;
    headerLocators: HeaderLocators;
    protected selectedLanguage: Locator;

    constructor(page: Page, testName?: string) {
        this.page = page;
        this.testName = testName;
        this.headerLocators = new HeaderLocators(page);
        this.selectedLanguage = this.page.locator('.c-lang-switcher > ul > .o-list-bare__item.current')
    }

    @step()
    async getPageUrl() {
        const url = new URL(this.page.url());
        console.log(`getPageUrl: ${url}`);
        // return url;
    }

    @step()
    async getDisciplineAndLocale() {
        const url = new URL(this.page.url());
        const discipline = await this.headerLocators.selectedDiscipline.innerText();
        const locale = await this.headerLocators.selectedLanguage.innerText();
        return { discipline, locale };
    }

    @step()
    async assertDisciplineAndLocaleDidNotChange(initialDiscipline: string, initialLocale: string) {
        const { discipline, locale } = await this.getDisciplineAndLocale();
        const url = new URL(this.page.url());

        console.log(`assertDisciplineAndLocaleDidNotChange: ${url} || ${discipline} || ${locale} || TestName: ${this.testName}`);

        expect(discipline).toBe(initialDiscipline);
        expect(locale).toBe(initialLocale);
    }

    @step()
    async assertLocaleDidNotChange(initialLocale: string) {
        const { locale } = await this.getDisciplineAndLocale();
        const url = new URL(this.page.url());

        console.log(`assertLocaleDidNotChange: ${url} || ${locale} || TestName: ${this.testName}`);
        expect(locale).toBe(initialLocale);
    }
}
