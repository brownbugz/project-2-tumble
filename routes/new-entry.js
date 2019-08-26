var express = require('express');
var router = express.Router();
var newEntryController = require('../controllers/new-entry');

/* GET logged in home page. */
router.get('/', newEntryController.newEntry);

module.exports = router;