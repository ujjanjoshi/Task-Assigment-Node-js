(()=>{
    module.exports=async(search)=>{
        let obj="";
        const helper = require("./../../../common/index")
        const output=await helper.mysqlHelper.query("Select * from users where id="+search);
        // console.log (output[0]);
        obj=output[0][0];
        return obj;
    }
})()