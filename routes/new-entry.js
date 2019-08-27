var express = require('express');
var router = express.Router();
var newEntryController = require('../controllers/new-entry');

/* POST new entry of person dated */
router.get('/', newEntryController.newEntry);
router.post('/', newEntryController.createEntry);

module.exports = router;
