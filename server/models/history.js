'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const historySchema = new Schema({
  'name'     : {
    type     : String,
    required : true
  },
  'date'     : {
    type     : Date,
    required : true
  },
  'search'   : {
    type     : String,
    required : true
  },
  'email'   : {
    type     : String,
    required : true
  }
});

const history = mongoose.model('history', historySchema);

module.exports = history;
