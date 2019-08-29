var express = require('express');
var router = express.Router();
var pastEntryController = require('../controllers/past-entry');

/* POST new entry of person dated */
router.get('/:id', pastEntryController.pastEntry);
router.post('/', pastEntryController.appendFromNewEntry);
router.delete('/:id', pastEntryController.deleteEntry);
// router.get('/:id', pastEntryController.showEntry);

module.exports = router;