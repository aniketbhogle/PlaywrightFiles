export class CheckoutPage{
constructor(page){
this.page=page;
this.SelectLocation=page.locator('#billing-address-select');
this.continuebutton1=page.locator('input[onclick="Billing.save()"]');
this.continuebutton2=page.locator('input[onclick="Shipping.save()"]');
this.shippingMethod=page.locator('#shippingoption_2');
this.continuebutton3=page.locator('input[onclick="ShippingMethod.save()"]');
this.continuebutton4=page.locator('input[onclick="PaymentMethod.save()"]');
this.continuebutton5=page.locator('input[onclick="PaymentInfo.save()"]');
this.confirmorder=page.locator('input[onclick="ConfirmOrder.save()"]');
}
async CheckoutProcess(location){
    await this.SelectLocation.selectOption(location);
    await this.continuebutton1.click();
    await this.continuebutton2.click();
    await this.shippingMethod.check();
    await this.continuebutton3.click();
    await this.continuebutton4.click();
    await this.continuebutton5.click();
    await this.confirmorder.click();
}
}