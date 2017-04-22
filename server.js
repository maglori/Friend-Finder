var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = 3001;

var apiRoutes = require("./app/routing/api-routes")
var htmlRoutes = require("./app/routing/html-routes")

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
type: "application/vnd.api+json"
}));

app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

