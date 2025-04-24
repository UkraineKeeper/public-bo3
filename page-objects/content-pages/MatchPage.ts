import test, { Locator, Page, expect } from "@playwright/test";
import { HeaderLocators } from "../base-pages/Header";

export class MatchPageLocators {
    private page: Page;
    protected commentsBtnInHeader: Locator;
    protected lastResultsWidget: Locator;
    protected infoBlock: Locator;
    protected commentsSection: Locator;
    protected teamNamesInHeader: Locator;
    protected teamWinner: Locator;
    protected teamLoser: Locator;
    protected liveLabel: Locator;
    protected pastMatchesCollapseBtn: Locator;
    protected mapsBtns: Locator;
    protected firstMapClickable: Locator;
    protected teamsAdvantageWidget: Locator;
    protected compareStatsWidget: Locator;
    protected compareStatsScore: Locator;
    protected menuBtns: Locator;
    protected scoreboardColumns: Locator;

    constructor(page: Page) {
        this.page = page;
        this.commentsBtnInHeader = this.page.locator('p.comments').first();
        this.lastResultsWidget = this.page.locator('.o-widget.c-widget-match-last-results');
        this.infoBlock = this.page.locator('.o-widget.c-widget-info');
        this.commentsSection = this.page.locator('.c-widget-comments.o-widget');
        this.teamNamesInHeader = this.page.locator('.c-widget-match-status__score [class="team"]');
        this.teamWinner = this.page.locator('.c-widget-match-status__score [class="team winner"]');
        this.teamLoser = this.page.locator('.c-widget-match-status__score [class="team"]');
        this.liveLabel = this.page.locator('.o-label--live');
        this.pastMatchesCollapseBtn = this.page.locator('button.team__collapse > i');
        this.mapsBtns = this.page.locator('.c-nav-match-menu-item--game');
        this.firstMapClickable = this.page.locator('.c-nav-match-menu-item--game:nth-of-type(1) > a');
        this.teamsAdvantageWidget = this.page.locator('.c-widget-game-teams-advantages__chart')
        this.compareStatsWidget = this.page.locator('.c-widget-tools-compare-stats__inner')
        this.compareStatsScore = this.page.locator('.c-chart-default')
        this.menuBtns = this.page.locator('.c-profile-menu--match')
        this.scoreboardColumns = this.page.locator('.c-table-match-scoreboard .table-head').first()
    }
}

export class MatchPage extends MatchPageLocators {
    protected headerLocators: HeaderLocators;
    
    constructor(page: Page) {
        super(page)
        this.headerLocators = new HeaderLocators(page);
    }
    
    async csIngameElementsPresent() {
        // await this.page.waitForResponse(RegExp("game_steam_profiles"))
        // await expect(this.commentsBtnInHeader).toBeVisible();
        await expect(this.lastResultsWidget).toBeVisible();
        await this.infoBlock.scrollIntoViewIfNeeded();
        await expect(this.infoBlock).toBeVisible();
        await expect(this.commentsSection).toBeVisible();
    }

    async vlrIngameElementsPresent() {
        // await expect(this.commentsBtnInHeader).toBeVisible();
        await expect(this.lastResultsWidget).toBeVisible();
        await this.infoBlock.scrollIntoViewIfNeeded();
        await expect(this.infoBlock).toBeVisible();
        await expect(this.commentsSection).toBeVisible();
    }

    async newDisciplineIngameElementsPresent() {
        // await expect(this.commentsBtnInHeader).toBeVisible();
        await expect(this.lastResultsWidget).toBeVisible();
        await this.infoBlock.scrollIntoViewIfNeeded();
        await expect(this.infoBlock).toBeVisible();
        await expect(this.commentsSection).toBeVisible();
    }

    async livePageElementsPresent() {
        // await expect(this.commentsBtnInHeader).toBeVisible();
        await expect(this.liveLabel.first()).toBeVisible();
    }

    async returnTeamNames() {
        const winnerName = await this.teamWinner.innerText()
        const looserName = await this.teamLoser.innerText()
    }

    async expandPastMatches() {
        await this.pastMatchesCollapseBtn.first().click()
        await this.pastMatchesCollapseBtn.last().click()
    }

    async clickFirstMapBtnIfPossible() {
        await expect(this.mapsBtns.first()).toBeVisible();
        const count = await this.firstMapClickable.count()

        if (count === 1) {
            await this.firstMapClickable.click()
            await expect(this.teamsAdvantageWidget).toBeVisible();
        } else {
            console.log(`Match has completed map #1 but we cant click on it`)
            test.skip()
        }
    }

    async clickFirstMap() {
        await this.mapsBtns.first().click()
    }

    async hoverCompareStatsScore() {
        // await expect(this.commentsBtnInHeader).toBeVisible()
        // await this.page.mouse.wheel(0, 600);
        await expect(this.compareStatsWidget).toBeVisible()
        await this.compareStatsScore.hover();
    }

    async returnMenuBtnsText() {
        const discipline = await this.headerLocators.selectedDiscipline.textContent()
        const text = await this.menuBtns.innerText();
        const cleanedText = text.replace(/\s+/g, ' ').trim(); 
        const separatedText = cleanedText.split(/(?=[A-ZА-ЯЇЄ])/).join(', '); 
        console.log(`🏁 ${discipline} Ingame menu buttons: ${separatedText}`)
        return separatedText;
    }

    async returnScoreboardColumnsText() {
        const discipline = await this.headerLocators.selectedDiscipline.textContent();
        const text = await this.scoreboardColumns.innerText();
    
        // Видаляємо зайві пробіли та нові рядки
        const cleanedText = text.replace(/\n+/g, ' ').replace(/\s+/g, ' ').trim();
    
        console.log(`🏁 ${discipline} Ingame scoreboard columns: ${cleanedText}`);
        
        return cleanedText;
    }
    
}