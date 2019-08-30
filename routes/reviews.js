var express = require('express');
var router = express.Router();
var reviewsController = require('../controllers/reviews');

//path
router.post('/:id/reviews', reviewsController.createReview);

router.get('/:id/edit', reviewsController.editReview);
router.put('/:id', reviewsController.updateReview);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;