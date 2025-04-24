import { Locator, Page, expect } from "@playwright/test";
import { Header } from "./Header";

class ModalsLocators {
    page: Page;
    protected spoilerModeConfirmationButton: Locator;
    protected spoilerModeCloseBtn: Locator;
    protected cookiesConfirmButton: Locator;
    protected languageModal: Locator;
    protected selectCurrentLanguageModal: Locator;
    protected closeModalBtn: Locator;
    protected selectedLanguage: Locator;
    protected anotherCurrentLanguageCss: Locator;
    protected anotherCurrentLanguageCssUgly: Locator;

    constructor(page: Page) {
        this.page = page;
        this.spoilerModeConfirmationButton = this.page.locator('div.o-modal__footer > button.c-button.c-button--full-width');
        this.spoilerModeCloseBtn = this.page.locator('button.o-link--icon-circle.close');
        // this.cookiesConfirmButton = this.page.locator('div.vfm__content.vfm--outline-none.vfm--prevent-auto > * > * > *').last()
        this.cookiesConfirmButton = this.page.locator('div.vfm__content.vfm--outline-none.vfm--prevent-auto > * > * > button:not(.c-button--secondary)');
        this.languageModal = this.page.locator('.vfm__content.vfm--outline-none.vfm--prevent-auto');
        this.closeModalBtn = this.page.locator('button.o-link--icon-circle.close');
        this.selectCurrentLanguageModal = this.page.locator('//div[contains(@class, "c-modal-lanquage-confirmation")]//div[@class="o-modal__footer"]//button[contains(@class, "c-button c-button--secondary")]');
        this.selectedLanguage = this.page.locator('.c-lang-switcher > ul > .o-list-bare__item.current');
        this.anotherCurrentLanguageCss = this.page.locator('div.o-modal__footer > button.c-button--secondary');
        this.anotherCurrentLanguageCssUgly = this.page.locator('div.c-modal-lanquage-confirmation div div button.c-button--secondary');
    }
}

export class Modals extends ModalsLocators{
    protected header: Header;

    constructor(page: Page) {
        super(page)
        this.header = new Header(page);
    }

    async handleStarterModals() {
        await this.submitCookiesBtn();
        await this.spoilerOnBtnClick();
        await this.selectCurrentLanguage();
    }

    async spoilerOnBtnClick() {
        // await this.page.screenshot({ path: 'helpers/screenshots/ModalsSpoiler1.png' });
        await expect(this.spoilerModeConfirmationButton).toBeVisible( {timeout: 20_000} )
        await this.spoilerModeConfirmationButton.click({force: true});
    }

    async submitCookiesBtn() {
        // await this.page.screenshot({ path: 'helpers/screenshots/ModalsCookies1.png' });
        await expect(this.cookiesConfirmButton).toBeVisible( {timeout: 20_000} )
        await this.cookiesConfirmButton.click({force: true});
        console.log(await this.page.url())
        await expect(this.cookiesConfirmButton).not.toBeVisible();
    }

    async selectCurrentLanguage() {
        const currentLocale = await this.header.returnLanguageLocale()
    
        if (currentLocale !== "ENG") {
            // await this.page.screenshot({ path: 'helpers/screenshots/currentLocale2.png' });
            if (await this.anotherCurrentLanguageCssUgly.isVisible({timeout: 10_000})) {
                // await expect(this.anotherCurrentLanguageCssUgly).toBeVisible()
                await this.anotherCurrentLanguageCssUgly.click();
            }
        }

        await expect(this.selectCurrentLanguageModal).not.toBeVisible();
        await expect(this.anotherCurrentLanguageCssUgly).not.toBeVisible();
    }

    async handleIterativeSpoilerModal() {
        const count = await this.spoilerModeConfirmationButton.count()

        if (count === 1) {
            await this.spoilerModeConfirmationButton.click();
            await expect(this.spoilerModeConfirmationButton).toHaveCount(0);
        }
    }
    
}