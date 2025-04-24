import { userDev } from "../fixtures/UserDev";
import { screenFullPage } from "../helpers/screenFullPage";

// userDev.afterEach(async ({ page, sideBar }, testInfo) => {
//     if (testInfo.annotations.some(a => a.type === 'skipAfterEach')) {
//         console.log('Skipping afterEach for this test');
//         await screenFullPage(page, testInfo.title);
//         return;
//     }

//     if (testInfo.status !== 'skipped') {
//         await sideBar.checkWebPageSkeleton();
//         await screenFullPage(page, testInfo.title);
//     }
// });

userDev.describe('e2e Tests', async () => {

    userDev('userDev01 - Send comment on forum', async ({ navigateTo, sideBar, commentsSection, header }) => {
        await navigateTo.dev();
        await sideBar.visitAnyForumTopic();
        await commentsSection.writeRandomUrlComment();
    });

    userDev('userDev02 - Reply on forum', async ({ navigateTo, sideBar, commentsSection, header }) => {
        await navigateTo.dev();
        await header.openGames();
        await sideBar.visitFirstForumTopic();
        await commentsSection.writeComment();
        await commentsSection.writeReply();
    });

    userDev('userDev03 - Verify created topic present, sorted', async ({ navigateTo, allForums, header }) => {
        await navigateTo.dev();
        await header.openGames();
        await header.openForum();
        await allForums.createNewTopic();
        await header.clickBo3Logo();
        await header.openForum();
        await allForums.verifyTopicCreated();
    });

    userDev('userDev04 - Edit created topic', async ({ navigateTo, allForums, header, forumPage }) => {
        await navigateTo.dev();
        await header.openGames();
        await header.openForum();
        await allForums.openFirstNonHighlightedTopic();
        await forumPage.editTopic();
    });

    userDev('userDev05 - Delete created topic', async ({ navigateTo, allForums, header, forumPage }) => {
        await navigateTo.dev();
        await header.openGames();
        await header.openForum();
        await allForums.openFirstNonHighlightedTopic();
        await forumPage.deleteTopic();
        await allForums.sidebarForumCategoriesPresent()
    });

    userDev('userDev06 - Post topic without title - field required should appear', async ({ navigateTo, allForums, header }) => {
        await navigateTo.dev();
        await header.openForum();
        await allForums.topicCreationWithMissingTitleExpectErrorMsg();
    });

    userDev('userDev07 - Send comment on match', async ({navigateTo, allMatches, commentsSection, header}) => {
        await navigateTo.dev();
        await header.openMatchesFinished();
        await allMatches.visitFirstFinishedMatch();
        await commentsSection.writeRandomUrlComment();
    })

    userDev('userDev08 - Clean up forum', async ({ navigateTo, allForums, header, forumPage }) => {
        await navigateTo.dev();
        await header.openGames();
        await header.openForum();
        await allForums.openFirstNonHighlightedTopic();
        await forumPage.deleteTopicIfPossible();
    });

    userDev('userDev09 - Language switcher', async ({ navigateTo, sideBar, header, commentsSection }) => {
        await navigateTo.dev();
        await header.openRandomLocale();
        await sideBar.visitAnyForumTopic();
        await commentsSection.sentTranslateComment();
    });

    userDev('userDev10 - Discipline switcher + language switcher', async ({ navigateTo, sideBar, header, commentsSection }) => {
        await navigateTo.dev();
        await header.openRandomGameDiscipline();
        await header.openRandomLocale();
        await commentsSection.storeTranslateComment()
        await header.openGames();
        await sideBar.visitAnyForumTopic();
        await commentsSection.sentTranslateComment();
    });

    userDev('userDev.spec - Scheduled comment', async ({ navigateTo, commentsSection }, testInfo) => {
        await navigateTo.logDev();
        await commentsSection.writeComment(testInfo);
    });

    userDev('userDevLast2 - Logout', async ({ navigateTo, header }) => {
        await navigateTo.dev();
        await header.openRandomGameDiscipline();
        await header.logout();
    });
});


// Reply on reply

// Delete comment on forum

// Check translate