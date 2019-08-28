var express = require('express');
var router = express.Router();
var reviewsController = require('../controllers/reviews');

//path
router.post('/tumblers/:id/reviews', reviewsControllers.create);

module.exports = router;