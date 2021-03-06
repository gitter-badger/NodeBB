define('csrf', function() {
	"use strict";
	var csrf = {},
		_data = {};

	csrf.get = function() {
		return _data.token;
	}

	csrf.set = function(token) {
		_data.token = token;
	};

	return csrf;
});