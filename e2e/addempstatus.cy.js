describe('verify Add employement status functionality', () => {
    it('verify adding add employment status valid inputs', () => {
        cy.login1()
        cy.contains('Admin').click()
        cy.contains('Job ').click()
        cy.contains("Employment Status").click()
       // cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]')
        // cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-header-container > div > button > i').type("financial")
        // cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-row > div > div:nth-child(2) > input').type("management")
        
        // cy.get('button[type="submit"]').click()
        cy.contains(' Add ').click()
        cy.get('input[class="oxd-input oxd-input--active"]').last().type('management')
        cy.contains(' Save ').click()
    })
    it('verify mandatory fields in add employement status fields', () => {
       cy.login1()
        cy.contains('Admin').click()
        cy.contains('Job ').click()
        cy.contains("Employment Status").click()
        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
        cy.get('button[type="submit"]').click()
        cy.contains('Required').should("be.visible")
    })

    it('verify add employee status field will accept 50 chars ', () => {
       cy.login1()
        cy.contains('Admin').click()
        cy.contains('Job ').click()
        cy.contains("Employment Status").click()
        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-row > div > div:nth-child(2) > input').type("bbgfdfghdfjvfn.g.kdruhgd;gjhzghzjh;uothr;oghrdlgkgdrg")
        cy.contains('Should not exceed 50 characters').should("be.visible")
    })

})