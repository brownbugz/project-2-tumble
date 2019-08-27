var Entry = require('../models/entry');

module.exports = {
    newEntry,
    createEntry,
    // appendPastEntry
}

function newEntry(req, res) {
    res.render('tumblers/new-entry', { title: "Tumble"});
}

function createEntry(req,res) {
    var entry = new Entry(req.body);
    entry.save(function(err) {
    if (err) return res.redirect('tumblers/past-entry');
    console.log(entry);
    res.redirect(`tumblers/past-entry/${entry._id}`);
    });
}

// function appendPastEntry(req, res, next) {
//     req.entry.push(req.body);
//     req.entry.save(function(err) {
//         res.redirect('/past-entry');
//     });
// }

