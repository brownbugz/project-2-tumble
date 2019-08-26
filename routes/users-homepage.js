var express = require('express');
var router = express.Router();
var userPageController = require('../controllers/users-homepage');

/* GET logged in home page. */
router.get('/', userPageController.userPage);

module.exports = router;