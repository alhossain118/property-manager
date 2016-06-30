'use strict';

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

module.exports = router;
