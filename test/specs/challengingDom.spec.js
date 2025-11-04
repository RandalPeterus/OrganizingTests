import { expect } from '@wdio/globals'
import ChallengingDom from '../pageobjects/challengingDom.page.js'

describe.skip('Challenging DOM Page', () => {
    it('should open the page', async () => {
        await ChallengingDom.open();
        await browser.maximizeWindow();
    });

    it('should check the link with exact text "Elemental Selenium"', async () => {
        //check link with exact text
        await expect(ChallengingDom.linkText).toBeExisting();
        //check that the link has the text 'Elemental Selenium'
        await expect(ChallengingDom.linkText).toHaveText('Elemental Selenium');
    });
    it('should check the link with partial text "Selenium"', async () => {
        //check link with partial text
        await expect(ChallengingDom.partialLinkText).toBeExisting();
        //check that the link contains the text 'Elemental Selenium'
        await expect(ChallengingDom.partialLinkText).toHaveText('Elemental Selenium');
    });
    it('should verify the content of row 1, column 2 in the table', async () => {
        //verify that the table cell exists and has the text 'Apeirian0'
        await expect(ChallengingDom.apeirian0).toBeExisting();
        await expect(ChallengingDom.apeirian0).toHaveText('Apeirian0');
    });
    it('should click the blue button and prove it changed', async () => {
        await expect(ChallengingDom.blueButton).toBeExisting();
        
        await ChallengingDom.blueButton.click();
    });
    
});