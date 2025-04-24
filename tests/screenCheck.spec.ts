import { screenFullPage } from "../helpers/screenFullPage";
import { baseFixture } from "../fixtures/BaseFixture";
import { urls } from "../page-objects/urls";

baseFixture.afterEach(async ({ page, sideBar }, testInfo) => {
    const isCI = process.env.CI === 'true';

    if (testInfo.annotations.some(a => a.type === 'skipAfterEach')) {
        console.log('Skipping afterEach for this test');
        if(!isCI) {
            await screenFullPage(page, testInfo.title);
        }
        return;
    }

    if (testInfo.status !== 'skipped') {
        await sideBar.checkWebPageSkeleton();
        if(!isCI) {
            await screenFullPage(page, testInfo.title);
        }
    }
});

baseFixture.describe('01 Check texts for CS Ingame', { tag: ["@CS2", "@Ingame"], }, () => { // 

    baseFixture.skip('s01csIngame-01 CS Live Match First', async ({ page }) => {
        const url = urls.reusable.ingame.CSLiveMatchFirst;

        if (!url) {
            baseFixture.skip();
        }
        await page.goto(urls.reusable.ingame.CSLiveMatchFirst, {waitUntil: "load"});
    });

    baseFixture.skip('s01csIngame-02 CS Live Match Second', async ({ page }) => {
        const url = urls.reusable.ingame.CSLiveMatchSecond;

        if (!url) {
            baseFixture.skip();
        }
        await page.goto(urls.reusable.ingame.CSLiveMatchSecond, {waitUntil: "load"});
    });

    baseFixture.skip('s01csIngame-03 CS Upcoming Match First', async ({ page }) => {
        await page.goto(urls.reusable.ingame.CSUpcomingMatchFirst, {waitUntil: "load"});
    });

    baseFixture.skip('s01csIngame-04 CS Upcoming Match Second', async ({ page }) => {
        await page.goto(urls.reusable.ingame.CSUpcomingMatchSecond, {waitUntil: "load"});
    });

    baseFixture.skip('s01csIngame-05 CS Finished Match First', async ({ page }) => {
        await page.goto(urls.reusable.ingame.CSFinishedMatchFirst, {waitUntil: "load"});
    });

    baseFixture.skip('s01csIngame-06 CS Finished Match Second', async ({ page }) => {
        await page.goto(urls.reusable.ingame.CSFinishedMatchSecond, {waitUntil: "load"});
    });

    baseFixture('s01csIngame-07 CS Advanced Finished Match', async ({ page }) => {
        await page.goto(urls.cs2.ingame.AdvancedFinishedMatch, {waitUntil: "load"});
        
    });

    baseFixture('s01csIngame-08 CS Basic Finished Match', async ({ page }) => {
        await page.goto(urls.cs2.ingame.BasicFinishedMatch, {waitUntil: "load"});
        
    });

    baseFixture('s01csIngame-09 CS No Data Finished Match', async ({ page }) => {
        await page.goto(urls.cs2.ingame.NoDataFinishedMatch, {waitUntil: "load"});
        
    });

    baseFixture('s01csIngame-10 CS Bo1 Advanced Finished Match', async ({ page }) => {
        await page.goto(urls.cs2.ingame.Bo1AdvancedFinishedMatch, {waitUntil: "load"});
        
    });
    
    baseFixture('s01csIngame-11 CS Bo1 Basic Finished Match', async ({ page }) => {
        await page.goto(urls.cs2.ingame.Bo1BasicFinishedMatch, {waitUntil: "load"});
        
    });
    
    baseFixture('s01csIngame-12 CS Bo1 No Data Finished Match', async ({ page }) => {
        await page.goto(urls.cs2.ingame.Bo1NoDataFinishedMatch, {waitUntil: "load"});
        
    });

    baseFixture('s01csIngame-13 CS Basic Map', async ({ page }) => {
        await page.goto(urls.cs2.ingame.BasicMap, {waitUntil: "load"});
        
    });

    baseFixture('s01csIngame-14 CS Advanced Map', async ({ page }) => {
        await page.goto(urls.cs2.ingame.AdvancedMap, {waitUntil: "load"});
        
    });

    baseFixture('s01csIngame-15 CS Round', async ({ page }) => {
        await page.goto(urls.cs2.ingame.Round, {waitUntil: "load"});
        
    });

    baseFixture('s01csIngame-16 CS Performance', async ({ page }) => {
        await page.goto(urls.cs2.ingame.Performance, {waitUntil: "load"});
        
    });

    baseFixture('s01csIngame-17 CS Aim', async ({ page }) => {
        await page.goto(urls.cs2.ingame.Aim, {waitUntil: "load"});
        
    });

    baseFixture('s01csIngame-18 CS Granades', async ({ page }) => {
        await page.goto(urls.cs2.ingame.Granades, {waitUntil: "load"});
        
    });

    baseFixture('s01csIngame-19 CS Devices', async ({ page }) => {
        await page.goto(urls.cs2.ingame.Devices, {waitUntil: "load"});
        
    });

    baseFixture('s01csIngame-20 CS Economy', async ({ page }) => {
        await page.goto(urls.cs2.ingame.Economy, {waitUntil: "load"});
        
    });

    baseFixture('s01csIngame-21 CS Round Performance', async ({ page }) => {
        await page.goto(urls.cs2.ingame.RoundPerformance, {waitUntil: "load"});
        
    });

    baseFixture('s01csIngame-22 CS Round Aim', async ({ page }) => {
        await page.goto(urls.cs2.ingame.RoundAim, {waitUntil: "load"});
        
    });

    baseFixture('s01csIngame-23 CS Round Granades', async ({ page }) => {
        await page.goto(urls.cs2.ingame.RoundGranades, {waitUntil: "load"});
        
    });

    baseFixture('s01csIngame-24 CS Round Devices', async ({ page }) => {
        await page.goto(urls.cs2.ingame.RoundDevices, {waitUntil: "load"});
        
    });

    baseFixture('s01csIngame-25 CS Round Economy', async ({ page }) => {
        await page.goto(urls.cs2.ingame.RoundEconomy, {waitUntil: "load"});
        
    });
});

baseFixture.describe('02 Check texts for CS Menu', { tag: ["@CS2", "@Menu"], }, () => {

    baseFixture('s02csMenu-01 CS HomePage', async ({ page }) => {
        await page.goto(urls.cs2.menu.HomePage);
        
    });

    baseFixture('s02csMenu-02 CS Upcoming Matches', async ({ page }) => {
        await page.goto(urls.cs2.menu.UpcomingMatches);
        
    });

    baseFixture('s02csMenu-03 CS Finished Matches', async ({ page }) => {
        await page.goto(urls.cs2.menu.FinishedMatches);
        
    });

    baseFixture('s02csMenu-04 CS Upcoming Tournaments', async ({ page }) => {
        await page.goto(urls.cs2.menu.UpcomingTournaments);
        
    });

    baseFixture('s02csMenu-05 CS Finished Tournaments', async ({ page }) => {
        await page.goto(urls.cs2.menu.FinishedTournaments);
        
    });

    baseFixture('s02csMenu-06 CS Players', async ({ page }) => {
        await page.goto(urls.cs2.menu.Players);
        
    });

    baseFixture('s02csMenu-07 CS Team Earnings', async ({ page }) => {
        await page.goto(urls.cs2.menu.TeamEarnings);
        
    });

    baseFixture('s02csMenu-08 CS Team Valve Ranking', async ({ page }) => {
        await page.goto(urls.cs2.menu.TeamValveRanking);
        
    });

    baseFixture('s02csMenu-09 CS News', async ({ page }) => {
        await page.goto(urls.cs2.menu.News);
        
    });

    baseFixture('s02csMenu-10 CS Articles', async ({ page }) => {
        await page.goto(urls.cs2.menu.Articles);
        
    });

    baseFixture('s02csMenu-11 CS Wiki', async ({ page }) => {
        await page.goto(urls.cs2.menu.Wiki);
        
    });

    baseFixture('s02csMenu-12 CS Forum', async ({ page }) => {
        await page.goto(urls.cs2.menu.Forum);
        
    });

    baseFixture('s02csMenu-13 CS Predictions', async ({ page }) => {
        await page.goto(urls.cs2.menu.Predictions);
        
    });

    baseFixture('s02csMenu-14 CS Records', async ({ page }) => {
        await page.goto(urls.cs2.menu.Records);
        
    });

    baseFixture('s02csMenu-15 CS Compare Teams', async ({ page }) => {
        await page.goto(urls.cs2.menu.CompareTeams);
        
    });

    baseFixture('s02csMenu-16 CS Compare Players', async ({ page }) => {
        await page.goto(urls.cs2.menu.ComparePlayers);
        
    });

    baseFixture('s02csMenu-17 CS Pickems', async ({ page }) => {
        await page.goto(urls.cs2.menu.Pickems);
        
    });
});

baseFixture.describe('03 Check texts for CS Profiles + Content', { tag: ["@CS2", "@Profiles"], }, () => { //

    baseFixture('s03csContent-01 CS Tournament Overview', async ({ page, baseProfiles }) => {
        await page.goto(urls.cs2.profiles.TournamentOverview, {waitUntil: "load"});
        await page.waitForResponse(RegExp("teams_squad"))
        await baseProfiles.matchesWidgetLoaded();
    });

    baseFixture('s03csContent-02 CS Tournament Stages', async ({ page }) => {
        await page.goto(urls.cs2.profiles.TournamentStages, {waitUntil: "load"}); 
    });

    baseFixture('s03csContent-03 CS Tournament Pickems', async ({ page }) => {
        await page.goto(urls.cs2.profiles.TournamentPickems, {waitUntil: "load"});
        
    });

    baseFixture('s03csContent-04 CS Tournament Results', async ({ page }) => {
        await page.goto(urls.cs2.profiles.TournamentResults);
        
    });

    baseFixture('s03csContent-05 CS Tournament Matches', async ({ page }) => { // <--- Always Changed
        await page.goto(urls.cs2.profiles.TournamentMatches);
        
    });

    baseFixture('s03csContent-06 CS Tournament Teams', async ({ page }) => {
        await page.goto(urls.cs2.profiles.TournamentTeams);
        
    });

    baseFixture('s03csContent-07 CS Tournament Stats', async ({ page }) => {
        await page.goto(urls.cs2.profiles.TournamentStats, {waitUntil: "load"});
        
    });

    baseFixture('s03csContent-08 CS Player Overview', async ({ page, baseProfiles }) => {
        await page.goto(urls.cs2.profiles.PlayerOverview, {waitUntil: "load"});
        await baseProfiles.matchesWidgetLoaded();
    });

    baseFixture('s03csContent-09 CS Player Career', async ({ page }) => {
        await page.goto(urls.cs2.profiles.PlayerCareer);
        
    });

    baseFixture('s03csContent-10 CS Player Matches', async ({ page }) => {
        await page.goto(urls.cs2.profiles.PlayerMatches);
        
    });

    baseFixture('s03csContent-11 CS Player Tournaments', async ({ page }) => {
        await page.goto(urls.cs2.profiles.PlayerTournaments);
        
    });

    baseFixture('s03csContent-12 CS Player Stats', async ({ page }) => {
        await page.goto(urls.cs2.profiles.PlayerStats, {waitUntil: "load"});
        
    });

    baseFixture('s03csContent-13 CS Team Overview', async ({ page, baseProfiles }) => {
        await page.goto(urls.cs2.profiles.TeamOverview, {waitUntil: "load"});
        await baseProfiles.matchesWidgetLoaded();
    });

    baseFixture('s03csContent-14 CS Team Squad', async ({ page }) => {
        await page.goto(urls.cs2.profiles.TeamSquad);
        
    });

    baseFixture('s03csContent-15 CS Team Matches', async ({ page }) => {
        await page.goto(urls.cs2.profiles.TeamMatches);
        
    });

    baseFixture('s03csContent-16 CS Team Tournaments', async ({ page }) => {
        await page.goto(urls.cs2.profiles.TeamTournaments);
        
    });

    baseFixture('s03csContent-17 CS Team Stats', async ({ page }) => {
        await page.goto(urls.cs2.profiles.TeamStats, {waitUntil: "load"});
        
    });

    baseFixture('s03csContent-18 CS Inside News', async ({ page }) => {
        await page.goto(urls.cs2.profiles.InsideNews);
        
    });

    baseFixture('s03csContent-19 CS Inside Article', async ({ page }) => {
        await page.goto(urls.cs2.profiles.InsideArticle);
        
    });

    baseFixture('s03csContent-20 CS Inside Wiki', async ({ page }) => {
        await page.goto(urls.cs2.profiles.InsideWiki);
        
    });

    baseFixture('s03csContent-21 CS Inside Forum', async ({ page }) => {
        await page.goto(urls.cs2.profiles.InsideForum);
        
    });

    baseFixture('s03csContent-22 CS Inside Predictions', async ({ page }) => {
        await page.goto(urls.cs2.profiles.InsidePredictions);
        
    });

    baseFixture('s03csContent-23 CS Teams Compare Inserted', async ({ page }) => {
        await page.goto(urls.cs2.profiles.TeamsCompareInserted, {waitUntil: "load"});
        
    });

    baseFixture('s03csContent-24 CS Players Compare Inserted', async ({ page }) => {
        await page.goto(urls.cs2.profiles.PlayersCompareInserted, {waitUntil: "load"});
        
    });

    baseFixture('s03csContent-25 CS Pickem', async ({ page }) => {
        await page.goto(urls.cs2.profiles.Pickem, {waitUntil: "load"});
        
    });

    baseFixture('s03csContent-26 User Overview', async ({ page }) => {
        await page.goto(urls.cs2.profiles.UserOverview);
        
    });

    baseFixture('s03csContent-27 User Comments', async ({ page }) => {
        await page.goto(urls.cs2.profiles.UserComments);
        
    });

    baseFixture('s03csContent-28 User Pickems', async ({ page }) => {
        await page.goto(urls.cs2.profiles.UserPickems);
        
    });

    baseFixture('s03csContent-29 User Pickem in Tournament', async ({ page }) => {
        await page.goto(urls.cs2.profiles.UserPickemInTournament, {waitUntil: "load"});
        
    });

    baseFixture('s03csContent-30 Premium Subscription', async ({ page }) => {
        await page.goto(urls.cs2.profiles.PremiumSubscription);
        
    });

    baseFixture('s03csContent-31 Wiki Help Ukraine', async ({ page }) => {
        await page.goto(urls.cs2.profiles.WikiHelpUkraine);
        
    });

    baseFixture('s03csContent-32 Wiki Privacy', async ({ page }) => {
        await page.goto(urls.cs2.profiles.WikiPrivacy);
        
    });

    baseFixture('s03csContent-33 CCT Overview', async ({ page }) => {
        await page.goto(urls.cs2.profiles.CCTOverview);
        await page.waitForResponse(RegExp("base_news"))
        baseFixture.info().annotations.push({ type: 'skipAfterEach' });
    });

    baseFixture('s03csContent-34 CCT Results', async ({ page }) => {
        await page.goto(urls.cs2.profiles.CCTResults);
        
    });

    baseFixture('s03csContent-35 CCT Matches', async ({ page }) => {
        await page.goto(urls.cs2.profiles.CCTMatches);
        
    });

    baseFixture('s03csContent-36 CCT Teams', async ({ page }) => {
        await page.goto(urls.cs2.profiles.CCTTeams);
        
    });

    baseFixture('s03csContent-37 CCT Players', async ({ page }) => {
        await page.goto(urls.cs2.profiles.CCTPlayers);
        
    });

    baseFixture('s03csContent-38 CS All Players Main', async ({ page }) => {
        await page.goto(urls.cs2.profiles.AllPlayersMain);
    });

    baseFixture('s03csContent-39 CS All Players Performance', async ({ page }) => {
        await page.goto(urls.cs2.profiles.AllPlayersPerformance);
    });

    baseFixture('s03csContent-40 CS All Players Aim', async ({ page }) => {
        await page.goto(urls.cs2.profiles.AllPlayersAim);
    });

    baseFixture('s03csContent-41 CS All Players Grenades', async ({ page }) => {
        await page.goto(urls.cs2.profiles.AllPlayersGrenades);
    });

    baseFixture('s03csContent-42 CS All Players Primary Devices', async ({ page }) => {
        await page.goto(urls.cs2.profiles.AllPlayersPrimaryDevices);
    });

    baseFixture('s03csContent-43 CS All Players Pistols', async ({ page }) => {
        await page.goto(urls.cs2.profiles.AllPlayersPistols);
    });

    baseFixture('s03csContent-44 CS All Players Economy', async ({ page }) => {
        await page.goto(urls.cs2.profiles.AllPlayersEconomy);
    });

    baseFixture('s03csContent-45 CS All Players Multikills', async ({ page }) => {
        await page.goto(urls.cs2.profiles.AllPlayersMultikills);
    });

    baseFixture('s03csContent-46 CS All Players Clutches', async ({ page }) => {
        await page.goto(urls.cs2.profiles.AllPlayersClutches);
    });

    baseFixture('s03csContent-47 CS Player Maps', async ({ page }) => {
        await page.goto(urls.cs2.profiles.PlayerMaps);
    });

    baseFixture('s03csContent-48 CS Coach Overview', async ({ page, baseProfiles }) => {
        await page.goto(urls.cs2.profiles.CoachOverview);
        await baseProfiles.matchesWidgetLoaded();
    });

    baseFixture('s03csContent-49 CS Coach Career', async ({ page }) => {
        await page.goto(urls.cs2.profiles.CoachCareer);
    });

    baseFixture('s03csContent-49 CS Coach Matches', async ({ page }) => {
        await page.goto(urls.cs2.profiles.CoachMatches);
    });

    baseFixture('s03csContent-49 CS Coach Tournaments', async ({ page }) => {
        await page.goto(urls.cs2.profiles.CoachTournaments);
    });

    baseFixture('s03csContent-50 CS Wiki Cookie', async ({ page }) => {
        await page.goto(urls.cs2.profiles.WikiCookie);
    });

    baseFixture('s03csContent-51 CS Author', async ({ page }) => {
        await page.goto(urls.cs2.profiles.Author);
    });
});

baseFixture.describe('04 Check texts for VLR Ingame', { tag: ["@Valorant", "@Ingame"], }, () => { // 

    baseFixture.skip('s04vlrIngame-01 VLR Live Match First', async ({ page }) => { // <--- Always Changed
        const url = urls.reusable.ingame.ValorantLiveMatchFirst;

        if (!url) {
            baseFixture.skip();
        }
        await page.goto(urls.reusable.ingame.ValorantLiveMatchFirst);
    });

    baseFixture.skip('s04vlrIngame-02 VLR Live Match Second', async ({ page }) => { // <--- Always Changed
        const url = urls.reusable.ingame.ValorantLiveMatchSecond;

        if (!url) {
            baseFixture.skip();
        }
        await page.goto(urls.reusable.ingame.ValorantLiveMatchSecond);
    });

    baseFixture.skip('s04vlrIngame-03 VLR Upcoming Match First', async ({ page }) => { // <--- Always Changed
        await page.goto(urls.reusable.ingame.ValorantUpcomingMatchFirst);
    });

    baseFixture.skip('s04vlrIngame-04 VLR Upcoming Match Second', async ({ page }) => { // <--- Always Changed
        await page.goto(urls.reusable.ingame.ValorantUpcomingMatchSecond);
    });

    baseFixture.skip('s04vlrIngame-05 VLR Finished Match First', async ({ page }) => {
        await page.goto(urls.reusable.ingame.ValorantFinishedMatchFirst);
    });

    baseFixture.skip('s04vlrIngame-06 VLR Finished Match Second', async ({ page }) => {
        await page.goto(urls.reusable.ingame.ValorantFinishedMatchSecond);
    });

    baseFixture('s04vlrIngame-07 VLR Full Data Finished Match', async ({ page }) => {
        await page.goto(urls.valorant.ingame.FullDataFinishedMatch);
    });

    baseFixture('s04vlrIngame-08 VLR No Data Finished Match', async ({ page }) => {
        await page.goto(urls.valorant.ingame.NoDataFinishedMatch);
    });

    baseFixture('s04vlrIngame-09 VLR Bo1 Full Data Finished Match', async ({ page }) => {
        await page.goto(urls.valorant.ingame.Bo1FullDataFinishedMatch);
    });

    baseFixture('s04vlrIngame-10 VLR Bo1 No Data Finished Match', async ({ page }) => {
        await page.goto(urls.valorant.ingame.Bo1NoDataFinishedMatch);
    });

    baseFixture('s04vlrIngame-11 VLR Performance', async ({ page }) => {
        await page.goto(urls.valorant.ingame.Performance);
    });

    baseFixture('s04vlrIngame-12 VLR Aim', async ({ page }) => {
        await page.goto(urls.valorant.ingame.Aim);
    });

    baseFixture('s04vlrIngame-13 VLR Devices', async ({ page }) => {
        await page.goto(urls.valorant.ingame.Devices);
    });

    baseFixture('s04vlrIngame-14 VLR Economy', async ({ page }) => {
        await page.goto(urls.valorant.ingame.Economy);
    });

    baseFixture('s04vlrIngame-15 VLR Round Performance', async ({ page }) => {
        await page.goto(urls.valorant.ingame.RoundPerformance);
    });

    baseFixture('s04vlrIngame-16 VLR Round Aim', async ({ page }) => {
        await page.goto(urls.valorant.ingame.RoundAim);
    });

    baseFixture('s04vlrIngame-17 VLR Round Devices', async ({ page }) => {
        await page.goto(urls.valorant.ingame.RoundDevices);
    });

    baseFixture('s04vlrIngame-18 VLR Round Economy', async ({ page }) => {
        await page.goto(urls.valorant.ingame.RoundEconomy);
    });

    baseFixture('s04vlrIngame-19 VLR Round Overview', async ({ page }) => {
        await page.goto(urls.valorant.ingame.RoundOverview);
    });
});

baseFixture.describe('05 Check texts for VLR Menu', { tag: ["@Valorant", "@Menu"], }, () => {

    baseFixture('s05vlrMenu-01 Vlr Homepage', async ({ page }) => {
        await page.goto(urls.valorant.menu.HomePage);
        
    });

    baseFixture('s05vlrMenu-02 Vlr Upcoming Matches', async ({ page }) => {
        await page.goto(urls.valorant.menu.UpcomingMatches);
        
    });

    baseFixture('s05vlrMenu-03 Vlr Finished Matches', async ({ page }) => {
        await page.goto(urls.valorant.menu.FinishedMatches);
        
    });

    baseFixture('s05vlrMenu-04 Vlr Upcoming Tournaments', async ({ page }) => {
        await page.goto(urls.valorant.menu.UpcomingTournaments);
        
    });

    baseFixture('s05vlrMenu-05 Vlr Finished Tournaments', async ({ page }) => {
        await page.goto(urls.valorant.menu.FinishedTournaments);
        
    });

    baseFixture('s05vlrMenu-06 Vlr Players', async ({ page }) => {
        await page.goto(urls.valorant.menu.Players);
        
    });

    baseFixture('s05vlrMenu-07 Vlr Team Earnings', async ({ page }) => {
        await page.goto(urls.valorant.menu.TeamEarnings);
        
    });

    baseFixture('s05vlrMenu-08 Vlr News', async ({ page }) => {
        await page.goto(urls.valorant.menu.News);
        
    });

    baseFixture('s05vlrMenu-09 Vlr Articles', async ({ page }) => {
        await page.goto(urls.valorant.menu.Articles);
        
    });

    baseFixture('s05vlrMenu-10 Vlr Forum', async ({ page }) => {
        await page.goto(urls.valorant.menu.Forum);
        
    });

    baseFixture('s05vlrMenu-11 Vlr Predictions', async ({ page }) => {
        await page.goto(urls.valorant.menu.Predictions);
        
    });

    baseFixture('s05vlrMenu-12 Vlr Pickems', async ({ page }) => {
        await page.goto(urls.valorant.menu.Pickems);
        
    });

    baseFixture('s05vlrMenu-13 Vlr Crosshairs', async ({ page }) => {
        await page.goto(urls.valorant.menu.Crosshairs);
    });
});

baseFixture.describe('06 Check texts for VLR Profiles + Content', { tag: ["@Valorant", "@Profiles"], }, () => { // 

    baseFixture('s06vlrContent-01 Vlr Tournament Overview', async ({ page, baseProfiles }) => {
        await page.goto(urls.valorant.profiles.TournamentOverview, {waitUntil: "load"});
        await baseProfiles.matchesWidgetLoaded();
    });

    baseFixture('s06vlrContent-02 Vlr Tournament Stages', async ({ page }) => {
        await page.goto(urls.valorant.profiles.TournamentStages);
    });

    baseFixture('s06vlrContent-03 Vlr Tournament Results', async ({ page }) => {
        await page.goto(urls.valorant.profiles.TournamentResults);
    });

    baseFixture('s06vlrContent-04 Vlr Tournament Matches', async ({ page }) => {
        await page.goto(urls.valorant.profiles.TournamentMatches);
    });

    baseFixture('s06vlrContent-05 Vlr Tournament Teams', async ({ page }) => {
        await page.goto(urls.valorant.profiles.TournamentTeams);
    });

    baseFixture('s06vlrContent-06 Vlr Player Overview', async ({ page, baseProfiles }) => {
        await page.goto(urls.valorant.profiles.PlayerOverview, {waitUntil: "load"});
        await baseProfiles.matchesWidgetLoaded();
    });

    baseFixture('s06vlrContent-07 Vlr Player Matches', async ({ page }) => {
        await page.goto(urls.valorant.profiles.PlayerMatches);
    });

    baseFixture('s06vlrContent-08 Vlr Player Tournaments', async ({ page }) => {
        await page.goto(urls.valorant.profiles.PlayerTournaments);
    });

    baseFixture('s06vlrContent-09 Vlr Team Overview', async ({ page, baseProfiles }) => {
        await page.goto(urls.valorant.profiles.TeamOverview, {waitUntil: "load"});
        await baseProfiles.matchesWidgetLoaded();
    });

    baseFixture('s06vlrContent-10 Vlr Team Squad', async ({ page }) => {
        await page.goto(urls.valorant.profiles.TeamSquad);
    });

    baseFixture('s06vlrContent-11 Vlr Team Matches', async ({ page }) => {
        await page.goto(urls.valorant.profiles.TeamMatches);
    });

    baseFixture('s06vlrContent-12 Vlr Team Tournaments', async ({ page }) => {
        await page.goto(urls.valorant.profiles.TeamTournaments);
    });

    baseFixture('s06vlrContent-13 Vlr Inside News', async ({ page }) => {
        await page.goto(urls.valorant.profiles.InsideNews);
    });

    baseFixture('s06vlrContent-14 Vlr Inside Article', async ({ page }) => {
        await page.goto(urls.valorant.profiles.InsideArticle);
    });

    baseFixture('s06vlrContent-15 Vlr Inside Forum', async ({ page }) => {
        await page.goto(urls.valorant.profiles.InsideForum); 
    });

    baseFixture('s06vlrContent-16 Vlr Inside Predictions', async ({ page }) => {
        await page.goto(urls.valorant.profiles.InsidePredictions);
    });

    baseFixture('s06vlrContent-17 Inside Pickem', async ({ page }) => {
        await page.goto(urls.valorant.profiles.InsidePickem, {waitUntil: "load"});
    });

    baseFixture('s06vlrContent-18 Vlr Crosshair Top Players', async ({ page }) => {
        await page.goto(urls.valorant.profiles.CrosshairTopPlayers, {waitUntil: "load"});
    });

    baseFixture('s06vlrContent-19 Vlr Crosshair Presets', async ({ page }) => {
        await page.goto(urls.valorant.profiles.CrosshairPresets, {waitUntil: "load"});
    });

    baseFixture('s06vlrContent-20 Vlr Players Performance', async ({ page }) => {
        await page.goto(urls.valorant.profiles.PlayersPerformance);
    });

    baseFixture('s06vlrContent-21 Vlr Players Aim', async ({ page }) => {
        await page.goto(urls.valorant.profiles.PlayersAim);
    });

    baseFixture('s06vlrContent-22 Vlr Players Multikills', async ({ page }) => {
        await page.goto(urls.valorant.profiles.PlayersMultikills);
    });

    baseFixture('s06vlrContent-23 Vlr Players Clutches', async ({ page }) => {
        await page.goto(urls.valorant.profiles.PlayersClutches);
    });

    baseFixture('s06vlrContent-24 Vlr Players Economy', async ({ page }) => {
        await page.goto(urls.valorant.profiles.PlayersEconomy);
    });

    baseFixture('s06vlrContent-25 Vlr Coach Overview', async ({ page, baseProfiles }) => {
        await page.goto(urls.valorant.profiles.CoachOverview);
        await baseProfiles.matchesWidgetLoaded();
    });

    baseFixture('s06vlrContent-26 Vlr Coach Career', async ({ page }) => {
        await page.goto(urls.valorant.profiles.CoachCareer);
    });

    baseFixture('s06vlrContent-27 Vlr Coach Matches', async ({ page }) => {
        await page.goto(urls.valorant.profiles.CoachMatches);
    });

    baseFixture('s06vlrContent-28 Vlr Coach Tournaments', async ({ page }) => {
        await page.goto(urls.valorant.profiles.CoachTournaments);
    });

    baseFixture('s06vlrContent-29 Vlr Player Career', async ({ page }) => {
        await page.goto(urls.valorant.profiles.PlayerCareer, {waitUntil: "load"});
    });
});

baseFixture.describe('07 Check texts for Dota Ingame', { tag: ["@Dota", "@Ingame"], }, () => { // 

    baseFixture.skip('s07dotaIngame-01 Dota Live Match First', async ({ page }) => {
        const url = urls.reusable.ingame.DotaLiveMatchFirst;

        if (!url) {
            baseFixture.skip();
        }
        await page.goto(urls.reusable.ingame.DotaLiveMatchFirst);
    });

    baseFixture.skip('s07dotaIngame-02 Dota Live Match Second', async ({ page }) => {
        const url = urls.reusable.ingame.DotaLiveMatchSecond;

        if (!url) {
            baseFixture.skip();
        }
        await page.goto(urls.reusable.ingame.DotaLiveMatchSecond);
    });

    baseFixture.skip('s07dotaIngame-03 Dota Upcoming Match First', async ({ page }) => {
        await page.goto(urls.reusable.ingame.DotaUpcomingMatchFirst);
    });

    baseFixture.skip('s07dotaIngame-04 Dota Upcoming Match Second', async ({ page }) => {
        await page.goto(urls.reusable.ingame.DotaUpcomingMatchSecond);
    });

    baseFixture.skip('s07dotaIngame-05 Dota Finished Match First', async ({ page }) => {
        await page.goto(urls.reusable.ingame.DotaFinishedMatchFirst);
    });

    baseFixture.skip('s07dotaIngame-06 Dota Finished Match Second', async ({ page }) => {
        await page.goto(urls.reusable.ingame.DotaFinishedMatchSecond);
    });

    baseFixture('s07dotaIngame-07 Dota Full Data Finished Match', async ({ page }) => {
        await page.goto(urls.dota.ingame.FullDataFinishedMatch);
    });

    baseFixture('s07dotaIngame-08 Dota No Data Finished Match', async ({ page }) => {
        await page.goto(urls.dota.ingame.NoDataFinishedMatch);
    });

    baseFixture('s07dotaIngame-09 Dota Map', async ({ page }) => {
        await page.goto(urls.dota.ingame.Map);
    });

    baseFixture('s07dotaIngame-10 Dota No Data Finished Map', async ({ page }) => {
        await page.goto(urls.dota.ingame.NoDataFinishedMap);
    });
});

baseFixture.describe('08 Check texts for Dota Menu', { tag: ["@Dota", "@Menu"], }, () => {

    baseFixture('s08dotaMenu-01 Dota Homepage', async ({ page }) => {
        await page.goto(urls.dota.menu.HomePage);
    });

    baseFixture('s08dotaMenu-02 Dota Upcoming Matches', async ({ page }) => {
        await page.goto(urls.dota.menu.UpcomingMatches);
    });

    baseFixture('s08dotaMenu-03 Dota Finished Matches', async ({ page }) => {
        await page.goto(urls.dota.menu.FinishedMatches);
    });

    baseFixture('s08dotaMenu-04 Dota Upcoming Tournaments', async ({ page }) => {
        await page.goto(urls.dota.menu.UpcomingTournaments); 
    });

    baseFixture('s08dotaMenu-05 Dota Finished Tournaments', async ({ page }) => {
        await page.goto(urls.dota.menu.FinishedTournaments);
    });

    baseFixture('s08dotaMenu-06 Dota Players', async ({ page }) => {
        await page.goto(urls.dota.menu.Players);
    });

    baseFixture('s08dotaMenu-07 Dota Team Earnings', async ({ page }) => {
        await page.goto(urls.dota.menu.TeamEarnings);
    });
    
    baseFixture('s08dotaMenu-08 Dota News', async ({ page }) => {
        await page.goto(urls.dota.menu.News);
    });

    baseFixture('s08dotaMenu-09 Dota Articles', async ({ page }) => {
        await page.goto(urls.dota.menu.Articles);
    });

    baseFixture('s08dotaMenu-10 Dota Predictions', async ({ page }) => {
        await page.goto(urls.dota.menu.Predictions);
    });

    baseFixture('s08dotaMenu-11 Dota Heroes', async ({ page }) => {
        await page.goto(urls.dota.menu.Heroes);
    });
});

baseFixture.describe('09 Check texts for Dota Profiles + Content', { tag: ["@Dota", "@Profiles"], }, () => { // 

    baseFixture('s09dotaContent-01 Dota Tournament Overview', async ({ page, baseProfiles }) => {
        await page.goto(urls.dota.profiles.TournamentOverview, {waitUntil: "load"});
        await baseProfiles.matchesWidgetLoaded();
    });

    baseFixture('s09dotaContent-03 Dota Tournament Results', async ({ page }) => {
        await page.goto(urls.dota.profiles.TournamentResults);
    });

    baseFixture('s09dotaContent-04 Dota Tournament Matches', async ({ page }) => {
        await page.goto(urls.dota.profiles.TournamentMatches);
    });

    baseFixture('s09dotaContent-05 Dota Tournament Teams', async ({ page }) => {
        await page.goto(urls.dota.profiles.TournamentTeams);
    });

    baseFixture('s09dotaContent-06 Dota Player Overview', async ({ page, baseProfiles }) => {
        await page.goto(urls.dota.profiles.PlayerOverview, {waitUntil: "load"});
        await baseProfiles.matchesWidgetLoaded();
    });

    baseFixture('s09dotaContent-07 Dota Player Matches', async ({ page }) => {
        await page.goto(urls.dota.profiles.PlayerMatches);
    });

    baseFixture('s09dotaContent-08 Dota Player Tournaments', async ({ page }) => {
        await page.goto(urls.dota.profiles.PlayerTournaments);
    });

    baseFixture('s09dotaContent-09 Dota Team Overview', async ({ page, baseProfiles }) => {
        await page.goto(urls.dota.profiles.TeamOverview, {waitUntil: "load"}); 
        await baseProfiles.matchesWidgetLoaded();
    });

    baseFixture('s09dotaContent-10 Dota Team Squad', async ({ page }) => {
        await page.goto(urls.dota.profiles.TeamSquad);
    });

    baseFixture('s09dotaContent-11 Dota Team Matches', async ({ page }) => {
        await page.goto(urls.dota.profiles.TeamMatches);
    });

    baseFixture('s09dotaContent-12 Dota Team Tournaments', async ({ page }) => {
        await page.goto(urls.dota.profiles.TeamTournaments);
    });
    
    baseFixture('s09dotaContent-13 Dota Inside News', async ({ page }) => {
        await page.goto(urls.dota.profiles.InsideNews);
    });

    baseFixture('s09dotaContent-14 Dota Inside Article', async ({ page }) => {
        await page.goto(urls.dota.profiles.InsideArticle); 
    });

    baseFixture('s09dotaContent-15 Dota Coach Overview', async ({ page, baseProfiles }) => {
        await page.goto(urls.dota.profiles.CoachOverview);
        await baseProfiles.matchesWidgetLoaded();
    });

    // baseFixture('s09dotaContent-16 Dota Coach Career', async ({ page }) => {
    //     await page.goto(urls.dota.profiles.CoachCareer);
    // });

    baseFixture('s09dotaContent-17 Dota Coach Matches', async ({ page }) => {
        await page.goto(urls.dota.profiles.CoachMatches);
    });

    baseFixture('s09dotaContent-18 Dota Coach Tournaments', async ({ page }) => {
        await page.goto(urls.dota.profiles.CoachTournaments);
    });

    baseFixture('s09dotaContent-19 Dota Inside Predictions', async ({ page }) => {
        await page.goto(urls.dota.profiles.InsidePredictions); 
    });

    baseFixture('s09dotaContent-20 Dota Tournament Stages', async ({ page }) => {
        await page.goto(urls.dota.profiles.TournamentStages, {waitUntil: "load"}); 
    });
});

baseFixture.describe('10 Check texts for LoL Ingame', { tag: ["@LoL", "@Ingame"], }, () => { // 

    baseFixture.skip('s10lolIngame-01 LoL Live Match First', async ({ page }) => { // <--- Always Changed
        const url = urls.reusable.ingame.LoLLiveMatchFirst;

        if (!url) {
            baseFixture.skip();
        }
        await page.goto(urls.reusable.ingame.LoLLiveMatchFirst);
    });

    baseFixture.skip('s10lolIngame-02 LoL Live Match Second', async ({ page }) => { // <--- Always Changed
        const url = urls.reusable.ingame.LoLLiveMatchSecond;

        if (!url) {
            baseFixture.skip();
          }

        await page.goto(urls.reusable.ingame.LoLLiveMatchSecond);
    });

    baseFixture.skip('s10lolIngame-03 LoL Upcoming Match First', async ({ page }) => { // <--- Always Changed
        await page.goto(urls.reusable.ingame.LoLUpcomingMatchFirst); 
    });

    baseFixture.skip('s10lolIngame-04 LoL Upcoming Match Second', async ({ page }) => { // <--- Always Changed
        await page.goto(urls.reusable.ingame.LoLUpcomingMatchSecond);
    });

    baseFixture.skip('s10lolIngame-05 LoL Finished Match First', async ({ page }) => {
        await page.goto(urls.reusable.ingame.LoLFinishedMatchFirst);
    });

    baseFixture.skip('s10lolIngame-06 LoL Finished Match Second', async ({ page }) => {
        await page.goto(urls.reusable.ingame.LoLFinishedMatchSecond);
    });

    baseFixture('s10lolIngame-07 LoL Full Data Finished Match', async ({ page }) => {
        await page.goto(urls.lol.ingame.FullDataFinishedMatch);
    });

    baseFixture('s10lolIngame-08 LoL No Data Finished Match', async ({ page }) => {
        await page.goto(urls.lol.ingame.NoDataFinishedMatch);
    });

    baseFixture('s10lolIngame-09 LoL Map', async ({ page }) => {
        await page.goto(urls.lol.ingame.Map);
    });

    baseFixture('s10lolIngame-10 LoL No Data Finished Map', async ({ page }) => {
        await page.goto(urls.lol.ingame.NoDataFinishedMap);
    });
});

baseFixture.describe('11 Check texts for LoL Menu', { tag: ["@LoL", "@Menu"], }, () => {
    baseFixture('s11lolMenu-01 LoL Homepage', async ({ page }) => {
        await page.goto(urls.lol.menu.HomePage);
    });

    baseFixture('s11lolMenu-02 LoL Upcoming Matches', async ({ page }) => {
        await page.goto(urls.lol.menu.UpcomingMatches);
    });

    baseFixture('s11lolMenu-03 LoL Finished Matches', async ({ page }) => {
        await page.goto(urls.lol.menu.FinishedMatches);
    });

    baseFixture('s11lolMenu-04 LoL Upcoming Tournaments', async ({ page }) => {
        await page.goto(urls.lol.menu.UpcomingTournaments);
    });

    baseFixture('s11lolMenu-05 LoL Finished Tournaments', async ({ page }) => {
        await page.goto(urls.lol.menu.FinishedTournaments);
    });

    baseFixture('s11lolMenu-08 LoL News', async ({ page }) => {
        await page.goto(urls.lol.menu.News); 
    });

    baseFixture('s11lolMenu-09 LoL Articles', async ({ page }) => {
        await page.goto(urls.lol.menu.Articles); 
    });

    baseFixture('s11lolMenu-11 LoL Predictions', async ({ page }) => {
        await page.goto(urls.lol.menu.Predictions);
    });

    baseFixture('s11lolMenu-12 LoL Forum', async ({ page }) => {
        await page.goto(urls.lol.menu.Forum);
    });

    baseFixture('s11lolMenu-13 LoL Players', async ({ page }) => {
        await page.goto(urls.lol.menu.Players);
    });

    baseFixture('s11lolMenu-14 LoL Team Earnings', async ({ page }) => {
        await page.goto(urls.lol.menu.TeamEarnings);
    });

    baseFixture('s11lolMenu-15 LoL Champions', async ({ page }) => {
        await page.goto(urls.lol.menu.Champions);
    });

});

baseFixture.describe('12 Check texts for LoL Profiles + Content', { tag: ["@LoL", "@Profiles"], }, () => {

    baseFixture('s12lolContent-01 LoL Tournament Overview', async ({ page, baseProfiles }) => {
        await page.goto(urls.lol.profiles.TournamentOverview, {waitUntil: "load"});
        await baseProfiles.matchesWidgetLoaded();
    });

    baseFixture('s12lolContent-03 LoL Tournament Results', async ({ page }) => {
        await page.goto(urls.lol.profiles.TournamentResults);
    });

    baseFixture('s12lolContent-04 LoL Tournament Matches', async ({ page }) => {
        await page.goto(urls.lol.profiles.TournamentMatches);
    });

    baseFixture('s12lolContent-05 LoL Tournament Teams', async ({ page }) => {
        await page.goto(urls.lol.profiles.TournamentTeams);
    });

    baseFixture('s12lolContent-06 LoL Player Overview', async ({ page, baseProfiles }) => {
        await page.goto(urls.lol.profiles.PlayerOverview, {waitUntil: "load"});
        await baseProfiles.matchesWidgetLoaded();
    });

    baseFixture('s12lolContent-07 LoL Player Matches', async ({ page }) => {
        await page.goto(urls.lol.profiles.PlayerMatches);
    });

    baseFixture('s12lolContent-08 LoL Player Tournaments', async ({ page }) => {
        await page.goto(urls.lol.profiles.PlayerTournaments);
    });

    baseFixture('s12lolContent-09 LoL Team Overview', async ({ page, baseProfiles }) => {
        await page.goto(urls.lol.profiles.TeamOverview, {waitUntil: "load"});
        await baseProfiles.matchesWidgetLoaded();
    });

    baseFixture('s12lolContent-10 LoL Team Squad', async ({ page }) => {
        await page.goto(urls.lol.profiles.TeamSquad);
    });

    baseFixture('s12lolContent-11 LoL Team Matches', async ({ page }) => {
        await page.goto(urls.lol.profiles.TeamMatches);
    });

    baseFixture('s12lolContent-12 LoL Team Tournaments', async ({ page }) => {
        await page.goto(urls.lol.profiles.TeamTournaments);
    });

    baseFixture('s12lolContent-13 LoL Inside News', async ({ page }) => {
        await page.goto(urls.lol.profiles.InsideNews);
    });

    baseFixture('s12lolContent-14 LoL Inside Article', async ({ page }) => {
        await page.goto(urls.lol.profiles.InsideArticle);
    });

    baseFixture('s12lolContent-15 LoL Coach Overview', async ({ page, baseProfiles }) => {
        await page.goto(urls.lol.profiles.CoachOverview);
        await baseProfiles.matchesWidgetLoaded();
    });

    baseFixture('s12lolContent-16 LoL Coach Career', async ({ page }) => {
        await page.goto(urls.lol.profiles.CoachCareer);
    });

    baseFixture('s12lolContent-17 LoL Coach Matches', async ({ page }) => {
        await page.goto(urls.lol.profiles.CoachMatches);
    });

    baseFixture('s12lolContent-18 LoL Coach Tournaments', async ({ page }) => {
        await page.goto(urls.lol.profiles.CoachTournaments);
    });

    baseFixture('s12lolContent-19 LoL Inside Predictions', async ({ page }) => {
        await page.goto(urls.lol.profiles.InsidePredictions);
    });

    baseFixture('s12lolContent-20 LoL Player Career', async ({ page }) => {
        await page.goto(urls.lol.profiles.PlayerCareer);
    });

    baseFixture('s12lolContent-21 LoL Tournament Stages', async ({ page }) => {
        await page.goto(urls.lol.profiles.TournamentStages, {waitUntil: "load"}); 
    });
});

baseFixture.describe('13 Check texts for Games Discipline', { tag: ["@Games"], }, () => {
    baseFixture('s13games-01 Games Homepage', async ({ page }) => {
        await page.goto(urls.games.HomePage);
    });

    baseFixture('s13games-02 Games News', async ({ page }) => {
        await page.goto(urls.games.News);
    });

    baseFixture('s13games-03 Games Articles', async ({ page }) => {
        await page.goto(urls.games.Articles);
    });

    baseFixture('s13games-04 Games Inside News', async ({ page }) => {
        await page.goto(urls.games.InsideNews);
    });

    baseFixture('s13games-05 Games Inside Article', async ({ page }) => {
        await page.goto(urls.games.InsideArticle);
    });

    baseFixture('s13games-05 Games Forum', async ({ page }) => {
        await page.goto(urls.games.Forum);
    });

    baseFixture('s13games-06 Games Inside Forum', async ({ page }) => {
        await page.goto(urls.games.InsideForum);
    });

});

baseFixture.describe('14 Check texts for r6 Ingame', { tag: ["@LoL", "@Ingame"], }, () => { // 

    baseFixture.skip('s14r6Ingame-01 r6 Live Match First', async ({ page }) => { // <--- Always Changed
        const url = urls.reusable.ingame.LoLLiveMatchFirst;

        if (!url) {
            baseFixture.skip();
        }
        await page.goto(urls.reusable.ingame.LoLLiveMatchFirst);
    });

    baseFixture.skip('s10lolIngame-02 r6 Live Match Second', async ({ page }) => { // <--- Always Changed
        const url = urls.reusable.ingame.LoLLiveMatchSecond;

        if (!url) {
            baseFixture.skip();
          }

        await page.goto(urls.reusable.ingame.LoLLiveMatchSecond);
    });

    baseFixture.skip('s14r6Ingame-03 r6 Upcoming Match First', async ({ page }) => { // <--- Always Changed
        await page.goto(urls.reusable.ingame.LoLUpcomingMatchFirst); 
    });

    baseFixture.skip('s14r6Ingame-04 r6 Upcoming Match Second', async ({ page }) => { // <--- Always Changed
        await page.goto(urls.reusable.ingame.LoLUpcomingMatchSecond);
    });

    baseFixture.skip('s14r6Ingame-05 r6 Finished Match First', async ({ page }) => {
        await page.goto(urls.reusable.ingame.LoLFinishedMatchFirst);
    });

    baseFixture.skip('s14r6Ingame-06 r6 Finished Match Second', async ({ page }) => {
        await page.goto(urls.reusable.ingame.LoLFinishedMatchSecond);
    });

    baseFixture('s14r6Ingame-07 r6 Full Data Finished Match', async ({ page }) => {
        await page.goto(urls.r6.ingame.FullDataFinishedMatch);
    });

    baseFixture('s14r6Ingame-08 r6 No Data Finished Match', async ({ page }) => {
        await page.goto(urls.r6.ingame.NoDataFinishedMatch);
    });

    baseFixture('s14r6Ingame-09 r6 Map', async ({ page }) => {
        await page.goto(urls.r6.ingame.Map);
    });

    baseFixture('s14r6Ingame-10 r6 No Data Finished Map', async ({ page }) => {
        await page.goto(urls.r6.ingame.NoDataFinishedMap);
    });
});


baseFixture.describe('15 Check texts for r6 Menu', { tag: ["@CS2", "@Menu"], }, () => {

    baseFixture('s15rainbowSixMenu-01 r6 HomePage', async ({ page }) => {
        await page.goto(urls.r6.menu.HomePage);
        
    });

    baseFixture('s15rainbowSixMenu-02 r6 Upcoming Matches', async ({ page }) => {
        await page.goto(urls.r6.menu.UpcomingMatches);
        
    });

    baseFixture('s15rainbowSixMenu-03 r6 Finished Matches', async ({ page }) => {
        await page.goto(urls.r6.menu.FinishedMatches);
        
    });

    baseFixture('s15rainbowSixMenu-04 r6 Upcoming Tournaments', async ({ page }) => {
        await page.goto(urls.r6.menu.UpcomingTournaments);
        
    });

    baseFixture('s15rainbowSixMenu-05 r6 Finished Tournaments', async ({ page }) => {
        await page.goto(urls.r6.menu.FinishedTournaments);
        
    });

    baseFixture('s15rainbowSixMenu-06 r6 News', async ({ page }) => {
        await page.goto(urls.r6.menu.News);
        
    });

    baseFixture('s15rainbowSixMenu-07 r6 Articles', async ({ page }) => {
        await page.goto(urls.r6.menu.Articles);
        
    });

    baseFixture('s15rainbowSixMenu-08 r6 Forum', async ({ page }) => {
        await page.goto(urls.r6.menu.Forum);
        
    });

    baseFixture('s15rainbowSixMenu-09 r6 Predictions', async ({ page }) => {
        await page.goto(urls.r6.menu.Predictions);
        
    });

});

baseFixture.describe('16 Check texts for r6 Profiles + Content', { tag: ["@LoL", "@Profiles"], }, () => {

    baseFixture('s16r6Content-01 r6 Tournament Overview', async ({ page, baseProfiles }) => {
        await page.goto(urls.r6.profiles.TournamentOverview, {waitUntil: "load"});
        await baseProfiles.matchesWidgetLoaded();
    });

    baseFixture('s16r6Content-03 r6 Tournament Results', async ({ page }) => {
        await page.goto(urls.r6.profiles.TournamentResults);
    });

    baseFixture('s16r6Content-04 r6 Tournament Matches', async ({ page }) => {
        await page.goto(urls.r6.profiles.TournamentMatches);
    });

    baseFixture('s16r6Content-05 r6 Tournament Teams', async ({ page }) => {
        await page.goto(urls.r6.profiles.TournamentTeams);
    });

    baseFixture('s16r6Content-06 r6 Player Overview', async ({ page, baseProfiles }) => {
        await page.goto(urls.r6.profiles.PlayerOverview, {waitUntil: "load"});
        await baseProfiles.matchesWidgetLoaded();
    });

    baseFixture('s16r6Content-07 r6 Player Matches', async ({ page }) => {
        await page.goto(urls.r6.profiles.PlayerMatches);
    });

    baseFixture('s16r6Content-08 r6 Player Tournaments', async ({ page }) => {
        await page.goto(urls.r6.profiles.PlayerTournaments);
    });

    baseFixture('s16r6Content-09 r6 Team Overview', async ({ page, baseProfiles }) => {
        await page.goto(urls.r6.profiles.TeamOverview, {waitUntil: "load"});
        await baseProfiles.matchesWidgetLoaded();
    });

    baseFixture('s16r6Content-10 r6 Team Squad', async ({ page }) => {
        await page.goto(urls.r6.profiles.TeamSquad);
    });

    baseFixture('s16r6Content-11 r6 Team Matches', async ({ page }) => {
        await page.goto(urls.r6.profiles.TeamMatches);
    });

    baseFixture('s16r6Content-12 r6 Team Tournaments', async ({ page }) => {
        await page.goto(urls.r6.profiles.TeamTournaments);
    });

    baseFixture('s16r6Content-13 r6 Inside News', async ({ page }) => {
        await page.goto(urls.r6.profiles.InsideNews);
    });

    baseFixture('s16r6Content-14 r6 Inside Article', async ({ page }) => {
        await page.goto(urls.r6.profiles.InsideArticle);
    });

    baseFixture('s16r6Content-15 r6 Coach Overview', async ({ page, baseProfiles }) => {
        await page.goto(urls.r6.profiles.CoachOverview);
        await baseProfiles.matchesWidgetLoaded();
    });

    // baseFixture('s16r6Content-16 r6 Coach Career', async ({ page }) => {
    //     await page.goto(urls.r6.profiles.CoachCareer);
    // });

    baseFixture('s16r6Content-17 r6 Coach Matches', async ({ page }) => {
        await page.goto(urls.r6.profiles.CoachMatches);
    });

    baseFixture('s16r6Content-18 r6 Coach Tournaments', async ({ page }) => {
        await page.goto(urls.r6.profiles.CoachTournaments);
    });

    baseFixture('s16r6Content-19 r6 Inside Predictions', async ({ page }) => {
        await page.goto(urls.r6.profiles.InsidePredictions);
    });

    baseFixture('s16r6Content-20 r6 Inside Forum', async ({ page }) => {
        await page.goto(urls.r6.profiles.InsideForum);
    });

    baseFixture('s16r6Content-20 r6 Tournament Stages', async ({ page }) => {
        await page.goto(urls.r6.profiles.TournamentStages, {waitUntil: "load"}); 
    });
});


baseFixture.describe('88 Check extends', { tag: ["@CS2"], }, () => {

    baseFixture('s88-01 cs ingame Past Matches Widget Collapse', async ({ page, matchPage, allMatches }) => {
        await page.goto(urls.cs2.menu.UpcomingMatches);
        await allMatches.visitFirstUpcomingMatch();
        await matchPage.expandPastMatches();
    });

    baseFixture('s88-02 cs ingame Live Match Click on first map', async ({ page, allMatches, matchPage }) => {
        await page.goto(urls.cs2.menu.UpcomingMatches);
        await allMatches.liveMatchCheckFirstMap();
        await matchPage.clickFirstMapBtnIfPossible();
    });

    baseFixture('s88-03 cs ingame Hover On Stats Compare', async ({ page, matchPage, allMatches }) => {
        await page.goto(urls.cs2.menu.UpcomingMatches);
        await allMatches.visitSecondUpcomingMatch();
        await matchPage.hoverCompareStatsScore();
    });

});

baseFixture.describe('88 Check live', { tag: ["@Live"], }, () => {

    baseFixture('a01 cs First Live Match', async ({ page, allMatches, matchPage }) => {
        await page.goto(urls.cs2.menu.UpcomingMatches);
        await allMatches.visitFirstLiveMatch();
        await matchPage.csIngameElementsPresent();
    });

    baseFixture('a02 cs Second Live Match', async ({ page, allMatches, matchPage }) => {
        await page.goto(urls.cs2.menu.UpcomingMatches);
        await allMatches.visitSecondLiveMatch();
        await matchPage.csIngameElementsPresent();
    });

    baseFixture('a03 cs First Upcoming Match', async ({ page, allMatches, matchPage }) => {
        await page.goto(urls.cs2.menu.UpcomingMatches);
        await allMatches.visitFirstUpcomingMatch();
        await matchPage.csIngameElementsPresent();
    });

    baseFixture('a04 cs Second Upcoming Match', async ({ page, allMatches, matchPage }) => {
        await page.goto(urls.cs2.menu.UpcomingMatches);
        await allMatches.visitSecondUpcomingMatch();
        await matchPage.csIngameElementsPresent();
    });

    baseFixture('a05 cs First Finished Match', async ({ page, allMatches, matchPage }) => {
        await page.goto(urls.cs2.menu.FinishedMatches);
        await allMatches.visitFirstFinishedMatch();
        await matchPage.csIngameElementsPresent();
    });

    baseFixture('a06 cs Second Finished Match', async ({ page, allMatches, matchPage }) => {
        await page.goto(urls.cs2.menu.FinishedMatches);
        await allMatches.visitSecondFinishedMatch();
        await matchPage.csIngameElementsPresent();
    });

    baseFixture('a07 cs Finished Match Advanced Data', async ({ page, allMatches, matchPage }) => {
        await page.goto(urls.cs2.menu.FinishedMatches);
        await allMatches.visitFinishedAdvancedDataMatch();
        await matchPage.csIngameElementsPresent();
    });

    baseFixture('a08 cs Finished Match Basic Data', async ({ page, allMatches, matchPage }) => {
        await page.goto(urls.cs2.menu.FinishedMatches);
        await allMatches.visitFinishedBasicDataMatch();
        await matchPage.csIngameElementsPresent();
    });

    baseFixture('a09 cs Finished Match Basic No Data', async ({ page, allMatches, matchPage }) => {
        await page.goto(urls.cs2.menu.FinishedMatches);
        await allMatches.visitFinishedNoDataMatch();
        await matchPage.csIngameElementsPresent();
    });

    baseFixture('a10 vlr First Live Match', async ({ page, allMatches, matchPage }) => {
        await page.goto(urls.valorant.menu.UpcomingMatches);
        await allMatches.visitFirstLiveMatch();
        await matchPage.vlrIngameElementsPresent();
    });

    baseFixture('a11 vlr Second Live Match', async ({ page, allMatches, matchPage }) => {
        await page.goto(urls.valorant.menu.UpcomingMatches);
        await allMatches.visitSecondLiveMatch();
        await matchPage.vlrIngameElementsPresent();
    });

    baseFixture('a12 vlr First Upcoming Match', async ({ page, allMatches, matchPage }) => {
        await page.goto(urls.valorant.menu.UpcomingMatches);
        await allMatches.visitFirstUpcomingMatch();
        await matchPage.vlrIngameElementsPresent();
    });

    baseFixture('a13 vlr Second Upcoming Match', async ({ page, allMatches, matchPage }) => {
        await page.goto(urls.valorant.menu.UpcomingMatches);
        await allMatches.visitSecondUpcomingMatch();
        await matchPage.vlrIngameElementsPresent();
    });

    baseFixture('a14 vlr First Finished Match', async ({ page, allMatches, matchPage }) => {
        await page.goto(urls.valorant.menu.FinishedMatches);
        await allMatches.visitFirstFinishedMatch();
        await matchPage.vlrIngameElementsPresent();
    });

    baseFixture('a15 vlr Second Finished Match', async ({ page, allMatches, matchPage }) => {
        await page.goto(urls.valorant.menu.FinishedMatches);
        await allMatches.visitSecondFinishedMatch();
        await matchPage.vlrIngameElementsPresent();
    });

    baseFixture('a16 vlr No Data Finished Match', async ({ page, allMatches, matchPage }) => {
        await page.goto(urls.valorant.menu.FinishedMatches);
        await allMatches.visitSecondFinishedMatch();
        await matchPage.vlrIngameElementsPresent();
    });

    baseFixture('a17 vlr Full Data Finished Match', async ({ page, allMatches, matchPage }) => {
        await page.goto(urls.valorant.menu.FinishedMatches);
        await allMatches.visitSecondFinishedMatch();
        await matchPage.vlrIngameElementsPresent();
    });

    baseFixture('a18 dota First Live Match', async ({ page, allMatches, matchPage }) => {
        await page.goto(urls.dota.menu.UpcomingMatches);
        await allMatches.visitFirstLiveMatch();
        await matchPage.newDisciplineIngameElementsPresent()
    });

    baseFixture('a19 dota Second Live Match', async ({ page, allMatches, matchPage }) => {
        await page.goto(urls.dota.menu.UpcomingMatches);
        await allMatches.visitSecondLiveMatch();
        await matchPage.newDisciplineIngameElementsPresent()
    });

    baseFixture('a20 dota First Upcoming Match', async ({ page, allMatches, matchPage }) => {
        await page.goto(urls.dota.menu.UpcomingMatches);
        await allMatches.visitFirstUpcomingMatch();
        await matchPage.newDisciplineIngameElementsPresent()
    });

    baseFixture('a21 dota Second Upcoming Match', async ({ page, allMatches, matchPage }) => {
        await page.goto(urls.dota.menu.UpcomingMatches);
        await allMatches.visitSecondUpcomingMatch();
        await matchPage.newDisciplineIngameElementsPresent()
    });

    baseFixture('a22 dota First Finished Match', async ({ page, allMatches, matchPage }) => {
        await page.goto(urls.dota.menu.FinishedMatches);
        await allMatches.visitFirstFinishedMatch();
        await matchPage.newDisciplineIngameElementsPresent();
    });

    baseFixture('a23 dota Second Finished Match', async ({ page, allMatches, matchPage }) => {
        await page.goto(urls.dota.menu.FinishedMatches);
        await allMatches.visitSecondFinishedMatch();
        await matchPage.newDisciplineIngameElementsPresent();
    });

    baseFixture('a24 lol First Live Match', async ({ page, allMatches, matchPage }) => {
        await page.goto(urls.lol.menu.UpcomingMatches);
        await allMatches.visitFirstLiveMatch();
        await matchPage.newDisciplineIngameElementsPresent()
    });

    baseFixture('a25 lol Second Live Match', async ({ page, allMatches, matchPage }) => {
        await page.goto(urls.lol.menu.UpcomingMatches);
        await allMatches.visitSecondLiveMatch();
        await matchPage.newDisciplineIngameElementsPresent()
    });

    baseFixture('a26 lol First Upcoming Match', async ({ page, allMatches, matchPage }) => {
        await page.goto(urls.lol.menu.UpcomingMatches);
        await allMatches.visitFirstUpcomingMatch();
        await matchPage.newDisciplineIngameElementsPresent()
    });

    baseFixture('a27 lol Second Upcoming Match', async ({ page, allMatches, matchPage }) => {
        await page.goto(urls.lol.menu.UpcomingMatches);
        await allMatches.visitSecondUpcomingMatch();
        await matchPage.newDisciplineIngameElementsPresent()
    });

    baseFixture('a28 lol First Finished Match', async ({ page, allMatches, matchPage }) => {
        await page.goto(urls.lol.menu.FinishedMatches);
        await allMatches.visitFirstFinishedMatch();
        await matchPage.newDisciplineIngameElementsPresent();
    });

    baseFixture('a29 lol Second Finished Match', async ({ page, allMatches, matchPage }) => {
        await page.goto(urls.lol.menu.FinishedMatches);
        await allMatches.visitSecondFinishedMatch();
        await matchPage.newDisciplineIngameElementsPresent();
    });

    baseFixture('a30 r6 First Live Match', async ({ page, allMatches, matchPage }) => {
        await page.goto(urls.r6.menu.UpcomingMatches);
        await allMatches.visitFirstLiveMatch();
        await matchPage.newDisciplineIngameElementsPresent()
    });

    baseFixture('a31 r6 Second Live Match', async ({ page, allMatches, matchPage }) => {
        await page.goto(urls.r6.menu.UpcomingMatches);
        await allMatches.visitSecondLiveMatch();
        await matchPage.newDisciplineIngameElementsPresent()
    });

    baseFixture('a32 r6 First Upcoming Match', async ({ page, allMatches, matchPage }) => {
        await page.goto(urls.r6.menu.UpcomingMatches);
        await allMatches.visitFirstUpcomingMatch();
        await matchPage.newDisciplineIngameElementsPresent()
    });

    baseFixture('a33 r6 Second Upcoming Match', async ({ page, allMatches, matchPage }) => {
        await page.goto(urls.r6.menu.UpcomingMatches);
        await allMatches.visitSecondUpcomingMatch();
        await matchPage.newDisciplineIngameElementsPresent()
    });

    baseFixture('a34 r6 First Finished Match', async ({ page, allMatches, matchPage }) => {
        await page.goto(urls.r6.menu.FinishedMatches);
        await allMatches.visitFirstFinishedMatch();
        await matchPage.newDisciplineIngameElementsPresent();
    });

    baseFixture('a35 r6 Second Finished Match', async ({ page, allMatches, matchPage }) => {
        await page.goto(urls.r6.menu.FinishedMatches);
        await allMatches.visitSecondFinishedMatch();
        await matchPage.newDisciplineIngameElementsPresent();
    });

});
