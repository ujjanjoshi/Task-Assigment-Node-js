(() => {
    const helper = require("./../../../common/index")
    const leave_assign = require("./../sql/leave_assign")
    const verifytoken = require("../../commons/tokenverify")
    module.exports = async(req, res, next) => {
        const usr = globalThis.usertypes;
        const username = globalThis.usernames;
        req.headers.authorization=globalThis.tokens;
        const val = await verifytoken(username, req.headers.authorization);
        if (val == true) {
        const taskid = req.body.id;
        const output2=await leave_assign(taskid)
        if(output2==true){
            res.send("Sucessfully Leave")
        }else{
            res.send('Not Leave|| Already Leave')
        }
       
    }else{
        res.send("Unauthorized")
    }
}
})()