const mongoose = require('mongoose');

let tenantSchema = new mongoose.Schema({
  name: String,
  number: Number,
  email: {type:String, match: /^\w+@\w+\.\w+$/},
  property: {type: mongoose.Schema.Types.ObjectId, ref: 'Property'}
})

let Tenant = mongoose.model('Tenant', tenantSchema)

module.exports = Tenant;
