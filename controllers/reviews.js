// var Review = require('../models/review');

// module.exports = {
//     createReview
// };

// function createReview(req, res) {
//     Review.findById(req.params.id, function(err, entry) {
//         entry.reviews.push(req.body);
//         entry.save(function(err) {
//             res.redirect(`/users-homepage/${entry._id}`);
//         });
//     });
// }