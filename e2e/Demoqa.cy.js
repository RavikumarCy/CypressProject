describe('verify Login functionality', () => {
    it('verify Login with valid creds', () => {
     // cy.visit('https://www.google.com/')
      cy.visit('https://demoqa.com/')
      cy.get('#app > div > div > div.home-body > div > div:nth-child(1) > div > div.avatar.mx-auto.white > svg').click()
      cy.contains('Text Box').click()
      cy.get('input[id="userName"]').type("Ravikumar")
      cy.get('input[placeholder="name@example.com"]').type("ravikkhbhd@gmail.com")
      cy.get('textarea[placeholder="Current Address"]').type("Bangalore")
      cy.get('textarea[id="permanentAddress"]').type("Hindupur")
      cy.get('button[id="submit"]').click();
    })
})  