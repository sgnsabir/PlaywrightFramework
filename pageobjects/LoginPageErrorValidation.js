class LoginPageErrorValidation {

    constructor(page) {
        this.page = page;
        this.signInbutton = page.locator("[value='Login']");
        this.forgotPassword = page.locator(".forgot-password-link");
        this.userName = page.locator("input[type='email']");
        this.password = page.locator("#userPassword");
        this.confirmPassword = page.locator("#confirmPassword");
        this.saveNewPassword = page.locator("[type='submit']");
        this.errorMessageLocator = page.locator("#toast-container");
    }

    async goTo() {
        await this.page.goto("https://rahulshettyacademy.com/client");
    }
    async invalidLogin(username, wrongpassword) {
        await this.userName.fill(username);
        await this.password.fill(wrongpassword);
        await this.signInbutton.click();
        await this.page.waitForLoadState('networkidle');
    }
    async errorMessageLocator() {
        await this.errorMessageLocator.waitFor();
        return this.errorMessageLocator;
    }
    async goToForgotPasswordPage() {
        await this.page.goto("https://rahulshettyacademy.com/client");
        await this.forgotPassword.click();
        await this.userName.waitFor();
    }
    async validateErrorUnregisteredEmail(unregisteredEmail, password) {
        console.log("Invoked in validateErrorUnregisteredEmail");
        await this.userName.fill(unregisteredEmail);
        await this.password.fill(password);
        await this.confirmPassword.fill(password);
        await this.saveNewPassword.click();
        await this.page.waitForLoadState('networkidle');
    }
    async unregUsrErrMsg() {
       await this.page.locator("#toast-container").waitFor();
        //await this.page.getByLabel('User Not found.').waitFor();
        return await this.page.locator("#toast-container").textContent();
    }
}
module.exports = { LoginPageErrorValidation };
