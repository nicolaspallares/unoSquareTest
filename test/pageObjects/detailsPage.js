class DetailsPage {

    get lblPrice() {
        return $('#price_inside_buybox');
    }

    get btnAddToCart() {
        return $('#add-to-cart-button');
    }
}
module.exports = new DetailsPage();