//var config = require('../config/environment');

// Run in the hoodie context
module.exports = function(hoodie, cb) {
    hoodie.task.on('wareplication:add', handleNewReplication);

    function handleNewReplication(originDb, message) {
        hoodie.request('GET', '_config/admins', {}, function(err, data){
            if (err) {
                return addReplicationCallback(err, data);
            };

             var index = data.indexOf('admin');

            if (index == -1)
                return addReplicationCallback('no admin defined', data);

             var pwData = data[index].replace('-pbkdf2-','').split(',');
             var userObj = {
                 username: data[index],
                 hash: pwData[0],
                 salt: pwData[1],
                 password: ''
             }


             var couch = {
                uri:    'https://'+userObj.username+':'+userObj.hash+'@whenagain-dev-couch.appback.com'
            };

            var nano = require('nano')(couch.uri);
            addReplicationCallback(null, data);
         });
    };

    function addReplicationCallback(error, message) {
        if(error){
            return hoodie.task.error(originDb, message, error);
        }
        return hoodie.task.success(originDb, message);
    };

    //Hoodie callback
    cb();
};
