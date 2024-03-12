import fixdata from '../fixtures/fixdata.json';
import addemployee from '../pageobjects/insertemp.po'



describe('verify Add employement status functionality', () => {
    Cypress.on("uncaught:exception", () => {
  
        return false;
      });
    it('verify adding add employment status valid inputs', () => {
       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index') 
       cy.login1()

       addemployee.pim().click()
      cy.wait(10000)
       addemployee.addemp().click()

       var r=(Math.random()+1).toString(36).substring(7);
       cy.log(r)
    //    cy.pause()

       addemployee.firstname().type(fixdata.firstname + r)

       addemployee.lastname().type(fixdata.lastname + r)
    //    cy.pause()

       addemployee.savebtm().click()
    //    cy.pause()

       addemployee.succussfullysaved().should("be.visible")

       var m = Math.floor(Math.random() * 435355+768367);

       addemployee.employeelist().click()
   

//        let y = (Math.random() + 1).toString(36).substring(7);
//        cy.log(y)
// cy.pause()
       addemployee.searchname().first().type(fixdata.firstname + r  )

       addemployee.searchbtn().click()

       cy.wait(5000)

      // addemployee.firstnamesearch().should('have.text',fixdata.firstname + r)

       //addemployee.editbtn().click()

    //    addemployee.editname().type(fixdata.firstname1)

    //    addemployee.editsavebtn().first().click()
    })

})  










 










