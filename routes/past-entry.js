var express = require('express');
var router = express.Router();
var pastEntryController = require('../controllers/past-entry');

/* POST new entry of person dated */
router.get('/', pastEntryController.pastEntry); //show all
router.post('/', pastEntryController.appendFromNewEntry);
router.delete('/:id', pastEntryController.deleteEntry, pastEntryController.pastEntry);

router.get('/:id', pastEntryController.showEntry); //show one

module.exports = router;