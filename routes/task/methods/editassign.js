(() => {
    const helper = require("./../../../common/index")
    const edit_assign = require("./../sql/edit_assign")
    const verifytoken = require("../../commons/tokenverify")
    module.exports = async(req, res, next) => {
        const usr = globalThis.usertypes;
        const username = globalThis.usernames;
        req.headers.authorization=globalThis.tokens;
        const val = await verifytoken(username, req.headers.authorization);
        if(req.headers.authorization==""){
        if (val == true) {
            if(usr=="1"){
        const id=req.body.id;
        const taskname = req.body.taskname;
        const description = req.body.description;
        const createdby=helper.chacheHelper.getChache("Name");
        const d = new Date().toISOString();
        const deadline=req.body.deadline;
        const output2=await edit_assign(id,taskname,description,d,deadline)
            if(output2==true){
                res.send('Task Edited')
            }else{
                res.send('Task not Edited')
            }
        }else{
                res.send("UnAuthorized")
            }
        }else{
            res.send("UnAuthorized")
        }}else{
            res.send("Unauthorized Token")
        }
        }
})()