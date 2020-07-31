$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/AutoMainPage.feature");
formatter.feature({
  "name": "in Autoreader Main Page taking some of webelement",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Advanced Search page examples",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@advanceSearch"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to access autotrader main page",
  "keyword": "Given "
});
formatter.match({
  "location": "MainPageStep.user_should_be_able_to_access_autotrader_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to click advance search",
  "keyword": "Then "
});
formatter.match({
  "location": "MainPageStep.user_should_be_able_to_click_advance_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter zipcode",
  "keyword": "And "
});
formatter.match({
  "location": "MainPageStep.user_enter_zipcode()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Certified checkbox under Condition",
  "keyword": "And "
});
formatter.match({
  "location": "MainPageStep.user_click_Certified_checkbox_under_Condition()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Convertible checkbox under Style",
  "keyword": "And "
});
formatter.match({
  "location": "MainPageStep.user_click_Convertible_checkbox_under_Style()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User choose year 2017 to 2020",
  "keyword": "And "
});
formatter.match({
  "location": "MainPageStep.user_choose_year_to(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User choose BMW under Make",
  "keyword": "And "
});
formatter.match({
  "location": "MainPageStep.user_choose_BMW_under_Make()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be see some results/listings in the next page",
  "keyword": "Then "
});
formatter.match({
  "location": "MainPageStep.user_should_be_see_some_results_listings_in_the_next_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User only see BMW result",
  "keyword": "Then "
});
formatter.match({
  "location": "MainPageStep.user_only_see_BMW_result()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Log to the console, the total number of cars/listings you see in the results page",
  "keyword": "Then "
});
formatter.match({
  "location": "MainPageStep.log_to_the_console_the_total_number_of_cars_listings_you_see_in_the_results_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});