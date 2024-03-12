describe('test suite',()=>{
    it('test case',()=>{
    cy.visit('https://www.google.com/')
    cy.get('[id="APjFqb"]').type("charminar{enter}")
    })
})