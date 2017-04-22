var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

module.exports = (function() {

	var htmlRoutes = express.Router();

	htmlRoutes.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"))
	})

	htmlRoutes.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	return htmlRoutes;

})();