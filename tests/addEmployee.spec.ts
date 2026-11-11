import{test, expect} from "@playwright/test";

import{HRMLoginPage} from "../pages/HRM_LoginPage";
import{EmployeePage} from "../pages/EmpolyeePage";

test("Adding Emplyee Information", async({page})=>{

   const login_page = new HRMLoginPage(page)

   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

   await login_page.enterusername('Admin');
   await login_page.enterpassword('admin123');
   await login_page.loginbutton();

   //await expect(page).toHaveURL(/dashboard/)

   const employeePage = new EmployeePage(page)

   await employeePage.navigateToPIM();
   await employeePage.addEmpolyee();
})