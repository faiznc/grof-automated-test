@BillFeature
Feature: Bill functionality

    Background:
        Given I am on the login page
        When I insert "testing@grof.co" as the email on the login page
        And I click the Continue bytton on the login page
        Then I should be navigated to "Enter Your PIN" page
        When I insert "123456" as the "pin" on the login page
        Then I should be navigated to "Enter OTP Code" page
        When I insert "123456" as the "otp" on the login page
        Then I should be navigated to "List Bills" page
    
    @GROF-101
    Scenario: GROF-101: Approve bills with valid data
        Given I select Bill on index "3"
        Then I should be navigated to "Details Bills" page
        Then I enter the "Bill Amount" as "1000"
        Then I enter the "Bill Name" as "Faiz"
        Then I enter the "Bill Date" as "10/10/2024"
        Then I choose the Currency of "SGD" on Details Bills
        Then the Approve button should be "enabled"
        Then I click the Approve button on Details Bills
        Then I should be navigated to "List Bills" page
        Then I should see a notification with this text "Bill has been approved"
    
    @GROF-102
    Scenario: GROF-102: Validate only ACTION_REQUIRED with filled data that can be approved
        Given I select Bill on index "3"
        Then I should be navigated to "Details Bills" page
        Then the Approve button should be "disabled"
        Then I enter the "Bill Amount" as "1000"
        Then I enter the "Bill Name" as "Faiz"
        Then I enter the "Bill Date" as "10/10/2024"
        Then I choose the Currency of "SGD" on Details Bills
        Then the Approve button should be "enabled"
        
    @GROF-119
    Scenario: GROF-109: Validate only ACTION_REQUIRED with valid thata that can be approved
        When I select Bill on index "1"
        Then I should be navigated to "Details Bills" page
        Then the Approve button should be "disabled"
        When I click the back button
        Then I should be navigated to "List Bills" page
        And I select Bill on index "2"
        Then I should be navigated to "Details Bills" page
        Then the Approve button should be "disabled"
        When I click the back button
        Then I should be navigated to "List Bills" page
        And I select Bill on index "3"
        Then I should be navigated to "Details Bills" page
        Then the Approve button should be "disabled"
        When I click the back button
        Then I should be navigated to "List Bills" page
        And I select Bill on index "4"
        Then I should be navigated to "Details Bills" page
        Then the Approve button should be "enabled"
        When I click the back button
        Then I should be navigated to "List Bills" page
        And I select Bill on index "5"
        Then I should be navigated to "Details Bills" page
        Then the Approve button should be "disabled"

    @GROF-110
    Scenario: GROF-110: Validate only ACTION_REQUIRED bill that can be approved
        When I select Bill on index "4"
        Then I should be navigated to "Details Bills" page
        Then the "Bill Name" field should be filled with "Luffy"
        Then the "Bill Date" field should be filled with "2024-10-10"
        Then the "Bill Amount" field should be filled with "560"
        Then the Approve button should be "enabled"
        Then I click the Approve button on Details Bills
        Then I should be navigated to "List Bills" page
        Then I should see a notification with this text "Bill has been approved"
