$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("companies.feature");
formatter.feature({
  "line": 1,
  "name": "Creating Company",
  "description": "",
  "id": "creating-company",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Creating New Company Details Using Maps",
  "description": "",
  "id": "creating-company;creating-new-company-details-using-maps",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Navigate to CRM Login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Validate Title of the Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User Enters username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9
    },
    {
      "cells": [
        "admin",
        "admin@123"
      ],
      "line": 10
    },
    {
      "cells": [
        "Test",
        "Test@123"
      ],
      "line": 11
    },
    {
      "cells": [
        "Justypedigvijay@gmail.com",
        "Bank$123"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Close Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.open_Chrome_Browser()"
});
formatter.result({
  "duration": 4621551100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.navigate_to_CRM_Login_Page()"
});
formatter.result({
  "duration": 4573412200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.validate_Title_of_the_Page()"
});
formatter.result({
  "duration": 23319700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_Enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 1257403300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_Browser()"
});
formatter.result({
  "duration": 103543300,
  "status": "passed"
});
formatter.uri("contact.feature");
formatter.feature({
  "line": 1,
  "name": "Create New Contact",
  "description": "",
  "id": "create-new-contact",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Create New Contact in Contacts Page Using DataTable",
  "description": "",
  "id": "create-new-contact;create-new-contact-in-contacts-page-using-datatable",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Open Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Navigate to CRM Login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click Submit Button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Click Contacts Button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click New Button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Enter FirstName and LastName",
  "rows": [
    {
      "cells": [
        "Admin",
        "Tendulkar"
      ],
      "line": 12
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Close Browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "create-new-contact;create-new-contact-in-contacts-page-using-datatable;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 17,
      "id": "create-new-contact;create-new-contact-in-contacts-page-using-datatable;;1"
    },
    {
      "cells": [
        "justypedigvijay@gmail.com",
        "Bank$123"
      ],
      "line": 18,
      "id": "create-new-contact;create-new-contact-in-contacts-page-using-datatable;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Create New Contact in Contacts Page Using DataTable",
  "description": "",
  "id": "create-new-contact;create-new-contact-in-contacts-page-using-datatable;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Open Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Navigate to CRM Login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter \"justypedigvijay@gmail.com\" and \"Bank$123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click Submit Button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Click Contacts Button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click New Button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Enter FirstName and LastName",
  "rows": [
    {
      "cells": [
        "Admin",
        "Tendulkar"
      ],
      "line": 12
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Close Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.open_Chrome_Browser()"
});
formatter.result({
  "duration": 3960430700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.navigate_to_CRM_Login_Page()"
});
formatter.result({
  "duration": 5166271300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "justypedigvijay@gmail.com",
      "offset": 7
    },
    {
      "val": "Bank$123",
      "offset": 39
    }
  ],
  "location": "LoginStepDefination.Enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 263193100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.click_Btn()"
});
formatter.result({
  "duration": 79078100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.click_Contacts_Button()"
});
formatter.result({
  "duration": 1581626800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.click_New_Button()"
});
formatter.result({
  "duration": 253566800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.enter_FirstName_and_LastName(DataTable)"
});
formatter.result({
  "duration": 1804256300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_Browser()"
});
formatter.result({
  "duration": 113992900,
  "status": "passed"
});
formatter.uri("home.feature");
formatter.feature({
  "line": 1,
  "name": "Validate Home Page",
  "description": "",
  "id": "validate-home-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Navigate to CRM Login Page \u0026 Validate Home Page",
  "description": "",
  "id": "validate-home-page;navigate-to-crm-login-page-\u0026-validate-home-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Open Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Navigate to CRM Login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Validate Title of the Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click Submit Button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Close Browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "validate-home-page;navigate-to-crm-login-page-\u0026-validate-home-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "validate-home-page;navigate-to-crm-login-page-\u0026-validate-home-page;;1"
    },
    {
      "cells": [
        "admin",
        "admin@123"
      ],
      "line": 14,
      "id": "validate-home-page;navigate-to-crm-login-page-\u0026-validate-home-page;;2"
    },
    {
      "cells": [
        "justypedigvijay@gmail.com",
        "Bank$123"
      ],
      "line": 15,
      "id": "validate-home-page;navigate-to-crm-login-page-\u0026-validate-home-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Navigate to CRM Login Page \u0026 Validate Home Page",
  "description": "",
  "id": "validate-home-page;navigate-to-crm-login-page-\u0026-validate-home-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Open Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Navigate to CRM Login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Validate Title of the Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Enter \"admin\" and \"admin@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click Submit Button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Close Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.open_Chrome_Browser()"
});
formatter.result({
  "duration": 3651179900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.navigate_to_CRM_Login_Page()"
});
formatter.result({
  "duration": 3563549200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.validate_Title_of_the_Page()"
});
formatter.result({
  "duration": 4879300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 7
    },
    {
      "val": "admin@123",
      "offset": 19
    }
  ],
  "location": "LoginStepDefination.Enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 187924900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.click_Btn()"
});
formatter.result({
  "duration": 83213500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_Browser()"
});
formatter.result({
  "duration": 79665100,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Navigate to CRM Login Page \u0026 Validate Home Page",
  "description": "",
  "id": "validate-home-page;navigate-to-crm-login-page-\u0026-validate-home-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Open Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Navigate to CRM Login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Validate Title of the Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Enter \"justypedigvijay@gmail.com\" and \"Bank$123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click Submit Button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Close Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.open_Chrome_Browser()"
});
formatter.result({
  "duration": 3784812500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.navigate_to_CRM_Login_Page()"
});
formatter.result({
  "duration": 5156046700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.validate_Title_of_the_Page()"
});
formatter.result({
  "duration": 6885000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "justypedigvijay@gmail.com",
      "offset": 7
    },
    {
      "val": "Bank$123",
      "offset": 39
    }
  ],
  "location": "LoginStepDefination.Enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 343053100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.click_Btn()"
});
formatter.result({
  "duration": 149289400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_Browser()"
});
formatter.result({
  "duration": 99951200,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Navigate CRM Login Page",
  "description": "",
  "id": "navigate-crm-login-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Navigate to CRM Login Page",
  "description": "",
  "id": "navigate-crm-login-page;navigate-to-crm-login-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Navigate to CRM Login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Validate Title of the Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Close Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.open_Chrome_Browser()"
});
formatter.result({
  "duration": 3723000300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.navigate_to_CRM_Login_Page()"
});
formatter.result({
  "duration": 4646971700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.validate_Title_of_the_Page()"
});
formatter.result({
  "duration": 8202600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_Browser()"
});
formatter.result({
  "duration": 88714000,
  "status": "passed"
});
});