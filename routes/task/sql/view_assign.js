(()=>{
    module.exports=async(username)=>{
        let obj="";
        const helper = require("./../../../common/index")
        const output=await helper.mysqlHelper.query("Select * from taskassigns where createdBy='"+username+"' and deletedBy=''");
            obj=output[0];
            return obj;
        
    }
})()