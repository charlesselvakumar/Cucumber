package com.step;

import java.util.concurrent.TimeUnit;

import org.base.BaseClass;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class HooksClass extends BaseClass{


	@Before
	public void beforeExecution() {

		System.out.println("Before will execute first");
		launchBrowser();
		MaximizeWindow();
		implicitWaitSec(5000);
	}
	
	@After
	
	public void afterExecution() {

		System.out.println("After will execute after each scenario");
		quitBrowser();
		
		
	}
	
}
