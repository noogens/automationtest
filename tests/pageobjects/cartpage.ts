import { ChainablePromiseElement } from 'webdriverio';
import Page from './page.ts';

class CartPage extends Page{
    //header elements accessible from all pages
    public get linkCartPage(){
        return $('*=cart');
    }

    public get itemCounter(){
        return $('span.counter-label');
    }

    //on the cart page
    public get btnProceedToCheckout(){
        return $('span=Proceed to Checkout');
    }
}
export default new CartPage();

