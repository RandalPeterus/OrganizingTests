import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import securePage from '../pageobjects/secure.page.js'
import Checkboxes from '../pageobjects/checkbox.page.js'


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

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
})


describe('New Set', () => {   
    //Create a new page object page for checkboxes
    //1st test: navigate to check boxes page and confirm that checkbox 1 is unchecked
    it('should confirm checkbox 1 is unchecked', async () => {
        await Checkboxes.open()
        await browser.maximizeWindow()
        await expect(Checkboxes.check1).toBeExisting()
        await expect(Checkboxes.check1).not.toBeSelected()
   
    })
    //2nd test: click checkbox 2 and make sure checkbox 2 is unclicked
    it('should click checkbox 2, then should confirm checkbox 2 is unchecked', async () => {
        await expect(Checkboxes.check2).toBeExisting()
        await Checkboxes.check2click()
        await expect(Checkboxes.check2).not.toBeSelected()
    })
})

describe('', () => {
    it('',async () => {
        
    });
});