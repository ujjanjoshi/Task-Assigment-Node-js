(()=>{
    module.exports=async(id)=>{
        let obj="";
        const helper = require("./../../../common/index")
        const d = new Date().getTime();
        const deletedby=globalThis.usernames;
        const output=await helper.mysqlHelper.query("UPDATE taskassigns SET deletedBy='"+deletedby+"' WHERE id ="+id);
        if(output[0].affectedRows>0){
            return true;
        }
        else{
            return false
        }
    }
})()