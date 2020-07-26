package com.automation.runners;



import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        glue = "com/automation/stepDefination",
        features = "src/test/resources/Features",
        plugin = {
                "json:target/cucumber.json"
        },
        tags = "@autotrader",
        dryRun = false

)public class CucumberRunner {
}
