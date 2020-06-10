$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Cucumber.feature");
formatter.feature({
  "line": 1,
  "name": "Launching 4 websites",
  "description": "",
  "id": "launching-4-websites",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6367428700,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Opening the mentioned website",
  "description": "",
  "id": "launching-4-websites;opening-the-mentioned-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "user should give username and password",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user should click login button",
  "keyword": "When "
});
formatter.match({
  "location": "Facebook.user_should_give_username_and_password()"
});
formatter.result({
  "duration": 6379011400,
  "status": "passed"
});
formatter.match({
  "location": "Facebook.user_should_click_login_button()"
});
formatter.result({
  "duration": 180967700,
  "status": "passed"
});
formatter.after({
  "duration": 691532800,
  "status": "passed"
});
formatter.uri("Facebook.feature");
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
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5377943400,
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
  "duration": 4761752200,
  "status": "passed"
});
formatter.match({
  "location": "Facebook.user_click_login_button()"
});
formatter.result({
  "duration": 4832270200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027u_0_b\u0027]\"}\n  (Session info: chrome\u003d83.0.4103.97)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-NQT1QSKC\u0027, ip: \u0027192.168.0.107\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.97, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\Charles\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:49572}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: e7e23c7552f83071fb39bded14bcb3a2\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027u_0_b\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.step.Facebook.user_click_login_button(Facebook.java:52)\r\n\tat ✽.And User click login button(Facebook.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Facebook.user_must_navigate_to_invalid_credentials_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 721827600,
  "status": "passed"
});
});