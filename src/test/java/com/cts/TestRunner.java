package com.cts;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features= {"src\\test\\resources\\Features"}, glue={"com\\step"}, 
dryRun=false, monochrome=true,tags= {"@Smoke"}, 
plugin= {"html:Reports","json:Reports//output.json", "rerun:src//test//resources//failedscenarios.text"},strict=true)

public class TestRunner {

	
	
		
	
	
}
