function applyAuthentication(app, func, routesToSecure) {
	routesToSecure.forEach(function (route) {
		app.all(route + '/*', func);
	});

	return app;
}

module.exports = applyAuthentication;
