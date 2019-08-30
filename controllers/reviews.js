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
    // allen wrote this - it's okay :)
    console.log('I am editing reviews');
    // saving ID params to variable
    let reviewId = req.params.id;
    // finding all entries based on user ID
    Entry.find({user: req.user._id}, function(err, entries) {
        if (err) res.send(err);
        // creating a variable to later set to the review once we find it 
        let foundReview;
        // iterate through all entries, then iterate through all reviews
        // finding the review with the id equal to the ID we sent in params
        // when we find it, we set its value to foundReview
        entries.forEach(entry => {
            console.log(entry.reviews);
            let findReview = entry.reviews.find(review => review._id.toString() === reviewId);
            if (findReview) foundReview = findReview;
        })
        res.render('tumblers/edit-review', {
            review: foundReview,
            title: 'Edit Review',
            user: req.user
        })
    });
}

