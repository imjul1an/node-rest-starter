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
		var user = { phone: req.body.phone, fullName: req.body.fullName };

		users.create(user, function (err, user) {
			if (err) {
				return next ({message: 'can not create a user', status: 500});
			}

			res.status(201).json(user);
		});
	}
}

module.exports = venuesService;