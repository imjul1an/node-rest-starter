var config = {
	connection: process.env.MONGO_CONNECTION,
	options: { auto_reconnect: true },

	applicationUrl: 'http://app.node-starter.io',
	siteUrl: 'http://node-starter.io',
	domain: '.node-starter.io',

	logentries: {
		token: process.env.LOGENTRIES_TOKEN
	}
};

module.exports = config;
