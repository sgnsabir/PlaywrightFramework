const base = require('@playwright/test');

exports.customtest = base.test.extend(
    {
        testDataForOrder: {
            username: "sabir001@gmail.com",
            password: "AbrarSabir1",
            productName: "ZARA COAT 3"
        }
    }
)