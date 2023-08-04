import { Given, When, Then } from '@wdio/cucumber-framework';
import HomePage from '../pageobjects/homepage.ts';
import CollectionPage from '../pageobjects/collectionpage.ts';
import Productpage from '../pageobjects/productpage.ts';
import CartPage from '../pageobjects/cartpage.ts';
import CheckoutPage from '../pageobjects/checkoutpage.ts';
import SuccessPage from '../pageobjects/successpage.ts';

Given(/^I am on the homepage (.*)$/, async(url) =>{
    await HomePage.open(url);
});

When(/^clicking on the Shop New Yoga button$/, async() => {
    await HomePage.btnShopNewYoga.click();
});

When (/^the (.*) page displays$/, async(pageName) => {
    await HomePage.waitForPageLoad();
    await expect(HomePage.verifyPageTitle(pageName)).toBeTruthy();
});

When(/^filter by the first Style$/, async() => {
    await CollectionPage.filterStyle1.click();
});

When(/^clicking on the Duffel option$/, async() => {
    await CollectionPage.optionStyle1Duffel.click();
});

When(/^selecting the Overnight Duffle$/, async() => {
    await CollectionPage.productOverNightDuffle.click();
});

When(/^the (.*) product page loads$/, async(productName) => {
    await expect(Productpage.titleProduct).toHaveText(productName);
});

When(/^add (.*) quantity to cart$/, async(quantity) => {
    await Productpage.inputQty.setValue(quantity);
    await Productpage.btnAddToCart.click();
});

When(/^start check out from cart$/, async() => {
    await CartPage.linkCartPage.click();
    await CartPage.btnProceedToCheckout.click();
});

When(/^fill out the required fields and place order$/, async() => {   
    await CheckoutPage.inputFirstName.setValue("John");
    await CheckoutPage.inputLastName.setValue("Nguyen");
    await CheckoutPage.inputAddress1.setValue("NW 55th St");
    await CheckoutPage.inputCity.setValue("Oklahoma City");
    await CheckoutPage.drpdwnState.selectByVisibleText("Oklahoma");
    await CheckoutPage.inputZip.setValue("12345");
    await CheckoutPage.drpdwnCountry.selectByVisibleText("United States");
    await CheckoutPage.inputPhone.setValue("4055148731");
    await CheckoutPage.rdoShippingFixed.click();
    await CheckoutPage.inputEmail.setValue("test@test.com");
    await CheckoutPage.btnNext.click();
    await CheckoutPage.btnPlaceOrder.click();
    await CheckoutPage.waitForPageLoad();
});

Then (/^then (.*) will show$/, async(pageName) => {
    await expect(SuccessPage.verifyPageTitle(pageName)).toBeTruthy();
});
