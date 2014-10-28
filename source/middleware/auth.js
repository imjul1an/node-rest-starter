function auth() {
	return function (req, res, next) {
		// TODO: apply auth here

		next();
	};
}

module.exports = auth;
