var express = require('express');
var router = express.Router();
var reviewsController = require('../controllers/reviews');

//path
router.post('/past-entry/:id/reviews', reviewsController.createReview);

// router.put('/past-entry/:id/edit', reviewsController.editReview);
// router.post('/past-entry/:id/reviews', reviewsController.editReview);

module.exports = router;