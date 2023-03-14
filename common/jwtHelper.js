((jwtHelper)=>{
    const jwt = require("jsonwebtoken");
   
    jwtHelper.createtoken = async(data,secretKey,expireTime) =>{
      return jwt.sign({data},secretKey,{expiresIn:expireTime})
    };
})(module.exports);
