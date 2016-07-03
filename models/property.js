'use strict';

const mongoose = require('mongoose');

let propertySchema = new mongoose.Schema({
  address: {type: String, required:true},
  vacant: {type: String, enum: ['Yes', 'No'], required:true},
  rooms: Number,
  bathrooms: Number,
  rent: String
  // tenant:[{type: mongoose.Schema.types.ObjectId}]
})

propertySchema.statics.addTenant = function(propertyId, tenantId, cb){
  this.findById(propertyId, function(err, property){
    if(err) return cb(err)
    property.attachTenant()
  })
}




let Property = mongoose.model('Property', propertySchema)

module.exports = Property;
