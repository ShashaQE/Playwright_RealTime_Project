import{Page, Locator} from "@playwright/test";

export class DashboardPage{

    page: Page;
    dashboardHeader: Locator;
    userDropdown: Locator;
    logoutlink: Locator;

    constructor(page: Page){
        this.page = page;
        this.dashboardHeader = page.locator('h6');
        this.userDropdown = page.getByRole('listitem').filter({ hasText: 'John Doe' }).locator('i');
        this.logoutlink = page.getByRole('menuitem', {name:'Logout'});
    }

    async logout(){

        await this.userDropdown.click();
        await this.logoutlink.click();
    }

}