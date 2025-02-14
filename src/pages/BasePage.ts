import { Page, expect, Locator, TestInfo } from '@playwright/test';

/**
 * BasePage Class
 * 
 * This class serves as a base for interacting with web pages using Playwright.
 * It encapsulates common actions like navigating to a URL, clicking on elements,
 * filling text fields, selecting options from dropdowns, verifying element visibility,
 * and taking screenshots.
 */
export class BasePage {

    /**
     * Playwright's `Page` object representing the web page.
     * This object is injected through the constructor and is used to interact with the page.
    */
    protected readonly page: Page;

    /**
     * Constructor for the BasePage class.
     * 
     * @param page - The Playwright `Page` object representing the browser tab.
    */
    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Navigates to a specified URL.
     * 
     * @param url - The URL to navigate to.
     * @returns A promise that resolves when the navigation is complete.
     */
    async load(url: string): Promise<void> {
        await this.page.goto(url);
    }

    /**
     * Clicks on a specified element.
     * 
     * @param element - The locator of the element to be clicked.
     * @returns A promise that resolves when the click action is complete.
     */
    async clickOn(element: Locator): Promise<void> {
        await element.click();
    }

    /**
     * Fills a text field with a specified value.
     * 
     * @param element - The locator of the text field to be filled.
     * @param value - The value to enter into the text field.
     * @returns A promise that resolves when the field has been filled.
     */
    async fillField(element: Locator, value: string): Promise<void> {
        await element.fill(value);
    }

    /**
     * Selects an option from a dropdown menu.
     * 
     * @param element - The locator of the dropdown menu.
     * @param option - The value of the option to be selected.
     * @returns A promise that resolves when the option has been selected.
     */
    async selectOption(element: Locator, option: string): Promise<void> {
        await element.selectOption(option);
    }

    /**
     * Verifies that an element is visible on the page.
     * 
     * @param element - The locator of the element to be checked for visibility.
     * @returns A promise that resolves when the visibility has been verified.
     */
    async expectVisible(element: Locator): Promise<void> {
        await expect(element).toBeVisible();
    }

    /**
     * Takes a screenshot of the page and attaches it to the test report.
     * 
     * @param page - The Playwright `Page` object representing the browser tab.
     * @param testInfo - Information about the current test, used to attach the screenshot.
     * @returns A promise that resolves when the screenshot has been taken and attached.
     */
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