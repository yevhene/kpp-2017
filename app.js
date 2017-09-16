const fs = require('fs');
const path = require('path');
const marked = require('marked');

const express = require('express');

const app = express();

const slides = require('./apps/slides/app');
app.use('/slides', slides);

const examples = require('./apps/examples/app');
app.use('/examples', examples);

const port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  fs.readFile(path.join(__dirname, 'README.md'), 'utf8', function(err, content) {
    const html = marked(content);
    res.send(html);
  });
});

app.listen(port, function() {
  console.log(`App listening ${port} port`);
});
