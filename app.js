"use strict";

var express = require('express');
var cors = require('cors');
var compression = require('compression');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');

var middleware = require('./source/middleware');
var auth = require('./source/utils/applyAuth');
var config = require('./config');

var logger = require('./source/utils/logger');
var env = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 5000;

var app = express();

auth(app, middleware.access.auth(), ['/api']);

app.use(morgan('short', {stream: logger.stream()}));

app.use(methodOverride());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(middleware.errors.logHttpErrors());

if (env === 'production') {
	app.use(compression());
}

require('./source/api')(app);

app.use(middleware.errors.logErrors());

app.listen(port, function () {
	logger.info('[your-app-name] app listening on port ' + app.get('port') + ' ' + env + ' mongo: ' + config.connection);
});
