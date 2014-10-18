"use strict";

var http = require('http');
var middleware = require('./source/middleware');
var applyAuthentication = require('./source/utils/applyAuthentication');
var config = require('./config');

var logger = require('./source/utils/logger');
var express = require('express');
var app = express();

var allowCrossDomain = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', req.headers.origin !== 'null' && req.headers.origin || '*');
	res.header('Access-Control-Allow-Credentials', true);
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-Access-Token, X-Revision, Content-Type');

	next();
};

app.configure(function() {
	app.set('port', process.env.PORT || 5000);
	app.use(express.favicon());
	app.use(express.bodyParser());
	app.use(express.cookieParser());
	app.use(express.methodOverride());
	app.use(allowCrossDomain);
	app.use(middleware.errors.logHttpErrors());
	app.use(app.router);
});

app.configure('development', function() {
	app.use(express.logger('dev'));
	app.use(express.errorHandler());
});

app.configure('test', function() {
	app.use(express.errorHandler());
});

app.configure('staging', function() {
	app.use(express.logger('short'));
	app.use(express.compress());
});

app.configure('production', function() {
	app.use(express.logger('short'));
	app.use(express.compress());
});

require('./source/api')(app);

// applyAuthentication(app, ['/api']);

http.createServer(app).listen(app.get('port'), function() {
	var env = process.env.NODE_ENV || 'development';
	logger.info('[your-app-name] app listening on port ' + app.get('port') + ' ' + env + ' mongo: ' + config.connection);
});
