import{Page, Locator} from "@playwright/test";

export class EmployeePage {
    page: Page;
    PIM : Locator;
    Add_Empolyee: Locator;
    FirstName: Locator;
    MiddleName: Locator;
    LastName: Locator;
    SaveButton: Locator;

    constructor(page:Page){
        this.page = page;
        this.PIM = page.getByRole('link', {name: 'PIM'});
        this.Add_Empolyee = page.getByRole('link', { name: 'Add Employee' });
        this.FirstName = page.getByPlaceholder('First Name');
        this.MiddleName = page.getByPlaceholder('Middle Name');
        this.LastName = page.getByPlaceholder('Last Name');
        this.SaveButton = page.getByRole('button', {name:' Save '});
    }


    // methods 

    async navigateToPIM(){
        await this.PIM.click();
    }

    async addEmpolyee(){
        await this.Add_Empolyee.click();
        await this.FirstName.fill("TestSha QA");
        await this.MiddleName.fill('Engineer');
        await this.LastName.fill("098");
        await this.SaveButton.click();
        await this.navigateToPIM();
    }


}