

(() => {
    const helper = require("./../../../common/index")
    const search_user = require("../sql/search_user")
    // const create_user = require("./../sql/create_user")
   
    module.exports = async (req, res, next) => {
        const ch=helper.chacheHelper.getChache("Authorization");
        if(ch!=undefined){
            const search = req.body.search;
            const output2 = await search_user(search)
            res.send(output2);
        }
       else{
        res.send("unauthorized");
       }
    }
})()