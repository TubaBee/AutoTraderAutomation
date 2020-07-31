package com.automation.stepDefination;

import com.automation.utilities.AutoDriver;
import io.cucumber.java.After;
import io.cucumber.java.Before;

import java.time.LocalTime;
import java.util.concurrent.TimeUnit;

public class Hook {

    @Before
    public void setups() {
        System.out.println("Test started at " + LocalTime.now());

    }

    @After
    public void teardown() {

        System.out.println("Test finished at " + LocalTime.now());

//        AutoDriver.getDriver().close();


    }
}



