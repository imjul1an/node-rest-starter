var config = {
	connection: 'mongodb://localhost:27017/nodestarter',
	options: { auto_reconnect: true },

	applicationUrl: 'http://localhost:5000',
	siteUrl: 'http://localhost:3000',
	domain: '.localhost',

	logentries: {
		token: '32a06cd0б-f99c-4625-a538-3afd98016248'
	}
};

module.exports = config;