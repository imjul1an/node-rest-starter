"use strict";

var auth = require('./auth');

module.exports = {
	authenticatedAccess: authenticatedAccess,
	guest: guest,
	verified: verified,
	admin: admin
};

function authenticatedAccess() {
	return function (req, res, next) {
		var validateToken = auth.validateToken();
		validateToken(req, res, next);
	};
}

function guest() {
	return function _guest (req, res, next) {
		req.guestAccess = true;
		next ();
	};
}

function verified() {
	return function (req, res, next) {
		if (!req.account || !req.account.verified) {
			return next({message: 'User not verified', status: 403});
		}

		next();
	};
}

function admin() {
	return function (req, res, next) {
		if (!req.account || !req.account.admin) {
			return next({message: 'Not allowed for non-admins', status: 403});
		}

		next();
	};
}