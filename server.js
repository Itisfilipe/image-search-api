'use strict';

if (process.env.DEV) {
  require('dotenv').load();
}

var express = require('express');
var routes = require('./app/routes/index.js');
var mongoose = require('mongoose');

var app = express();

var user = process.env.MONGODB_USER;
var pass = process.env.MONGODB_PASS;
var host = process.env.MONGODB_HOST;
var port = process.env.MONGODB_PORT;
var db = process.env.MONGODB_DB;
var mongoURI = 'mongodb://' +
  user + ':' +
  pass + '@' +
  host + ':' +
  port + '/' +
  db;
mongoose.connect(mongoURI);
routes(app);

app.listen(process.env.PORT || 3000, function() {
  console.log('Node.js listening on port 3000...');
});
