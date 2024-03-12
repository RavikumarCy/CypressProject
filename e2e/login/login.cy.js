describe('verify Login functionality', () => {
    it('verify Login with valid creds', () => {
      cy.visit('web/index.php/auth/login')
      cy.get('input[name="username"]').type("Admin")
      cy.get('input[placeholder="Password"]').type("admin123")
      cy.get('button[type="submit"]').click() 

      //assertions  
      cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
      // cy.url().should(eq) means it is complete url
      //or

      cy.url().should('include','web/index.php/dashboard/index')
      
 // cy.url().should(include) means it is partial url(half url)

      //or 
      // atleast one assertion point should have in your test case
        // when you want to verify the text or when you want to work on a text you have a inbuilt method called cy.contains
      cy.contains('Dashboard').should('be.visible')
})

it('verify login with valid username invalid password', () => {
    cy.visit('web/index.php/auth/login')
    cy.get('input[name="username"]').type("Admin")
    cy.get('input[placeholder="Password"]').type("jdjhgdewhdhdsd")
    cy.get('button[type="submit"]').click()
    cy.contains('Invalid credentials').should('be.visible')

})

it('verify login with invalid username valid password', () => {
    cy.visit('web/index.php/auth/login')
    cy.get('input[name="username"]').type("Admjhvvhgvhin")
    cy.get('input[placeholder="Password"]').type("admin123")
    cy.get('button[type="submit"]').click()
    cy.contains('Invalid credentials').should('be.visible')

})

it('verify login with invalid username invalid password', () => {
    cy.visit('web/index.php/auth/login')
    cy.get('input[name="username"]').type("Adfhbehrehmin")
    cy.get('input[placeholder="Password"]').type("jdjhgdewhdhdsd")
    cy.get('button[type="submit"]').click()
    cy.contains('Invalid credentials').should('be.visible')

})

})