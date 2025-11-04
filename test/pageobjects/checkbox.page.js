import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Checkboxes extends Page {
   
    async click1() {
        await this.check1.click();
    }

    async click2() {
        await this.check2.click();
    }

    get check1 () {
        //selector for checkbox1
        return $('#checkboxes input:nth-of-type(1)');
    }

    get check2 () {
        //selector forcheckbox2
        return $('#checkboxes input:nth-of-type(2)');
    }
    

    open () {
        return super.open('checkboxes');
    }
}

export default new Checkboxes();
