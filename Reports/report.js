$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Facebook.feature");
formatter.feature({
  "line": 1,
  "name": "To validate facebook login page",
  "description": "",
  "id": "to-validate-facebook-login-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "To verify login with invalid credentials",
  "description": "",
  "id": "to-validate-facebook-login-page;to-verify-login-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User enter invalid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User click login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User must navigate to invalid credentials page",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "to-validate-facebook-login-page;to-verify-login-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "to-validate-facebook-login-page;to-verify-login-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "java",
        "selenium"
      ],
      "line": 13,
      "id": "to-validate-facebook-login-page;to-verify-login-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "charles",
        "testdata"
      ],
      "line": 14,
      "id": "to-validate-facebook-login-page;to-verify-login-with-invalid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6457797500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Given user is on facebook login or signup page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 13,
  "name": "To verify login with invalid credentials",
  "description": "",
  "id": "to-validate-facebook-login-page;to-verify-login-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User enter invalid \"java\" and \"selenium\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User click login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User must navigate to invalid credentials page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "java",
      "offset": 20
    },
    {
      "val": "selenium",
      "offset": 31
    }
  ],
  "location": "Facebook.user_enter_invalid_and(String,String)"
});
formatter.result({
  "duration": 2122496000,
  "status": "passed"
});
formatter.match({
  "location": "Facebook.user_click_login_button()"
});
formatter.result({
  "duration": 238900310100,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using xpath\u003d//button[@id\u003d\u0027u_0_b\u0027]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-NQT1QSKC\u0027, ip: \u0027192.168.0.107\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.step.Facebook.user_click_login_button(Facebook.java:32)\r\n\tat ✽.And User click login button(Facebook.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Facebook.user_must_navigate_to_invalid_credentials_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 794851900,
  "status": "passed"
});
formatter.before({
  "duration": 5432546500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Given user is on facebook login or signup page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 14,
  "name": "To verify login with invalid credentials",
  "description": "",
  "id": "to-validate-facebook-login-page;to-verify-login-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      