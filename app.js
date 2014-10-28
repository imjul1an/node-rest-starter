"use strict";

var http = require('http');
var middleware = require('./source/middleware');
var config = require('./config');

var compression = require('compression');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');

var logger = require('./source/utils/logger');
var express = require('express');
var cors = require('cors');
var app = express();

app.set('port', process.env.PORT || 5000);

app.use(methodOverride());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(middleware.errors.logHttpErrors());

configure();
require('./source/api')(app);

http.createServer(app).listen(app.get('port'), function() {
	var env = process.env.NODE_ENV || 'development';
	logger.info('[your-app-name] app listening on port ' + app.get('port') + ' ' + env + ' mongo: ' + config.connection);
});

function configure() {
	var env = process.env.NODE_ENV || 'development';

	switch(env) {
		case 'development':
			app.use(morgan('dev'));
			app.use(compression());
		break;

		case 'production':
			app.use(morgan('tiny'));
			app.use(compression());
		break;

		case 'staging':
			app.use(morgan('short'));
			app.use(compression());
		break;

		case 'test':
			app.use(morgan('combine'));
			app.use(compression());
		break;

		default:
			app.use(morgan('dev'));
			app.use(compression());
		break;
	}
}
