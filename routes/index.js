var express = require('express');
var router = express.Router();
var passport = require('passport');
var indexController = require('../controllers/index');

/* GET home page while logged out - this is the start page */
router.get('/', indexController.index);

router.get('/auth/google', passport.authenticate(
  'google',
  { scope:['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/users-homepage',
    failureRedirect: '/'
  }
));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
