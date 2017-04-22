var express = require("express");
var bodyParser = require("body-parser");
var friendsData = require("./../data/friends.js")
var path = require("path");

module.exports = (function() {

	var api = express.Router();
	var friends = friendsData;

	api.post("/friends", function(req, res) {
		var currentUser = req.body;
		var currentScores = currentUser["scores"];
		var match;
		var leastDifference = 100;

		for (var j = 0; j < friends.length; j++) {
			var test = friends[j];

			for (var i = 0; i < currentScores.length; i++) {
				var difference = 0;
				difference += (Math.abs(currentScores[i] - test.scores[i]));
			};

			if (difference < leastDifference) {
				leastDifference = difference;
				match = test.name;
				console.log(match);
			};

		};

		for (var k = 0; k < friends.length; k++) {
			if (friends[k].name === match) {
				res.send(friends[k]);
			}
		};

		friends.push(req.body);
		res.end();
	});

	api.get("/friends", function(req, res) {
		res.send(friends);
		res.end();
	});

	return api;

})();