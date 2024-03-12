import { Then, When, Given } from 'cypress-cucumber-preprocessor'
import dashboard from '../../pageobjectmodel/dashboard.po'
import name1 from '../../pageobjectmodel/names.po'
import { And } from 'cypress-cucumber-preprocessor/steps/index'
Given('user clicks on pim', () => {
    cy.contains(dashboard.pimmenuitem()).click()
})
When('user clicks on addemployeesubmenu', () => {
    cy.contains(name1.addemployeesubmenu()).click()
})
Then('user enters firstname {String} and lastname {string}', (firstName, lastName) => {
    cy.contains(name1.firstName()).type(firstName)
    cy.contains(name1.lastName()).type(lastName)
})
And('user clicks on savebutton', () => {
    cy.get(name1.submitbtn()).click()
})
And('user should get successfully saved message', () => {
    cy.contains(name1.successmessage()).should('be.visible')
})