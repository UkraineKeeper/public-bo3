import {test as base, Browser} from "@playwright/test";
import { SideBar } from "../page-objects/base-pages/SideBar";
import { AllMatches } from "../page-objects/menu-pages/AllMatches";
import { NavigateTo } from "../page-objects/NavigateTo";
import { MatchPage } from "../page-objects/content-pages/MatchPage";
import { Modals } from "../page-objects/base-pages/ModalsPage";
import { LoginPage } from "../page-objects/base-pages/LoginPage";
import fs from "fs"
import { HomePage } from "../page-objects/menu-pages/HomePage";
import { CommentsSection } from "../page-objects/base-pages/CommentsSection";
import { Header } from "../page-objects/base-pages/Header";
import { AllForums } from "../page-objects/menu-pages/AllForums";
import { ForumPage } from "../page-objects/content-pages/ForumPage";
import { users } from "../users/usersGit"
import { BasePage } from "../page-objects/base-pages/BasePage";

type UserDev = {
    sideBar: SideBar;
    matchPage: MatchPage;
    allMatches: AllMatches;
    navigateTo: NavigateTo;
    loginPage: LoginPage;
    homePage: HomePage;
    commentsSection: CommentsSection;
    allForums: AllForums;
    forumPage: ForumPage;
    storageState: string;
    header: Header;
    basePage: BasePage;
}

export const userDev = base.extend<UserDev>({

    sideBar: async ({page}, use) => {
        const sideBar = new SideBar(page);
        await use(sideBar);
    },

    basePage: async ({page}, use) => {
        const basePage = new BasePage(page);
        await use(basePage);
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

    homePage: async ({page}, use) => {
        const homePage = new HomePage(page)
        await use(homePage);
    },

    commentsSection: async ({page}, use) => {
        const commentsSection = new CommentsSection(page)
        await use(commentsSection);
    },

    allForums: async ({page}, use) => {
        const allForums = new AllForums(page)
        await use(allForums);
    },

    header: async ({page}, use) => {
        const header = new Header(page)
        await use(header);
    },

    forumPage: async ({page}, use) => {
        const forumPage = new ForumPage(page)
        await use(forumPage);
    },

    storageState: async ({ browser }, use) => {
        const fileName = `tests/.storage/loggedStorageDev.json`;
    
        if (isStorageStateExpired(fileName)) {
        console.log(`[storageState] File ${fileName} expired, regenerating...`);
        await saveStorageState(browser, fileName);
        }
    
        console.log(`[storageState] Using storage state from ${fileName}`);
        await use(fileName);
        },
    })

async function saveStorageState(browser: Browser, fileName: string) {
    const page = await browser.newPage();
    const navigateTo = new NavigateTo(page);
    const modals = new Modals(page);
    const loginPage = new LoginPage(page);
    // const user = users[2]; // for local run
    const isGitHub = process.env.CI === "true";
    const userIndex = isGitHub ? 0 : 1;
    const user = users[userIndex];
    
    await navigateTo.dev();
    await modals.handleStarterModals();
    await loginPage.loginAsUser(user.email, user.password);
    await loginPage.userLoggedTrue();
    await page.context().storageState({ path: fileName });
    console.log(`[saveStorageState] Saving storage state for: Dev Logged`);
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