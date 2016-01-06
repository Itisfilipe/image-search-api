'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Log = Schema({
  term: {type: String, required: true},
  when: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Log', Log);
