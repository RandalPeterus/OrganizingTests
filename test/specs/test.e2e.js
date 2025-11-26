import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import Checkboxes from '../pageobjects/checkbox.page.js'
import LoginData from '../login.data.js'

//Use describe.skip to skip test suites you do not want to run
describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
//'tomsmith', 'SuperSecretPassword!'
        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
        await expect(SecurePage.flashAlert).toMatchElementSnapshot('flashAlert')
    })
    //this next test is dependant on previous tests
    it('logout of secure area', async () => {
        //navigate to the secure area (assumed to be achieved by previous test)
        //click on logout button
        await SecurePage.btnLogout.click()
        // Logout Check
        //await browser.pause(3000)
        //check for the login page flash alert
        await expect(LoginPage.flashNotice).toBeExisting()
        await expect(LoginPage.flashNotice).toHaveText(
            expect.stringContaining('You logged out of the secure area!'))
        await expect(LoginPage.flashNotice).toMatchElementSnapshot('flashNotice')
    })
    it('should fail to login with valid credentials',async () => {
        //navigate to login page
        await LoginPage.open()
        //input correct username and incorrect password
        await LoginPage.login('username', 'Password')
        //await browser.pause(3000)
        //check for "Your password is invalid" in #flash
        //console.log(await LoginPage.flashAlert.getText())
        await expect(LoginPage.flashNotice).toBeExisting()
        await expect(LoginPage.flashNotice).toHaveText(
            expect.stringContaining('Your username is invalid!'))
        // saves a snapshot in the snapshots folder
        await expect(LoginPage.flashNotice).toMatchElementSnapshot('flashAlert_invalidUser')
    })
});

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
//'tomsmith', 'SuperSecretPassword!'
        await LoginPage.login(LoginData.validUser.username, LoginData.validUser.password)
//references LoginData from login.data.js to get the static invalid user info
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            //pulls from the notices static object within login.data.js
            expect.stringContaining(LoginData.notices.successLogin))
        await expect(SecurePage.flashAlert).toMatchElementSnapshot('flashAlert')
    })
    //this next test is dependant on previous tests
    it('logout of secure area', async () => {
        //navigate to the secure area (assumed to be achieved by previous test)
        //click on logout button
        await SecurePage.btnLogout.click()
        // Logout Check
        //await browser.pause(3000)
        //check for the login page flash alert
        await expect(LoginPage.flashNotice).toBeExisting()
        await expect(LoginPage.flashNotice).toHaveText(
            //pulls from the notices static object within login.data.js
            expect.stringContaining(LoginData.notices.logout))
        await expect(LoginPage.flashNotice).toMatchElementSnapshot('flashNotice')
    })
    it('should fail to login with valid credentials',async () => {
        //navigate to login page
        await LoginPage.open()
        //input correct username and incorrect password
        await LoginPage.login(LoginData.invalidUser.username, LoginData.invalidUser.password)
        //references LoginData from login.data.js to get the static invalid user info
        //await browser.pause(3000)
        //check for "Your password is invalid" in #flash
        //console.log(await LoginPage.flashAlert.getText())
        await expect(LoginPage.flashNotice).toBeExisting()
        await expect(LoginPage.flashNotice).toHaveText(
            //pulls from the notices static object within login.data.js
            expect.stringContaining(LoginData.notices.invalidUsername))
        // saves a snapshot in the snapshots folder
        await expect(LoginPage.flashNotice).toMatchElementSnapshot('flashAlert_invalidUser')
    })
});


describe.skip('New Set', () => {   
    //Create a new page object page for checkboxes
    //1st test: navigate to check boxes page and confirm that checkbox 1 is unchecked
    it('should confirm checkbox 1 is unchecked', async () => {
        await Checkboxes.open()
        await browser.maximizeWindow()
        await expect(Checkboxes.check1).toBeExisting()
        await expect(Checkboxes.check1).not.toBeSelected()
        await expect(Checkboxes.check1).toMatchElementSnapshot('checkbox1')
   
    })
    //2nd test: click checkbox 2 and make sure checkbox 2 is unclicked
    it('should click checkbox 2, then should confirm checkbox 2 is unchecked', async () => {
        await expect(Checkboxes.check2).toBeExisting()
        await Checkboxes.click2()
        await expect(Checkboxes.check2).not.toBeSelected()
        await expect(Checkboxes.check2).toMatchElementSnapshot('checkbox2')
    })
    
})
