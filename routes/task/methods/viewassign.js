(() => {
    const helper = require("./../../../common/index")
    const view_assign = require("./../sql/view_assign")
    const verifytoken = require("../../commons/tokenverify")
    module.exports = async(req, res, next) => {
        const username = globalThis.usernames;
        req.headers.authorization=globalThis.tokens;
        const val = await verifytoken(username, req.headers.authorization);
        if (val == true) {
        const output2=await view_assign(username)
        globalThis.task=output2;
        res.send(output2)
    }else{
        res.send("Unauthorized")
    }
}
})()