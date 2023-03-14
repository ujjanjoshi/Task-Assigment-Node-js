(()=>{
    module.exports=async(search)=>{
        let obj="";
        const helper = require("./../../../common/index")
        const output=await helper.mysqlHelper.query("Select * from taskassigns where id="+search);
        // console.log (output[0][0]);
        if(output[0][0].deletedBy!=""){
            obj="Not Found";
            return obj;
        }else{
            obj=output[0][0];
            return obj;
        }
        
    }
})()