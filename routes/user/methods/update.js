(() => {
    const helper = require("./../../../common/index")
    const update_user = require("./../sql/update_user")

    module.exports = async(req, res, next) => {
        // console.log(req.body);
        const id=req.body.id;
        const username = req.body.username;
        const password = req.body.password;
        const email=req.body.email;
        const phone=req.body.phone;
        const address = req.body.address;
        const usertypeid = req.body.usertypeid;	
        const status = req.body.status;
        const output2=await update_user(id,username,phone,email,password,address,usertypeid,status)
        // res.send(output2);
    }
})()