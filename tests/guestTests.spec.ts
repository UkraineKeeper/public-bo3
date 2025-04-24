import { guestFixture } from "../fixtures/GuestFixture";
import { users } from "../users/usersGit";
import { setupLogging, clearLogFile } from '../helpers/logger';
import { navHeader, csNavMenu, valorantNavMenu, gamesNavMenu, dotaNavMenu, lolNavMenu, rainbow6NavMenu } from "../links/Nav";

guestFixture.beforeEach(async ({ page }, testInfo) => {
    setupLogging(() => testInfo.title);
});

guestFixture.describe('Guest-1 Tests', async () => {

    guestFixture.beforeEach(async ({ navigateTo }) => {
        await navigateTo.homePage();
    });

    guestFixture('guest01 - Navigate to Valorant', async ({ header }) => {
        await header.openValorant();
    });

    guestFixture('guest02 - Navigate to Dota', async ({ header }) => {
        await header.openDota();
    });

    guestFixture('guest03 - Navigate to Rainbow6', async ({ header }) => {
        await header.openR6();
    });

    guestFixture('guest04 - Navigate to Games', async ({ header }) => {
        await header.openGames();
    });

    guestFixture('guest05 - Navigate to LoL', async ({ header }) => {
        await header.openLol();
    });

    navHeader.forEach(({ name, action }) => {
        guestFixture(`Nav Header -> ${name}`, async ({ header, navigateTo, basePage }, testInfo) => {

            await navigateTo.homePage()
            const { locale: initialLocale } = await basePage.getDisciplineAndLocale();
            await action(header);
            await basePage.assertLocaleDidNotChange(initialLocale);
        });
    });

    guestFixture('guestTests.spec - Scheduled comment', async ({ navigateTo, modals, commentsSection, loginPage}, testInfo ) => {
        const user = users[3];
    
        await navigateTo.logDev();
        await modals.handleStarterModals();
        await loginPage.loginAsUser(user.email, user.password);
        await commentsSection.writeComment(testInfo);
        });

// На кожну дисципліну ще зробити великий енд ту енд. Що клацатиме багато де (і редірект через меню, а не прямим посиланням)

})

guestFixture.describe('Guest-2 CS Tests', async () => {

    guestFixture.beforeEach(async ({ navigateTo }) => {
        await navigateTo.homePage();
    });

    guestFixture('csGuest01 - Store Menu Inner Texts', async ({ navigateTo, header }) => {
        await header.returnLanguageLocale();
        await header.returnMenuTranslate();
    });
    
    guestFixture('csGuest02 - CS HomePage Widgets Content Loaded', async ({navigateTo, homePage, sideBar }) => {
        await sideBar.sidebarNewsWidgetVisible()
        await homePage.topTeamsWidgetLoaded();
        await sideBar.forumWidgetVisible();
    })
    
    guestFixture('csGuest03 - Check Live CS Ingame with saved storage', async ({navigateTo, allMatches, matchPage, header }) => {
        await header.openMatchesUpcoming();
        await allMatches.visitFirstLiveMatch();
        await matchPage.livePageElementsPresent();
    })

    guestFixture('csGuest04 - CS Live Match Second', async ({ navigateTo, allMatches, matchPage, header }) => {
        await header.openMatchesUpcoming();
        await allMatches.visitSecondLiveMatch()
        await matchPage.csIngameElementsPresent();
    });

    guestFixture('csGuest05 - CS Upcoming Match First', async ({ navigateTo, matchPage, allMatches, header }) => {
        await header.openMatchesUpcoming();
        await allMatches.visitFirstUpcomingMatch();
        await matchPage.csIngameElementsPresent();
    });

    guestFixture('csGuest06 - CS Upcoming Match Second', async ({ navigateTo, matchPage, allMatches, header }) => {
        await header.openMatchesUpcoming();
        await allMatches.visitSecondUpcomingMatch();
        await matchPage.csIngameElementsPresent();
    });

    guestFixture('csGuest07 - CS Finished Match First', async ({ navigateTo, matchPage, allMatches, header }) => {
        await header.openMatchesFinished();
        await allMatches.visitFirstFinishedMatch();
        await matchPage.csIngameElementsPresent();
    });

    guestFixture('csGuest08 - CS Live Match Check First Map', async ({ matchPage, allMatches, header }) => {
        await header.openMatchesUpcoming();
        await allMatches.liveMatchCheckFirstMap();
        await matchPage.clickFirstMapBtnIfPossible();
    });

    guestFixture('csGuest09 - Store Sidebar Matches Inner Texts', async ({ header, allMatches }) => {
        await header.openMatchesUpcoming();
        await allMatches.storeAllMatchesTexts();
    });

    guestFixture('csGuest10 - News try', async ({ header, allNews }) => {
        await header.openNews();
        await allNews.test();
    });

    guestFixture('csGuest11 - Store HomePage Inner Texts', async ({ homePage }) => {
        await homePage.homePageInnerTexts();
    });

    guestFixture('csGuest12 - Store Ingame Menu Inner Texts', async ({ header, allMatches, matchPage }) => {
        await header.openMatchesFinished();
        await allMatches.visitFirstFinishedMatch();
        await matchPage.returnMenuBtnsText();
    });

    guestFixture('csGuest13 - Check nav Menu -> News', async ({ basePage, header, allNews }) => {
        const { discipline: initialDiscipline, locale: initialLocale } = await basePage.getDisciplineAndLocale();
        await header.openNews();
        await allNews.checkPageLoaded();
        await basePage.assertDisciplineAndLocaleDidNotChange(initialDiscipline, initialLocale);
    });

    guestFixture('csGuest14 - Check nav HomePage -> All News widget', async ({ basePage, homePage, allNews }) => {
        const { discipline: initialDiscipline, locale: initialLocale } = await basePage.getDisciplineAndLocale();
        await homePage.clickAllNewsBtn();
        await allNews.checkPageLoaded();
        await basePage.assertDisciplineAndLocaleDidNotChange(initialDiscipline, initialLocale);
    });

    guestFixture('csGuest15 - Check nav Menu -> Articles', async ({ basePage, header, allNews }) => {
        const { discipline: initialDiscipline, locale: initialLocale } = await basePage.getDisciplineAndLocale();
        await header.openArticles();
        await allNews.checkPageLoaded();
        await basePage.assertDisciplineAndLocaleDidNotChange(initialDiscipline, initialLocale);
    });

    guestFixture('csGuest16 - Check nav Menu -> Forum', async ({ basePage, header, allForums }) => {
        const { discipline: initialDiscipline, locale: initialLocale } = await basePage.getDisciplineAndLocale();
        await header.openForum();
        await allForums.checkPageLoaded();
        await basePage.assertDisciplineAndLocaleDidNotChange(initialDiscipline, initialLocale);
    });

    guestFixture('csGuest17 - Check nav Menu -> Upcoming matches', async ({ basePage, header, allMatches }) => {
        const { discipline: initialDiscipline, locale: initialLocale } = await basePage.getDisciplineAndLocale();
        await header.openMatchesUpcoming();
        await allMatches.checkPageLoaded();
        await basePage.assertDisciplineAndLocaleDidNotChange(initialDiscipline, initialLocale);
    });

    guestFixture('csGuest18 - Check nav Menu -> Finished finished', async ({ basePage, header, allMatches }) => {
        const { discipline: initialDiscipline, locale: initialLocale } = await basePage.getDisciplineAndLocale();
        await header.openMatchesFinished();
        await allMatches.checkPageLoaded();
        await basePage.assertDisciplineAndLocaleDidNotChange(initialDiscipline, initialLocale);
    });

    csNavMenu.forEach(({ name, action }) => {
        guestFixture(`Nav Header -> ${name}`, async ({ header, navigateTo, basePage }, testInfo) => {
            navHeader
            const { locale: initialLocale, discipline: initialDiscipline } = await basePage.getDisciplineAndLocale();
            await action(header);
            await basePage.assertDisciplineAndLocaleDidNotChange(initialDiscipline, initialLocale);
        });
    });

});

guestFixture.describe('Guest-3 VLR Tests', async () => {

    guestFixture.beforeEach(async ({ navigateTo }) => {
        await navigateTo.directlyToValorant();
    });

    guestFixture('vlrGuest01 - Store Menu Inner Texts', async ({header }) => {
        await header.returnLanguageLocale();
        await header.returnMenuTranslate();
    })

    guestFixture('vlrGuest02 - Valorant HomePage Widgets Content Loaded', async ({homePage, sideBar, header }) => {
        await sideBar.sidebarNewsWidgetVisible()
        await sideBar.forumWidgetVisible();
        await homePage.topTeamsWidgetLoaded();
    })

    guestFixture('vlrGuest03 - Store Ingame Menu Inner Texts', async ({header, allMatches, matchPage }) => {
        await header.openMatchesFinished();
        await allMatches.visitFirstFinishedMatch();
        await matchPage.returnMenuBtnsText();
    })

    guestFixture('vlrGuest04 - Store Ingame Scoreboard Columns Inner Texts', async ({navigateTo, header, allMatches, matchPage }) => {
        await header.openMatchesFinished();
        await allMatches.visitFirstFinishedMatch();
        await matchPage.returnScoreboardColumnsText();
    })

    guestFixture('vlrGuest05 - Check nav HomePage -> All News widget', async ({ homePage, allNews, basePage }) => {
        const { discipline: initialDiscipline, locale: initialLocale } = await basePage.getDisciplineAndLocale();
        await homePage.clickAllNewsBtn();
        await allNews.checkPageLoaded();
        await basePage.assertDisciplineAndLocaleDidNotChange(initialDiscipline, initialLocale);
    });

    guestFixture('vlrGuest06 - Check nav Menu -> News', async ({ basePage, header, allNews }) => {
        const { discipline: initialDiscipline, locale: initialLocale } = await basePage.getDisciplineAndLocale();
        await header.openNews();
        await allNews.checkPageLoaded();
        await basePage.assertDisciplineAndLocaleDidNotChange(initialDiscipline, initialLocale);
    });

    valorantNavMenu.forEach(({ name, action }) => {
        guestFixture(`Nav Header -> ${name}`, async ({ header, navigateTo, basePage }, testInfo) => {
            navHeader
            const { locale: initialLocale, discipline: initialDiscipline } = await basePage.getDisciplineAndLocale();
            await action(header);
            await basePage.assertDisciplineAndLocaleDidNotChange(initialDiscipline, initialLocale);
        });
    });
    
});

guestFixture.describe('Guest-4 Dota Tests', async () => {
    guestFixture.beforeEach(async ({ navigateTo }) => {
        await navigateTo.directlyToDota();
    });

    guestFixture('dotaGuest01 - Store Menu Inner Texts', async ({ header }) => {
        await header.returnLanguageLocale();
        await header.returnMenuTranslate();
    })

    guestFixture('dotaGuest02 - Dota HomePage Widgets Content Loaded', async ({homePage, sideBar }) => {
        await sideBar.sidebarNewsWidgetVisible()
        await sideBar.forumWidgetNotExist();
        await homePage.topTeamsWidgetLoaded();
    })

    guestFixture('dotaGuest03 - Store Ingame Scoreboard Columns Inner Text', async ({allMatches, matchPage, header }) => {
        await header.openMatchesFinished();
        await allMatches.visitFirstFinishedMatch();
        await matchPage.clickFirstMap();
        await matchPage.returnScoreboardColumnsText();
    })

    guestFixture('dotaGuest04 - Check nav Menu -> News', async ({ basePage, header, allNews }) => {
        const { discipline: initialDiscipline, locale: initialLocale } = await basePage.getDisciplineAndLocale();
        await header.openNews();
        await allNews.checkPageLoaded();
        await basePage.assertDisciplineAndLocaleDidNotChange(initialDiscipline, initialLocale);
    });

    guestFixture('dotaGuest05 - Check nav HomePage -> All News widget', async ({ basePage, homePage, allNews }) => {
        const { discipline: initialDiscipline, locale: initialLocale } = await basePage.getDisciplineAndLocale();
        await homePage.clickAllNewsBtn();
        await allNews.checkPageLoaded();
        await basePage.assertDisciplineAndLocaleDidNotChange(initialDiscipline, initialLocale);
    });

    dotaNavMenu.forEach(({ name, action }) => {
        guestFixture(`Nav Header -> ${name}`, async ({ header, navigateTo, basePage }, testInfo) => {
            navHeader
            const { locale: initialLocale, discipline: initialDiscipline } = await basePage.getDisciplineAndLocale();
            await action(header);
            await basePage.assertDisciplineAndLocaleDidNotChange(initialDiscipline, initialLocale);
        });
    });
});

guestFixture.describe('Guest-5 Lol Tests', async () => {

    guestFixture.beforeEach(async ({ navigateTo }) => {
        await navigateTo.directlyToLol();
    });

    guestFixture('lolGuest01 - Store Menu Inner Texts', async ({header }) => {
        await header.returnLanguageLocale();
        await header.returnMenuTranslate();
    })

    guestFixture('lolGuest02 - Lol HomePage Widgets Content Loaded', async ({homePage, sideBar }) => {
        await sideBar.sidebarNewsWidgetVisible()
        await sideBar.forumWidgetVisible();
        await homePage.topTeamsWidgetLoaded();
    })

    guestFixture('lolGuest03 - Store Ingame Scoreboard Columns Inner Text', async ({allMatches, matchPage, header }) => {
        await header.openMatchesFinished();
        await allMatches.visitFirstFinishedMatch();
        await matchPage.clickFirstMap();
        await matchPage.returnScoreboardColumnsText();
    })

    lolNavMenu.forEach(({ name, action }) => {
        guestFixture(`Nav Header -> ${name}`, async ({ header, navigateTo, basePage }, testInfo) => {
            navHeader
            const { locale: initialLocale, discipline: initialDiscipline } = await basePage.getDisciplineAndLocale();
            await action(header);
            await basePage.assertDisciplineAndLocaleDidNotChange(initialDiscipline, initialLocale);
        });
    });
});

guestFixture.describe('Guest-6 Games Discipline', async () => {
    
    guestFixture.beforeEach(async ({ navigateTo }) => {
        await navigateTo.directlyToGames();
    });

    guestFixture('gamesGuest01 - Store Menu Inner Texts', async ({navigateTo, header }) => {
        await header.returnLanguageLocale();
        await header.returnMenuTranslate();
    })

    guestFixture('gamesGuest02 - Games HomePage Widgets Content Loaded', async ({homePage, sideBar }) => {
        await sideBar.forumWidgetVisible();
        await homePage.topTeamsWidgetNotExist()
    })

    gamesNavMenu.forEach(({ name, action }) => {
        guestFixture(`Nav Header -> ${name}`, async ({ header, basePage }, testInfo) => {
            navHeader
            const { locale: initialLocale, discipline: initialDiscipline } = await basePage.getDisciplineAndLocale();
            await action(header);
            await basePage.assertDisciplineAndLocaleDidNotChange(initialDiscipline, initialLocale);
        });
    });
});

guestFixture.describe('Guest-7 Rainbow6 Discipline', async () => {

    guestFixture.beforeEach(async ({ navigateTo }) => {
        await navigateTo.directlyToRainbow6();
    });

    guestFixture('r6Guest01 - Store Menu Inner Texts', async ({header }) => {
        await header.returnLanguageLocale();
        await header.returnMenuTranslate();
    })

    guestFixture('r6Guest02 - Rainbow6 HomePage Widgets Content Loaded', async ({homePage, sideBar, header }) => {
        await sideBar.forumWidgetVisible();
        await homePage.topTeamsWidgetNotExist()
    })

    guestFixture.skip('r6Guest03 - Store Ingame Scoreboard Columns Inner Text', async ({allMatches, matchPage, header }) => {
        await header.openMatchesFinished();
        await allMatches.visitFirstFinishedMatch();
        await matchPage.clickFirstMap();
        await matchPage.returnScoreboardColumnsText();
    })

    guestFixture('r6Guest88 - Check wrong pw auth', async ({loginPage }) => {
        await loginPage.loginWithWrongCredentials();
    })

    rainbow6NavMenu.forEach(({ name, action }) => {
        guestFixture(`Nav Header -> ${name}`, async ({ header, basePage }, testInfo) => {
            navHeader
            const { locale: initialLocale, discipline: initialDiscipline } = await basePage.getDisciplineAndLocale();
            await action(header);
            await basePage.assertDisciplineAndLocaleDidNotChange(initialDiscipline, initialLocale);
        });
    });

});

    // Dota HomePage Widgets Content Loaded

    // Lol HomePage Widgets Content Loaded

    // Games HomePage Widgets Content Loaded

    // CS Prematch Widgets Content Loaded

    // Valorant Prematch Widgets Content Loaded

    // Dota Prematch Widgets Content Loaded

    // Lol Prematch Widgets Content Loaded

    // CS HomePage Hovers trigger tooltips