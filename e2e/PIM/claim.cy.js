import data from '../../fixtures/claim.json'
describe("verify the claim functionality",()=>{

    it("verify the claim valid credentials",()=>{

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    
    cypress.command(add("usename","password"))
    cy.get('input[placeholder="Username"]').type('Admin')
    cy.get('input[type="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.get('a[class="oxd-main-menu-item active"]').click
    cy.contains('Dashboard').click()
    cy.contains('Claim').click()

    cy.get('a[class="oxd-topbar-body-nav-tab-item"]').first().click()
    cy.get('div[class="oxd-select-text--after"]').first().click()
    cy.contains('Accommodation').click()
    //cy.get('div[class="oxd-select-text oxd-select-text--active"]').eq(0).click()
    cy.get('i[class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"]').first().click()
    cy.get('div[class="oxd-select-text-input"]').last().click()
    cy.contains('Australian Dollar').click()
    
    })
})



