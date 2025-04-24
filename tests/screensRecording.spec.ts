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

test.beforeEach(async ({ page }, testInfo) => {
    setupLogging(() => testInfo.title);
});

test.describe('Check if smth wrong with the fixture', async () => {

    test.skip('Compare headers', async ({ page }) => {
        const stageURL = 'https://hidden_info.com/news';
        const prodURL = 'https://bo3.gg/news';

        await page.goto(stageURL);
        const stageHeader = await page.locator('header').innerText();

        await page.goto(prodURL);
        const prodHeader = await page.locator('header').innerText();

        expect(stageHeader).toBe(prodHeader);
    });

    test.skip('Compare screens', async ({ page }) => {
        const stageURL = 'https://hidden-info.com/news';
        const prodURL = 'https://bo3.gg/news';

        await page.goto(prodURL);
        const prodScreenshot = await page.screenshot();
        await page.screenshot({ path: `helpers/screenshots/prod.png` });

        await page.goto(stageURL);
        const stageScreenshot = await page.screenshot();
        await page.screenshot({ path: `helpers/screenshots/stage.png` });

        expect(prodScreenshot).toEqual(stageScreenshot);
    });

    test.use({
        viewport: { width: 1920, height: 1200 },
      });

    test('Web Screens Check', async ({page}) => {
        test.setTimeout(3000000);
        await page.goto('file:///home/oleksandr/Desktop/git/0-MyApk/04-screens-analyser.html', {waitUntil: "load"})
        await page.waitForTimeout(2000);

        for (let i = 0; i < 300; i++) {
            await page.keyboard.press('ArrowDown');
            await page.waitForTimeout(1000);
    
            await page.keyboard.press('ArrowDown');
            await page.waitForTimeout(1000);
    
            await page.keyboard.press('ArrowUp');
            await page.keyboard.press('ArrowRight');
            await page.waitForTimeout(2000);
        }
    })

    test('Mobile Screens Check', async ({ page }) => {
        test.setTimeout(3000000);
    
        await page.goto('file:///home/oleksandr/Desktop/git/0-MyApk/05-screens-analyser-mobile.html', { waitUntil: "load" });
        await page.waitForTimeout(2000);
    
        for (let i = 0; i < 60; i++) {
            let previousScroll = 0;
            let currentScroll = -1;
            let scrollCount = 0; 
    
            // Натискати "ArrowDown", поки сторінка продовжує скролитися вниз, але не більше 7 разів
            do {
                previousScroll = await page.evaluate(() => window.scrollY);
                await page.keyboard.press('ArrowDown');
                await page.waitForTimeout(1000);
                currentScroll = await page.evaluate(() => window.scrollY);
                scrollCount++;
            } while (currentScroll > previousScroll && scrollCount < 7);
    
            await page.keyboard.press('ArrowUp');
            await page.keyboard.press('ArrowRight');
            await page.waitForTimeout(2000);
        }
    });

});