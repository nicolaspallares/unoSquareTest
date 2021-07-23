var Util = function() {
    CLEAN_UP = () => {
        browser.execute(() => {
            sessionStorage.clear();
            localStorage.clear();
        });
        browser.deleteAllCookies();
        browser.refresh();
    };

};
module.exports = new Util();