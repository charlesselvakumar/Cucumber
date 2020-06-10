package org.pojo;

import org.base.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ConfirmationPage extends BaseClass {
	public ConfirmationPage() {

		PageFactory.initElements(driver, this);
	}
	
	@FindBy(id="order_no")
	private WebElement OrderNumber;

	public WebElement getOrderNumber() {
		return OrderNumber;
	}

	
	

}
