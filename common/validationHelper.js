((validationHelper)=>{
    let pattern = /@gmail.com/;
    validationHelper.uservalidation = async(username,organization,email,phone,status,password) =>{
        if (username == "" || phone == "" || email == "" || password == "" || organization =="") {
            return false;
        }
        else if (phone.substring(0, 2) != "98") {
            return false;
        }
        else if (pattern.test(email) == false) {
            return false;
        }
        else{
            return true;
        }
    };
})(module.exports);
