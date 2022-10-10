Feature: Bank tests
@bank 
    Scenario: Login tests
        Given I open login page
        When I submit login with "username" and "password"
        Then I should see homepage