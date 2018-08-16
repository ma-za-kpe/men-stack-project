var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require('body-parser');

var app = express();
var port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set the view engine to ejs
app.set('view engine', 'ejs');

mongoose  = require('./db.js');
var UserController = require('./controllers/UserController.js');

app.listen(port, () => {
  console.log("Server listening on port " + port);
});


app.use('/users', UserController);
