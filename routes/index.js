var express = require('express');
var router = express.Router();

/* GET home page while logged out - this is the start page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tumble' });
});

module.exports = router;
