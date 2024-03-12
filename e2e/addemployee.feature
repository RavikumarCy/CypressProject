Feature: verify addemployee functionality
Feature Description:
Scenario: verify addemployee with mandatory details
        Given user launch the Application
        When user should enter username "Admin" and password "admin123"
        Then user clicks on login button
        And user should navigate to dashboard
        And user clicks on pim
        And user clicks on addemployeesubmenu
        And user enters firstname "mani" and lastname "c"
        And user clicks on savebutton
        And user should get successfully saved message