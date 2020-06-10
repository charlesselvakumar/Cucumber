package org.pojo;

import org.base.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BookHotel extends BaseClass{

	public BookHotel() {

		PageFactory.initElements(driver, this);
		
	}
	
	
	@FindBy(id="first_name")
	private WebElement FirstName;
	@FindBy(id="last_name")
	private WebElement LastName;
	@FindBy(id="address")
	private WebElement Address;
	@FindBy(id="cc_num")
	private WebElement CardNo;
	@FindBy(id="cc_type")
	private WebElement CardType;
	@FindBy(id="cc_exp_month")
	private WebElement ExpM;
	@FindBy(id="cc_exp_year")
	private WebElement ExpY;
	@FindBy(id="cc_cvv")
	private WebElement Cvv;
	@FindBy(id="book_now")
	private WebElement BookNow;
	public WebElement getFirstName() {
		return FirstName;
	}
	public void setFirstName(WebElement firstName) {
		FirstName = firstName;
	}
	public WebElement getLastName() {
		return LastName;
	}
	public void setLastName(WebElement lastName) {
		LastName = lastName;
	}
	public WebElement getAddress() {
		return Address;
	}
	public void setAddress(WebElement address) {
		Address = address;
	}
	public WebElement getCardNo() {
		return CardNo;
	}
	public void setCardNo(WebElement cardNo) {
		CardNo = cardNo;
	}
	public WebElement getCardType() {
		return CardType;
	}
	public void setCardType(WebElement cardType) {
		CardType = cardType;
	}
	public WebElement getExpM() {
		return ExpM;
	}
	public void setExpM(WebElement expM) {
		ExpM = expM;
	}
	public WebElement getExpY() {
		return ExpY;
	}
	public void setExpY(WebElement expY) {
		ExpY = expY;
	}
	public WebElement getCvv() {
		return Cvv;
	}
	public void setCvv(WebElement cvv) {
		Cvv = cvv;
	}
	public WebElement getBookNow() {
		return BookNow;
	}
	public void setBookNow(WebElement bookNow) {
		BookNow = bookNow;
	}
	
	
}
