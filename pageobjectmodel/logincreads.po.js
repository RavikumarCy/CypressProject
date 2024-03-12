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
    pimbtn()
    {
        return 'PIM'
    }
    addemployee()
    {
        return 'Add Employee'
    }
    
}

const login=new loginPage()
export default login