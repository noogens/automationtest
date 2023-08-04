import { ChainablePromiseElement } from 'webdriverio';
import Page from './page.ts';

class ProductPage extends Page{

    public get titleProduct(){
        return $('span[itemprop="name"]');
    }
    
    public get btnAddToCart(){
        return $('span=Add to Cart');
    }
    
    public get inputQty(){
        return $('input[name="qty"]');
    }
}
export default new ProductPage();
