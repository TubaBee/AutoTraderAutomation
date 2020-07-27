Feature: in Autoreader Main Page taking some of webelement

  @autotrader
  Scenario Outline: On the home page, verify that the following types of elements are present
    Given user should be able to access autotrader web page
    Then user should able to see "<method>" browser
#    Then user should able to see "<Browser by Style>" browser
#    Then user should able to see "<Browser by Make>" browser

    Examples:
      | method          |
      | Browse by Make  |
      | Browse by Style |
      | Advanced Search |
      | Search          |
      | Make            |
      | Model           |


