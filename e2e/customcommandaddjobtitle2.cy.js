import logindata from '..//fixtures/login.json'


describe('Verify add job title functionality',()=>{
    it('verify add job title valid inputs',()=>{
        

        cy.login("Admin","admin123")
        cy.contains('Admin').click()
        cy.contains('Job').click()
        cy.contains('Job Titles').click()
        cy.contains(" Add ").click()
       // cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
       // let r = (Math.random() + 1).toString(36).substring(7);
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > input').type("Engineer")
        
        cy.get('button[type="submit"]').click()
        cy.get('textarea[placeholder="Type description here"]').first().type(" Testing ")
        cy.get('button[type="submit"]').click()
      
       //cy.contains("Succesfully Saved").should('be.visible')

  })

  it('verify add job title valid inputs',()=>{
    

    cy.login("Admin","admin123")
    cy.contains('Admin').click()
    cy.contains('Job').click()
    cy.contains('Job Titles').click()
    cy.contains(" Add ").click()
    cy.wait(10000)
    cy.get('button[type="submit"]').click()
    cy.contains("Required").should("be.visible")

})
})