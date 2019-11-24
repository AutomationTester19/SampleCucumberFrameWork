Feature: Creating Company

Scenario: Creating New Company Details Using Maps

Given Open Chrome Browser
Then Navigate to CRM Login Page
When Validate Title of the Page
And User Enters username and password
| username | password |
| admin | admin@123 |
| Test | Test@123 |
| Justypedigvijay@gmail.com | Bank$123 |
Then Close Browser