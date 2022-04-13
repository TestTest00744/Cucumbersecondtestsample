$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/CucumberTestClass/CucumberSecondSampleTest/Features/LoginTest.feature");
formatter.feature({
  "line": 1,
  "name": "Checking Login \u0026 Logout Functionality",
  "description": "",
  "id": "checking-login-\u0026-logout-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Parametization the Test Case Functionality",
  "description": "",
  "id": "checking-login-\u0026-logout-functionality;parametization-the-test-case-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User should Open Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User should Enter Url in Browser",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User Should Navigate Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Enter \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\" in Edit Box",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click On Login PushButton",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User Should Navigate to Dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User Should Logout OranageHRM Application",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Message displayed Logout Successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "checking-login-\u0026-logout-functionality;parametization-the-test-case-functionality;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 15,
      "id": "checking-login-\u0026-logout-functionality;parametization-the-test-case-functionality;;1"
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ],
      "line": 16,
      "id": "checking-login-\u0026-logout-functionality;parametization-the-test-case-functionality;;2"
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ],
      "line": 17,
      "id": "checking-login-\u0026-logout-functionality;parametization-the-test-case-functionality;;3"
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ],
      "line": 18,
      "id": "checking-login-\u0026-logout-functionality;parametization-the-test-case-functionality;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Parametization the Test Case Functionality",
  "description": "",
  "id": "checking-login-\u0026-logout-functionality;parametization-the-test-case-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User should Open Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User should Enter Url in Browser",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User Should Navigate Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Enter \"Admin\" and \"admin123\" in Edit Box",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click On Login PushButton",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User Should Navigate to Dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User Should Logout OranageHRM Application",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Message displayed Logout Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginOranageHRM.user_should_open_chrome_browser()"
});
formatter.result({
  "duration": 4236663900,
  "status": "passed"
});
formatter.match({
  "location": "LoginOranageHRM.user_should_enter_url_in_browser()"
});
formatter.result({
  "duration": 3793037400,
  "status": "passed"
});
formatter.match({
  "location": "LoginOranageHRM.user_should_navigate_home_page()"
});
formatter.result({
  "duration": 142182900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 7
    },
    {
      "val": "admin123",
      "offset": 19
    }
  ],
  "location": "LoginOranageHRM.enter_username_and_password_in_EditBox(String,String)"
});
formatter.result({
  "duration": 279549200,
  "status": "passed"
});
formatter.match({
  "location": "LoginOranageHRM.click_on_login_push_button()"
});
formatter.result({
  "duration": 4499783700,
  "status": "passed"
});
formatter.match({
  "location": "LoginOranageHRM.message_displayed_login_successfully()"
});
formatter.result({
  "duration": 111000,
  "status": "passed"
});
formatter.match({
  "location": "LoginOranageHRM.user_should_navigate_to_dashboard()"
});
formatter.result({
  "duration": 77477700,
  "status": "passed"
});
formatter.match({
  "location": "LoginOranageHRM.user_should_logout_oranage_hrm_application()"
});
formatter.result({
  "duration": 791594800,
  "status": "passed"
});
formatter.match({
  "location": "LoginOranageHRM.message_displayed_logout_successfully()"
});
formatter.result({
  "duration": 210200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Parametization the Test Case Functionality",
  "description": "",
  "id": "checking-login-\u0026-logout-functionality;parametization-the-test-case-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User should Open Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User should Enter Url in Browser",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User Should Navigate Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Enter \"Admin\" and \"admin123\" in Edit Box",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click On Login PushButton",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User Should Navigate to Dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User Should Logout OranageHRM Application",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Message displayed Logout Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginOranageHRM.user_should_open_chrome_browser()"
});
formatter.result({
  "duration": 1658262500,
  "status": "passed"
});
formatter.match({
  "location": "LoginOranageHRM.user_should_enter_url_in_browser()"
});
formatter.result({
  "duration": 3790503200,
  "status": "passed"
});
formatter.match({
  "location": "LoginOranageHRM.user_should_navigate_home_page()"
});
formatter.result({
  "duration": 130382000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 7
    },
    {
      "val": "admin123",
      "offset": 19
    }
  ],
  "location": "LoginOranageHRM.enter_username_and_password_in_EditBox(String,String)"
});
formatter.result({
  "duration": 239748700,
  "status": "passed"
});
formatter.match({
  "location": "LoginOranageHRM.click_on_login_push_button()"
});
formatter.result({
  "duration": 5001305500,
  "status": "passed"
});
formatter.match({
  "location": "LoginOranageHRM.message_displayed_login_successfully()"
});
formatter.result({
  "duration": 76400,
  "status": "passed"
});
formatter.match({
  "location": "LoginOranageHRM.user_should_navigate_to_dashboard()"
});
formatter.result({
  "duration": 83908700,
  "status": "passed"
});
formatter.match({
  "location": "LoginOranageHRM.user_should_logout_oranage_hrm_application()"
});
formatter.result({
  "duration": 1004879600,
  "status": "passed"
});
formatter.match({
  "location": "LoginOranageHRM.message_displayed_logout_successfully()"
});
formatter.result({
  "duration": 182000,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Parametization the Test Case Functionality",
  "description": "",
  "id": "checking-login-\u0026-logout-functionality;parametization-the-test-case-functionality;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User should Open Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User should Enter Url in Browser",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User Should Navigate Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Enter \"Admin\" and \"admin123\" in Edit Box",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click On Login PushButton",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User Should Navigate to Dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User Should Logout OranageHRM Application",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Message displayed Logout Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginOranageHRM.user_should_open_chrome_browser()"
});
formatter.result({
  "duration": 1667051600,
  "status": "passed"
});
formatter.match({
  "location": "LoginOranageHRM.user_should_enter_url_in_browser()"
});
formatter.result({
  "duration": 4148854700,
  "status": "passed"
});
formatter.match({
  "location": "LoginOranageHRM.user_should_navigate_home_page()"
});
formatter.result({
  "duration": 140508800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 7
    },
    {
      "val": "admin123",
      "offset": 19
    }
  ],
  "location": "LoginOranageHRM.enter_username_and_password_in_EditBox(String,String)"
});
formatter.result({
  "duration": 262633200,
  "status": "passed"
});
formatter.match({
  "location": "LoginOranageHRM.click_on_login_push_button()"
});
formatter.result({
  "duration": 4393683400,
  "status": "passed"
});
formatter.match({
  "location": "LoginOranageHRM.message_displayed_login_successfully()"
});
formatter.result({
  "duration": 50900,
  "status": "passed"
});
formatter.match({
  "location": "LoginOranageHRM.user_should_navigate_to_dashboard()"
});
formatter.result({
  "duration": 71705200,
  "status": "passed"
});
formatter.match({
  "location": "LoginOranageHRM.user_should_logout_oranage_hrm_application()"
});
formatter.result({
  "duration": 764674000,
  "status": "passed"
});
formatter.match({
  "location": "LoginOranageHRM.message_displayed_logout_successfully()"
});
formatter.result({
  "duration": 157400,
  "status": "passed"
});
});