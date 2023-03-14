((headerchckHelper) => {
    const helper = require("./index")

    headerchckHelper.chckheader = async(givn,username)=>{
        const output=await helper.mysqlHelper.query("Select token from users where name='"+username+"'");
        let tokens=output[0][0].token;
        console.log(tokens);
    //    return myCache.set( key, value, ttl );
    }
     })(module.exports);