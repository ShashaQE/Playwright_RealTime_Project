import{test,expect} from "@playwright/test";

import {HRMLoginPage} from "../pages/HRM_LoginPage";
import {DashboardPage} from "../pages/Dashboard";

test('Verify HRM application login using POM', async({page})=>{

   const loginpage = new HRMLoginPage(page)

   await page.goto('https://opensource-demo.orangehrmlive.com/');

   loginpage.login('Admin', 'admin123')

   await expect(page).toHaveURL(/dashboard/)

   const dashboard = new DashboardPage(page);

   await expect(dashboard.dashboardHeader).toHaveText('Dashboard');
   
   await dashboard.logout()
})