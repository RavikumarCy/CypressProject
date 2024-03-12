class deletePage{

    deleteempbtn(){

        return '(//i[@class="oxd-icon bi-trash"])[3]'
    }

    deleteempbtn1(){

        return '(//button[@type="button"])[12]'
    }
}

const delemp = new deletePage()

export default delemp;
