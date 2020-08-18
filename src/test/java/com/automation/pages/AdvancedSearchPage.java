package com.automation.pages;

import com.automation.utilities.AutoDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class AdvancedSearchPage {

    @FindBy(xpath = "//*[@id=\"zip32701\"]")
    public WebElement zipcode;

    @FindBy(xpath = "//*[@id=\"mountNode\"]/div[1]/div/div/div[1]/form/div[3]/div/div[2]/div/div/div/div[3]/label/div")
      public WebElement certified;

    @FindBy(xpath = "//div[contains(text(),'Convertible')]")
    public WebElement convertible;

    @FindBy(xpath = "//*[@id=\"4101482096\"]")
    public WebElement startYear;

    @FindBy(xpath = "//*[@id=\"258002540\"]")
    public WebElement endYear;

    @FindBy(xpath = "//*[@id=\"1970425032\"]")
    public WebElement make;

    @FindBy(xpath = "//button[contains(text(),'Search')]")
    public WebElement searchBtn;

    @FindBy(xpath = "//*[@id=\"mountNode\"]/div/div[3]/div/div[2]/div[2]/div[2]/div[2]/div[1]")
    public WebElement result;


    public void waitT(){
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void clearCookies(){
        AutoDriver.getDriver().manage().deleteAllCookies();
    }



    public AdvancedSearchPage() {
        PageFactory.initElements(AutoDriver.getDriver(), this);
    }
}
