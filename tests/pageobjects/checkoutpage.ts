import { ChainablePromiseElement } from 'webdriverio';
import Page from './page.ts';

class CheckoutPage extends Page{
    //form fields
    public get inputEmail(){
        return $('#customer-email');
    }

    public get inputFirstName(){
        return $('input[name="firstname"]');
    }

    public get inputLastName(){
        return $('input[name="lastname"]');
    }

    public get inputCompany(){
        return $('input[name="company"]');
    }

    public get inputAddress1(){
        return $('input[name="street[0]"]');
    }

    public get inputAddress2(){
        return $('input[name="street[1]"]');
    }

    public get inputAddress3(){
        return $('input[name="street[2]"]');
    }

    public get inputCity(){
        return $('input[name="city"]');
    }

    public get drpdwnState(){
        return $('select[name="region_id"]');
    }

    public get inputZip(){
        return $('input[name="postcode"]');
    }

    public get drpdwnCountry(){
        return $('select[name="country_id"]');
    }

    public get inputPhone(){
        return $('input[name="telephone"]');
    }

    public get rdoShippingFixed(){
        return $('input[name="ko_unique_1"]');
    }

    public get rdoShippingTableRate(){
        return $('input[name="ko_unique_2"]');
    }

    //buttons
    public get btnNext(){
        return $('span=Next');
    }

    public get btnLogin(){
        return $('span=Login');
    }

    public get btnPlaceOrder(){
        return $('span=Place Order');
    }
    
}
export default new CheckoutPage();