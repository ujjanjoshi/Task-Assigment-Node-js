(() => {
    const helper = require("./../../../common/index")
    const search_assign = require("./../sql/search_assign")
    const verifytoken = require("../../commons/tokenverify")
    module.exports = async(req, res, next) => {
        const username = globalThis.usernames;
        req.headers.authorization=globalThis.tokens;
        const val = await verifytoken(username, req.headers.authorization);
        if (val == true) {
        const taskid = req.body.search;
        const output2=await search_assign(taskid)
        res.send(output2)
    }else{
        res.send("Unauthorized")
    }
}
})()