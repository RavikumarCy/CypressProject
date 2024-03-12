describe('verify addemployee functionality', () => {
    it('verify addemployee functionality', () => {

        Cypress.on("uncaught:exception", () => {
  
            return false;
          });
 
    cy.visit('https://www.biocon.com/')
          cy.contains('Careers').click({force:true})
          cy.contains('Now Hiring').click({force:true})
          cy.origin('https://career10.successfactors.com/career',()=>{
          cy.get('[class="fd-input fd-input--compact"]').click({multiple:true})
          cy.get('[class="ui5"]').eq(1).click()
          cy.get('[class="ui5"]').eq(2).click()
          //cy.get('[id="101:_checkboxLabel"]').click()
        
        })

    })
})