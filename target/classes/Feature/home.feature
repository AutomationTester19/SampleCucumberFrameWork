Feature: Validate Home Page

Scenario Outline: Navigate to CRM Login Page & Validate Home Page

Given Open Chrome Browser
Then Navigate to CRM Login Page
When Validate Title of the Page
And Enter "<username>" and "<password>"
Then Click Submit Button
Then Close Browser

Examples:
                   | username | password |
                   | admin      | admin@123 |
                   | justypedigvijay@gmail.com | Bank$123 |
