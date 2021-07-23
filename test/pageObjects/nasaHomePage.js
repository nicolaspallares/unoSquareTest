const globals = require('../utils/globals');
const TestData = require('../testData/nasaPage.json')

class NasaHome {

    get inputFirstName() {
        return $('#user_first_name');
    }

    get inputLastName() {
        return $('#user_last_name');
    }

    get inputEmail() {
        return $('#user_email');
    }

    get btnSignUp() {
        return $('.btn.btn-lg.btn-primary');
    }

    get APIKey() {
        return $('#apidatagov_signup > code');
    }

    get btnAccordion() {
        return $$('.usa-accordion-button');
    }

    get linkBrowseAPIs() {
        return $('#headerContent > li:nth-child(5) > a > span');
    }

    get exapmleQuery1() {
        return $('//*[@id="b-a1"]/p[7]/a');
    }

    get exampleQuery2() {
        return $('//*[@id="b-a2"]/p[5]');
    }

    get exampleQuery3() {
        return $('//*[@id="b-a3"]/p[4]/a');
    }

    goToNasaAndGetKey() {
        browser.url('https://api.nasa.gov/')
        this.btnSignUp.waitForClickable(globals.longWait);
        this.inputFirstName.setValue('Nicolas');
        this.inputLastName.setValue('Pallares');
        this.inputEmail.setValue('nickerass@gmail.com');
        this.btnSignUp.click();
        this.APIKey.waitForDisplayed(globals.longWait);
        return this.APIKey.getText();
    }

    treatLink(url, key) {
        const finalURL = encodeURI(url.replace("DEMO_KEY", key));
        return finalURL
    }

    selectAPIandGo(index) {
        browser.url('https://api.nasa.gov/');
        browser.pause(globals.shortWait);
        this.btnAccordion[index].waitForClickable(globals.longWait);
        this.linkBrowseAPIs.click();
        this.btnAccordion[index].waitForClickable(globals.longWait);
        this.btnAccordion[index].click();
    }
}
module.exports = new NasaHome();