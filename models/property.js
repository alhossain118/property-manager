'use strict';

const mongoose = require('mongoose');

let propertySchema = new mongoose.Schema({
  address: {type: String, required:true},
  vacant: {type: String, enum: ['Yes', 'No'], required:true},
  rooms: Number

})

let Property = mongoose.model('Property', propertySchema)

module.exports = Property;
