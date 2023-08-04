@demo
Feature: Checkout on Luma

  Scenario: As a user, I want to go to the Luma website and go through the check out process.
    Given I am on the homepage https://magento.softwaretestingboard.com/
    When clicking on the Shop New Yoga button
    And the New Luma Yoga Collection page displays
    And filter by the first Style
    And clicking on the Duffel option
    And selecting the Overnight Duffle
    And the Overnight Duffle product page loads
    And add 2 quantity to cart
    And start check out from cart
    And fill out the required fields and place order
    Then then Success Page will show
