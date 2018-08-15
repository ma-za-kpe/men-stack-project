var express = require("express");
var app = express();
var port = 3000;

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/residents");

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var nameSchema = new mongoose.Schema({
  firstName: String,
  lastName: String
});

var User = mongoose.model("User", nameSchema);

app.get("/", (req, res) => {
//res.send("Hello World");
res.sendFile(__dirname + "/index.html");
});

app.post('/addname', (req, res) => {

  var myData = new User(req.body);
  myData.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });

})

app.get('/name', (req, res) => {
  var cursor = db.collection('users').find().toArray(function(err, results) {
  console.log(results)
  // send HTML file populated with quotes here
})
})

app.listen(port, () => {
  console.log("Server listening on port " + port);
});
