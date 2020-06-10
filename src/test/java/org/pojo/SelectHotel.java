package org.pojo;

import org.base.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SelectHotel extends BaseClass {
	
public SelectHotel() {


PageFactory.initElements(driver, this);
}
	
	@FindBy(id="radiobutton_0")
	private WebElement RadioBtn;
	@FindBy(id="continue")
	private WebElement BtnContinue;
	public WebElement getRadioBtn() {
		return RadioBtn;
	}
	public WebElement getBtnContinue() {
		return BtnContinue;
	}
	

}
