import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import {LoginPage } from '../pages/loginPage';
import {MyAccountPage} from '../pages/myAccountPage';
import { TestConfig } from '../test.config';

let homePage: HomePage;
let loginPage: LoginPage;
let myAccountPage: MyAccountPage;
let config : TestConfig;

//this hook will run before each test case
test.beforeEach(async ({ page }) => {
    config = new TestConfig();
    await page.goto(config.appUrl);//navigate to the application url
    // Initialize the page objects
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    myAccountPage = new MyAccountPage(page);
   
});

//this hook will run after each test case
test.afterEach(async ({ page }) => {
    await page.close();
});

test("user login test @master @sanity @regression", async ({ page }) => {


    //go to my account and click on Login link
    await homePage.clickOnMyAccount();
    await homePage.clickOnLoginLink();


    //fill the login form with random data and submit

    await loginPage.setEmail(config.email);
    await loginPage.setPassword(config.password);
    await loginPage.clickLoginButton();

    //verify succeful login by checking the my account page presence
    const isLogged= await myAccountPage.isMyAccountPageExists();
    expect(isLogged).toBeTruthy();


    await page.waitForTimeout(3000); // Wait for 3 seconds before closing the browser




});


