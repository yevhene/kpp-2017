const path = require('path');
const express = require('express');

const markdown = require('./lib/markdown');

const app = express();
app.use('/slides', require('../slides/app'));
app.use('/examples', require('../examples/app'));

markdown.routes(app, '/', path.join(__dirname, '../../'));
markdown.routes(app, '/docs', path.join(__dirname, '../../docs'));
markdown.routes(app, '/labs', path.join(__dirname, '../../labs'));
markdown.routes(app, '/lectures', path.join(__dirname, '../../lectures'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening ${port} port`));
