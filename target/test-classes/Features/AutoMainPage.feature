Feature: in Autoreader Main Page taking some of webelement

  @autotrader
  Scenario: On the home page, verify that the following types of elements are present
    Given user should be able to access autotrader web page
    Then user should able to see links and buttons

    @advanceSearch
    Scenario: Advanced Search page examples
      Given User should be able to access autotrader main page
      Then User should be able to click advance search
      And user enter zipcode
      And User click Certified checkbox under Condition
      And User click Convertible checkbox under Style
      And User choose year 2017 to 2020
      And User choose BMW under Make

