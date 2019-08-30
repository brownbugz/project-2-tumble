var express = require('express');
var router = express.Router();
var newEntryController = require('../controllers/new-entry');

/* POST new entry of person dated */
router.get('/', newEntryController.newEntry);
router.post('/create', isLoggedIn, newEntryController.createEntry);

 function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;
