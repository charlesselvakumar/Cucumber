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

	@Given("^User enter invalid \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enter_invalid_and(String s1, String s2) throws Throwable {

		driver.get("https://www.facebook.com/");
		WebElement txtUser = driver.findElement(By.xpath("//input[@id='email']"));
		fill(txtUser, s1);
		WebElement txtPass = driver.findElement(By.xpath("//input[@id='pass']"));
		fill(txtPass, s2);
	}

	@Given("^User click login button$")
	public void user_click_login_button() throws Throwable {

		WebElement btnLogin = driver.findElement(By.xpath("//input[@id='u_0_b']"));
		btnLogin.click();
	}

	@Then("^User must navigate to invalid credentials page$")
	public void user_must_navigate_to_invalid_credentials_page() throws Throwable {

		System.out.println("User is on next page");
	}

}
