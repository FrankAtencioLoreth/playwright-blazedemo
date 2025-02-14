/**
 * BookingsLocators Object
 * 
 * This object contains a collection of locators used to identify and interact with elements on the booking-related pages of a web application.
 * These locators can be used in test scripts to perform actions such as selecting options, filling out forms, and verifying messages.
 */
export const BookingsLocators = {
    index: '/',
    fromPortSelect: 'select[name="fromPort"]',
    toPortSelect: 'select[name="toPort"]',
    submitButton: 'input[type="submit"]',
    chooseFlightButton: 'xpath=/html/body/div[2]/table/tbody/tr[1]/td[1]/input',
    nameTextBox: '#inputName',
    addressTextBox: '#address',
    cityTextBox: '#city',
    stateTextBox: '#state',
    zipCodeTextBox: '#zipCode',
    cardTypeSelect: '#cardType',
    creditCardNumberTextBox: '#creditCardNumber',
    creditCardMonthTextBox: '#creditCardMonth',
    creditCardYearTextBox: '#creditCardYear',
    nameOnCardTextBox: '#nameOnCard',
    rememberMeCheck: '#rememberMe',
    purchaseMessage: 'xpath=//h1[text()="Thank you for your purchase today!"]'
}