var User = require('../models/user');

module.exports = {
    userPage
}

function userPage(req, res) {
    User.find({}, function(err, users) {
        res.render('tumblers/users-homepage', {
            title: 'Tumble',
            users,
            user: req.user,
            
        })
    });
}
