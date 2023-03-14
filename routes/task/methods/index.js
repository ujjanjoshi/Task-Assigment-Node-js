(() => {
    module.exports = {
        usercreateTask:require('./createassign'),
        userviewTask:require('./viewassign'),
        usereditTask:require('./editassign'),
        userdeleteTask:require('./deleteassign'),
        usersearchTask:require('./searchassign'),
        userjoinTask:require('./joinassign'),
        userleaveTask:require('./leaveassign')
    };
    })();