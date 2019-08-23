var express = require('express');
var router = require('express.Router');
var tumblersCtrl = require('../controllers/tumblers');

/* GET to login page */
router.get('/', function(req, res, next) {
  res.redirect('/');
});

module.exports = router;
