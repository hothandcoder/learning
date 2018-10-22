var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");
var external = require("./routes/external-api.js");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);
external(app);

var server = app.listen(3088, function() {
  console.log("app running on port.", server.address().port);
});
