(()=>{
    module.exports=async(username,token)=>{
        if(username!=undefined){
            const helper = require("./../../common/index")
            const output=await helper.mysqlHelper.query("Select token from users where name='"+username+"'");
            let tokens=output[0][0].token;
            if(tokens==token){
                return true;
            } 
        }else{
            return false;
        }
       
    }
})()