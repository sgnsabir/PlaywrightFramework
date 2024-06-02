const { LoginPage } = require('./LoginPage');
const { DashboardPage } = require('./DashboardPage');
const { OrdersHistoryPage } = require('./OrdersHistoryPage');
const { OrdersReviewPage } = require('./OrdersReviewPage');
const { CartPage } = require('./CartPage');
const { LoginPageTest } = require('./LoginPageTest');
const { LoginPageErrorValidation } = require('./LoginPageErrorValidation');
class POManager {
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
        this.ordersHistoryPage = new OrdersHistoryPage(this.page);
        this.ordersReviewPage = new OrdersReviewPage(this.page);
        this.cartPage = new CartPage(this.page); LoginPageTest
        this.loginPageTest = new LoginPageTest(this.page);
        this.loginPageErrorValidation = new LoginPageErrorValidation(this.page);
    }

    getLoginPage() {
        return this.loginPage;
    }
    getCartPage() {
        return this.cartPage;
    }
    getDashboardPage() {
        return this.dashboardPage;
    }
    getOrdersHistoryPage() {
        return this.ordersHistoryPage;
    }
    getOrdersReviewPage() {
        return this.ordersReviewPage;
    }
    getLoginPageTest() {
        return this.loginPageTest;
    }
    getLoginPageErrorValidation() {
        return this.loginPageErrorValidation;
    }
}
module.exports = { POManager };