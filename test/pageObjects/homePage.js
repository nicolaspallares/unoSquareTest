const globals = require('../utils/globals');

class HomePage {

    get inputSearch() {
        return $('#twotabsearchtextbox');
    }

    get btnSearch() {
        return $('//*[@id="nav-search-submit-button"]');
    }

    searchForProduct(product) {
        this.inputSearch.waitForClickable(globals.longWait);
        this.inputSearch.click();
        this.inputSearch.setValue(product);
        this.btnSearch.doubleClick();
    }
};
module.exports = new HomePage();