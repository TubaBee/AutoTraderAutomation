package com.automation.stepDefination;

import com.automation.pages.AutoTraderMainPage;
import com.automation.utilities.AutoDriver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.WebElement;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class MainPageStep {
    AutoTraderMainPage mainPage=new AutoTraderMainPage();

    @Given("user should be able to access autotrader web page")
    public void user_should_be_able_to_access_autotrader_web_page() {
        AutoDriver.getDriver().get("https://www.autotrader.com");

    }

    @Then("user should able to see {string} browser")
    public void user_should_able_to_see_browser(String string) {
        ArrayList<WebElement> list=new ArrayList<>(Arrays.asList(mainPage.BrowserByMake,mainPage.BrowserByStyle,mainPage.AdvancedSearch,mainPage.SearchBtn,mainPage.Make,mainPage.Model));
        for (WebElement each: list) {
            Assert.assertTrue(each.getText().contains(string));
        }





    }

}
