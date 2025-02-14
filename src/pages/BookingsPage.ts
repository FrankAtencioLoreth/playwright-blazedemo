import { BookingsLocators } from './locators/BookingsLocators';
import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * BookingsPage Class
 * 
 * This class extends the BasePage and provides specific methods and locators to interact with the booking process on a web application. 
 * It encapsulates the actions required to select a destination, fill out personal information, and confirm a booking.
 */
export class BookingsPage extends BasePage {

    // Locators for elements on the bookings page
    private readonly index: Locator;
    private readonly fromPortSelect: Locator;
    private readonly toPortSelect: Locator;
    private readonly submitButton: Locator;
    private readonly chooseFlightButton: Locator;
    private readonly nameTextBox: Locator;
    private readonly addressTextBox: Locator;
    private readonly cityTextBox: Locator;
    private readonly stateTextBox: Locator;
    private readonly zipCodeTextBox: Locator;
    private readonly cardTypeSelect: Locator;
    private readonly creditCardNumberTextBox: Locator;
    private readonly creditCardMonthTextBox: Locator;
    private readonly creditCardYearTextBox: Locator;
    private readonly nameOnCardTextBox: Locator;
    private readonly rememberMeCheck: Locator;
    private readonly purchaseMessage: Locator;

    /**
     * Constructor for the BookingsPage class.
     * 
     * @param page - The Playwright `Page` object representing the browser tab.
     * 
     * Initializes locators for the elements on the bookings page using the `BookingsLocators` object.
     */
    constructor(page: Page) {
        super(page);
        this.index = page.locator(BookingsLocators.index);
        this.fromPortSelect = page.locator(BookingsLocators.fromPortSelect);
        this.toPortSelect = page.locator(BookingsLocators.toPortSelect);
        this.submitButton = page.locator(BookingsLocators.submitButton);
        this.chooseFlightButton = page.locator(BookingsLocators.chooseFlightButton);
        this.nameTextBox = page.locator(BookingsLocators.nameTextBox);
        this.addressTextBox = page.locator(BookingsLocators.addressTextBox);
        this.cityTextBox = page.locator(BookingsLocators.cityTextBox);
        this.stateTextBox = page.locator(BookingsLocators.stateTextBox);
        this.zipCodeTextBox = page.locator(BookingsLocators.zipCodeTextBox);
        this.cardTypeSelect = page.locator(BookingsLocators.cardTypeSelect);
        this.creditCardNumberTextBox = page.locator(BookingsLocators.creditCardNumberTextBox);
        this.creditCardMonthTextBox = page.locator(BookingsLocators.creditCardMonthTextBox);
        this.creditCardYearTextBox = page.locator(BookingsLocators.creditCardYearTextBox);
        this.nameOnCardTextBox = page.locator(BookingsLocators.nameOnCardTextBox);
        this.rememberMeCheck = page.locator(BookingsLocators.rememberMeCheck);
        this.purchaseMessage = page.locator(BookingsLocators.purchaseMessage);
    }

    /**
     * Selects a departure and destination port, then submits the selection.
     * 
     * @returns A promise that resolves when the selection and submission are complete.
     */
    async selectDestiny(): Promise<void>{
        await this.selectOption(this.fromPortSelect, 'Paris');
        await this.selectOption(this.toPortSelect, 'Buenos Aires');
        await this.clickOn(this.submitButton);
    }

    /**
     * Verifies that the booking confirmation message is visible on the page.
     * 
     * @returns A promise that resolves when the confirmation message is verified to be visible.
     */
    async confirmationBooking(): Promise<void> {
        await this.expectVisible(this.purchaseMessage);
    }

    /**
     * Fills in the personal information required for the booking, selects a flight, and submits the form.
     * 
     * @returns A promise that resolves when the personal information has been filled, and the form has been submitted.
     */
    async fillPersonalInformation(): Promise<void> {
        await this.clickOn(this.chooseFlightButton);
        await this.fillField(this.nameTextBox, 'Frank Atencio Loreth');
        await this.fillField(this.addressTextBox, 'Calle Wallapop #45 - 49');
        await this.fillField(this.cityTextBox, 'Bogotá');
        await this.fillField(this.stateTextBox, 'Cundinamarca');
        await this.fillField(this.zipCodeTextBox, '504590');
        await this.selectOption(this.cardTypeSelect, 'amex');
        await this.fillField(this.creditCardNumberTextBox, '1102882124');
        await this.fillField(this.creditCardMonthTextBox, '05');
        await this.fillField(this.creditCardYearTextBox, '2027');
        await this.fillField(this.nameOnCardTextBox, 'Frank');
        await this.clickOn(this.rememberMeCheck);
        await this.clickOn(this.submitButton);

    }

}
