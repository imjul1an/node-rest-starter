var mongo = require('mongojs');

var collections = ['users'];

module.exports = function (config, connection) {
	connection = connection || 'connection';
	var db = mongo.connect(config[connection], collections);

	if (!db) {
		throw new Error('could not connect to ' + config.connection);
	}

	return db;
};
