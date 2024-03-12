import logindata from '../fixtures/login.json';
import login from '../pageobjectmodel/logincreads.po';
import name1 from '../pageobjectmodel/names.po';
//import names2 from '../fixtures/PIM/addemployee/names2.json';
//import empdetails from '../fixtures/empdeatails.json'
import empdetails1 from '../fixtures/empdetails1.json'
import name3 from '../fixtures/PIM/addemployee/name3.json';
import dashboard from '../pageobjectmodel/dashboard.po';
import edit from '../pageobjectmodel/editPage.po';
import editemp from '../fixtures/editemp.json';
import delemp from '../pageobjectmodel/deletemp.po';

describe('Verify add employee functionality',()=>{
    Cypress.on("uncaught:exception", () => {
  
        return false;
      });

    it('verify add employee login valid inputs',()=>{

        cy.visit('web/index.php/auth/login')

        cy.get(login.usernameInput()).type(logindata.username)

        cy.get(login.passwordInput()).type(logindata.password)

        cy.get(login.loginBtn()).click() 
    
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
  
        cy.url().should('include','web/index.php/dashboard/index')
        cy.contains(dashboard.dashboraditem()).should('be.visible')

         //cy.contains('Dashboard').should('be.visible')
        });

    it('verify add employee deatils',()=>{
        cy.login1()

        cy.contains(login.pimbtn()).click()

        cy.contains(login.addemployee()).click()

        cy.wait(10000)

        cy.get(name1.firstName()).type(empdetails1.firstname1)

        cy.get(name1.middleName()).type(empdetails1.middlename1)

        cy.get(name1.lastName()).type(empdetails1.lastname1)

        cy.get(name1.submitbtn()).click()
    });

    it('verify  search employee valid details ',()=>{
        cy.login1()
       
        cy.contains(login.pimbtn()).click()

        cy.contains(login.addemployee()).click()

        // cy.contains('Employee List').click()
        // cy.contains('PIM').click()


       // cy.contains('Add Employee').click()

        cy.xpath(name1.firstName1()).type(name3.firstname2)

    //    // cy.xpath('(//input[@class="oxd-input oxd-input--active"])[2]').type("12345")
        cy.get(name1.searchbtn()).click()
   
    //     // cy.xpath('(//input[@type="checkbox"])[2]').check().should("be.checked")
    });

it('verify  edit employee valid details ',()=>{
    cy.login1()
    cy.xpath(edit.editbtn()).click()
    cy.get(edit.firstname2()).type(editemp.firstname)
    cy.xpath(edit.subbtn()).click()

});

it('verify  delete employee valid details ',()=>{

    cy.login1()
    cy.xpath(delemp.deleteempbtn()).click()
    cy.xpath(delemp.deleteempbtn1()).click()

    })
})