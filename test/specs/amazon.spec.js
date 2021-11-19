const Page = require('../pageObjects/page');
const HomePage = require('../pageObjects/homePage');
const ResultsPage = require('../pageObjects/resultsPage');
const DetailsPage = require('../pageObjects/detailsPage');
const CartPage = require('../pageObjects/cartPage');
const RegisterPage = require('../pageObjects/registerPage');
const HelpServicePage = require('../pageObjects/helpServicePage');
const testData = require('../testData/homePage');
const globals = require('../utils/globals');
const Util = require('../utils/util');
var fs = require('fs');

beforeEach(() => {
    browser.setWindowSize(1440, 968);
    Page.goToHome();
});

afterEach(() => {
    CLEAN_UP();
});

describe('Validate functionalities on amazon webpage', () => {
    it('Verify price persistance accroos pages for Samsung Galaxy Note 20', () => {
        HomePage.searchForProduct(testData.searchProduct);
        browser.pause(globals.longWait);
        let resultIndex = ResultsPage.searchForResultName(testData.searchProduct);
        const resultPrice = ResultsPage.getPriceForResult(resultIndex);
        ResultsPage.lblProductName[resultIndex].click();
        DetailsPage.lblPrice.waitForDisplayed(globals.longWait);
        expect(resultPrice).toEqual(DetailsPage.lblPrice.getText());
        DetailsPage.btnAddToCart.click();
        Page.goToCart();
        CartPage.lblPriceSummaryContainer.waitForDisplayed(globals.longWait);
        expect(resultPrice).toEqual(CartPage.lblPriceSummaryContainer.getText());
        expect(resultPrice).toEqual(CartPage.lblPriceCart.getText());
        expect(resultPrice).toEqual(CartPage.lblPriceSubTotal.getText());
        CartPage.itemInCart.waitForDisplayed(globals.longWait);
        expect(CartPage.itemInCart.isDisplayed()).toBe(true)
        browser.pause(globals.shortWait);
        CartPage.linkDelete.click();
        browser.pause(globals.shortWait);
        expect(CartPage.itemInCart.isDisplayed()).toBe(false)
    });

    it('Should send name and email via API json on register screen', () => {
        Page.createAccount.waitForClickable(globals.shortWait);
        browser.pause(globals.shortWait);
        Page.hello.moveTo();
        browser.pause(globals.shortWait);
        Page.goToCreateAccount();
        browser.pause(globals.shortWait);
        RegisterPage.inputName.setValue(testData.name);
        RegisterPage.inputMail.setValue(testData.email);

        //I didn't finde the way and haven't enough time to inject the name and email with api response, i've just figured out how to intercept the response 'register' after
        //clicking on create account and verify the user and mail persist. Commented section bellow

        // var output = browser.mock('**/register', { method: 'post' });
        // RegisterPage.btnCreateAccount.click();

        // Object.keys(output.calls).forEach(function(key) {
        //     console.log(output.calls[key].url)
        //     fs.writeFile(key + '.json', JSON.stringify(output.calls[key]), function(err) {
        //         if (err) throw err;
        //     })
        // })

        RegisterPage.linkConditionsOfUse.click();
        browser.pause(globals.shortWait);
        HelpServicePage.searchForProduct(testData.searchProduct2);
        browser.pause(globals.shortWait);
        HelpServicePage.searchForLink(testData.linkName);
        browser.pause(globals.longWait);
        expect(HelpServicePage.gettingStarted.isDisplayed()).toBe(true);
        expect(HelpServicePage.gettingStarted.getText()).toEqual('Getting Started');
        expect(HelpServicePage.wifiAndBluetooth.isDisplayed()).toBe(true);
        expect(HelpServicePage.wifiAndBluetooth.getText()).toEqual('Wi-Fi and Bluetooth');
        expect(HelpServicePage.deviceSoftwareAndHW.isDisplayed()).toBe(true);
        expect(HelpServicePage.deviceSoftwareAndHW.getText()).toEqual('Device Software and Hardware');
        expect(HelpServicePage.troubleShooting.isDisplayed()).toBe(true);
        expect(HelpServicePage.troubleShooting.getText()).toEqual('Troubleshoot');

    });
});