import { Page, expect, Locator } from '@playwright/test';
import { HeaderLocators } from './Header';
import { step } from '../../helpers/step';

export class BaseProfiles {
    private page: Page;
    private headerLocators: HeaderLocators;
    protected matchesInsideMatchesWidget: Locator;
    protected matchesWidget: Locator;

    constructor(page: Page, testName?: string) {
        this.page = page;
        this.headerLocators = new HeaderLocators(page);
        this.matchesInsideMatchesWidget = this.page.locator('.table-group__body > div > a.c-global-match-link');
        this.matchesWidget = this.page.locator('.c-table-matches-minified');
    }

    @step()
    async matchesWidgetLoaded() {
        await expect (this.matchesWidget.first()).toBeVisible();
        await expect (this.matchesInsideMatchesWidget.first()).toBeVisible();
    }

}
