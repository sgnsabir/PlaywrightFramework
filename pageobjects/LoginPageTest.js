class LoginPageTest {

    constructor(page) {
        this.page = page;
        this.userName = page.locator("#username");
        this.password = page.locator("[type='password']");
        this.signInbutton = page.locator("#signInBtn");
        this.Locator = page.locator("[style*='block']");
    }

    async goTo() {
        await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    }

    async invalidLogin(username, password) {
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.signInbutton.click();
        await this.page.waitForLoadState('networkidle');
    }
    async errorMessageLocator() {
        await this.Locator.waitFor();
        return await this.Locator;
    }
}
module.exports = { LoginPageTest };