const glob = require('glob');
const path = require('path');

const express = require('express');

const app = express();

const lab1 = require('./01-browser/app');
app.use('/01-browser', lab1);

module.exports = app;
