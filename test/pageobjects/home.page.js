import { $ } from '@wdio/globals'
import Page from './page.js';

class HomePage extends Page {
   
   get listExamples() {
    // return all li elements under the target ul (adjust selector to your page) use the greater than to search only direct children
    //in future we might want to make this more specific by adding an id or class to the ul
       return $$("ul > li");
   }
   
   
   
   
   
    open () {
        return super.open('');
    }

}
export default new HomePage();