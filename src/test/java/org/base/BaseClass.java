package org.base;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.util.List;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Alert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

public class BaseClass {
	
	
	public static WebDriver driver;
	
	public  void rightClick(WebElement e) {

		new Actions(driver).contextClick().perform();

	}

	public  void DoubleClick(WebElement e) {
		new Actions(driver).doubleClick().perform();

	}

	// 1
	public  void launchBrowser() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Charles\\Cucumber\\driver\\chromedriver.exe");
		driver = new ChromeDriver();

	}

	// 2
	public  void loadUrl(String url) {
		driver.get(url);
	}

	// 3
	public  void pageUrl() {
		String url = driver.getCurrentUrl();
		System.out.println(url);

	}

	// 4
	public static void pageTitle() {
		String title = driver.getTitle();
		System.out.println(title);

	}

	// 5
	public static void MaximizeWindow() {
		driver.manage().window().maximize();

	}

	// 6
	public static void quitBrowser() {

		driver.quit();

	}

	// 7
	public static void closeTab() {
		driver.close();

	}

	// 8
	public  void fill(WebElement e, String s) {
		e.sendKeys(s);

	}

	// 9
	public  void btnClick(WebElement e) {
		e.click();
	}

	// 10
	public  void getTextEntered(WebElement e) {
		String txt = e.getAttribute("value");
		System.out.println(txt);
	}

	// 11
	public static void getTheText(WebElement e) {
		String text = e.getText();
		System.out.println(text);

	}

	// Actions Class
	// 12
	public  void doubClick(WebElement e) {

		new Actions(driver).doubleClick(e).perform();
	}

	// 13
	public  void RightClick(WebElement e) {

		new Actions(driver).contextClick(e).perform();
	}

	// 14
	public  void moveElement(WebElement e) {
		new Actions(driver).moveToElement(e).perform();

	}

	// 15
	public static void drgAndDrp(WebElement s, WebElement d) {
		new Actions(driver).dragAndDrop(s, d).perform();

	}

	// robot
	// 16
	public static void copy() throws AWTException {
		Robot r = new Robot();
		r.keyPress(KeyEvent.VK_CONTROL);
		r.keyPress(KeyEvent.VK_C);
		r.keyRelease(KeyEvent.VK_CONTROL);
		r.keyRelease(KeyEvent.VK_C);

	}

	// 17
	public static void paste() throws AWTException {
		Robot r = new Robot();
		r.keyPress(KeyEvent.VK_CONTROL);
		r.keyPress(KeyEvent.VK_V);
		r.keyRelease(KeyEvent.VK_CONTROL);
		r.keyRelease(KeyEvent.VK_V);
	}

	// Alert
	// 18
	public static void confirmAlertOk() {
		Alert w = driver.switchTo().alert();
		String text = w.getText();
		System.out.println(text);
		w.accept();

	}

	// 19
	public static void confirmAlertDismiss() {
		Alert w = driver.switchTo().alert();
		w.dismiss();

	}

	// Select
	// 20
	public void selByIndex(WebElement e, int i) {
		new Select(e).selectByIndex(i);

	}

	// 21
	public static void isMultipleSelect(WebElement e) {
		boolean b = new Select(e).isMultiple();
		System.out.println(b);

	}

	// 22
	public static void gtOptions(WebElement e) {
		List<WebElement> li = new Select(e).getOptions();
		for (WebElement allValues : li) {
			String text = allValues.getText();
			System.out.println(text);
		}

	}

	// 23
	public  void SelByValue(WebElement e, String v) {

		new Select(e).selectByValue(v);

	}

	// 24
	public  void deSelects(WebElement e, int i) {
		new Select(e).deselectByIndex(i);

	}

	// 25
	public  void deselAll(WebElement e) {
		new Select(e).deselectAll();
	}

	// frames
	// 26
	public  void frameWeb(WebElement e) {
		driver.switchTo().frame(e);

	}

	// 27
	public static void frameIndex(int i) {
		driver.switchTo().frame(i);

	}

	// 28
	public static void frameId(String id) {
		driver.switchTo().frame(id);

	}

	// 29
	public static void switchParent() {
		driver.switchTo().parentFrame();

	}

	// 30
	public static void switchDefault() {
		driver.switchTo().defaultContent();

	}

	// Windows Handling
	// 31
	public static void windowId() {
		String parWindow = driver.getWindowHandle();
		System.out.println(parWindow);
		Set<String> allWin = driver.getWindowHandles();
		System.out.println(allWin);
		for (String st : allWin) {
			if (!parWindow.equals(st)) {
				driver.switchTo().window(st);
				System.out.println(st);
			}

		}
	}

	// java script executor
	// 32
	public static void scrollDown(WebElement e) {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].scrollIntoView(true)", e);
	}

	// 33
	public static void scrollUp(WebElement e) {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].scrollIntoView(false)", e);
	}

	// 34
	public static void display(WebElement e) {
		boolean b = e.isDisplayed();
		System.out.println(b);

	}

	// 35
	public static void enable(WebElement e) {
		boolean b = e.isEnabled();
		System.out.println(b);
	}

	// 36
	public static void Selected(WebElement e) {
		boolean b = e.isSelected();
		System.out.println(b);

	}

	// Sleep
	// 37
	public static void Sync(int time) throws InterruptedException {
		Thread.sleep(time);

	}

	// 38
	public static void selbyVisible(WebElement e, String m) {

		new Select(e).selectByVisibleText(m);
	}

	// 39
	public static void getParId() {
		String text = driver.getWindowHandle();
		System.out.println(text);
	}

	// 40
	public static void getChildId() {
		Set<String> allId = driver.getWindowHandles();
		String parId = driver.getWindowHandle();
		for (String s : allId) {
			if (!(parId == s)) {
				System.out.println(s);
			}

		}

	}

	//41
	public static void promptAlert(String m) {
	 Alert w = driver.switchTo().alert();
	 System.out.println(w.getText());
	 w.sendKeys("john");
	 w.accept();

	}
		//43
	public static void implicitWaitSec(int time) {
		driver.manage().timeouts().implicitlyWait(time, TimeUnit.SECONDS);

	}
	//44
	public static void SetAttributeJs(WebElement element,String name) {
		JavascriptExecutor  js=(JavascriptExecutor) driver;
		js.executeScript("arguments[0].setAttribute('value','"+name+"')", element);

	}
	//45
	public void getAttributeJs(WebElement element) {
		JavascriptExecutor  js=(JavascriptExecutor) driver;
		String text= (String) js.executeScript("return arguments[0].getAttribute('value')", element);
		System.out.println(text);
		
		}
	//46
	public static void getOptionAll(WebElement  e) {
		List<WebElement> allOptions = new Select(e).getOptions();
		for (int i = 0; i <allOptions.size(); i++) {
			WebElement text = allOptions.get(i);
			System.out.println(text);
			
		}

		

	}
	//47
	public static void getSelOption(WebElement  element) {
		List<WebElement> selOptions = new Select(element).getAllSelectedOptions();
		for (int i = 0; i < selOptions.size(); i++) {
			WebElement text = selOptions.get(i);
			System.out.println(text);
			
		}

	}
	//48
	public static void getFirstOptionSelect(WebElement element) {
		WebElement s = new Select(element).getFirstSelectedOption();
		String text = s.getText();
		System.out.println(text);

	}
	//49
	public static void deSelectbyValue(WebElement element,String s1) {
		new Select(element).deselectByValue(s1);

	}
	//50
	public static void deSelectbyVisible(WebElement e,String text) {
		new Select(e).deselectByVisibleText(text);
	}
	
	
	
	
	
	
	
	
	
	
	

}
