class names
{
    addemployeesubmenu(){
        return 'Add Employee'
        }
firstName()
{
    return '[name="firstName]'
}
middleName()
{
    return '[name="middleName"]'
}
lastName()
{
    return '[name="lastName"]'
}
firstName1()
{
    return '(//input[@placeholder="Type for hints..."])[1]'
}
submitbtn()
{
    return '[type="submit"]'
}
searchbtn()
{
    return '[type="submit"]'
}
successmessage(){
    return 'Successfully Saved'
    }
}
const name1=new names()
export default name1