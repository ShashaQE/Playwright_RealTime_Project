import{Page, Locator} from "@playwright/test";

export class HRMLoginPage {

    page: Page;
    UserInput: Locator;
    PasswordInput: Locator;
    loginButton: Locator

    // Locators
    constructor(page:Page){
        this.page = page;
        this.UserInput = page.getByPlaceholder('Username');
        this.PasswordInput = page.getByPlaceholder('Password');
        this.loginButton = page.locator('[type=submit]');
    }

    // Actions
    /* async navigateToUrl(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/')
    } */

    async enterusername(Username: string){
        await this.UserInput.fill(Username);
    }

    async enterpassword(Password: string){
        await this.PasswordInput.fill(Password);
    }

    async loginbutton(){
        await this.loginButton.click();
    }

    async login(Username: string, Password: string){
        //await this.navigateToUrl();
        await this.enterusername(Username);
        await this.enterpassword(Password)
        await this.loginbutton();
    }
}