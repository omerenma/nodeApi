
var express = require('express');
var router = express.Router();

var Vehicle = require('../models/vehicles')


router.get('/', function(req, res) {
  res.json({message: 'Welcome to our API'})
})

router.post('/vehicle', (req, res) => {
  var newVehicle = new Vehicle;
      newVehicle.make = req.body.make;
      newVehicle.model = req.body.model;
      newVehicle.color = req.body.color

      newVehicle.save(function(err){
        if(err){
          res.send(err)
        }else{
          res.json({message: 'New Vehicle created'})
        }
      })
     

})

router.get('/vehicle', function(req, res) {
  Vehicle.find({}, function(err, vehicle) {
    if(err){
      res.send(err)
    }else{
      res.json({vehicle})
    }
  })
})

router.get('/vehicle/:vehicle_id', (req, res) => {
    Vehicle.findById(req.params.vehicle_id, (err, vehicle) => {
      if(err){
       res.send(err)
      }else{
        res.json(vehicle)
      }
    })
})

router.get('/vehicle/make/:make', (req, res) => {
  Vehicle.find({make:req.params.make}, (err, vehicle) => {
    if(err){
      res.send(err)
    }else{
      res.json(vehicle);
    }
  });
});

router.get('/vehicle/color/:color', (req, res) => {
 Vehicle.find({color: req.params.color}, (err, vehicle) => {
   if(err){
     res.send(err)
   }else{
     res.json(vehicle)
   }
 })
})

module.exports = router;