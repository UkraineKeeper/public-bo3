import { Locator, Page, expect } from "@playwright/test";
import { step } from "../../helpers/step";

class LoginLocators {
    private page: Page;
    protected signInBtn: Locator;
    protected continueWithEmailBtn: Locator;
    protected emailInput: Locator;
    protected passwordInput: Locator;
    protected signInBtnInModal: Locator;
    public signedInAvatar: Locator;
    protected loginErrorMsg: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signInBtn = this.page.locator('div.c-main-header__actions-configs > button');
        this.continueWithEmailBtn = this.page.locator('button.c-modal-auth-form-socials__button--email');
        this.emailInput = this.page.locator('input[id="email"]');
        this.passwordInput = this.page.locator('input[id="password"]');
        this.signInBtnInModal = this.page.locator('.o-form__submit-panel > [type="submit"]');
        this.signedInAvatar = this.page.locator('div.toggler > div.c-avatar--cover')
        this.loginErrorMsg = this.page.locator('.o-field__error-msgs')
    }
}

export class LoginPage extends LoginLocators{

    @step()
    async loginAsUser(email: string, password: string) {
        await this.signInBtn.click();
        await this.continueWithEmailBtn.click();
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.signInBtnInModal.click();
    }

    @step()
    async userLoggedTrue() {
        await expect(this.signedInAvatar).toBeVisible();
    }

    @step()
    async loginWithWrongCredentials() {
        await this.signInBtn.click()
        await this.continueWithEmailBtn.click();
        await this.emailInput.fill('tba@gmail.com')
        await this.passwordInput.fill('123123132')
        await this.signInBtnInModal.click();
        await expect(this.loginErrorMsg).toBeVisible();
        console.log('Last test for "guestTests.spec.ts" completed ______________')
    }
}