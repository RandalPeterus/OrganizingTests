import { expect } from '@wdio/globals'
import HomePage from '../pageobjects/home.page.js'

describe.skip('Home Page', () => {
    it('should open the home page', async () => {
        await HomePage.open();
        await browser.maximizeWindow();
        await expect(browser).toHaveTitle('The Internet');
    });
    it('should check the array size', async () => {
        // Verify that the listExamples has 44 elements
        //toBeElementsArrayOfSize specifies the number of elements expected in the array
        await expect(HomePage.listExamples).toBeElementsArrayOfSize(44);
    });
    it('should fail if any smalled number is checked', async () => {
        // Verify that the listExamples has 44 elements
        //toBeElementsArrayOfSize specifies the number of elements expected in the array
        await expect(HomePage.listExamples).not.toBeElementsArrayOfSize({lte: 43});
    });
    it('should fail if any larger number is checked', async () => {
        // Verify that the listExamples has 44 elements
        //toBeElementsArrayOfSize specifies the number of elements expected in the array
        await expect(HomePage.listExamples).not.toBeElementsArrayOfSize({gte: 45});
    });
});