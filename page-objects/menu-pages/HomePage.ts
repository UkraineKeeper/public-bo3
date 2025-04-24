import { Locator, Page, expect } from "@playwright/test";
import { SideBar, SideBarLocators } from "../base-pages/SideBar";

class HomePageLocators {
    private page: Page;
    protected matchesWidget: Locator;
    protected matchesWidgetDatesSwiper: Locator;
    protected goToPickemBtn: Locator;
    protected topTournamentsWidget: Locator;
    protected topTournamentsWidgetTitle: Locator;
    protected allTournamentsBtn: Locator;
    protected topTeamsWidget: Locator;
    protected topTeamsWidgetTitle: Locator;
    protected medalsInsideTopTeamsWidget: Locator;
    protected allTeamsBtnFromTopTeamsWidget: Locator;
    protected topPlayersWidget: Locator;
    protected topPlayersWidgetTitle: Locator;
    protected allTopPlayersBtn: Locator;
    protected allNewsBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.matchesWidget = this.page.locator('c-widget-matches');
        this.matchesWidgetDatesSwiper = this.page.locator('ul.u-text-uppercase');
        this.goToPickemBtn = this.page.locator('.c-widget-pickems-minified-item__footer > a').first();
        this.topTournamentsWidget = this.page.locator('.c-widget-top-tournaments');
        this.topTournamentsWidgetTitle = this.page.locator('.c-widget-top-tournaments > div > p.title-h5')
        this.allTournamentsBtn = this.page.locator('.c-widget-top-tournaments > .o-widget__footer > a');
        this.topTeamsWidget = this.page.locator('div.c-table-teams-earnings');
        this.topTeamsWidgetTitle = this.page.locator('.c-widget-teams-earnings > div > p.title-h5')
        this.medalsInsideTopTeamsWidget = this.page.locator('span.medal-container');
        this.allTeamsBtnFromTopTeamsWidget = this.page.locator('div.c-table-teams-earnings ~ a.c-button--secondary');
        this.topPlayersWidget = this.page.locator('.c-widget-top-players-minified');
        this.topPlayersWidgetTitle = this.page.locator('.c-widget-top-players-minified > div > p.title-h5');
        this.allTopPlayersBtn = this.page.locator('.c-widget-top-players-minified > div > div > a');
        this.allNewsBtn = this.page.locator('.c-widget-news-latest-top > div.o-widget__body > div ~ a')
    }
}

export class HomePage extends HomePageLocators{
    protected sideBar: SideBar;
    protected sideBarLocators: SideBarLocators;

    constructor(page: Page) {
        super(page);
        this.sideBar = new SideBar(page);
        this.sideBarLocators = new SideBarLocators(page);
    }

    async clickGoToPickem() {
        await this.goToPickemBtn.click();
    }

    async clickAllTournamentsBtn() {
        await this.allTournamentsBtn.click();
    }

    async clickAllNewsBtn() {
        await this.allNewsBtn.click();
    }

    async topTeamsWidgetLoaded() {
        await expect(this.topTeamsWidget).toBeVisible()
        const medalsCount = await this.medalsInsideTopTeamsWidget.count();
        await expect(medalsCount).toBe(5);

        const href = await this.allTeamsBtnFromTopTeamsWidget.getAttribute('href');
        console.log('Href attribute:', href);

        expect(href).toContain('/teams/earnings');

        // Перевірка URL на відповідність локалі та дисципліні
        // await this.verifyURLIntegrity(config.expectedLocale, config.expectedGame);
    }

    async topTeamsWidgetNotExist() {
        await expect(this.topTeamsWidget).toHaveCount(0)
        await expect(this.medalsInsideTopTeamsWidget).toHaveCount(0)
    }

    async topTournamentsWidgetLoaded() {}

    async topTournamentsWidgetNotExist() {}

    async homePageInnerTexts() {
        const matchesWidgetDatesSwiper = await this.matchesWidgetDatesSwiper.innerText();
        const matchesWidgetDatesSwiperSeparatedText = matchesWidgetDatesSwiper
            .split(/(?=[A-ZА-ЯЇЄ])/)
            .join(' ')
            .replace(/(\r\n|\n|\r)/g, ' ');
    
        const allTournamentsText = await this.allTournamentsBtn.innerText();
        const topTournamentsText = await this.topTournamentsWidgetTitle.innerText();
        const topTeamsWidgetTitle = await this.topTeamsWidgetTitle.innerText();
        const allTeamsBtnFromTopTeamsWidget = await this.allTeamsBtnFromTopTeamsWidget.innerText();
        const topPlayersWidgetTitle = await this.topPlayersWidgetTitle.innerText();
        const allTopPlayersBtn = await this.allTopPlayersBtn.innerText();
        const sidebarForumWidgetTitle = await this.sideBarLocators.sidebarForumWidgetTitle.innerText();
        const sidebarForumAllTopicsBtn = await this.sideBarLocators.sidebarForumAllTopicsBtn.innerText();
        const sidebarNewsWidgetTitle = await this.sideBarLocators.sidebarNewsWidgetTitle.innerText();
        const newsWidgetAllNewsBtn = await this.sideBarLocators.newsWidgetAllNewsBtn.innerText();
    
        const combinedText = [
            matchesWidgetDatesSwiperSeparatedText,
            allTournamentsText, 
            topTournamentsText, 
            topTeamsWidgetTitle,
            allTeamsBtnFromTopTeamsWidget,
            topPlayersWidgetTitle,
            allTopPlayersBtn,
            sidebarForumWidgetTitle,
            sidebarForumAllTopicsBtn,
            sidebarNewsWidgetTitle,
            newsWidgetAllNewsBtn

        ].join('.. ');
    
        console.log(`${combinedText}`);
        return combinedText;
    }
    
    

}