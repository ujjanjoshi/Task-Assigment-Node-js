(() => {
    const express = require("express");
    const router = express.Router();
    const taskController = require("./methods/index")
    
    router.get('/viewtask',taskController.userviewTask);
    router.post('/createtask',taskController.usercreateTask);
    router.post('/edittask',taskController.usereditTask);  
    router.post('/deletetask',taskController.userdeleteTask);  
    router.post('/searchtask',taskController.usersearchTask);  
    router.post('/jointask',taskController.userjoinTask);
    router.post('/leavetask',taskController.userleaveTask);


    module.exports = router;
})()