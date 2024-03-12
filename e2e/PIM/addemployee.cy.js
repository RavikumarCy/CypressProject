import login from '../../pageobjects/loginpage.po'
import data from '../../fixtures/login.json'

describe('verify addemployee functionality', () => {
  Cypress.on("uncaught:exception", () => {
  
    return false;
  });
    it('verify addemployee with valid details', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.login1(data.username,data.password)
      login.pim().click()
      login.addemp().click()
      var r=(Math.random()+1).toString(36).substring(7);
      login.firstname().type(data.firstname)
      login.lastname().type(data.lastname)
      login.savebtm().click()
      login.succussfullysaved().should('be.visible')
      login.listEmployee().click()
      login.empname().eq(0).type(data.firstname)
      login.searchbtn().click()
      cy.wait(5000)
      //login.searchnameassertion().should('be.visible')

      login.editemp().last().click()
      login.editfirstname().type(data.updatename)
      login.searchsavebtn().eq(0).click
      login.listEmployee().click()
      login.empname().eq(0).type(data.updatename)
      login.searchbtn().click()
      
      login.deletebtn().first().click({force:true})
      login.deletebutton().last().click()
      login.deletedbtn().should('be.visible')

      //login.listEmployee().click()
      //cy.get('[class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"]').click()
      //cy.contains('Full-Time Permanent').select().click()
     

})
})