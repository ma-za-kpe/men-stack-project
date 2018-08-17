var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require('body-parser');


var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var { User } = require('../models/user');

app.get("/", (req, res) => {

  User.find({}, (err, docs) => {
       if (!err) {
         //res.render('pages/index')
         res.send(docs);
        }
       else {
          console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2));
         }
   });
});

app.get("/", (req, res) => {

  User.find({}, (err, docs) => {
       if (!err) {
         //res.render('pages/index')
         res.send(docs);

        }
       else {
          console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2));
         }
   });
});

app.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    User.findById(req.params.id, (err, doc) => {
        if (!err) {
           res.send(doc);
           //res.render("pages/index", { doc } )
          }
        else { console.log('Error in Retriving User :' + JSON.stringify(err, undefined, 2)); }
    });
});

//localhost:3001/users/
app.post('/', (req, res) => {
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });
    //console.log(req.body.firstName);
    user.save((err, doc) => {
        if (!err) {
           res.send(doc);
         } else {
            console.log('Error in Employee Save :' + JSON.stringify(err, undefined, 2));
        }
    });
});

app.post('/:id/update', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName
    };

    User.findByIdAndUpdate(req.params.id, { $set: user }, { new: true }, (err, doc) => {
        if (!err) {
        //  res.send(doc);
          return res.redirect('/');

        }
        else { console.log('Error in User Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = app;
