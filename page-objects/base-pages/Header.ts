import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "../base-pages/BasePage";
import { step } from "../../helpers/step";

export class HeaderLocators {
    protected page: Page;
    protected bo3Logo: Locator; 
    protected menuMatches: Locator;
    protected gotoMatchesUpcoming: Locator;
    protected gotoMatchesFinished: Locator;
    protected menuTournaments: Locator;
    protected gotoTournamentUpcoming: Locator;
    protected gotoTournamentFinished: Locator;
    protected gotoPlayers: Locator;
    protected menuTeams: Locator;
    protected gotoTeamsEarnings: Locator;
    protected gotoTeamsValveRanking: Locator;
    protected gotoTeamsDirectly: Locator;
    protected menuNews: Locator;
    protected gotoNews: Locator;
    protected gotoArticles: Locator;
    protected goToForum: Locator;
    protected gotoPredictions: Locator;
    protected menuTools: Locator;
    protected gotoRecords: Locator;
    protected gotoTeamsCompare: Locator;
    protected gotoPlayersCompare: Locator;
    protected gotoPickems: Locator;
    protected gotoCrosshairs: Locator;
    protected gotoHeroes: Locator;
    protected gotoChampions: Locator;
    protected switchDiscipline: Locator;
    protected allDisciplines: Locator;
    protected selectCs: Locator;
    protected selectValorant: Locator;
    protected selectLol: Locator;
    protected selectDota: Locator;
    protected selectGames: Locator;
    protected selectR6: Locator;
    selectedDiscipline: Locator;
    protected selectLanguage: Locator;
    protected selectUa: Locator;
    selectedLanguage: Locator;
    protected allLanguages: Locator;
    protected userMenuBtn: Locator;
    protected myProfileBtn: Locator;
    protected logoutBtn: Locator;
    protected menuTexts: Locator;

    constructor(page: Page) {
        this.page = page;
        this.bo3Logo = this.page.locator('a.main-logo')

        this.menuMatches = this.page.locator('.item-link[href*="/matches"]')
        this.gotoMatchesUpcoming = this.page.locator('.item-link[href*="/matches/current"]');
        this.gotoMatchesFinished = this.page.locator('ul.c-main-menu-dropdown__list > li > [href*="/matches/finished"]');
        this.menuTournaments = this.page.locator('.item-link[href*="/tournaments"]');
        this.gotoTournamentUpcoming = this.page.locator('ul.c-main-menu-dropdown__list > li > [href*="/tournaments/current"]');
        this.gotoTournamentFinished = this.page.locator('ul.c-main-menu-dropdown__list > li > [href*="/tournaments/finished"]');
        this.gotoPlayers = this.page.locator('.item-link[href*="/players"]');
        this.menuTeams = this.page.locator('.item-link[href*="/teams"]');
        this.gotoTeamsEarnings = this.page.locator('ul.c-main-menu-dropdown__list > li > [href*="/teams/earnings"]');
        this.gotoTeamsValveRanking = this.page.locator('ul.c-main-menu-dropdown__list > li > [href*="/teams/valve-rankings/world"]');
        this.gotoTeamsDirectly = this.page.locator('.item-link[href*="/teams/earnings"]');
        this.menuNews = this.page.locator('.item-link[href*="/news"]');
        this.gotoNews = this.page.locator('ul > li > a[href*="/news"]').first();
        this.gotoArticles = this.page.locator('li > a[href*="/articles"]');
        this.goToForum = this.page.locator('li > [href*="/forum"]');
        this.gotoPredictions = this.page.locator('li > a[href*="/predictions"]');
        this.menuTools = this.page.locator('div.item-link[no-prefetch]');
        this.gotoRecords = this.page.locator('ul.c-main-menu-dropdown__list > li > [href*="/records"]');
        this.gotoTeamsCompare = this.page.locator('ul.c-main-menu-dropdown__list > li > [href*="/tools/compare/teams"]');
        this.gotoPlayersCompare = this.page.locator('ul.c-main-menu-dropdown__list > li > [href*="/tools/compare/players"]');
        this.gotoPickems = this.page.locator('.item-link[href*="/pickems"]');
        this.gotoCrosshairs = this.page.locator('.item-link[href*="/crosshair/generator"]');
        this.gotoHeroes = this.page.locator('li > a[href*="/heroes"]');
        this.gotoChampions = this.page.locator('li > a[href*="/champions"]');
        this.switchDiscipline = this.page.locator('.c-global-main-header-discipline-switcher__current > .discipline-row');
        this.allDisciplines = this.page.locator('ul.c-global-main-header-discipline-switcher__list > li')
        this.selectCs = this.page.locator(':nth-child(1) > a.discipline-row');
        this.selectValorant = this.page.locator(':nth-child(2) > .discipline-row');
        this.selectLol = this.page.locator(':nth-child(5) > .discipline-row');
        this.selectDota = this.page.locator(':nth-child(4) > .discipline-row');
        this.selectGames = this.page.locator(':nth-child(6) > .discipline-row');
        this.selectR6 = this.page.locator(':nth-child(3) > .discipline-row');
        this.selectedDiscipline = this.page.locator('.c-global-main-header-discipline-switcher__current')
        this.selectLanguage = this.page.locator('.c-lang-switcher > ul');
        this.selectUa = this.page.locator('.o-list-bare__item > a[href="/ua"]');
        this.selectedLanguage = this.page.locator('.c-lang-switcher > ul > .o-list-bare__item.current');
        this.menuTexts = this.page.locator('.c-main-menu');
        this.userMenuBtn = this.page.locator('.c-user-menu > div > i.o-icon--angle-down');
        this.myProfileBtn = this.page.locator('a[href$="/users/me"]');
        this.logoutBtn = this.page.locator('.c-user-menu__list > ul > li').last()
        this.allLanguages = this.page.locator('.c-lang-switcher > ul >li')
    }
}

export class Header extends HeaderLocators{

    protected basePage: BasePage;

    constructor(page: Page) {
        super(page)
        this.basePage = new BasePage(page);
    }

    @step()
    async clickBo3Logo() {
        await this.bo3Logo.click();
    }

    @step()
    async openCs2() {
        await this.switchDiscipline.click()
        await this.selectCs.click()

        const discipline = await this.expectedGameDiscipline();
        expect(discipline).toEqual('CS2');

        const url = new URL(this.page.url());
        console.log(`openCs2() ... ${url}`);
    }

    @step()
    async openValorant() {
        await this.switchDiscipline.click()
        await this.selectValorant.click()
        await expect(this.page).toHaveURL(/.*valorant/);
        
        const discipline = await this.expectedGameDiscipline();
        expect(discipline).toEqual('Valorant');

        const url = new URL(this.page.url());
        console.log(`openValorant() ... /valorant ... ${url}`);
    }

    @step()
    async openLol() {
        await this.switchDiscipline.click()
        await this.selectLol.click()
        await expect(this.page).toHaveURL(/.*lol/);

        const discipline = await this.expectedGameDiscipline();
        expect(discipline).toEqual('LoL');

        const url = new URL(this.page.url());
        console.log(`openLol() ... /lol ... ${url}`);
    }

    @step()
    async openDota() {
        await this.switchDiscipline.click()
        await this.selectDota.click()
        await expect(this.page).toHaveURL(/.*dota2/);

        const discipline = await this.expectedGameDiscipline();
        expect(discipline).toEqual('Dota 2');

        const url = new URL(this.page.url());
        console.log(`openDota() ... /dota2 ... ${url}`);
    }

    @step()
    async openGames() {
        await this.switchDiscipline.click()
        await this.selectGames.click()
        await expect(this.page).toHaveURL(/.*games/);

        const discipline = await this.expectedGameDiscipline();
        expect(discipline).toEqual('Games');

        const url = new URL(this.page.url());
        console.log(`openGames() ... /games ... ${url}`);
    }

    @step()
    async openR6() {
        await this.switchDiscipline.click()
        await this.selectR6.click()
        await expect(this.page).toHaveURL(/.*r6siege/);

        const discipline = await this.expectedGameDiscipline();
        expect(discipline).toEqual('Rainbow 6');

        const url = new URL(this.page.url());
        console.log(`openR6() ... /r6siege ... ${url}`);
    }

    async expectedGameDiscipline() {
        const disciplineText = await this.switchDiscipline.innerText();
        return disciplineText;
    }

    async returnGameDiscipline() {
        const disciplineText = await this.switchDiscipline.innerText();
        console.log(`header.returnGameDiscipline() ... ${disciplineText}`)
        return disciplineText;
    }

    @step()
    async openRandomGameDiscipline() {
        await expect(this.bo3Logo).toBeVisible()
        const disciplinesCount = await this.allDisciplines.count()
        console.log(`Disciplines available count = ${disciplinesCount}`)
        const randomIndex = Math.floor(Math.random() * disciplinesCount ) + 1;
        console.log(`Randomly generated Game Discipline Index = ${randomIndex}`)
        await this.switchDiscipline.click()
        await this.page.locator(`:nth-child(${randomIndex}) > a.discipline-row`).click()

        await expect(this.page.locator(`:nth-child(5) > .discipline-row`)).not.toBeVisible()
        await this.returnGameDiscipline();
        const url = new URL(this.page.url());
        console.log(`openRandomGameDiscipline() ... ${url}`);
    }

    @step()
    async openRandomGameDisciplineWithForum() {
        do {
            await this.openRandomGameDiscipline();
            var selectedDiscipline = await this.selectedDiscipline.textContent();
            console.log(`selectedDiscipline: ${selectedDiscipline}`)
        } while (selectedDiscipline === 'Dota 2');

        const url = new URL(this.page.url());
        console.log(`openRandomGameDisciplineWithForum() ... ${url}`);
    }

    @step()
    async openRandomLocale() {
        const languageCount = await this.allLanguages.count()
        const randomIndex = Math.floor(Math.random() * languageCount )
        await this.selectLanguage.click();
        await this.allLanguages.nth(randomIndex).click()
    }

    @step()
    async openEnWebsite() {}

    @step()
    async openUaWebsite() {
        await this.selectLanguage.click();
        await this.selectUa.click();
    }

    @step()
    async openMatchesUpcoming() {
        await this.menuMatches.hover()
        await this.gotoMatchesUpcoming.click()
        await expect(this.page).toHaveURL(/.*matches\/current/);
        // await this.page.waitForResponse(RegExp("-matches-current"))
    }

    @step()
    async openMatchesFinished() {
        await this.menuMatches.hover()
        await this.gotoMatchesFinished.click()
        await expect(this.page).toHaveURL(/.*matches\/finished/);
        // await this.page.waitForResponse(RegExp("-matches-finished"))
    }

    @step()
    async openTournamentsUpcoming() {
        await this.menuTournaments.hover();
        await this.gotoTournamentUpcoming.click();
        await expect(this.page).toHaveURL(/.*tournaments\/current/);
    }  

    @step()
    async openTournamentsFinished() {
        await this.menuTournaments.hover()
        await this.gotoTournamentFinished.click()
        await expect(this.page).toHaveURL(/.*tournaments\/finished/);
    }

    @step()
    async openPlayers() {
        await this.gotoPlayers.click()
        await expect(this.page).toHaveURL(/.*players/);
    }

    @step()
    async openTeamsEarnings() {
        const discipline = await this.expectedGameDiscipline();
        if (discipline === 'CS2') {
            await this.returnGameDiscipline();
            await this.menuTeams.hover()
            await this.gotoTeamsEarnings.click()
            await expect(this.page).toHaveURL(/.*teams\/earnings/);
        } else {
            await this.gotoTeamsDirectly.click();
            await expect(this.page).toHaveURL(/.*teams\/earnings/);
        }
    }

    @step()
    async openTeamsValveRanking() {
        await this.menuTeams.hover()
        await this.gotoTeamsValveRanking.click()
        await expect(this.page).toHaveURL(/.*teams\/valve-rankings\/world/);
    }

    @step()
    async openNews() {
        await this.menuNews.hover()
        await this.gotoNews.click()
        await expect(this.page).toHaveURL(/.*news/);
    }

    @step()
    async openForum() {
        await this.menuNews.hover()
        await this.goToForum.click()
    }

    @step()
    async openArticles() {
        await this.menuNews.hover()
        await this.gotoArticles.click()
        await expect(this.page).toHaveURL(/.*articles/);
    }

    @step()
    async openPredictions() {
        await this.menuNews.hover()
        await this.gotoPredictions.click()
        await expect(this.page).toHaveURL(/.*predictions/);
    }

    @step()
    async openRecords() {
        await this.menuTools.hover()
        await this.gotoRecords.click()
        await expect(this.page).toHaveURL(/.*records/);
    }

    @step()
    async openTeamsCompare() {
        await this.menuTools.hover()
        await this.gotoTeamsCompare.click()
        await expect(this.page).toHaveURL(/.*tools\/compare\/teams/);
    }

    @step()
    async openPlayersCompare() {
        await this.menuTools.hover()
        await this.gotoPlayersCompare.click()
        await expect(this.page).toHaveURL(/.*tools\/compare\/players/);
    }

    @step()
    async openPickems() {
        await this.gotoPickems.click()
        await expect(this.page).toHaveURL(/.*pickems/);
    }

    @step()
    async openCrosshairs() {
        await this.gotoCrosshairs.click()
        await expect(this.page).toHaveURL(/.*crosshair\/generator/);
    }

    @step()
    async openHeroes() {
        await this.gotoHeroes.click()
        await expect(this.page).toHaveURL(/.*heroes/);
    }

    @step()
    async openChampions() {
        await this.gotoChampions.click()
        await expect(this.page).toHaveURL(/.*champions/);
    }

    @step()
    async returnLanguageLocale() {
        const languageText = await this.selectedLanguage.innerText()
        console.log(`header.returnLanguageLocale() ... ${languageText}`)
        return languageText;
    }

    @step()
    async goToMyProfile() {
        await this.userMenuBtn.click()
        await this.myProfileBtn.click()
    }

    @step()
    async returnMenuTranslate() {
        const text = await this.menuTexts.innerText();
        const discipline = await this.selectedDiscipline.textContent();
        const cleanedText = text.replace(/\s+/g, ' ').trim(); 
        const separatedText = cleanedText.split(/(?=[A-ZА-ЯЇЄ])/).join(', '); 
        console.log(`🏁 header.returnMenuTranslate() ... ${discipline}: ${separatedText}`)
        return separatedText;
    }

    @step()
    async logout() {
        await this.userMenuBtn.click();
        await this.logoutBtn.click();
        await expect(this.userMenuBtn).not.toBeVisible()
        console.log('Logged out. Last test for "userDev.spec.ts" completed ______________')
    }
}