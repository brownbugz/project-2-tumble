var express = require('express');
var router = express.Router();

/* GET users logged in home page. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'Tumble' });
});

module.exports = router;