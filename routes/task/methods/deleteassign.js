(() => {
    const helper = require("./../../../common/index")
    const delete_assign = require("./../sql/delete_assign")
    const verifytoken = require("../../commons/tokenverify")
    module.exports = async(req, res, next) => {
        const usr = globalThis.usertypes;
        const username = globalThis.usernames;
        req.headers.authorization=globalThis.tokens;
        const val = await verifytoken(username, req.headers.authorization);
        if (val == true) {
            if(usr=="1"){
        const taskid = req.body.id;
        const output2=await delete_assign(taskid)
            if(output2==true){
                res.send('Deleted Sucessfully')
            }else{
                res.send('Not Deleted')
            }
        }else{
            res.send("UnAuthorized User to Delete")
        }
        }else{
            res.send("UnAuthorized")
        }
        }
})()