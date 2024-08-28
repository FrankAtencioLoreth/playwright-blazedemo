import { test, expect } from '@playwright/test';
import { BookingsPage } from '../pages/BookingsPage';
import Environment from '../utils/Environment';
import { BasePage } from '../pages/BasePage';

/**
 * Test Suite for BlazeDemo
 * 
 * This test suite includes a test case designed to verify the booking process on the BlazeDemo web application.
 * It involves navigating to the index page, selecting a destination, filling out personal information, and confirming the booking.
 */

test.beforeEach( async({ page }) => {

    /**
     * Before Each Hook
     * 
     * This hook runs before each test case. It logs the base URL from the environment configuration to the console.
     * 
     * @param page - The Playwright `Page` object representing the browser tab.
     */
    console.log(`Test starter with BASE URL: ${ Environment.BASEURL }`);

});

test('Test for BlazeDemo', { tag: '@TC_001' }, async ({ page }) => {

    /**
     * Test Case: Test for BlazeDemo
     * 
     * This test case validates the complete booking process on the BlazeDemo application.
     * It is tagged as '@TC_001' for easy identification and filtering.
     * 
     * @param page - The Playwright `Page` object representing the browser tab.
     */
    const bookingPage = new BookingsPage(page);

    /**
     * Step 1: Navigate to the index page
     * 
     * Loads the index page of the BlazeDemo application.
     */
    await test.step(`Go to the index page`, async () => {
        
        await bookingPage.load('/');

    });

    /**
     * Step 2: Select Destination
     * 
     * Selects the departure and destination ports and submits the selection on the BlazeDemo application.
     */
    await test.step(`Select destiny`, async () => {
        
        await bookingPage.selectDestiny();

    });

    /**
     * Step 3: Fill Personal Information
     * 
     * Fills in the user's personal information, including name, address, and payment details, and submits the booking form.
     */
    await test.step(`Fill personal information`, async () => {
        
        await bookingPage.fillPersonalInformation();

    });

    /**
     * Step 4: Confirm Booking
     * 
     * Verifies that the booking was successful by checking for the confirmation message.
     */
    await test.step(`Confirmation booking`, async () => {
        
        await bookingPage.confirmationBooking();

    });

});

/**
 * After Each Hook
 * 
 * This hook runs after each test case. It captures a screenshot of the current page and attaches it to the test results.
 * 
 * @param page - The Playwright `Page` object representing the browser tab.
 * @param testInfo - Information about the test that was just executed.
 */
test.afterEach( async({ page }, testInfo) => {

   const bp = new BasePage(page);
   await bp.takeScreenshot(page, testInfo);

    console.log(`Test completed`);

});
