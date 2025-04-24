import {test, expect} from "@playwright/test";
import { HomePage } from "../page-objects/menu-pages/HomePage";
import { PickemPage } from "../page-objects/content-pages/PickemPage";
import { Modals } from "../page-objects/base-pages/ModalsPage";
import { LoginPage } from "../page-objects/base-pages/LoginPage";
import { users } from '../users/users';
import { NavigateTo } from "../page-objects/NavigateTo";
import { screenFullPage } from "../helpers/screenFullPage";
import { urls } from "../page-objects/urls";

test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== 'skipped') {
        await screenFullPage(page, testInfo.title);
    }
});


for (const data of users) {
    test.describe.serial(`Multiple pickem dev`, () => {
        test(`User Id:${data.id}. Submit pickem for user: ${data.nickname}`, async ({ page }, testInfo) => {
            const navigateTo = new NavigateTo(page);
            const modals = new Modals(page);
            const loginPage = new LoginPage(page);
            const homePage = new HomePage(page);
            const pickemPage = new PickemPage(page);

            test.setTimeout(10 * 60 * 1000);
            await navigateTo.dev();
            await modals.handleStarterModals();
            // await page.evaluate(() => {localStorage.setItem('scoresPopUpInformed', 'true');});
            // await page.context().storageState({ path: `tests/.storage/pickemPoll.json` });
            await loginPage.loginAsUser(data.email, data.password);

            await expect.poll(
                async () => {
                    try {
                        await loginPage.userLoggedTrue();
                        return true;
                    } catch {
                        return false;
                    }
                },
                {
                    intervals: [20_000, 40_000, 60_000],
                    timeout: 11 * 60 * 1000,
                    message: "Waiting for 11 minutes to log in, but it did not work",
                }
            ).toBeTruthy();

            // await homePage.clickGoToPickem();
            // await page.goto('hidden-nfo')
            // await pickemPage.clickRandomBtns();
            // await pickemPage.clickSubmitBtns();

            await page.goto('hidden-info')
            await pickemPage.getExtraPoints()
        });
    });
}

for (const data of users) {
    test.describe.serial(`Multiple pickem prod`, () => {
        test(`User Id:${data.id}. Joined group for user: ${data.nickname}`, async ({ page }, testInfo) => {
            const modals = new Modals(page);
            const homePage = new HomePage(page);
            const loginPage = new LoginPage(page);
            const navigateTo = new NavigateTo(page);
            const pickemPage = new PickemPage(page);

            test.setTimeout(15 * 60 * 1000);
            await navigateTo.homePage();
            await modals.handleStarterModals();
            await loginPage.loginAsUser(data.email, data.password);

            await expect.poll(
                async () => {
                    try {
                        await loginPage.userLoggedTrue();
                        return true;
                    } catch {
                        return false;
                    }
                },
                {
                    intervals: [20_000, 40_000, 60_000],
                    timeout: 10 * 60 * 1400,
                    message: "Waiting for 14 minutes to log in, but it did not work",
                }
            ).toBeTruthy();
            await homePage.clickGoToPickem();
            await pickemPage.clickRandomBtns();
            await pickemPage.clickSubmitBtns();

            await page.goto('https://bo3.gg/tournaments/intel-extreme-masters-melbourne-2025/pickems?user_group_code=8146109804')
            await pickemPage.userJoinGroupPickem()

            await pickemPage.getExtraPoints();

            // await page.goto(urls.reusable.pickem.ShanghaiEuropeB2024)
            // await pickemPage.clickRandomBtns();
            // await pickemPage.clickSubmitBtns();
            // await screenFullPage(page, testInfo.title);

            // await page.goto(urls.reusable.pickem.ShanghaiEuropeA2024)
            // await pickemPage.clickRandomBtns();
            // await pickemPage.clickSubmitBtns();
        });
    });
}