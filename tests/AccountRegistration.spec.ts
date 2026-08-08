import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { RandomDataUtil } from '../utils/randomDataGenerator';
import { TestConfig } from '../test.config';


let homePage: HomePage;
let registrationPage: RegistrationPage;

test.beforeEach(async ({ page }) => {
    const config = new TestConfig();
    await page.goto(config.appUrl);//navigate to the application url
    // Initialize the page objects
    homePage = new HomePage(page);
    registrationPage = new RegistrationPage(page);
});

test.afterEach(async ({ page }) => {
    await page.close();
});

test("user registration test @master @sanity @regression", async ({ page }) => {


    //go to my account and click on register link
    await homePage.clickOnMyAccount();
    await homePage.clickOnRegisterLink();


    //fill the registration form with random data and submit


    await registrationPage.setFirstName(RandomDataUtil.getFirstName());
    await registrationPage.setLastName(RandomDataUtil.getLastName());
    await registrationPage.setEmail(RandomDataUtil.getEmail());
    await registrationPage.setTelephone(RandomDataUtil.getPhoneNumber());
    const password = RandomDataUtil.getPassword();
    await registrationPage.setPassword(password);
    await registrationPage.setConfirmPassword(password);
    await registrationPage.clickPrivacyPolicy();
    await registrationPage.clickContinue();

    //validate the confirmation message

    const confirmationMessage = await registrationPage.getSuccessMessage();
    expect(confirmationMessage).toContain("Your Account Has Been Created!");

    await page.waitForTimeout(3000); // Wait for 3 seconds before closing the browser




});

