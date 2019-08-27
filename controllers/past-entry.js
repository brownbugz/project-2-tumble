var Entry = require('../models/entry');

module.exports = {
    pastEntry,
    appendFromNewEntry
}

function pastEntry(req, res) {
    res.render('tumblers/past-entry', { title: "Tumble"});
}

function appendFromNewEntry(req, res, next) {
    var entry = new Entry(req.body);
    req.entry.push(req.body);
    req.entry.save(function(err) {
        res.redirect('/past-entry');
    });
}


