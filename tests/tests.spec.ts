import test, { expect } from "@playwright/test";
import { NavigateTo } from "../page-objects/NavigateTo";
import { SideBar } from "../page-objects/base-pages/SideBar";
import { CommentsSection } from "../page-objects/base-pages/CommentsSection";
import { Modals } from "../page-objects/base-pages/ModalsPage";
import { LoginPage } from "../page-objects/base-pages/LoginPage";
import { AllForums } from "../page-objects/menu-pages/AllForums";
import { Header } from "../page-objects/base-pages/Header";
import { urls } from "../page-objects/urls";
import { screenFullPage } from "../helpers/screenFullPage";
import { HomePage } from "../page-objects/menu-pages/HomePage";
import { setupLogging, clearLogFile } from '../helpers/logger';
import { BasePage } from "../page-objects/base-pages/BasePage";
import { AllNews } from "../page-objects/menu-pages/AllNews";
import { users } from "../users/usersGit"
import { navHeader } from "../links/Nav";

test.beforeEach(async ({ page }, testInfo) => {
    setupLogging(() => testInfo.title);
});

test.describe('Tests spec', async () => {

    test('Send comment on forum', async ({ page }) => {
        const navigateTo = new NavigateTo(page);
        const sideBar = new SideBar(page);
        const commentsSection = new CommentsSection(page);
        const modals = new Modals(page);
        const loginPage = new LoginPage(page);

        await navigateTo.dev();
        await modals.handleStarterModals();
        await loginPage.loginAsUser('hodon47203@nozamas.com', 'fdj@fj1R4@ua');
        await loginPage.userLoggedTrue();
        await sideBar.visitAnyForumTopic();
        await commentsSection.writeComment();
        console.log('test from fs')
        console.log('Test 1 ended');
    });

    test('Reply on forum', async ({ page }) => {
        const navigateTo = new NavigateTo(page);
        const sideBar = new SideBar(page);
        const commentsSection = new CommentsSection(page);
        const modals = new Modals(page);
        const loginPage = new LoginPage(page);

        await navigateTo.dev();
        await modals.handleStarterModals();
        await loginPage.loginAsUser('hodon47203@nozamas.com', 'fdj@fj1R4@ua');
        await loginPage.userLoggedTrue();
        await sideBar.visitFirstForumTopic();
        await commentsSection.writeReply();
        console.log('test from fs')
        console.log('Test 2 ended');
    });

    test('Create topic on forum', async ({ page }) => {
        const navigateTo = new NavigateTo(page);
        const commentsSection = new CommentsSection(page);
        const allForums = new AllForums(page);
        const modals = new Modals(page);
        const loginPage = new LoginPage(page);
        const header = new Header(page);

        await navigateTo.dev();
        await modals.handleStarterModals();
        await loginPage.loginAsUser('hodon47203@nozamas.com', 'fdj@fj1R4@ua');
        await loginPage.userLoggedTrue();
        await header.openForum();
        await allForums.createNewTopic();
        await commentsSection.writeComment();
    });

    test('Post topic without title - field required should appear', async ({ page }) => {
        const navigateTo = new NavigateTo(page);
        const allForums = new AllForums(page);
        const modals = new Modals(page);
        const loginPage = new LoginPage(page);
        const header = new Header(page);

        await navigateTo.dev();
        await modals.handleStarterModals();
        await loginPage.loginAsUser('hodon47203@nozamas.com', 'fdj@fj1R4@ua');
        await loginPage.userLoggedTrue();
        await header.openForum();
        await allForums.topicCreationWithMissingTitleExpectErrorMsg();
        console.log('Test 3 ended');
    });

    test('Check navigateTo.homePage', async ({ page }) => {
        const navigateTo = new NavigateTo(page);
        const allForums = new AllForums(page);
        const modals = new Modals(page);
        const loginPage = new LoginPage(page);
        const header = new Header(page);

        await navigateTo.homePage();
        await modals.handleStarterModals();
        await loginPage.loginAsUser('hodon47203@nozamas.com', 'fdj@fj1R4@ua');
        await loginPage.userLoggedTrue();
    });

    test('Check language modal dont appear after it was changed', async ({page}) => {
        const modals = new Modals(page);
        const header = new Header(page);
        const sideBar = new SideBar(page);
        const homePage = new HomePage(page);
        
        await page.goto('https://hidden-info.com/pt/')
        await modals.handleStarterModals()
        await header.openValorant()
        await sideBar.sidebarNewsWidgetVisible()
        await sideBar.forumWidgetVisible();
        await homePage.topTeamsWidgetLoaded();
    })

    test('Check modal on prod', async ({page}) => {
        const modals = new Modals(page);
        const header = new Header(page);
        const sideBar = new SideBar(page);
        const homePage = new HomePage(page);
        
        await page.goto('https://bo3.gg/pt/')
        await modals.handleStarterModals()
        await header.openValorant()
        await sideBar.sidebarNewsWidgetVisible()
        await sideBar.forumWidgetVisible();
        await homePage.topTeamsWidgetLoaded();
        console.log('test from fs')
        console.log('last test')
    })

    test.use({
        viewport: { width: 1920, height: 1200 },
      });

    test('Check nav to Tournaments', async ({ page }, testInfo) => {
        const navigateTo = new NavigateTo(page);
        const header = new Header(page);
        const basePage = new BasePage(page, testInfo.title);
        const homePage = new HomePage(page);
        const modals = new Modals(page);

        await navigateTo.homePage()
        // await header.openValorant()
        await modals.handleStarterModals()
        const { discipline: initialDiscipline, locale: initialLocale } = await basePage.getDisciplineAndLocale();
        await homePage.clickAllTournamentsBtn()
        await basePage.assertDisciplineAndLocaleDidNotChange(initialDiscipline, initialLocale);
    });

    test('Check nav to News', async ({ page }, testInfo ) => {
        const navigateTo = new NavigateTo(page);
        const header = new Header(page);
        const basePage = new BasePage(page, testInfo.title);
        const modals = new Modals(page);
        const allNews = new AllNews(page);

        await navigateTo.homePage()
        await header.openValorant()
        await modals.handleStarterModals()
        const { discipline: initialDiscipline, locale: initialLocale } = await basePage.getDisciplineAndLocale();
        await header.openNews();
        await allNews.checkPageLoaded();
        await basePage.assertDisciplineAndLocaleDidNotChange(initialDiscipline, initialLocale);
    });

    test('Verify created topic present, sorted', async ({ page } ) => {
        const navigateTo = new NavigateTo(page);
        const header = new Header(page);
        const allForums = new AllForums(page);
        const modals = new Modals(page);
        const loginPage = new LoginPage(page);
        const user = users[4];
        // const user = users[5]; // if local needs

        await navigateTo.dev();
        await modals.handleStarterModals()
        await loginPage.loginAsUser(user.email, user.password);
        await header.openRandomGameDisciplineWithForum();
        await header.openForum();
        await allForums.createNewTopic();
        await header.clickBo3Logo();
        await header.openForum();
        await allForums.verifyTopicCreated();
    });

    test('test.spec - Scheduled comment', async ({ page }, testInfo ) => {
        const navigateTo = new NavigateTo(page);
        const commentsSection = new CommentsSection(page);
        const modals = new Modals(page);
        const loginPage = new LoginPage(page);
        const user = users[4];
        // const user = users[5]; // if local needs
    
        await navigateTo.logDev();
        await modals.handleStarterModals();
        await loginPage.loginAsUser(user.email, user.password);
        await commentsSection.writeComment(testInfo);
    });

    test('Issue-569 fix. No search cache', async ({ page }) => {
        const navigateTo = new NavigateTo(page);

        await navigateTo.homePage()
        await page.getByRole('button', { name: 'Ok', exact: true }).click();
        await page.getByRole('button', { name: 'Ok, I Agree' }).click();
        await page.getByRole('button', { name: 'open search input' }).click();
        await page.getByRole('textbox', { name: 'Search' }).fill('natus');
        await page.getByRole('link', { name: 'Natus Vincere ' }).click();
        await page.locator('div').filter({ hasText: /^CS2$/ }).first().click();
        await page.getByRole('link', { name: 'Valorant' }).click();
        await page.getByRole('button', { name: 'open search input' }).click();
        await page.getByRole('textbox', { name: 'Search' }).fill('natus');
        await page.getByRole('link', { name: 'Natus Vincere ' }).click();
        await page.getByRole('link', { name: 'Ukraine ANGE1 Starter' }).click();
    });



    test('csGuest16 - Check nav Menu -> Forum', async ({ page }) => {
        const navigateTo = new NavigateTo(page);
        const header = new Header(page);
        const basePage = new BasePage(page);
        const allForums = new AllForums(page);
        const modals = new Modals(page);

        await navigateTo.homePage()
        await modals.handleStarterModals();
        await header.openValorant()

            const { discipline: initialDiscipline, locale: initialLocale } = await basePage.getDisciplineAndLocale();
            await header.openForum();
            await allForums.checkPageLoaded();
            await basePage.assertDisciplineAndLocaleDidNotChange(initialDiscipline, initialLocale);
        });

        test.describe('Navigation from homepage', () => {
            navHeader.forEach(({ name, action }) => {
                test(`Nav Header -> ${name}`, async ({ page }, testInfo) => {
                    const header = new Header(page);
                    const navigateTo = new NavigateTo(page);
                    const modals = new Modals(page);
                    const basePage = new BasePage(page, testInfo.title);

                    await navigateTo.homePage()
                    await modals.handleStarterModals();
                    const { locale: initialLocale } = await basePage.getDisciplineAndLocale();
                    await action(header);
                    await basePage.assertLocaleDidNotChange(initialLocale);
                });
            });
        });
    
});