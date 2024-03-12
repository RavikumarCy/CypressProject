
describe('downloadfile',function(){


it('Cypress Test Case - Understanding download file ', function () {
    //let r = (Math.random() + 1).toString(36).substring(7);
    cy.downloadFile("https://images.search.yahoo.com/search/images;_ylt=AwrOrxxyL41l0jotRBFXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=tajmahal&fr2=piv-web&type=E211US885G0&fr=mcafee#id=2&iurl=https%3A%2F%2Ftripgourmets.com%2Fwp-content%2Fuploads%2F2019%2F01%2FTaj-Mahal-Sunrise-Tour-from-Delhi-Featured-Image.jpg&action=click", "cypress/downloads", "Tajmahal.png")
    cy.readFile("cypress/downloads/Tajmahal.png").should('exist')
  })
})