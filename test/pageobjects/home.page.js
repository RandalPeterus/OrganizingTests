import { $ } from '@wdio/globals'
import Page from './page.js';

class HomePage extends Page {
   
   get listExamples() {
       return $$("//div[@id='content']//ul");
   }
   
   
   
   
   
    open () {
        return super.open('');
    }

}
export default new HomePage();