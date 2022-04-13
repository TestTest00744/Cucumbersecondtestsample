package StepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginOranageHRM {

	WebDriver driver;

	@Given("User should Open Chrome Browser")
	public void user_should_open_chrome_browser() {
		System.setProperty("webdriver.chrome.driver",
				"D:\\CucumberTestClass\\CucumberSecondSampleTest\\BrowserDrivers\\chromedriver.exe");
		driver = new ChromeDriver();
		
	}

	@When("User should Enter Url in Browser")
	public void user_should_enter_url_in_browser() {
		driver.get("https://opensource-demo.orangehrmlive.com/");
	}

	@When("User Should Navigate Home Page")
	public void user_should_navigate_home_page() {
		driver.manage().window().maximize();
	}

	@When("^Enter \"([^\"]*)\" and \"([^\"]*)\" in Edit Box$")
	public void enter_username_and_password_in_EditBox(String Username, String Password) {
		driver.findElement(By.id("txtUsername")).sendKeys(Username);
		driver.findElement(By.id("txtPassword")).sendKeys(Password);
	}

	@When("Click On Login PushButton")
	public void click_on_login_push_button() {
		driver.findElement(By.xpath("//*[@id='btnLogin']")).click();
	}

	@Then("Message displayed Login Successfully")
	public void message_displayed_login_successfully() {
		System.out.println("Login Successfully");
	}

	@Then("User Should Navigate to Dashboard")
	public void user_should_navigate_to_dashboard() {
		driver.findElement(By.xpath("//*[@id='welcome']")).click();
	}

	@Then("User Should Logout OranageHRM Application")
	public void user_should_logout_oranage_hrm_application() {
		driver.quit();
	}

	@Then("Message displayed Logout Successfully")
	public void message_displayed_logout_successfully() {
		System.out.println("LogOut Successfully");
	}
}
