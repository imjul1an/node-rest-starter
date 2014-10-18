var request = require('request');
var testUtils = require('../utils');

describe('users.spec.js', function () {
	var apiUrl, url, response, result;

	beforeEach(function () {
		apiUrl = testUtils.getRootUrl() + '/api/users';
	});

	describe("When I've accessed node-rest-starter app as a guest", function () {
		var payload;

		beforeEach(function () {
			url = apiUrl;
		});

		describe('and payload is ok', function () {
			beforeEach(function () {
				payload = { phone:'+380633252435', fullName: 'Yulian Ustiyanovych' };
			});

			beforeEach(function (done) {
				request.post({url: url, body: payload, json: true}, function (err, resp, body) {
					response = resp;
					result = body;
					done(err);
				});
			});

			it('should return 201 (OK)', function () {
				expect(response.statusCode).equal(201);
			});
		});
	});
});