(() => {
    const helper = require("./../../../common/index")
    const check_user = require("./../sql/check_user")
    const update_usertoken = require("./../sql/update_usertoken")
    const path=require('path');
    module.exports = async(req, res, next) => {
        const username = req.body.username;
        const password = req.body.password;
        const data={
            "username":username,
            "password":password
        }
        const output2=await check_user(username,password);
        if(output2==true){
            const tokens=await helper.jwtHelper.createtoken(data,'secretKey','3000s',(err,token)=>{
                });
                const output3=await update_usertoken(username,tokens); 
                globalThis.usernames=username;
                globalThis.tokens=tokens;
                if(output3==true){
                    res.send('Login Sucessful')
                }else{
                    res.json("not login");
                }
        }

    }
})()