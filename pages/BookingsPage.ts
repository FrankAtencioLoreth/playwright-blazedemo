import { BookingsLocators } from './locators/BookingsLocators';
import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class BookingsPage extends BasePage {

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

    async selectDestiny(): Promise<void>{
        await this.selectOption(this.fromPortSelect, 'Paris');
        await this.selectOption(this.toPortSelect, 'Buenos Aires');
        await this.clickOn(this.submitButton);
    }

    async confirmationBooking(): Promise<void> {
        await this.expectVisible(this.purchaseMessage);
    }

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
