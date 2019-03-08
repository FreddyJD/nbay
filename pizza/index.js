const express = require("express");
const bodyParser = require("body-parser");

var PORT = process.env.PORT || 8888;

var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "wrapper" }));
app.set("view engine", "handlebars");

app.listen(PORT => console.log(PORT));

var routes = require('./controllers');

routes(app);