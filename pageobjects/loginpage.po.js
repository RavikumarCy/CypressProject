class loginPage{

    usernameInput()
    {
        return '[placeholder="Username"]'
    }

    passwordInput()
    {
        return '[placeholder="Password"]'
    }
    loginBtn()
    {
        return '[type="submit"]'
    }
    loginErrorMessage()
    {
        return 'Invalid credentials'
    }
    dashboardbtn()
    {
        return 'Dashboard'
    }
    adminbtn()
    {
        return 'Admin'
    }
    jobbtn()
    {
        return 'Job'
    }
    jobtitlebtn()
    {
        return 'Job Titles'
    }
    Addbtn()
    {
        return "Add"
    }
    pim()
    {
        return cy.contains('PIM')
    }
    addemp()
    {
        return cy.contains('Add Employee')
    } 
    firstname()
    {
        return cy.get('[name="firstName"]')
    }
    lastname()
    {
        return cy.get('[name="lastName"]')
    }
    savebtm()
    {
        return cy.get('[type="submit"]')
    }
    succussfullysaved()
    {
        return cy.get('[id="app"]')
    }
    listEmployee()
    {
        return cy.contains('Employee List')
    }
    empname()
    {
        return cy.get('[placeholder="Type for hints..."]')
    }
    searchbtn()
    {
        return cy.get('[type="submit"]')
    }
    searchnameassertion()
    {
        return cy.contains('Ravikumar')
    }
    editemp()
    {
        return cy.get('[type="button"]')
    }
    editfirstname()
    {
        return cy.get('[name="firstName"]')
    }
    searchsavebtn()
    {
        return cy.get('[type="submit"]')
    }
    deletebtn()
    {
        return cy.get('[class="oxd-icon-button oxd-table-cell-action-space"]')
    }
    deletebutton()
    {
        return cy.get('[type="button"]')
    }
    deletedbtn()
    {
        return cy.contains('Successfully Deleted')
    }
}

const login=new loginPage()
export default login

