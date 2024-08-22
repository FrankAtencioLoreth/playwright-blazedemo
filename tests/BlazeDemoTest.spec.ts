import { test, expect } from '@playwright/test';
import { BookingsPage } from '../pages/BookingsPage';

test.beforeEach( async({ page }) => {

    console.log(`Test starter`);

});

test('Test for BlazeDemo', async ({ page }) => {
    
    const bookingPage = new BookingsPage(page);

    await test.step(`Go to the index page`, async () => {
        
        await bookingPage.load('/');

    });

    await test.step(`Select destiny`, async () => {
        
        await bookingPage.selectDestiny();

    });

    await test.step(`Fill personal information`, async () => {
        
        await bookingPage.fillPersonalInformation();

    });

    await test.step(`Confirmation booking`, async () => {
        
        await bookingPage.confirmationBooking();

    });

});

test.afterEach( async({ page }) => {

    console.log(`Test completed`);

});
