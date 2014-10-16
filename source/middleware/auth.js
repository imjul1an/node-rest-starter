"use strict";

var users = require('../models/users');
var config = require('../../config');

module.exports = {
	validateToken: validateToken
};

function validateToken() {
	return function (req, res, next) {
		var token = req.headers['x-access-token'] || req.query.accessToken || (config.auth.cookieName && req.cookies[config.auth.cookieName]);

		if (!token) {
			return next({message: 'access token is missing', status: 401});
		}

		users.findByAccessToken(token, function (err, account) {
			if (err || !account) {
				return next({message: 'access token is not valid', status: 401});
			}

			req.account = account;

			next();
		});
	};
}
