(()=>{
    module.exports=async(id,taskname,description,d,deadline)=>{
        let obj="";
        console.log(id+taskname+description+d+deadline);
        const helper = require("./../../../common/index")
        const output=await helper.mysqlHelper.query("UPDATE taskassigns SET name='"+taskname+"', description='"+description+"', deadline='"+deadline+"',createdAt='"+d+"',updatedAt='"+d+"' WHERE id ="+id);
        if(output[0].affectedRows>0){
            return true;
        }
        else{
            return false
        }
    }
})()