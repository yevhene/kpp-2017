var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/static'));

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var ObjectID = mongodb.ObjectID;
var mongoUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/02-server';
var mongo;
MongoClient
  .connect(mongoUrl)
  .then(function(db) {
    mongo = db;
  });

app.get('/tasks', function(req, res) {
  mongo
    .collection('tasks').find().toArray()
    .then(function(tasks) {
      res.send(tasks);
    });
});

app.post('/tasks', function(req, res) {
  mongo
    .collection('tasks').insert(req.body)
    .then(function() {
      res.sendStatus(201);
    });
});

app.delete('/tasks/:id', function(req, res) {
  mongo
    .collection('tasks').remove({ _id: ObjectID(req.params.id) })
    .then(function() {
      res.sendStatus(200);
    });
});

module.exports = app;
