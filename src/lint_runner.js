"use strict";

var jshint = require("jshint").JSHINT;

exports.validateSource = function(sourceCode, options, globals, description) {
	description = description ? description + " " : "";
	var pass = jshint(sourceCode, options, globals);
	if (pass) {
		console.log(description + "ok");
	}
	else {
		console.log(description + "fail");
		jshint.errors.forEach(function(error) {
			console.log(error.line + ": " + error.evidence.trim());
			console.log("   " + error.reason);
		});
	}
	return pass;
};