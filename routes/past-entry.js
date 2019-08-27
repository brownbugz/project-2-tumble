var express = require('express');
var router = express.Router();
var pastEntryController = require('../controllers/past-entry');

/* POST new entry of person dated */
router.post('/', pastEntryController.pastEntry);

module.exports = router;