import {test as base, Browser} from "@playwright/test";
import { SideBar } from "../page-objects/base-pages/SideBar";
import { AllMatches } from "../page-objects/menu-pages/AllMatches";
import { AllNews } from "../page-objects/menu-pages/AllNews";
import { NavigateTo } from "../page-objects/NavigateTo";
import { MatchPage } from "../page-objects/content-pages/MatchPage";
import { Modals } from "../page-objects/base-pages/ModalsPage";
import { LoginPage } from "../page-objects/base-pages/LoginPage";
import { HomePage } from "../page-objects/menu-pages/HomePage";
import { CommentsSection } from "../page-objects/base-pages/CommentsSection";
import { Header } from "../page-objects/base-pages/Header";
import fs from "fs"
import { clearLogFile, setupLogging } from '../helpers/logger';
import { BasePage } from "../page-objects/base-pages/BasePage";
import { AllForums } from "../page-objects/menu-pages/AllForums";

type GuestFixture = {
    sideBar: SideBar;
    matchPage: MatchPage;
    allMatches: AllMatches;
    allNews: AllNews;
    navigateTo: NavigateTo;
    loginPage: LoginPage;
    homePage: HomePage;
    commentsSection: CommentsSection;
    user: string;
    env: string;
    storageState: string;
    header: Header;
    basePage: BasePage;
    allForums: AllForums;
    modals: Modals;
}

export const guestFixture = base.extend<GuestFixture>({

    sideBar: async ({page}, use) => {
        const sideBar = new SideBar(page);
        await use(sideBar);
    },

    modals: async ({page}, use) => {
        const modals = new Modals(page);
        await use(modals);
    },

    allForums: async ({page}, use) => {
        const allForums = new AllForums(page);
        await use(allForums);
    },

    navigateTo: async ({page}, use) => {
        const navigateTo = new NavigateTo(page);
        await use(navigateTo);
    },

    matchPage: async ({page}, use) => {
        const matchPage = new MatchPage(page);
        await use(matchPage);
    },

    allMatches: async ({page}, use) => {
        const allMatches = new AllMatches(page)
        await use(allMatches);
    },

    allNews: async ({page}, use) => {
        const allNews = new AllNews(page)
        await use(allNews);
    },

    homePage: async ({page}, use) => {
        const homePage = new HomePage(page)
        await use(homePage);
    },

    commentsSection: async ({page}, use) => {
        const commentsSection = new CommentsSection(page)
        await use(commentsSection);
    },

    header: async ({page}, use) => {
        const header = new Header(page)
        await use(header);
    },

    loginPage: async ({page}, use) => {
        const loginPage = new LoginPage(page)
        await use(loginPage);
    },

    basePage: async ({page}, use, testInfo) => {
        const basePage = new BasePage(page, testInfo.title)
        await use(basePage);
    }, 

    // page: async ({ page, }, use, testInfo) => {
    //     if (process.env.CI) {
    //        console.log(testInfo.title);
    //     }
    // },
    
    storageState: async ({ browser, baseURL}, use) => {
        const env = process.env.TEST_ENV || 'prod';
        const locale = process.env.LOCALE || 'en'; 
        const fileName = `tests/.storage/guestFixture_${env}_${locale}.json`;
    
        if (isStorageStateExpired(fileName)) {
        console.log(`[storageState] File ${fileName} expired, regenerating...`);
        await saveStorageState(browser, fileName, baseURL, 'fixture setup');
        }
    
        console.log(`[storageState] Using storage state from ${fileName}`);
        await use(fileName);
        },
    })

    async function saveStorageState(browser: Browser, fileName: string, baseURL: string, testName: string) {
        const domain = process.env.TEST_ENV === "stage" ? "hidden_info.com" : "bo3.gg";
        const page = await browser.newPage({ viewport: { width: 1366, height: 768 } });
        const modals = new Modals(page);
        
        setupLogging(() => testName);
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
        console.log(`[saveStorageState] Saving storage state for: guestFixture`);
        await page.close();
    }
    
    function isStorageStateExpired(filePath: string): boolean {
        if (!fs.existsSync(filePath)) return true;
        const stats = fs.statSync(filePath);
        const now = new Date();
        const modifiedTime = new Date(stats.mtime)
        const daysDifference = (now.getTime() - modifiedTime.getTime()) / (1000 * 60 * 60 * 23);
        return daysDifference > 1;
    }