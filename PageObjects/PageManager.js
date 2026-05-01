import { LoginPage } from "./LoginPage";
import { HomePage } from "./HomePage";
import { CartPage } from "./CartPage";
import { CheckoutPage } from "./Checkout";
import { OverviewPage } from "./OverviewPage";

export class PageManager{
constructor(page){
this.page=page;
this.LoginPageInstance=new LoginPage(page);
this.HomePageInstance=new HomePage(page);
this.CartPageInstance=new CartPage(page);
this.CheckoutPageInstance=new CheckoutPage(page);
this.OverviewPageInstance=new OverviewPage(page);
}
getLoginPage(){
    return this.LoginPageInstance;
}
getHomePage(){
    return this.HomePageInstance;
}
getCartPage(){
    return this.CartPageInstance;
}
getCheckoutPage(){
    return this.CheckoutPageInstance;
}
getOverviewPage(){
    return this.OverviewPageInstance;
}
}