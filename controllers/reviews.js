var Entry = require('../models/entry');

module.exports = {
    createReview,
    editReview,
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

//trying to find entry id in order to get the review ids inside one entry; o
// once review id is acquired, then it can be edited and reposted
// not succeeding yet; not sure if this code is correct
function editReview(req,res) {
    console.log('I am editing reviews');
    Entry.findById(req.params.id, function(err, entry) {
        entry.reviews.edit(req.params.id, function(err, review) {
            if (err) res.send(err);
            entry.reviews.content(req.body.content);
        })
        if (err) res.send(err);
        res.render('tumblers/edit-review');
    })
}
