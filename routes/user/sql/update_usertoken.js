(()=>{
    module.exports=async(username,token)=>{
        let obj="";
        const helper = require("./../../../common/index")
        const output=await helper.mysqlHelper.query("UPDATE users SET token='"+token+"' WHERE name ='"+username+"'");
        obj=output[0][0];
        return true;
    }
})()