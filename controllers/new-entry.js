var User = require('../models/user');

module.exports = {
    newEntry
}

function userPage(req, res) {
    User.find({}, function(err, users) {
        res.render('tumblers/new-entry', {
            title: 'Tumble',
            users,
            user: req.user, 
        })
    });
}