import { expect } from '@wdio/globals'
import AddRemovePage from '../pageobjects/addRemove.page.js'; 

 
describe('Add/Remove Elements Test', () => { 
    //Open the page under test
        it('should open the add/remove page', async () => { 
        await AddRemovePage.open(); 
        await browser.maximizeWindow(); 
    });
    //testing that the delete buttons can be counted
    it('should add 4 delete buttons using a helper function', async () => { 
        //we need to click on the add button 4 times
        await AddRemovePage.addElements(4); 
        //verify that 4 delete buttons are now present
        await expect(AddRemovePage.deleteButtons).toBeElementsArrayOfSize(4); 
    });
        //Write your pseudo code here. Each step should explain why you just perform the step 
        //
    it('should delete 2 buttons and verify that 2 are left', async () => { 
        //click the first delete button twice can click on the first one as the first one will always be present if there is a delete button
        await AddRemovePage.deleteDeleteButtons(2);
        //verify that 2 delete buttons are now present
        await expect(AddRemovePage.deleteButtons).toBeElementsArrayOfSize(2); 
    });
    it('should delete the remaining 2 buttons and verify that none are left', async () => { 
        //click the first delete button twice can click on the first one as the first one will always be present if there is a delete button
        await AddRemovePage.deleteDeleteButtons(2);
        //verify that 0 delete buttons are now present
        await expect(AddRemovePage.deleteButtons).toBeElementsArrayOfSize(0); 
    });

    

}); 