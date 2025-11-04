import { $ } from '@wdio/globals'
import Page from './page.js';

class ChallengingDom extends Page {
   
    get linkText () {
        //This is for the exact link text 
        //https://webdriver.io/docs/selectors/#:~:text=View%20on%20GitHub-,Link,-Text%E2%80%8B
        return $('=Elemental Selenium');
    }

    get partialLinkText () {
        //This is for the partial link text
        //https://webdriver.io/docs/selectors/#:~:text=View%20on%20GitHub-,Partial,-Link%20Text%E2%80%8B
        return $('*=Selenium');
    }

    get apeirian0 () {
        //Get the table cell with text 'Apeirian0'
        return $('//td[normalize-space()="Apeirian0"]');
    }

    open () {
        return super.open('challenging_dom');
    }
    get blueButton () {
        //get the absolute xpath for the blue button as all other selectors are dynamic
        return $('/html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]');
    }
    get redButton () {
        //get the absolute xpath for the red button as all other selectors are dynamic
        return $('/html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/a[2]');
    }
    get greenButton () {
        //get the absolute xpath for the green button as all other selectors are dynamic
        return $('/html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/a[3]');
    }
    get blueID () {
        //get the id of the blue button
        return this.blueButton().getAttribute('id');
    }
    get redID () {
        //get the id of the red button
        return this.redButton().getAttribute('id');
    }
    get greenID () {
        //get the id of the green button
        return this.greenButton().getAttribute('id');
    }
    async blueButtonStorageID () {
        //store the id of the blue button in a variable in a constant that can be used later
        const BlueID = await this.blueButton().getAttribute('id');
        return;
    }
    async redButtonStorageID () {
        //store the id of the red button in a variable in a constant that can be used later
        const RedID = this.redButton().getAttribute('id');
        return;
    }
    async greenButtonStorageID () {
        //store the id of the green button in a variable in a constant that can be used later
        const GreenID = this.greenButton().getAttribute('id');
        return;
    }
    async blueButtonReturnID () {
        //return the stored id of the blue button
        return BlueID;
    }
    async redButtonReturnID () {
        //return the stored id of the red button
        return RedID;
    }
    async greenButtonReturnID () {
        //return the stored id of the green button
        return GreenID;
    }
    
    
}

export default new ChallengingDom();