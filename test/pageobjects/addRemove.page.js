import Page from './page.js'

class AddRemovePage extends Page {

    //Add selector locator for the add button Do you use $ or $$ 

    get addButton() {  

          return $("(//button[normalize-space()='Add Element'])[1]");

    };

    //Add selector for the delete button. Do you use $ or $$ 

    get deleteButtons() {  

       return $$("#elements > button");

    }; 

    //Create a helper function that will take variable and click on the addButton a certain number of times  

    async addElements(count) { 
        // it is better to use a loop because it tightnes up the code and allows it to be modifiable.
         for (let i = 0; i < count; i++) { 
            await this.addButton.click();
         };
         return;
    //Clicks button 'count' times
    //Hint: a for loop could work here   
    };
    //What page do you need to navigate to 
    //https://the-internet.herokuapp.com/add_remove_elements/
    
        get firstDeleteButton() {
            //the first delete button is always present if there is at least one delete button
        return $("(//div[@id='elements']/button)[1]");
    };
    
    async deleteDeleteButtons(count) { 
        for (let i = 0; i < count; i++) { 
            await this.firstDeleteButton.click();
         };
         return;
    //Create a helper function that will take variable and click on the delete button a certain number of times  
    };
    
    
    open() { 

        return super.open('add_remove_elements/'); 

    }; 
};
export default new AddRemovePage();