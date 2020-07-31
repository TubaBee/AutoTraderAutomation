package com.automation.stepDefination;

import com.automation.pages.AdvancedSearchPage;
import com.automation.pages.AutoTraderMainPage;
import com.automation.utilities.AutoDriver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;
import java.util.concurrent.TimeUnit;

public class MainPageStep {
    AutoTraderMainPage mainPage = new AutoTraderMainPage();
    AdvancedSearchPage advancedSearchPage = new AdvancedSearchPage();



    @Given("user should be able to access autotrader web page")
    public void user_should_be_able_to_access_autotrader_web_page() {
        AutoDriver.getDriver().get("https://www.autotrader.com");

    }

    @Then("user should able to see links and buttons")
    public void user_should_able_to_see_links_and_buttons() {

        Assert.assertTrue(mainPage.BrowserByMake.isDisplayed());
        Assert.assertTrue(mainPage.BrowserByStyle.isDisplayed());
        Assert.assertTrue(mainPage.AdvancedSearch.isDisplayed());
        Assert.assertTrue(mainPage.Make.isEnabled());
        Assert.assertTrue(mainPage.Model.isDisplayed());

        Assert.assertEquals(mainPage.BrowserByMake.getText(), "Browse by Make");
    }

    @Given("User should be able to access autotrader main page")
    public void user_should_be_able_to_access_autotrader_main_page() {
        AutoDriver.getDriver().get("https://www.autotrader.com/cars-for-sale/advanced-search/");
//          AutoDriver.getDriver().get("https://www.autotrader.com/");
    }

    //2. Senario  .............................................................

    @Then("User should be able to click advance search")
    public void user_should_be_able_to_click_advance_search() {
        //    AutoDriver.getDriver().manage().deleteAllCookies();
//               mainPage.AdvancedSearch.click();
//          advancedSearchPage.clearCookies();
//        advancedSearchPage.waitT();
//        AutoDriver.getDriver().navigate().refresh();
    }

    @Then("user enter zipcode")
    public void user_enter_zipcode() {
        advancedSearchPage.clearCookies();
        advancedSearchPage.zipcode.clear();
        advancedSearchPage.zipcode.sendKeys("30004");
    }

    @Then("User click Certified checkbox under Condition")
    public void user_click_Certified_checkbox_under_Condition() {
        AutoDriver.getDriver().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        advancedSearchPage.certified.click();
    }

    @Then("User click Convertible checkbox under Style")
    public void user_click_Convertible_checkbox_under_Style() {
        AutoDriver.getDriver().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        advancedSearchPage.convertible.click();
    }

    @Then("User choose year {int} to {int}")
    public void user_choose_year_to(Integer int1, Integer int2) {

        advancedSearchPage.waitT();
        Select yearSelectStart = new Select(advancedSearchPage.startYear);
       advancedSearchPage.clearCookies();
        yearSelectStart.selectByVisibleText("2017");

        Select yearSelectEnd = new Select(advancedSearchPage.endYear);
        yearSelectEnd.selectByValue("2020");
    }

    @Then("User choose BMW under Make")
    public void user_choose_BMW_under_Make() {
        Select makeBMW = new Select(advancedSearchPage.make);
        makeBMW.selectByValue("BMW");
        AutoDriver.getDriver().manage().deleteAllCookies();
        advancedSearchPage.searchBtn.click();
        advancedSearchPage.waitT();
    }

    @Then("User should be see some results\\/listings in the next page")
    public void user_should_be_see_some_results_listings_in_the_next_page() {
//        String expected=advancedSearchPage.searchTitle.getText();
////      System.out.println("--------------------->>>>>"+expected);
//        advancedSearchPage.waitT();
//        String excepted="Certified BMW Convertibles for Sale in Alpharetta, GA";
        String actual=AutoDriver.getDriver().getTitle();
        Assert.assertTrue(actual.contains("BMW"));

    }

    @Then("User only see BMW result")
    public void user_only_see_BMW_result() {
        List<WebElement> list=AutoDriver.getDriver().findElements(By.xpath("//a/h2[contains(data-cmp=\"subheading\",BMW)]"));
        System.out.println(list.size());
        for (WebElement each:list) {
            System.out.println(each.getText());
        }

    }

    @Then("Log to the console, the total number of cars\\/listings you see in the results page")
    public void log_to_the_console_the_total_number_of_cars_listings_you_see_in_the_results_page() {

    }




}

