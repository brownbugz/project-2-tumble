var express = require('express');
var router = express.Router();
var pastEntryController = require('../controllers/past-entry');

/* List of entries */
router.get('/', pastEntryController.pastEntry); //show all
router.post('/', pastEntryController.appendFromNewEntry);
router.delete('/:id', isLoggedIn, pastEntryController.deleteEntry, pastEntryController.pastEntry);

router.get('/:id', pastEntryController.showEntry); //show one

 function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;