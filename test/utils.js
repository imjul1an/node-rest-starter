var config = require('../config');
var db = require('../source/db')(config);

module.exports = {
	getRootUrl: function() {
		return config.applicationUrl;
	},

	clearDb: function(callback) {
		db.dropDatabase(callback);
	},

	clearCollection: function(collection, callback) {
		db[collection].remove(callback);
	}
};
