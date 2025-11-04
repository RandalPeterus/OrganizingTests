import { expect } from '@wdio/globals'
import HomePage from '../pageobjects/home.page.js'

describe('Home Page', () => {
    it('should open the home page', async () => {
        await HomePage.open();
        await browser.maximizeWindow();
        await expect(browser).toHaveTitle('The Internet');
    });
    it('should check the array size', async () => {
        await expect(HomePage.listExamples).toBeElementsArrayOfSize(44);
    });

});