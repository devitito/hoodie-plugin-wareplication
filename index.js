var _ = require('lodash');

// Run in the hoodie context
module.exports = function(hoodie, cb) {
    hoodie.task.on('wareplication:add', handleNewReplication);

    function handleNewReplication(originDb, message) {

        hoodie.account.findAll(function(error, accounts) {
            if (error) {
                return hoodie.task.error(origin, message, error);
            }

            var targetDb = 'target';
            if (!_.isUndefined(message.target))
                targetDb = message.target;

            var account = _.find(accounts, {database: originDb});

            //Add a new document to _replicator db
            hoodie.database('_replicator').add('centralize_user', {
                "id": account.name.split('/')[1],
                "source":originDb,
                "target":targetDb,
                "continuous":true,
                "create_target": true,
                "user_ctx": {
                    "roles": ["_admin"]
                }
            }, function (err, data) {
                if(err){
                    return hoodie.task.error(originDb, message, err);
                }
                return hoodie.task.success(originDb, message);
            });
        });
    };

    //Hoodie callback
    cb();
};
