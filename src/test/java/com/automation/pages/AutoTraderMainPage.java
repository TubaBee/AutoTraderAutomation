package com.automation.pages;

import com.automation.utilities.AutoDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.ArrayList;
import java.util.Arrays;


public class AutoTraderMainPage {


    @FindBy(xpath = "//*[@id=\"mountNode\"]/div/div[2]/div/div[1]/div/div[2]/div/div/div/div/div/div/div/div/div/div/button[1]")
    public WebElement BrowserByMake;

    @FindBy(xpath = "//*[@id=\"mountNode\"]/div/div[2]/div/div[1]/div/div[2]/div/div/div/div/div/div/div/div/div/div/button[2]")
    public WebElement BrowserByStyle;

    @FindBy(xpath = "//*[@id=\"mountNode\"]/div/div[2]/div/div[1]/div/div[2]/div/div/div/div/div/div/div/div/div/div/a")
    public WebElement AdvancedSearch;

    @FindBy(xpath = "//*[@id=\"makeCode\"]")
    public WebElement Make;

    @FindBy(xpath = "//*[@id=\"ModelCode\"]")
    public WebElement Model;

    @FindBy(xpath = "//*[@id=\"search\"]")
    public WebElement SearchBtn;

//    ArrayList<WebElement> list=new ArrayList<>(Arrays.asList(BrowserByMake,BrowserByStyle,AdvancedSearch,SearchBtn,Make,Model));

    public AutoTraderMainPage() {
        PageFactory.initElements(AutoDriver.getDriver(), this);
    }
}
