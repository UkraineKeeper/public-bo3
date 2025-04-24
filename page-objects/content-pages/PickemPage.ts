import { expect, Locator, Page, BrowserContext } from "@playwright/test";

class PickemPageLocators {
    protected page: Page;
    protected context?: BrowserContext;
    protected randomBtns: Locator;
    protected singleRandomBtn: Locator;
    protected submitPicksBtnsAreActive: Locator;
    protected singleSubmitPickBtn: Locator;
    protected editPickemBtn: Locator;
    protected editPickModalBtn: Locator;
    protected confirmPickemModalBtn: Locator;
    protected successfulToast: Locator;
    protected pickemWidget: Locator;
    protected submittedPicksIcon: Locator;
    protected clickOnArrowBtn: Locator;
    protected modalJoinGroupPickem: Locator;
    protected modalUnableToJoin: Locator;
    protected modalGotIt: Locator;
    protected userGroup: Locator;
    protected highlightedUserInLeaderboard: Locator;
    protected timerLeaderboardIcon: Locator;
    protected leaveGroupBtn: Locator;
    protected multiplePickemFooter: Locator;
    protected getPointsBtn: Locator;
    protected getPointsBtnAvailable: Locator;
    protected getPointsBtnDisabled: Locator;
    protected openBtnsClaimBonus: Locator;
    protected verifyBtnsClaimBonus: Locator;
    protected claimBonusBtn: Locator;
    protected congratulationExtraPtsBtn: Locator;

    constructor(page: Page, context?: BrowserContext) {
        this.page = page;
        this.context = context;
        this.randomBtns = this.page.locator('button.button-random');
        this.singleRandomBtn = this.page.locator('button.button-random').first();
        this.submitPicksBtnsAreActive = this.page.locator('button.c-button.c-button--green-04[type="button"]:not([disabled]):not(:has(i.o-icon.o-icon--checked-rounded-filled)):not(.button-edit)');
        this.singleSubmitPickBtn = this.page.locator('button.c-button.c-button--green-04[type="button"]:not([disabled]):not(:has(i.o-icon.o-icon--checked-rounded-filled)):not(.button-edit)').first();
        this.editPickemBtn = this.page.locator('c-button c-button--green-04 button-edit');
        this.editPickModalBtn = this.page.locator('li.o-list-inline__item > button.c-button--transparent');
        this.confirmPickemModalBtn = this.page.locator('li.o-list-inline__item > button:not(.c-button--transparent)');
        this.successfulToast = this.page.locator('.v-toast__item--success.v-toast__item--top-right');
        this.pickemWidget = this.page.locator('.o-widget__header.c-widget-tournament-pickems-header').first();
        this.submittedPicksIcon = this.page.locator('button > i.o-icon--checked-rounded-filled').first();
        this.clickOnArrowBtn = this.page.locator('span.c-button--collapse').first();
        this.modalJoinGroupPickem = this.page.locator('.o-modal__footer button[type="submit"]');
        this.modalUnableToJoin = this.page.locator('o-icon-emoji o-icon-emoji--sad');
        this.modalGotIt = this.page.locator('button.c-button.c-button--primary.c-button--full-width');
        this.userGroup = this.page.locator('div.c-tabs-nav--secondary.c-widget-pickems-leaderboard__tabs-scope > ul > li > button[class="map"]').last();
        this.highlightedUserInLeaderboard = this.page.locator('div.c-widget-pickems-leaderboard__table.all > div > div.c-table-pickems-leaderboard .table-row.highlighted > [class="table-cell user"]');
        this.timerLeaderboardIcon = this.page.locator('o-icon o-icon--timer-plain').first();
        this.leaveGroupBtn = this.page.locator('button.o-link.o-link--extra-minor');
        this.multiplePickemFooter = this.page.locator('.c-widget-tournament-pickems-footer')
        this.getPointsBtn = this.page.locator('.section-button > .c-button')
        this.getPointsBtnAvailable = this.page.locator('.section-button > .c-button:not(:disabled)')
        this.getPointsBtnDisabled = this.page.locator('.section-button > .c-button:disabled')
        this.openBtnsClaimBonus = this.page.locator('a.c-button--blue-01')
        this.verifyBtnsClaimBonus = this.page.locator('div.activity button.c-button--blue-01:not(.verified):not(.error)')
        this.claimBonusBtn = this.page.locator('div.o-modal__footer .c-button--primary')
        this.congratulationExtraPtsBtn = this.page.locator('.o-modal__footer .c-button--transparent')
    }
}

export class PickemPage extends PickemPageLocators{

    async clickRandomBtns() {
        await this.page.waitForLoadState('networkidle');
        await expect(this.pickemWidget).toBeVisible( {timeout: 15000});
        await expect(this.multiplePickemFooter.first()).toBeVisible();
        const randomBtnCount = await this.randomBtns.count();
        console.log(`Random btns before test: ${randomBtnCount}`)
        
        if (randomBtnCount === 1) {
            await this.singleRandomBtn.click();
        } else if (randomBtnCount >= 1) {
            for (let i = 0; i < randomBtnCount; i++) {
                await this.randomBtns.nth(i).click();
            }
        } else {
            await this.clickOnArrowBtn.click()
            await expect(this.submittedPicksIcon).toBeVisible();
        }
        console.log(`Random btns after test: ${randomBtnCount}`)
    }
    

    async clickSubmitBtns() {
        await expect(this.pickemWidget).toBeVisible();
        const submitBtnCount = await this.submitPicksBtnsAreActive.count();
        
        console.log(`Submit btns before test: ${submitBtnCount}`)

        if(submitBtnCount === 1) {
            await this.singleSubmitPickBtn.click();
            // await this.confirmPickemModalBtn.click(); --- temporary Modal Removed
        } else if (submitBtnCount > 1) {
            for (let i = submitBtnCount - 1; i >= 0; i--) {
                await this.submitPicksBtnsAreActive.nth(i).click();
                // await this.confirmPickemModalBtn.click(); --- temporary Modal Removed
                await this.page.waitForTimeout(1000); // TODO: refactor
                const submitBtnCount = await this.submitPicksBtnsAreActive.count();
                console.log(`Submit btns after iteration# ${i}: ${submitBtnCount}`)
            }
        } else {
            await this.clickOnArrowBtn.click()
            await expect(this.submittedPicksIcon).toBeVisible();
        }
        console.log(`Submit btns after test: ${submitBtnCount}`)
        await expect(this.randomBtns).toHaveCount(0);
    }   

    async userJoinGroupPickem() {
        await this.modalJoinGroupPickem.click();
        await expect(this.modalJoinGroupPickem).toHaveCount(0)

        if (await this.modalGotIt.isVisible()) {
            await this.modalGotIt.click()
            await this.userGroup.click()
        } 

        await expect(this.leaveGroupBtn).toBeVisible()
        await expect(this.modalGotIt).toHaveCount(0)
        await expect(this.modalJoinGroupPickem).toHaveCount(0)
    }

    async getExtraPoints() {

        await expect(this.getPointsBtn.first()).toBeVisible()
        const getPointsBtnsAvailable = await this.getPointsBtnAvailable.count()
        console.log(`Available points count: ${getPointsBtnsAvailable}`)

        if (getPointsBtnsAvailable >= 1) {
            for (let i = 0; i < getPointsBtnsAvailable; i++) {
                const context = this.page.context(); // Отримуємо context прямо тут
    
                // Чекаємо відкриття першої вкладки
                const newPagePromise1 = context.waitForEvent('page');
            
                await this.getPointsBtn.nth(i).click();
                await this.openBtnsClaimBonus.first().click();
            
                // Отримуємо першу вкладку і закриваємо
                const newPage1 = await newPagePromise1;
                await newPage1.close();
            
                // Чекаємо відкриття другої вкладки
                const newPagePromise2 = context.waitForEvent('page');
                await this.openBtnsClaimBonus.last().click();
            
                // Отримуємо другу вкладку і закриваємо
                const newPage2 = await newPagePromise2;
                await newPage2.close();
            
                // Продовжуємо тест
                await this.verifyBtnsClaimBonus.first().click();
                await this.verifyBtnsClaimBonus.last().click();
                await this.verifyBtnsClaimBonus.first().click();
                await this.verifyBtnsClaimBonus.last().click();
                await this.claimBonusBtn.click();
                await expect(this.congratulationExtraPtsBtn).toBeVisible();
                await this.congratulationExtraPtsBtn.click();
            }
        } else {
            await expect(this.getPointsBtnDisabled.first()).toBeVisible();
            console.log('No extra points available')
        }
    }
}
