class RegisterPage {
    get inputName() {
        return $('#ap_customer_name');
    }

    get inputMail() {
        return $('#ap_email');
    }

    get inputPassword() {
        return $('#ap_password');
    }

    get inputPasswordCheck() {
        return $('#ap_password_check');
    }

    get btnCreateAccount() {
        return $('#a-autoid-0');
    }

    get linkConditionsOfUse() {
        return $('#legalTextRow > a:nth-child(1)');
    }

}
module.exports = new RegisterPage();