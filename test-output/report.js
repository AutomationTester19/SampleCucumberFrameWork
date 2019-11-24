$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/MyWorkSpace/SampleBDDFrameWork/src/main/java/Feature/login.feature");
formatter.feature({
  "line": 1,
  "name": "Navigate CRM Login Page",
  "description": "",
  "id": "navigate-crm-login-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Navigate to CRM Login Page",
  "description": "",
  "id": "navigate-crm-login-page;navigate-to-crm-login-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "#Given Open Chrome Browser"
    },
    {
      "line": 6,
      "value": "#Then Navigate to CRM Login Page"
    },
    {
      "line": 7,
      "value": "#When Validate Title of the Page"
    },
    {
      "line": 8,
      "value": "#And Enter \"justypedigvijay@gmail.com\" and \"Test@123\""
    },
    {
      "line": 9,
      "value": "#Then Close Browser"
    }
  ],
  "line": 12,
  "name": "Open Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Navigate to CRM Login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Validate Title of the Page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Close Browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "navigate-crm-login-page;navigate-to-crm-login-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 19,
      "id": "navigate-crm-login-page;navigate-to-crm-login-page;;1"
    },
    {
      "cells": [
        "admin",
        "admine@123"
      ],
      "line": 20,
      "id": "navigate-crm-login-page;navigate-to-crm-login-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Navigate to CRM Login Page",
  "description": "",
  "id": "navigate-crm-login-page;navigate-to-crm-login-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "#Given Open Chrome Browser"
    },
    {
      "line": 6,
      "value": "#Then Navigate to CRM Login Page"
    },
    {
      "line": 7,
      "value": "#When Validate Title of the Page"
    },
    {
      "line": 8,
      "value": "#And Enter \"justypedigvijay@gmail.com\" and \"Test@123\""
    },
    {
      "line": 9,
      "value": "#Then Close Browser"
    }
  ],
  "line": 12,
  "name": "Open Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Navigate to CRM Login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Validate Title of the Page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Enter \"admin\" and \"admine@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Close Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.open_Chrome_Browser()"
});
formatter.result({
  "duration": 4364735600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.navigate_to_CRM_Login_Page()"
});
formatter.result({
  "duration": 4356403700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.validate_Title_of_the_Page()"
});
formatter.result({
  "duration": 10796100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 7
    },
    {
      "val": "admine@123",
      "offset": 19
    }
  ],
  "location": "LoginStepDefination.Enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 165233900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_Browser()"
});
formatter.result({
  "duration": 98010900,
  "status": "passed"
});
});