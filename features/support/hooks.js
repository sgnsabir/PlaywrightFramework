const { Before, After, AfterStep, Status } = require('@cucumber/cucumber'); 
const playwright = require("@playwright/test");

Before(async function () {
    const browser = await playwright.chromium.launch({ headless: false });
    const context = await browser.newContext();
    this.page = await context.newPage();
});

AfterStep(async function ({ result }) {
    if (result.status === Status.FAILED) {
        const buffer = await this.page.screenshot();
        await this.page.screenshot({ path: './mediaLogs/screnshot1.png' });
        this.attach(buffer.toString('base64'), 'base64:image/png');
        console.log("Screenshot logged");
    }
});

After(function () {
    console.log("I am done");
});