const glob = require('glob');
const path = require('path');

const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname);

app.use(expressLayouts);
app.set('layout', path.join(__dirname, 'layouts/layout'));

app.use(express.static(path.join(__dirname, 'static')));

glob.sync(path.join(__dirname, 'lectures/*/')).forEach(dir => {
  const lecture = path.basename(dir);
  app.get(`/${lecture}`, (req, res) =>
    res.render(path.join('lectures', lecture))
  );
  app.use(express.static(path.join(__dirname, 'lectures', lecture, 'assets')));
});

module.exports = app;
