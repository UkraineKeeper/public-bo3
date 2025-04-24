import {test as base, Browser} from "@playwright/test";
import { NavigateTo } from "../page-objects/NavigateTo";
import { Modals } from "../page-objects/base-pages/ModalsPage";
import { LoginPage } from "../page-objects/base-pages/LoginPage";
import fs from "fs"
import { HomePage } from "../page-objects/menu-pages/HomePage";
import { Header } from "../page-objects/base-pages/Header";
import { SideBar } from "../page-objects/base-pages/SideBar";
import { MatchPage } from "../page-objects/content-pages/MatchPage";
import { AllMatches } from "../page-objects/menu-pages/AllMatches";
import { AllNews } from "../page-objects/menu-pages/AllNews";
import { BaseProfiles } from "../page-objects/base-pages/BaseProfiles";

type BaseFixture = {
    navigateTo: NavigateTo;
    loginPage: LoginPage;
    homePage: HomePage;
    header: Header;
    sideBar: SideBar;
    matchPage: MatchPage;
    allMatches: AllMatches;
    baseProfiles: BaseProfiles;
    allNews: AllNews;
    user: string;
    env: string;
    storageState: string;
}

export const baseFixture = base.extend<BaseFixture>({
    sideBar: async ({ page }, use) => {
        const sideBar = new SideBar(page);
        await use(sideBar);
    },

    navigateTo: async ({ page }, use) => {
        const navigateTo = new NavigateTo(page);
        await use(navigateTo);
    },

    baseProfiles: async ({ page }, use) => {
        const baseProfiles = new BaseProfiles(page);
        await use(baseProfiles);
    },

    matchPage: async ({ page }, use) => {
        const matchPage = new MatchPage(page);
        await use(matchPage);
    },

    allMatches: async ({ page }, use) => {
        const allMatches = new AllMatches(page);
        await use(allMatches);
    },

    allNews: async ({ page }, use) => {
        const allNews = new AllNews(page);
        await use(allNews);
    },

    storageState: async ({ browser, baseURL }, use) => {
        const env = process.env.TEST_ENV || 'prod';
        const locale = process.env.LOCALE || 'en'; 
        const fileName = `tests/.storage/baseFixture_${env}_${locale}.json`;
    
        if (isStorageStateExpired(fileName)) {
            console.log(`[storageState] File ${fileName} expired, regenerating...`);
            await saveStorageState(browser, fileName, baseURL);
        }
    
        console.log(`[storageState] Using storage state from ${fileName}`);
        await use(fileName);
    },
});

async function saveStorageState(browser: Browser, fileName: string, baseURL: string) {
    const domain = process.env.TEST_ENV === "stage" ? "hidden_info.com" : "bo3.gg";
    const page = await browser.newPage();
    const modals = new Modals(page);

    await page.goto(`${baseURL}${process.env.LOCALE_PREFIX || ''}/`, { waitUntil: "domcontentloaded" });
    await modals.handleStarterModals();
    await page.evaluate(() => {localStorage.setItem('scoresPopUpInformed', 'true');});
    await page.context().addCookies([{
        name: "user_locale",
        value: `${process.env.LOCALE}`,
        domain: domain,
        path: "/",
        expires: Date.now() / 1000 + 3600, // 1 година
        httpOnly: false,
        secure: false,
        sameSite: "Lax"
    }]);
    await page.context().storageState({ path: fileName });
    await page.close();
}

function isStorageStateExpired(filePath: string): boolean {
    if (!fs.existsSync(filePath)) return true;
    const stats = fs.statSync(filePath);
    const now = new Date();
    const modifiedTime = new Date(stats.mtime);
    const daysDifference = (now.getTime() - modifiedTime.getTime()) / (1000 * 60 * 60 * 23);
    return daysDifference > 1;
}
