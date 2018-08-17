var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require('body-parser');

var app = express();
var port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('.ejs', require('ejs').__express);
app.set('views', __dirname + '/public')
// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'))

mongoose  = require('./db.js');
var UserController = require('./controllers/UserController.js');

app.listen(port, () => {
  console.log("Server listening on port " + port);
});

app.get("/", (req, res) => {
  res.render('../views/pages/index.ejs')
})

app.get("/edit/:id", (req, res) => {
  var id = req.params.id;
  res.render('../views/pages/update.ejs',{ id: id})
})

app.use('/users', UserController);
