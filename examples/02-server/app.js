var express = require('express');
var path = require('path');

var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var ObjectID = mongo.ObjectID;

var url = process.env.MONGODB_URI || 'mongodb://localhost:27017/02-server';

app.use('/', express.static(__dirname + '/static'));

app.get('/tasks', function(req, res) {
  MongoClient
    .connect(url)
    .then(function(db) {
      return db.collection('tasks').find().toArray();
    })
    .then(function(tasks) {
      res.send(tasks);
    });
});

app.post('/tasks', function(req, res) {
  MongoClient
    .connect(url)
    .then(function(db) {
      return db.collection('tasks').insert(req.body);
    })
    .then(function(tasks) {
      res.sendStatus(201);
    });
});

app.delete('/tasks/:id', function(req, res) {
  MongoClient
    .connect(url)
    .then(function(db) {
      return db.collection('tasks').remove({ "_id": ObjectID(req.params.id) });
    })
    .then(function(tasks) {
      res.sendStatus(200);
    })
});

module.exports = app;
