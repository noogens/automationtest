import { ChainablePromiseElement } from 'webdriverio';
import Page from './page.ts';

class SuccessPage extends Page{
    public get btnContinueShopping(){
        return $('span=Continue Shopping')
    }    
}

export default new SuccessPage();