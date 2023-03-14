(()=>{
    module.exports=async(id)=>{
        const helper = require("./../../../common/index")
        const adduser= globalThis.usernames;;
        const involvedusr =await helper.mysqlHelper.query("Select involveduser from taskassigns where id="+id);
        if(involvedusr[0][0].involveduser=="no user"){
           return false;
        }
        const usralinv=involvedusr[0][0].involveduser.split(",");
        const a=[];
        usralinv.forEach(e => {
            if(e==adduser){
            }else{
                a.push(e);
            }
        });
        let output;
        if(a.length==0){
            output=await helper.mysqlHelper.query("UPDATE taskassigns SET involveduser='no user' WHERE id ="+id);
        }else{
            output=await helper.mysqlHelper.query("UPDATE taskassigns SET involveduser='"+a.toString()+"' WHERE id ="+id);
        }
        if(output[0].affectedRows>0){
                    return true;
                }
                else{
                    return false
                }
       
    }
})()