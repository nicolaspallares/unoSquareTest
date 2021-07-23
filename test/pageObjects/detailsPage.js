class DetailsPage {

    get lblPrice() {
        return $('#priceblock_ourprice');
    }

    get btnAddToCart() {
        return $('#add-to-cart-button');
    }
}
module.exports = new DetailsPage();