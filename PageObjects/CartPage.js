export class CartPage{
constructor(page){
this.page=page;
this.SelectCountry=page.locator('#CountryId');
this.Conditions=page.locator('#termsofservice')
this.checkoutbutton=page.locator('#checkout');
}
async CheckoutOp(country)
{
    await this.SelectCountry.selectOption(country);
    await this.Conditions.check();
    await this.checkoutbutton.click();
}
}