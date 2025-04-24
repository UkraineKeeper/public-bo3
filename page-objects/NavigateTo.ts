import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./base-pages/BasePage";
import { urls } from "./urls";

class NavLocators {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }
}

export class NavigateTo extends NavLocators{

    protected basePage: BasePage;

    constructor(page: Page) {
        super(page)
        this.basePage = new BasePage(page);
    }

    async homePage() {
        await this.page.goto(`${process.env.LOCALE_PREFIX || ''}/`, { waitUntil: "domcontentloaded" });
        const url = new URL(this.page.url());
        console.log(`homePage: ${url}`);
        await this.page.waitForResponse(/widget-top-players-minified/);
        // await this.page.waitForResponse(RegExp("widget-matches"))
        // await this.page.waitForResponse(RegExp("widget-top-tournaments"))
    }

    async dev() {
        await this.page.goto('https://hidden-info.com/', {waitUntil: 'load'});
        await this.page.waitForResponse(/widget-top-players-minified/);
        // await this.page.waitForResponse(/widget-matches/);
        // await this.page.waitForResponse(RegExp("widget-matches"))
        // await this.page.waitForResponse(RegExp("tops?scope=widget-top-players-minified"))
    }

    async stage() {
        await this.page.goto('https://hidden-info.com/', {waitUntil: 'load'});
        await this.page.waitForResponse(RegExp("widget-matches"))
        await this.page.waitForResponse(RegExp("widget-top-tournaments"))
    }

    async prod() {
        await this.page.goto('https://bo3.gg/', {waitUntil: 'load'});
        await this.page.waitForResponse(RegExp("widget-matches"))
        await this.page.waitForResponse(RegExp("widget-top-tournaments"))
    }

    async directlyToValorant() {
        await this.page.goto('/valorant/', { waitUntil: "load" });
    }

    async directlyToDota() {
        await this.page.goto('/dota2/', { waitUntil: "load" });
    }

    async directlyToLol() {
        await this.page.goto('/lol/', { waitUntil: "load" });
    }

    async directlyToGames() {
        await this.page.goto('/games/', { waitUntil: "load" });
    }

    async directlyToRainbow6() {
        await this.page.goto('/r6siege/', { waitUntil: "load" });
    }

    async logDev() {
        await this.page.goto('https://hidden-info.com/valorant/forum/log2');
    }
}