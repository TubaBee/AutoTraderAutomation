package com.automation.stepDefination;

import com.automation.pages.AdvancedSearchPage;
import com.automation.pages.AutoTraderMainPage;
import com.automation.utilities.AutoDriver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class MainPageStep {
    AutoTraderMainPage mainPage=new AutoTraderMainPage();
    AdvancedSearchPage advancedSearchPage=new AdvancedSearchPage();

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
        AutoDriver.getDriver().get("https://www.autotrader.com");
        AutoDriver.getDriver().manage().deleteAllCookies();
    }

    @Then("User should be able to click advance search")
    public void user_should_be_able_to_click_advance_search() {
        AutoDriver.getDriver().manage().deleteAllCookies();
       mainPage.AdvancedSearch.click();
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        AutoDriver.getDriver().manage().deleteAllCookies();
    }

    @Then("user enter zipcode")
    public void user_enter_zipcode() {
    advancedSearchPage.zipcode.sendKeys("30004");
    }

    @Then("User click Certified checkbox under Condition")
    public void user_click_Certified_checkbox_under_Condition() {
    advancedSearchPage.certified.click();
    }

    @Then("User click Convertible checkbox under Style")
    public void user_click_Convertible_checkbox_under_Style() {
    advancedSearchPage.convertible.click();
    }

    @Then("User choose year {int} to {int}")
    public void user_choose_year_to(Integer int1, Integer int2) {
        Select yearSelectStart=new Select(advancedSearchPage.startYear);
        yearSelectStart.selectByVisibleText("2017");

        Select yearSelectEnd=new Select(advancedSearchPage.endYear);
        yearSelectEnd.selectByValue("2020");
    }

    @Then("User choose BMW under Make")
    public void user_choose_BMW_under_Make() {
        Select makeBMW=new Select(advancedSearchPage.make);
        makeBMW.selectByValue("BMW");
    }



    }

