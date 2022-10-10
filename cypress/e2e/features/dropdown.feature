Feature: Dropdown tests
@books 
    Scenario: Dropdown homepage
        Given I open dropdown homepage
        When I select a value
        Then I see the changed value