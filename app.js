"use strict";

var express = require('express');
var cors = require('cors');
var compression = require('compression');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');

var app = express();

var middleware = require('./source/middleware');
var config = require('./config');

var logger = require('./source/utils/logger');
var env = process.env.NODE_ENV || 'development';

app.set('port', process.env.PORT || 5000);

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

app.listen(app.get('port'), function () {
	logger.info('[your-app-name] app listening on port ' + app.get('port') + ' ' + env + ' mongo: ' + config.connection);
});
