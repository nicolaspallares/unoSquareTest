class ResultPage {

    get lblProductName() {
        return $$('.a-size-medium.a-color-base.a-text-normal');
    }

    get lblPrice() {
        return $$('.a-price-whole');
    }

    get resultCard() {
        return $$('//*[@data-component-type="s-search-result"]');
    }

    searchForResultName(productName) {
        for (var k in this.lblProductName) {
            let textName = this.lblProductName[k].getText();
            if (textName.includes(productName)) {
                // Sometimes result doesn't have price, so we validate it on this condition, if doesn't have price we continue looking for another result with.
                if (!this.resultCard[k].$('.a-price').isExisting()) {
                    continue;
                }
                break;
            }
        }
        return k;
    }

    getPriceForResult(index) {
        let price = this.resultCard[index].$('.a-price').getText().replace(/\n/g, '.');
        return price;
    }
}
module.exports = new ResultPage();