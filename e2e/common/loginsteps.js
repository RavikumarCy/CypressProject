import { And, Given, Then } from "cypress-cucumber-preprocessor/steps";
import dashboard from "../../pageobjectmodel/dashboard.po";
import login from "../../pageobjectmodel/logincreads.po";

Given('User Launch the Application', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})
Then('User Enter username as {string}', (username) => {
    cy.get(login.usernameInput()).type(username)
})
Then('User Enter password as {string}', (password) => {
    cy.get(login.passwordInput()).type(password)
})
And('User clicks on the login button', () => {
    cy.get(login.loginBtn()).click()
})
And('User should be navigated to Dashboard Page', () => {
    cy.contains(dashboard.dashboraditem()).should('be.visible')
})
And('User should get error Message', () => {
    cy.contains(login.loginErrorMessage()).should('be.visible')
})