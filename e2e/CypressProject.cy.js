import data2 from '../fixtures/parabank.json'


describe('Verify add employee functionality',()=>{
it('Verify add employee functionality',()=>{

cy.visit('https://parabank.parasoft.com/parabank/index.htm')
cy.contains('Register').click()
cy.get('[name="customer.firstName"]').type(data2.firstname)
cy.get('[name="customer.lastName"]').type(data2.lastname)
cy.get('[name="customer.address.street"]').type(data2.Address)
cy.get('[name="customer.address.city"]').type(data2.city)
cy.get('[name="customer.address.state"]').type(data2.state)
cy.get('[name="customer.address.zipCode"]').type(data2.zipcode)
cy.get('[name="customer.phoneNumber"]').type(data2.phone_num)
cy.get('[name="customer.ssn"]').type(data2.ssn)
cy.get('[name="customer.username"]').type(data2.username)
cy.get('[name="customer.password"]').type(data2.password)
cy.get('[name="repeatedPassword"]').type(data2.repassword)
cy.get('[type="submit"]').last().click()

})
it.only('Verify add employee functionality',()=>{
cy.visit('https://www.flipkart.com/')
cy.get('[class="_58bkzq62 _3n8fnaug _3n8fnamv _3n8fnaf9 _3n8fna1 _3n8fna7n _58bkzq2 _1i2djtb9 _1i2djt0"]').eq(0).click()
cy.contains('REDMI 12 5G (Pastel Blue, 128 GB)').click()
cy.contains('₹12,999').should('be.visible')
// cy.pause()
// cy.get('button[class="_2KpZ6l _2U9uOA _3v1-ww"]').invoke('removeAttr','target').click()



})
})