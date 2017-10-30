const express = require('express');
const app = express();
app.use('/', express.static(__dirname + '/static'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;
const mongoUrl = process.env.MONGODB_URI ||
               'mongodb://localhost:27017/03-desktop';
let mongo;
MongoClient
  .connect(mongoUrl)
  .then((db) => mongo = db);

app.get('/messages', (req, res) => {
  mongo
    .collection('messages').find().toArray()
    .then((tasks) => {
      res.send(tasks);
    });
});

app.post('/messages', (req, res) => {
  mongo
    .collection('messages').insert(
      Object.assign({time: new Date()}, req.body)
    )
    .then(() => {
      res.sendStatus(201);
    });
});

module.exports = app;
