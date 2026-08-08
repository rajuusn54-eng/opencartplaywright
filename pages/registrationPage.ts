import {Page,Locator} from "@playwright/test";

export class RegistrationPage {

    //locators
    private readonly page: Page;
    private readonly txtFirstName: Locator;
    private readonly txtLastName: Locator
    private readonly txtEmail: Locator;
    private readonly txtTelephone: Locator;
    private readonly txtPassword: Locator;
    private readonly txtConfirmPassword: Locator;
    private readonly chkPrivacyPolicy: Locator;
    private readonly btnContinue: Locator;
    private readonly chkNewsletter: Locator;
    private readonly msgSuccess: Locator;

    //constructor
constructor(page: Page) {


this.page = page;
this.txtFirstName = page.locator("#input-firstname");
this.txtLastName = page.locator("#input-lastname");
this.txtEmail = page.locator("#input-email");
this.txtTelephone = page.locator("#input-telephone");
this.txtPassword = page.locator("#input-password");
this.txtConfirmPassword = page.locator("#input-confirm");
this.chkPrivacyPolicy = page.locator("input[name='agree']");
this.btnContinue = page.locator("input[value='Continue']");
this.chkNewsletter = page.locator("input[name='newsletter'][value ='1']");
this.msgSuccess = page.locator("h1:has-text('Your Account Has Been Created!')" );

}

//action methods
//sets first name
async setFirstName(firstName: string) : Promise<void> {
    await this.txtFirstName.fill(firstName);

}

//sets last name
async setLastName(lastName: string) : Promise<void> {
    await this.txtLastName.fill(lastName);
}

//sets email
async setEmail(email: string) : Promise<void> {
    await this.txtEmail.fill(email);

}

//sets telephone
async setTelephone(telephone: string) : Promise<void> {
    await this.txtTelephone.fill(telephone);
}

//sets password
async setPassword(password: string) : Promise<void> {
    await this.txtPassword.fill(password);

}

//sets confirm password
async setConfirmPassword(confirmPassword: string) : Promise<void> {
    await this.txtConfirmPassword.fill(confirmPassword);

}

//clicks on privacy policy checkbox
async clickPrivacyPolicy() : Promise<void> {
    await this.chkPrivacyPolicy.check();
}

//clicks on newsletter checkbox
async clickNewsletter() : Promise<void> {
    await this.chkNewsletter.check();
}

//clicks on continue button
async clickContinue() : Promise<void> {
    await this.btnContinue.click();
}

//checks if success message is displayed
async getSuccessMessage() : Promise<string> {
    return await this.msgSuccess.textContent() ?? ''; 

}

async completeRegistration( userData :{ firstName: string, lastName: string, email:
     string, telephone: string, password: string, confirmPassword: string }) : Promise<void> {
    await this.setFirstName(userData.firstName);
    await this.setLastName(userData.lastName);
    await this.setEmail(userData.email);
    await this.setTelephone(userData.telephone);
    await this.setPassword(userData.password);
    await this.setConfirmPassword(userData.confirmPassword);
    await this.clickPrivacyPolicy();
    await this.clickNewsletter();
    await this.clickContinue();
}


}






