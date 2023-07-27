const express = require('express');
const router = express.Router();
const apiRoute = require('./api')
const homeRoute = require('./index')

router.use('/api', apiRoute);
router.use('/', homeRoute);
router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>")
  });
module.exports = router;