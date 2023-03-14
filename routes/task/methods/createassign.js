(() => {
    const helper = require("./../../../common/index")
    const create_assign = require("./../sql/create_assign")
    const verifytoken = require("../../commons/tokenverify")
    module.exports = async (req, res, next) => {
        const usr = globalThis.usertypes;
        const username = globalThis.usernames;
        req.headers.authorization=globalThis.tokens;
        // req.headers.authorization="aaasda";
        const val = await verifytoken(username, req.headers.authorization);
        if (val == true) {
            if (usr == "1") {
                const taskname = req.body.taskname;
                const description = req.body.description;
                const taskstatus = "Unassigned";
                const involved = req.body.involveduser;
                const organization = req.body.organization;
                const createdby = globalThis.usernames;
                const d = new Date().toISOString();
                const deadline = req.body.deadline;
                const output2 = await create_assign(taskname, description, taskstatus, involved, organization, d, deadline, createdby)
                if (output2 == true) {
                    res.send('Task Created')
                } else {
                    res.send('Task not Created')
                }
            } else {
                res.send("UnAuthorized User to Create")
            }
        } else {
            res.send("UnAuthorized")
        }
    }
})()