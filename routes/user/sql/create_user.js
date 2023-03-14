(()=>{
    module.exports=async(username,organization,email,phone,status,bypass,created,updated)=>{
        
        const helper = require("./../../../common/index");
        const d = new Date().getTime();
        const output=await helper.mysqlHelper.query("INSERT INTO users (name,organization,email,phone,usertypes,password,createdAt,updatedAt) VALUES ('"+username+"','"+organization+"','"+email+"','"+phone+"','"+status+"','"+bypass+"','"+created+"','"+updated+"')");
        if(output[0].affectedRows>0){
            return true;
        }
        else{
            return false
        }
    }
})()