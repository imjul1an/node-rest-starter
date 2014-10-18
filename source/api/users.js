var _ = require('underscore');
var config = require('../../config');
var middleware = require('../middleware');

var users = require('../models/users.js');

function venuesService (app) {

	app.post('/api/users',
		validateRequest,
		createUser
	);

	function validateRequest(req, res, next) {
		var body = req.body;

		if(!body || !body.phone) {
			return next({message: 'missing phone number', status: 412});
		}

		if (!body || !body.fullName) {
			return next({message: 'missing full name', status: 412});
		}

		next();
	}

	function createUser (req, res, next) {
		res.json(201, {user: ''});
	}
}

module.exports = venuesService;