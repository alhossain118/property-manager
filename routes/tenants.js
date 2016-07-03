'use strict';

const express2 = require('express')
const express = require('express');
let Tenant = require('../models/tenant')
let router = express.Router();


router.route('/')
  .get((req,res) => {
    Tenant.find({})
      .populate('property')
      .exec((err, tenant) => {
        res.status(err ? 400 : 200).send(err || tenant);
      })
  })

  .post((req,res) => {
    Tenant.create(req.body, (err,tenant) => {
      res.status(err ? 400 : 200).send(err || tenant);
    })
  })

router.route('/:id')
    .put((req, res) => {
      console.log(req.params)
      Tenant.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, tenant) => {
        res.status(err ? 400 : 200).send(err || tenant);
      });
    })

  .delete((req,res) => {
    Tenant.findByIdAndRemove(req.params.id, err => {
      res.status(err ? 400 : 200).send(err);
    });
  })

module.exports = router;
