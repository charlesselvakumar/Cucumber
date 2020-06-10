package com.step;

import org.base.BaseClass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.pojo.BookHotel;
import org.pojo.ConfirmationPage;
import org.pojo.PojoClass;
import org.pojo.SearchHotel;
import org.pojo.SelectHotel;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Facebook extends BaseClass {

	@Given("^user should give username and password$")
	public void user_should_give_username_and_password() throws Throwable {
		launchBrowser();
		driver.get("https://www.facebook.com/");
		WebElement txtUser = driver.findElement(By.xpath("//input[@id='email']"));
		WebElement txtPass = driver.findElement(By.xpath("//input[@id='pass']"));
		fill(txtUser, "java");
		fill(txtPass, "selenium");
	}

	@When("^user should click login button$")
	public void user_should_click_login_button() throws Throwable {
		WebElement btnLogin = driver.findElement(By.xpath("//input[@id='u_0_b']"));
		btnLogin.click();
	}

	@Given("^User enter invalid \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enter_invalid_and(String arg1, String arg2) throws Throwable {
		launchBrowser();
		driver.get("https://www.facebook.com/");
		WebElement txtUser = driver.findElement(By.xpath("//input[@id='email']"));
		WebElement txtPass = driver.findElement(By.xpath("//input[@id='pass']"));

	
	
	}

	@Given("^User click login button$")
	public void user_click_login_button() throws Throwable {
		launchBrowser();
		driver.get("https://www.facebook.com/");
		WebElement txtUser = driver.findElement(By.xpath("//input[@id='email']"));
		WebElement txtPass = driver.findElement(By.xpath("//input[@id='pass']"));
		WebElement btnLogin = driver.findElement(By.xpath("//input[@id='u_0_b']"));
		btnLogin.click();

	
	}

	@Then("^User must navigate to invalid credentials page$")
	public void user_must_navigate_to_invalid_credentials_page() throws Throwable {
		WebElement btnLogin = driver.findElement(By.xpath("//input[@id='u_0_b']"));
		btnLogin.click();

	
	}

}
