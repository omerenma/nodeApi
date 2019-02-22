var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VehicleScema = new Schema({
  make: String,
  model: String,
  color: String
})

var newVehicle = mongoose.model('vehicle', VehicleScema)
module.exports = newVehicle;