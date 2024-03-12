class editPage
{

    editbtn()
    {
        return '(//button[@type="button"])[8]'
    }
    firstname2()
    {
        return '[name="firstName"]'
    }
    subbtn()
    {
        return '(//button[@type="submit"])[1]'
    }
}

const edit=new editPage()
export default edit