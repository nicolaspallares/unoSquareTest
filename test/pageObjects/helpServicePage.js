const globals = require('../utils/globals');
class HelpServicePage {
    get inputSearch() {
        return $('#helpsearch');
    }

    get linkElement() {
        return $$('.a-link-normal');
    }

    get gettingStarted() {
        return $$('.a-accordion-row-a11y')[0];
    }

    get wifiAndBluetooth() {
        return $$('.a-accordion-row-a11y')[1];
    }

    get deviceSoftwareAndHW() {
        return $$('.a-accordion-row-a11y')[2];
    }

    get troubleShooting() {
        return $$('.a-accordion-row-a11y')[3];
    }

    searchForProduct(product) {
        this.inputSearch.waitForClickable(globals.longWait);
        this.inputSearch.click();
        this.inputSearch.setValue(product);
        browser.keys("\uE007");
    }


    searchForLink(productName) {
        for (var k in this.linkElement) {
            let textName = this.linkElement[k].getText();
            if (textName === productName) {
                this.linkElement[k].click();
                break;
            }
        }
    }
}
module.exports = new HelpServicePage()