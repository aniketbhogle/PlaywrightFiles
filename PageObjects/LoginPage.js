export class LoginPage{
constructor(page){
this.page=page;
this.usernameField=page.locator("#Email");
this.passwordField=page.locator("#Password");
this.loginButton=page.locator("//input[@value='Log in']");
}
async openApplication(){
    await this.page.goto('https://demowebshop.tricentis.com/login');
}
async LoginToApplication(username,password){
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
}
async closeApplication(){
    await this.page.close();
}
}