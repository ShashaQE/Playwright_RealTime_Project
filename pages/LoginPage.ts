import {Page, Locator} from "@playwright/test";

// Class - Locators

export class LoginPage{

    private readonly page: Page;
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly login_button: Locator;

    constructor(page:Page){
        this.page = page;
        this.usernameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        this.login_button = page.getByRole('button', {name: 'Login'});
    }

    async navigatetoLogin(){
        await this.page.goto('https://www.saucedemo.com/')

    }

    async enterUsername(username: string){
        await this.usernameInput.fill(username)
    }

    async enterPassword(password: string){
        await this.passwordInput.fill(password)
    }

    async clickLogin(){
        await this.login_button.click()
    }

    async login(username: string, password: string){
        await this.navigatetoLogin();
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();

    }
}