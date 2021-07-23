class CartPage {
    get lblPriceSummaryContainer() {
        return $$('.a-size-medium.a-color-base.sc-price.sc-white-space-nowrap')[0];
    }

    get lblPriceCart() {
        return $$('.a-size-medium.a-color-base.sc-price.sc-white-space-nowrap')[1];
    }

    get lblPriceSubTotal() {
        return $$('.a-size-medium.a-color-base.sc-price.sc-white-space-nowrap')[2];
    }

    get itemInCart() {
        return $('.a-column.a-span10');
    }

    get linkDelete() {
        return $$('.a-color-link')[0];
    }
}
module.exports = new CartPage();