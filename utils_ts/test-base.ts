import {test as baseTest} from '@playwright/test';
interface testDataForOrder{
    username: string;
    password: string;
    productName: string;
};

export const customtest = baseTest.extend<{testDataForOrder:testDataForOrder}>(
    {
        testDataForOrder: {
            username: "sabir001@gmail.com",
            password: "AbrarSabir1",
            productName: "ZARA COAT 3"
        }
    }
)