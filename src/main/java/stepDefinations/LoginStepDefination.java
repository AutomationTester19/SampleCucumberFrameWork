package stepDefinations;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.Assert;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefination {

	WebDriver driver;
	
	@Given("^Open Chrome Browser$")
	public void open_Chrome_Browser() {
		System.setProperty("webdriver.chrome.driver", "E:\\Selenium\\Selenium Drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}

	@Then("^Navigate to CRM Login Page$")
	public void navigate_to_CRM_Login_Page() {
		driver.manage().deleteAllCookies();
		driver.get("https://ui.cogmento.com/");
        driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
	}

	@When("^Validate Title of the Page$")
	public void validate_Title_of_the_Page() {
		String title = driver.getTitle();
		Assert.assertEquals(title, "Cogmento CRM");
	}
	
	@And("^Enter \"(.*)\" and \"(.*)\"$")
	public void Enter_username_and_password(String username,String password) {
		driver.findElement(By.name("email")).sendKeys(username);
		driver.findElement(By.name("password")).sendKeys(password);
	}
	
	@Then("^Click Submit Button$")
	public void click_Btn() {
		driver.findElement(By.xpath("//div[text()='Login']")).click();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}
	
	
	@Then("^Click Contacts Button$")
	public void click_Contacts_Button() throws InterruptedException {
		Thread.sleep(10);
		Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//span[text()='Contacts']"))).click().build().perform();
		
	}

	@Then("^Click New Button$")
	public void click_New_Button() throws InterruptedException {
	   Thread.sleep(5);
	   driver.findElement(By.xpath("//*[text()='New']")).click();
	}

	@Then("^Enter FirstName and LastName$")
	public void enter_FirstName_and_LastName(DataTable data) throws InterruptedException {
	   List<List<String>> list =  data.raw();
	   driver.findElement(By.xpath("//input[@name='first_name']")).sendKeys(list.get(0).get(0).toString());
	   Thread.sleep(5);
	   driver.findElement(By.xpath("//input[@name='last_name']")).sendKeys(list.get(0).get(1).toString());
	   Thread.sleep(5);
      driver.findElement(By.xpath("//*[text()='Save']//parent::button")).click();
	}
	
	@When("^User Enters username and password$")
	public void user_Enters_username_and_password(DataTable fillData)  {
	   
		for(Map<String,String> data :  fillData.asMaps(String.class, String.class)) {		
			driver.findElement(By.name("email")).clear();
			driver.findElement(By.name("email")).sendKeys(data.get("username"));
			driver.findElement(By.name("password")).clear();
			driver.findElement(By.name("password")).sendKeys(data.get("password"));
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			driver.findElement(By.xpath("//div[text()='Login']")).click();
		}
	}

	@Then("^Close Browser$")
	public void close_Browser() {
	    driver.close();
	}
}
