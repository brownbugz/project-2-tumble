var User = require('../models/user');
var Entry = require('../models/entry');

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

function list(req, res) {
    Entry.findById({}, function(err, entries) {
        res.render('tumblers/past-entry', {
            name,
            entries
        });
    })
}