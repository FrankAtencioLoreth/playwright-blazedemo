import { Page, expect, Locator } from '@playwright/test';

export class BasePage {

    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async load(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async clickOn(element: Locator): Promise<void> {
        await element.click();
    }

    async fillField(element: Locator, value: string): Promise<void> {
        await element.fill(value);
    }

    async selectOption(element: Locator, option: string): Promise<void> {
        await element.selectOption(option);
    }

    async expectVisible(element: Locator): Promise<void> {
        await expect(element).toBeVisible();
    }

}