var Entry = require('../models/entry');

module.exports = {
    showEntry
}

function showEntry(req, res) {
    Entry.find({}, function(err, entries) {
        res.render('tumblers/past-entry', {
            name,
            entries
        });
    });
}