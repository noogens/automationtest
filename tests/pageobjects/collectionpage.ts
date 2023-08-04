import { ChainablePromiseElement } from 'webdriverio';
import Page from './page.ts';

class CollectionPage extends Page {
    //Shopping Filters
    public get filterStyle1(){
        return $$('.filter-options-title')[0];
    }

    public get filterCategory(){
        return $$('.filter-options-title')[1];
    }

    public get filterStyle2(){
        return $$('.filter-options-title')[2];
    }

    //Shopping Filter options
    public get optionStyle1Duffel(){
        return $('*=Duffel');
    }

    public get optionStyle1Messenger(){
        return $('*=Messenger');
    }

    public get optionStyle1Laptop(){
        return $('*=Laptop');
    }

    public get optionStyle1Excercise(){
        return $('*=Excercise');
    }

    //Specific Products
    public get productOverNightDuffle(){
        return $('*=Overnight Duffle');
    }
}

export default new CollectionPage();