(() => {
    const helper = require("./../../../common/index")
    const join_assign = require("./../sql/join_assign")
    const verifytoken = require("../../commons/tokenverify")
    module.exports = async(req, res, next) => {
        const usr = globalThis.usertypes;
        const username = globalThis.usernames;
        req.headers.authorization=globalThis.tokens;
        const val = await verifytoken(username, req.headers.authorization);
        if(req.headers.authorization==""){
        if (val == true) {
        const taskid = req.body.id;
        const output2=await join_assign(taskid)
        if(output2==true){
            res.send("Sucessfully Joined")
        }else{
            res.send('Not Joined || Already Joined')
        }
       
    }else{
        res.send("Unauthorized")
    }}else{
        res.send("Unauthorized Token")
    }
}
})()