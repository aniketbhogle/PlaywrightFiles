import {test} from '@playwright/test';
import { PageManager } from '../PageObjects/PageManager';


test('E2E - Case1', async ({page}) => {
const pageManagerInstance=new PageManager(page);
//const LoginPageInstance=new LoginPage(page);
await pageManagerInstance.getLoginPage().openApplication();
await pageManagerInstance.getLoginPage().LoginToApplication('aniketog19@gmail.com','Sanika@0310');
await page.waitForTimeout(3000);
//const HomePageInstance=new HomePage(page);
await pageManagerInstance.getHomePage().addItemToCart();
await page.waitForTimeout(3000);
//const CartPageInstance=new CartPage(page);
await pageManagerInstance.getCartPage().CheckoutOp('India');
await page.waitForTimeout(3000);
//const CheckoutPageInstance=new CheckoutPage(page);
await pageManagerInstance.getCheckoutPage().CheckoutProcess('Aniket Bhogle, tyutu, tutty, Alberta tyutu, Canada');
await page.waitForTimeout(3000);
//const OverviewPageInstance=new OverviewPage(page);
await pageManagerInstance.getOverviewPage().VerifyOrderConfirmation();
await page.waitForTimeout(3000);
await pageManagerInstance.getOverviewPage().ConfirmOrder();
await page.waitForTimeout(3000);
await pageManagerInstance.getHomePage().ReturnAndLogout();
await pageManagerInstance.getLoginPage().closeApplication();
});
