package com.qa.crm.Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		features = "E:\\MyWorkSpace\\SampleBDDFrameWork\\src\\main\\java\\Feature\\",
		glue = {"stepDefinations"},
		plugin= {"pretty","html:target/site/cucumber-pretty","json:target/cucumber/cucumber.json"},
	   monochrome = true,
	   strict = true,
	   dryRun = false
	)
public class MyRunner {
}
