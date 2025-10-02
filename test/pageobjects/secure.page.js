import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('#flash');
    }
     get btnLogout () {
        //The Logout Button on the secure page
        return $('a.button');
    }
}

export default new SecurePage();
