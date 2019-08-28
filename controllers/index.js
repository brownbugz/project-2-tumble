var User = require('../models/user');
var Entry = require('../models/entry');


module.exports = {
    index
}

function index(req, res) {
    User.find({}, function(err, users) {
        res.render('index', {
            title: 'Tumble',
            users,
            user: req.user, 
        });
    });
}

