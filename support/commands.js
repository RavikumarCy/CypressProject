// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

//const { default: addemployee } = require('../pageobjectmodel/insertemp.po')

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
require('@4tw/cypress-drag-drop')
require('cypress-downloadfile/lib/downloadFileCommand')

Cypress.Commands.add('login1',(username,password)=> {

        cy.get('input[name="username"]').type(username)
        
        cy.get('input[type="password"]').type(password)

        cy.get('button[type="submit"]').click()

        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
      
        cy.url().should('include','web/index.php/dashboard/index')
      
       // cy.wait(10000)

        cy.contains('Dashboard').should('be.visible')
       
        
})


  