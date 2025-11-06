import Page from './page.js';

class AddRemovePage extends Page {

    //Add selector locator for the add button Do you use $ or $$ 

    get addButton() {  

          

    };

    //Add selector for the delete button. Do you use $ or $$ 

    get deleteButtons() {  

       

    }; 

    //Create a helper function that will take variable and click on the addButton a certain number of times  

    async addElements(count) { 

    //Hint: a for loop could work here   
    };
    //What page do you need to navigate to 

    open() { 

        return super.open('add_remove_elements/'); 

    }; 
};
export default new AddRemovePage();