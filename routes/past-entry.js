var express = require('express');
var router = express.Router();
var pastEntryController = require('../controllers/past-entry');

/* POST new entry of person dated */
router.get('/', pastEntryController.pastEntry);
router.post('/:id', pastEntryController.appendFromNewEntry);

module.exports = router;