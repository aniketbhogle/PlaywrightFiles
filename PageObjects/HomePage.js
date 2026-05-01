export class HomePage{
constructor(page){
this.page=page;
this.addproduct=page.locator('input[value="Add to cart"]').nth(1);
this.cartlink= page.locator('span:has-text("Shopping cart")');
this.homepage=page.getByRole('img', { name: 'Tricentis Demo Web Shop' });
this.logoutlink=page.locator('.ico-logout');
}
async addItemToCart(){
    await this.addproduct.click();
    await this.cartlink.click();
}

async ReturnAndLogout(){
    await this.homepage.click();
    await this.logoutlink.click();
}
}