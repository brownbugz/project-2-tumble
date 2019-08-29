var express = require('express');
var router = express.Router();
var reviewsController = require('../controllers/reviews');

//path
router.post('/past-entry/:id/reviews', reviewsController.createReview);

module.exports = router;