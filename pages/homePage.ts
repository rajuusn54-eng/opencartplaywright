import {Page,Locator} from "@playwright/test";

export class HomePage {

    //locators
    private readonly page: Page;
    private readonly lnkMyAccount: Locator;
    private readonly lnkRegister: Locator;
    private readonly lnkLogin: Locator;
    private readonly txtSearchBox: Locator;
    private readonly btnSearch: Locator;

    //constructor
 constructor(page: Page) {
        this.page = page;
        this.lnkMyAccount = page.locator("span:has-text('My Account')");
        this.lnkRegister = page.locator("a:has-text('Register')");
        this.lnkLogin = page.locator("a:has-text('Login')");
        this.txtSearchBox = page.locator("input[name='search']");
        this.btnSearch = page.locator("#search button[type='button']");
    }

//action methods

// check the home page is loaded or not
async ishomePageExists(){
let title:string= await this.page.title();
if(title){
    return true;
}
return false;

}
//click my account
async clickOnMyAccount(){

    try{
        await this.lnkMyAccount.click();
    } catch(error){
    console.log(`Error while clicking on My Account link: ${error}`);
    throw error;    
    }
}

//click on register link
async clickOnRegisterLink(){
    try{
        await this.lnkRegister.click();
    } catch(error){
    console.log(`Error while clicking on Register link: ${error}`);
    throw error;    
    }
}

//click login link
async clickOnLoginLink(){
    try{
        await this.lnkLogin.click();
    } catch(error){
    console.log(`Error while clicking on Login link: ${error}`);
    throw error;    
    }   
}

//Enter product name in search box
async enterProductName(productName: string){
    try{
        await this.txtSearchBox.fill(productName);
    } catch(error){
    console.log(`Error while entering product name in search box: ${error}`);
    throw error;    
    }
}

//click on search button

async clickOnSearchButton(){
    try{
        await this.btnSearch.click();
    } catch(error){
    console.log(`Error while clicking on Search button: ${error}`);
    throw error;    
    }

}

}