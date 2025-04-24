import { Locator, Page, expect } from "@playwright/test";
import { baseFixture } from "../../fixtures/BaseFixture";
import { HeaderLocators } from "../base-pages/Header";
import { BasePage } from "../base-pages/BasePage";
import { step } from "../../helpers/step";

class AllMatchesLocators {
    protected page: Page;
    protected upcomingMatches: Locator;
    protected liveMatches: Locator;
    protected finishedMatches: Locator;
    protected finishedMatchAdvantageDataLabel: Locator;
    protected finishedMatchBasicDataLabel: Locator;
    protected finishedMatchNoDataLabel: Locator;
    protected finishedFullVlr: Locator;
    protected finishedNoDataVlr: Locator;
    protected svgScore1: Locator;
    protected upcomingMatchesFilters: Locator;
    protected finishedSidebarFilters: Locator;
    protected matchesGroupRawsTierLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.upcomingMatches = this.page.locator('.table-row--upcoming');
        this.liveMatches = this.page.locator('.table-row--current > a > div.table-cell.match');
        this.finishedMatches = this.page.locator('.table-row--finished > a > div.table-cell.match');
        this.finishedMatchAdvantageDataLabel = this.page.locator('.o-icon.advantage.o-icon--data-full');
        this.finishedMatchBasicDataLabel = this.page.locator('.o-icon.o-icon--data-full:not(.advantage)');
        this.finishedMatchNoDataLabel = this.page.locator('.c-table-cell-coverage.coverage.table-cell.basic.minified:not(:has(.tooltip-hint-trigger))');
        this.finishedFullVlr = this.page.locator('.o-icon.advantage.o-icon--data-full');
        this.finishedNoDataVlr = this.page.locator('.c-table-cell-coverage.coverage.table-cell.basic');
        this.svgScore1 = this.page.locator('svg.score-1');
        this.upcomingMatchesFilters = this.page.locator('.c-sidebar-filter--matches-upcoming');
        this.finishedSidebarFilters = this.page.locator('.c-sidebar-filter--matches-finished');
        this.matchesGroupRawsTierLabel = this.page.locator('.c-matches-group-rows__tier-labels')
    }
}

export class AllMatches extends AllMatchesLocators{
    protected headerLocators: HeaderLocators;
    protected basePage: BasePage;

    constructor(page: Page) {
        super(page)
        this.headerLocators = new HeaderLocators(page);
        this.basePage = new BasePage(page);
    }

    @step()
    async checkPageLoaded() {
        await expect(this.matchesGroupRawsTierLabel.first()).toBeVisible()
    }

    @step()
    async visitFirstLiveMatch() {
        await expect(this.upcomingMatches.first()).toBeVisible()

        if(await this.liveMatches.first().isVisible()) {
            await this.liveMatches.first().click()
        } else {
            baseFixture.skip()
        }
    }

    @step()
    async visitSecondLiveMatch() {
        await expect(this.upcomingMatches.first()).toBeVisible()

        if(await this.liveMatches.nth(1).isVisible()) {
            await this.liveMatches.nth(1).click()
        } else {
            baseFixture.skip()
        }
    }

    @step()
    async visitEachLiveMatch() {
        const elements = this.liveMatches;
        const elementsCount = await elements.count()

        for (let i = 0; i < elementsCount; i++) {
            console.log(`${elements}.nth(i)`);
            // await elements.nth(i).click();
        }
    }

    @step()
    async visitFirstUpcomingMatch() {
        await this.upcomingMatches.first().click()
        await expect(this.page).not.toHaveURL(/.*matches\/current/);
    }

    @step()
    async visitSecondUpcomingMatch() {
        await this.upcomingMatches.nth(1).click()
        await expect(this.page).not.toHaveURL(/.*matches\/current/);
    }

    @step()
    async visitFirstFinishedMatch() {
        await expect(this.page).toHaveURL(/.*matches\/finished/);
        await expect(this.finishedMatches.first()).toBeVisible()
        // await expect(this.finishedSidebarFilters).toBeVisible()
        await this.finishedMatches.first().click()
        await expect(this.page).not.toHaveURL(/.*matches\/finished/);
        await this.basePage.getPageUrl()
    }

    @step()
    async visitSecondFinishedMatch() {
        await this.finishedMatches.nth(1).click()
        await expect(this.page).not.toHaveURL(/.*matches\/finished/);
    }

    @step()
    async visitFinishedAdvancedDataMatch() {
        await this.finishedMatchAdvantageDataLabel.nth(2).click()
        await expect(this.page).not.toHaveURL(/.*matches\/finished/);
    }

    @step()
    async visitFinishedBasicDataMatch() {
        await this.finishedMatches.first().isVisible()
        let elementFound = false;
        const finishedMatchesCount = await this.finishedMatches.count()
        if(finishedMatchesCount > 0) {
            for (let i = 0; i < 5; i++) {
                const count = await this.finishedMatchBasicDataLabel.count()
                if (count > 0) {
                    elementFound = true;
                    break;
                }
                await this.page.evaluate(() => {
                    window.scrollBy(0, 1000);
                });
                console.log(`scroll # ${i}`)
                console.log(`finishedMatchesCount: ${finishedMatchesCount}`)
            }
        }
        
        await this.finishedMatchBasicDataLabel.first().click()
    }

    @step()
    async visitFinishedNoDataMatch() {
        await this.finishedMatchNoDataLabel.nth(1).click()
    }

    @step()
    async csLiveMatchesCount() {
        await expect(this.upcomingMatches.first()).toBeVisible();
        const elementCount = await this.liveMatches.count()
        return elementCount;
    }

    @step()
    async liveMatchCheckFirstMap() {
        await expect(this.upcomingMatches.first()).toBeVisible()

        if(await this.svgScore1.first().isVisible()) {
            await this.svgScore1.first().click()
        } else {
            baseFixture.skip()
        }
    }

    @step()
    async storeAllMatchesTexts() {
        const upcomingMatchesFilters = await this.upcomingMatchesFilters.innerText();
        const upcomingMatchesFiltersWithoutLineBreaks = upcomingMatchesFilters.replace(/(\r\n|\n|\r)/g, ' ');
        const upcomingMatchesFiltersCleaned = upcomingMatchesFiltersWithoutLineBreaks.replace(/\s+/g, ' ').trim();
        console.log(`storeAllMatchesTexts -> upcomingMatchesFiltersCleaned: ${upcomingMatchesFiltersCleaned}`);
    }
    
}

