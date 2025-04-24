import { Locator, Page, expect } from "@playwright/test";

export class SideBarLocators {
    protected page: Page;
    protected wholeHeader: Locator;
    protected footerMenu: Locator;
    protected sidebarForumWidget: Locator;
    sidebarForumWidgetTitle: Locator;
    sidebarForumAllTopicsBtn: Locator;
    protected forumTopics: Locator;
    protected sidebarNewsWidget: Locator;
    protected sidebarNewsCount: Locator;
    sidebarNewsWidgetTitle: Locator;
    newsWidgetAllNewsBtn: Locator;
    protected sidebarMatchesWidget: Locator;
    protected sidebarAdBanner: Locator;

    constructor(page: Page) {
        this.page = page;
        this.wholeHeader = this.page.locator('header.c-main-header');
        this.footerMenu = this.page.locator('div.c-main-footer__top > .menus-list');
        this.sidebarForumWidget = this.page.locator('div.c-widget-forum-recent--sidebar');
        this.sidebarForumWidgetTitle = this.page.locator('div.c-widget-forum-recent--sidebar > div > div.title-h5')
        this.sidebarForumAllTopicsBtn = this.page.locator('div.c-widget-forum-recent--sidebar > div.o-widget__body > a.c-button')
        this.forumTopics = this.page.locator('.c-widget-forum-recent-item')
        this.sidebarNewsWidget = this.page.locator('.c-widget-news-latest-top.o-widget');
        this.sidebarNewsCount = this.page.locator('.c-widget-news-item--latest-top')
        this.sidebarNewsWidgetTitle = this.page.locator('.c-widget-news-latest-top  > div > p.title-h5')
        this.newsWidgetAllNewsBtn = this.page.locator('.c-widget-news-latest-top > div > a.c-button')
        this.sidebarMatchesWidget = this.page.locator('.o-widget.c-widget-top-matches');
        this.sidebarAdBanner = this.page.locator('.c-banner-custom.custom-banner.c-banner-custom--small:not(tooltip)');
    }
}

export class SideBar extends SideBarLocators{

    async checkWebPageSkeleton() {

        await expect(this.wholeHeader).toBeVisible( {timeout: 30000});
        await expect(this.footerMenu).toBeVisible();
        await expect(this.page.locator('text=component.')).not.toBeVisible();
        // await expect(this.page.locator('text=components.')).not.toBeVisible();
        // await expect(this.page.locator('text=undefined.')).not.toBeVisible();
        await expect(this.page.locator('text=Not found')).not.toBeVisible();
    }

    async baseSidebarWidgetsPresent() {
        await this.sidebarNewsWidgetVisible()
        await this.sidebarMatchesWidgetVisible()
        await this.sidebarAdBannerVisible()
    }

    async sidebarNewsWidgetVisible() {
        await expect(this.sidebarNewsWidget).toBeVisible();
        await expect(this.sidebarNewsCount).toHaveCount(3);
    }

    async sidebarNewsWidgetNotExist() {
        await expect(this.sidebarNewsWidget).toHaveCount(0);
    }

    async sidebarMatchesWidgetVisible() {
        await expect(this.sidebarMatchesWidget).toBeVisible();
    }

    async sidebarMatchesWidgetNotExist() {
        await expect(this.sidebarMatchesWidget).toHaveCount(0);
    }

    async sidebarAdBannerVisible() {
        await expect(this.sidebarAdBanner).toBeVisible();
    }

    async sidebarAdBannerNotExist() {
        await expect(this.sidebarAdBanner).toHaveCount(0);
    }

    async forumWidgetVisible() {
        await expect(this.sidebarForumWidget).toBeVisible();
        // TODO: expect more than 3 topics
        // TODO: expect all topics btn
    }

    async forumWidgetNotExist() {
        await expect(this.sidebarForumWidget).not.toBeVisible();
    }

    async visitAnyForumTopic() {
        const count = await this.forumTopics.count();
        await this.forumTopics.nth(count -1).click();
    }

    async visitFirstForumTopic() {
        await this.forumTopics.first().click()
    }

}

// .o-widget.c-widget-forum-recent c-widget-forum-recent--sidebar