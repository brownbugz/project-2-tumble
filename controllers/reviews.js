var Review = require('../models/review');
var Entry = require('../models/entry');

module.exports = {
    createReview
};

function createReview(req, res) {
    console.log('hello');
    Entry.findById(req.params.id, function(err, entry) {
        entry.reviews.push(req.body);
        entry.save(function(err) {
            res.redirect('/past-entry');
        });
    });
}