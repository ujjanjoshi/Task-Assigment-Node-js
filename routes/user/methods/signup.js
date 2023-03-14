(() => {
    const helper = require("./../../../common/index")
    const create_user = require("./../sql/create_user")
    module.exports = async(req, res, next) => {
        const username = req.body.username;
        const phone = req.body.phone;
        const email = req.body.email;
        const organization = req.body.organization;
        const password = req.body.password;
        const salts= await helper.hashHelper.createSalt();
        const d = new Date().toISOString();
        const bypass=await helper.hashHelper.computeHash(password,salts);
        const status = req.body.usertypes;
        let output = await helper.validationHelper.uservalidation(username,organization,email,phone,status,password)
        if (output == true) {
            const output2=await create_user(username,organization,email,phone,status,bypass,d,d)
            if(output2==true){
                res.send('SignUp Succesful')
            }else{
                res.send('SignUp UnSuccesful')
            }
            
        }else{
            res.send('SignUp UnSuccesful')
        }
    }
})()