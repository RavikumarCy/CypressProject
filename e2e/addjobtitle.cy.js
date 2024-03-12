import login from "../pageobjects/loginpage.po"
import data from '../fixtures/login.json'
describe('Verify add job title functionality',()=>{
    it('verify add job title valid inputs',()=>{
        cy.visit('web/index.php/auth/login')
        // cy.get(login.usernameInput()).type(data.username)
        // cy.get(login.passwordInput()).type(data.password)
        // cy.get(login.loginBtn()).click() 
        cy.login1()
    
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        cy.url().should('include','web/index.php/dashboard/index')
        cy.contains(login.dashboardbtn()).should('be.visible')
        cy.contains(login.adminbtn()).click()
        cy.contains(login.jobbtn()).click() 
        cy.contains(login.jobtitlebtn()).click()
        cy.contains(login.Addbtn()).click()
       // cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
       // let r = (Math.random() + 1).toString(36).substring(7);
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > input').type("Engineer")
        
        cy.get('button[type="submit"]').click()
        cy.get('textarea[placeholder="Type description here"]').first().type(" Testing ")
        cy.get('button[type="submit"]').click()
      
       //cy.contains("Succesfully Saved").should('be.visible')

  })

  it('verify add job title valid inputs',()=>{
    cy.visit('web/index.php/auth/login')
    cy.login1()
    cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    cy.url().should('include','web/index.php/dashboard/index')
      cy.contains(login.dashboardbtn()).should('be.visible')
      cy.contains(login.adminbtn()).click()
      cy.contains(login.jobbtn()).click() 
      cy.contains(login.jobtitlebtn()).click()
      cy.contains(login.Addbtn()).click()
    cy.get('button[type="submit"]').click()
    cy.contains("Required").should("be.visible")

})
})