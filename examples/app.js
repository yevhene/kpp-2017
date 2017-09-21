const glob = require('glob');
const path = require('path');

const express = require('express');

const app = express();

const lab1 = require('./01-browser/app');
app.use('/01-browser', lab1);

const lab2 = require('./02-server/app');
app.use('/02-server', lab2);

module.exports = app;
