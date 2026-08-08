import {Page, Locator} from "@playwright/test";

export class LoginPage {

//locators
private readonly page:Page;
private readonly txtEmail:Locator;
private readonly txtPassword:Locator;
private readonly btnLogin:Locator
private readonly lnkForgotPassword:Locator;
private readonly errorMessage:Locator;


//constructor
constructor(page:Page){
    this.page=page;
    this.txtEmail=page.locator("#input-email");
    this.txtPassword=page.locator("#input-password");
    this.btnLogin=page.locator("input[value='Login']");
    this.lnkForgotPassword=page.locator("a:has-text('Forgotten Password')");
    this.errorMessage=page.locator("div.alert.alert-danger.alert-dismissible");
}

//action methods

async setEmail(email:string):Promise<void>{
    await this.txtEmail.fill(email);    
}

async setPassword(password:string):Promise<void>{
    await this.txtPassword.fill(password);
}

async clickForgotPasswordLink():Promise<void>{
    await this.lnkForgotPassword.click();
}   


async clickLoginButton():Promise<void>{
    await this.btnLogin.click();
}


async login(email:string,password:string):Promise<void>{
    await this.setEmail(email);
    await this.setPassword(password);
    await this.clickLoginButton();
}

async getErrorMessage():Promise<null | string>{    
return (this.errorMessage.textContent());

}

}