"use strict";

var _ = require('underscore');
var moment = require('moment');
var crypto = require('crypto');

var config = require('../../config');
var db = require('../db')(config);

module.exports = {
	findByAccessToken: findByAccessToken,
	create: create
};

function findByAccessToken(token, callback) {
	db.users.findOne({accessToken: token}, callback);
}

function create (user, callback) {
	var ext =  {created: moment().toDate()};

	var accessToken = crypto.createHash('sha1').update(JSON.stringify(ext)).digest('hex');

	user = _.extend(user, ext, {accessToken: accessToken});

	db.users.save(user, callback);
}