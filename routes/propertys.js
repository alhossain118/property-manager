'use strict';
const express = require('express');
let Property = require('../models/property')
let router = express.Router();

// get to api/superheros
//////////////////////////////////////
router.route('/')
  .get((req,res) => {
    Property.find({}, (err,properties) => {
      res.status(err ? 400 : 200).send(err || properties)
    })
  })
  .post((req,res) => {
    Property.create(req.body, (err, property) => {
      res.status(err ? 400 : 200).send(err || property)
    })
  });

router.route('/:id')
  .get((req,res) => {
    Property.findById(req.params.id, (err, property) => {
      res.status(err ? 400 : 200).send(err || property)
    })
  })

  .put((req, res) => {
    Property.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, property) => {
      res.status(err ? 400 : 200).send(err || property);      
    });
  })

  .delete((req,res) => {
    Property.findByIdAndRemove(req.params.id, err => {
      res.status(err ? 400 : 200).send(err)
    })
  })


module.exports = router;
