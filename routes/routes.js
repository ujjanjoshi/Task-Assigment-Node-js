
(() => {
    const express = require("express");
    const path=require('path');
    const router = express.Router();
    const userRoute = require("./user/routes");
    const taskRoute = require("./task/routes");
    router.get('/',(req,res)=>{
        res.render('./login')
    })
    router.use('/user',userRoute);
    router.use('/task',taskRoute);

    module.exports = router;

})()
