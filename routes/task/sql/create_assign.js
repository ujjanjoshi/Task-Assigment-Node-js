(()=>{
    module.exports=async(utaskname,description,taskstatus,involved,organization,d,deadline,createdby)=>{
        
        const helper = require("./../../../common/index");
        const output=await helper.mysqlHelper.query("INSERT INTO taskassigns(Name,Description,Organization,TaskStatus,InvolvedUser,createdAt,updatedAt,Deadline,createdBy) VALUES ('"+utaskname+"','"+description+"','"+organization+"','"+taskstatus+"','"+involved+"','"+d+"','"+d+"','"+deadline+"','"+createdby+"')");
        if(output[0].affectedRows>0){
            return true;
        }
        else{
            return false
        }
    }
})()