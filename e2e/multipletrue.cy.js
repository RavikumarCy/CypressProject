const { describe } = require("mocha");

describe('multiple true verifying',()=>{
    it.only('demo for multiple true verifying',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('div[class="product-action"]').click({multiple:true})
    })

    it('force true using',() => {
        cy.visit('https://www.cypress.io/')
       // cy.get('h1[class="text-[32px] font-bold leading-[44px] md:text-[48px] md:leading-[64px]"]').click({force: true})
        cy.contains("Installing Cypress").click({force: true})
    })
    
})