(()=>{
    module.exports=async(username,password)=>{
        const data={
            "username":username,
            "password":password
        }
        const helper = require("./../../../common/index")
        const output=await helper.mysqlHelper.query("Select password from users where name='"+username+"'");
        let pass=output[0][0].password;
        const val= await helper.hashHelper.comparePassword(password,pass);
        if(val){
           const output1=await helper.mysqlHelper.query("Select usertypes from users where name='"+username+"'");
           let usertyp=output1[0][0].usertypes; 
           globalThis.usertypes=usertyp;
           return true;
        }
        else{
            return false;
        }
        
    }
})()