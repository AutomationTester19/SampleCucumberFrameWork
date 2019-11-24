Feature: Create New Contact

Scenario Outline: Create New Contact in Contacts Page Using DataTable

Given Open Chrome Browser
Then Navigate to CRM Login Page
And Enter "<username>" and "<password>"
Then Click Submit Button
Then Click Contacts Button
Then Click New Button
Then Enter FirstName and LastName
| Admin | Tendulkar |
Then Close Browser


Examples:
                   |username                               | password |
                   |test@gmail.com | test@123 |