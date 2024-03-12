describe('verify Add pay grade functionality', () => {
    it('verify adding pay grade valid inputs', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type("Admin")
        cy.get('input[placeholder="Password"]').type("admin123")
        cy.get('button[type="submit"]').click()
  
        //assertions
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
  
        //or
  
        cy.url().should('include','web/index.php/dashboard/index')
        
        //or
  
        cy.contains('Dashboard').should('be.visible')
        cy.contains('Admin').click()
        cy.contains('Job ').click()
        cy.contains('Pay Grades').click()
        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]')
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-header-container > div > button > i').type("grade1")
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-row > div > div > div > div:nth-child(2) > input').type("grade3")
        cy.get('button[type="submit"]').click()
    })

    it('verify mandatory fields in add pay grade page', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type("Admin")
        cy.get('input[placeholder="Password"]').type("admin123")
        cy.get('button[type="submit"]').click()
  
        //assertions
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
  
        //or
  
        cy.url().should('include','web/index.php/dashboard/index')
        
        //or
  
        cy.contains('Dashboard').should('be.visible')
        cy.contains('Admin').click()
        cy.contains('Job ').click()
        cy.contains('Pay Grades').click()
        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
        
        cy.get('button[type="submit"]').click()
        cy.contains('Required').should("be.visible")
        
    })

    it('verify add pay grade will accept 50 chars only', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type("Admin")
        cy.get('input[placeholder="Password"]').type("admin123")
        cy.get('button[type="submit"]').click()
  
        //assertions
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
  
        //or
  
        cy.url().should('include','web/index.php/dashboard/index')
        
        //or
  
        cy.contains('Dashboard').should('be.visible')
        cy.contains('Admin').click()
        cy.contains('Job ').click()
        cy.contains('Pay Grades').click()
        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-row > div > div > div > div:nth-child(2) > input').type("bvkjggjhxsluggguyfycfhgvggggggggggggggggggggggggguuuu")
        cy.contains('Should not exceed 50 characters').should("be.visible")
        
    })
})