Feature: Books tests
@books 
    Scenario: Books homepage
        Given I open books homepage
        Then I see books categories
        Then I go to classics