class Page {
    goToHome() {
        browser.url('https://www.amazon.com/')
    }

    goToCart() {
        return $('#nav-cart').click();
    }

    get createAccount() {
        return $('#nav-signin-tooltip > div > a');
    }

    get hello() {
        return $('#nav-link-accountList');
    }

    goToCreateAccount() {
        return $('#nav-flyout-ya-newCust > a').click();
    }
}
module.exports = new Page();