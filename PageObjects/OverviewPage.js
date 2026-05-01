import { expect } from '@playwright/test';

export class OverviewPage{
constructor(page){
this.page=page;
this.OrderConfirmation=this.page.getByText('Your order has been successfully processed!', { exact: true });
this.Confirmbutton=this.page.locator('.order-completed-continue-button');
}
async VerifyOrderConfirmation(){
   await expect(this.OrderConfirmation).toBeVisible();
}
async ConfirmOrder(){
    await this.Confirmbutton.click();
}
}