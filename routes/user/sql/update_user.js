(()=>{
    module.exports=async(id,username,phone,email,password,address,usertypeid,status)=>{
        let obj="";
        const helper = require("./../../../common/index")
        const d = new Date().getTime();
        const output=await helper.mysqlHelper.query("UPDATE users SET username='"+username+"',phone='"+phone+"',email='"+email+"',password='"+password+"',adress='"+address+"',usertypeid='"+usertypeid+"',status='"+status +"',updatedAt='"+d+"' WHERE id ="+id);
        console.log (output[0]);
        obj=output[0][0];
        return obj;
    }
})()