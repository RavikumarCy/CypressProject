describe('verify search functionality', () => {
  it('verify user can search in google', () => {
    cy.visit('https://www.google.com/')
    cy.get('textarea[aria-label="Search"]').type("Charminar{enter}")
    // cy.get('textarea[aria-label="Search"]').type("Charminar{enter}")
    // cy.get('textarea[aria-label="Search"]').click()
  })
})