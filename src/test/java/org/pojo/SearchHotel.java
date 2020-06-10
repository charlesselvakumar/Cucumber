package org.pojo;

import org.base.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchHotel extends BaseClass {

	public SearchHotel() {
		PageFactory.initElements(driver, this);

	}

	@FindBy(id = "location")
	private WebElement txtLocation;
	@FindBy(id = "hotels")
	private WebElement txtHotels;
	@FindBy(id = "room_type")
	private WebElement txtRoomType;
	@FindBy(id = "room_nos")
	private WebElement txtRoomNo;
	@FindBy(id = "child_room")
	private WebElement txtChild;
	@FindBy(id = "Submit")
	private WebElement BtnSearch;
	public WebElement getTxtLocation() {
		return txtLocation;
	}
	public WebElement getTxtHotels() {
		return txtHotels;
	}
	public WebElement getTxtRoomType() {
		return txtRoomType;
	}
	public WebElement getTxtRoomNo() {
		return txtRoomNo;
	}
	public WebElement getTxtChild() {
		return txtChild;
	}
	public WebElement getBtnSearch() {
		return BtnSearch;
	}

}
