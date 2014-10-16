"use strict";

var _ = require('underscore');
var moment = require('moment');
var config = require('../../config');
var db = require('../db')(config);

module.exports = {
	findByAccessToken: findByAccessToken
};

function findByAccessToken(token, callback) {
	db.users.findOne({accessToken: token}, callback);
}