var express = require('express');
var router = express.Router();
var userPageController = require('../controllers/users-homepage');

/* GET logged in home page. */
router.get('/users-homepage', userPageController.users-homepage);

module.exports = router;