const glob = require('glob');
const path = require('path');

const express = require('express');

const app = express();

const lab1 = require('./01-browser/app');
app.use('/01-browser', lab1);

const lab2 = require('./02-server/app');
app.use('/02-server', lab2);

const lab3 = require('./03-desktop/server/app');
app.use('/03-desktop', lab3);

module.exports = app;
