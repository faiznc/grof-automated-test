@LoginFeature
Feature: Login functionality

  Scenario: GROF-1 : Successful login with valid credentials
    Given I am on the login page
    When I insert "testing@grof.co" as the email on the login page
    And I click the Continue bytton on the login page
    Then I should be navigated to "Enter Your PIN" page
    When I insert "123456" as the "pin" on the login page
    Then I should be navigated to "Enter OTP Code" page
    When I insert "123456" as the "otp" on the login page
    Then I should be navigated to "List Bills" page
  
  Scenario: GROF-2 : Login attempt with Invalid Email
    Given I am on the login page
    When I insert "wrong@email" as the email on the login page
    And I click the Continue bytton on the login page
    Then I should see a notification with this text "Couldn’t found your account. Please login with registered credential"
    Then I should be navigated to "Enter Your Phone Number or Email" page
  
  Scenario: GROF-3 : Login attempt with Invalid PIN
    Given I am on the login page
    When I insert "testing@grof.co" as the email on the login page
    And I click the Continue bytton on the login page
    Then I should be navigated to "Enter Your PIN" page
    When I insert "111111" as the "pin" on the login page
    Then I should see a notification with this text "Wrong PIN for 1st attempt! Your account will be blocked after 3rd attempt!"
    Then I should be navigated to "Enter Your PIN" page

  Scenario: GROF-4 : Login attempt with Invalid OTP
    Given I am on the login page
    When I insert "testing@grof.co" as the email on the login page
    And I click the Continue bytton on the login page
    Then I should be navigated to "Enter Your PIN" page
    When I insert "123456" as the "pin" on the login page
    Then I should be navigated to "Enter OTP Code" page
    When I insert "999999" as the "otp" on the login page
    Then I should see a notification with this text "Wrong Otp!"
    Then I should be navigated to "Enter OTP Code" page


