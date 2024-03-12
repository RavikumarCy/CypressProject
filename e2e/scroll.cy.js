const { describe } = require("mocha")

describe('test suite',()=>{
    it('test case',()=>{

        cy.visit('https://docs.cypress.io/api/table-of-contents')
        cy.wait(10000)
        cy.get('a[class="theme-edit-this-page"]').scrollIntoView()
    })
})


