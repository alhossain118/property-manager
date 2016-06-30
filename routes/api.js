'use strict';
const express = require('express');
let router = express.Router();

// get to api/samurais

router.use('/propertys', require('./propertys'))
router.use('/tenants', require('./tenants'))

module.exports = router;
