import { Page, expect, Locator, TestInfo } from '@playwright/test';

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

    async takeScreenshot(page: Page, testInfo: TestInfo): Promise<void> {
        const screenshot = await page.screenshot({
            path: `screnshots/screenshot_${testInfo.tags}.png`, 
            fullPage: true
        });
        
        await testInfo.attach('screenshots', {
            body: screenshot,
            contentType: 'image/png'
        });
    }

}