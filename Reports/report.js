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
  "duration": 6474941900,
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
  "duration": 2392755000,
  "status": "passed"
});
formatter.match({
  "location": "Facebook.user_click_login_button()"
});
formatter.result({
  "duration": 114303500,
  "status": "passed"
});
formatter.match({
  "location": "Facebook.user_must_navigate_to_invalid_credentials_page()"
});
formatter.result({
  "duration": 77200,
  "status": "passed"
});
formatter.after({
  "duration": 714935100,
  "status": "passed"
});
formatter.before({
  "duration": 5279051400,
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
      "line": 5,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User enter invalid \"charles\" and \"testdata\"",
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
      "val": "charles",
      "offset": 20
    },
    {
      "val": "testdata",
      "offset": 34
    }
  ],
  "location": "Facebook.user_enter_invalid_and(String,String)"
});
formatter.result({
  "duration": 1776306600,
  "status": "passed"
});
formatter.match({
  "location": "Facebook.user_click_login_button()"
});
formatter.result({
  "duration": 108195300,
  "status": "passed"
});
formatter.match({
  "location": "Facebook.user_must_navigate_to_invalid_credentials_page()"
});
formatter.result({
  "duration": 46700,
  "status": "passed"
});
formatter.after({
  "duration": 703685500,
  "status": "passed"
});
});