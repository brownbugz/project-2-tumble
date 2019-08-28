var express = require('express');
var router = express.Router();
var showEntryController = require('../controllers/show-entry');

//path
router.get('/tumblers/:id', showEntryController.showEntry);

module.exports = router;