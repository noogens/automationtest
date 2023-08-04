import { ChainablePromiseElement } from 'webdriverio';
import Page from './page.ts';

class HomePage extends Page {  
    public get btnShopNewYoga() {
        return $('span=Shop New Yoga');
    }
}

export default new HomePage();