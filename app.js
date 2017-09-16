const express = require('express');

const app = express();

const slides = require('./slides/app');
app.use('/slides', slides);

const labs = require('./labs/app');
app.use('/labs', labs);

const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`App listening ${port} port`);
});
