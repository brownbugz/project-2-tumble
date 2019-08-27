var Entry = require('../models/entry');

module.exports = {
    newEntry,
    createEntry,
    // deleteEntry
}

function newEntry(req, res) {
    res.render('tumblers/new-entry', { title: "Tumble"});
}

function createEntry(req,res) {
    var entry = new Entry(req.body);
    console.log(entry);
    entry.save(function(err) {
    if (err) {
        console.log(err);
        return res.redirect('/users-homepage');
    }
    console.log(entry);
    res.redirect(`/users-homepage`);
    });
}

// function deleteEntry(req, res, next) {
//     Entry.findOne({'entry._id': req.params.id}, function(err, entry) {
//       entry.id(req.params.id).remove();
//       entry.save(function(err) {
//         res.redirect('/users-homepage');
//       });
//     });
//   }


