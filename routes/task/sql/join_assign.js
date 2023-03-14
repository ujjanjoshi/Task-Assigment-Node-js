(()=>{
    module.exports=async(id)=>{
        let obj=true;
        const helper = require("./../../../common/index")
        const adduser= globalThis.usernames;;
        const involvedusr =await helper.mysqlHelper.query("Select involveduser from taskassigns where id="+id);
        if(involvedusr[0][0].involveduser=="no user"){
            const output=await helper.mysqlHelper.query("UPDATE taskassigns SET involveduser='"+adduser+"' WHERE id ="+id);
            return true;
        }
        const usralinv=involvedusr[0][0].involveduser.split(",");
        console.log(usralinv);
        usralinv.forEach(e => {
            if(e==adduser){
                obj= false;
            }
        });
        if(obj==true){
            const newinv=involvedusr[0][0].involveduser+","+adduser;
            const output=await helper.mysqlHelper.query("UPDATE taskassigns SET involveduser='"+newinv+"' WHERE id ="+id);
            if(output[0].affectedRows>0){
                return true;
            }
            else{
                return false
            }
        }else{
            return false;
        }
       
    }
})()