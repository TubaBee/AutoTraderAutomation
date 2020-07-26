Feature: in Autoreader Main Page taking some of webelement

  @autotrader
  Scenario: On the home page, verify that the following types of elements are present
    Given user should be able to access autotrader web page
    Then user should able to see "Browse by Make" browser
      | Browse by Make  |
      | Browse by Style |
      | Advanced Search |
      | Search          |
      | Make            |
      | Model           |


