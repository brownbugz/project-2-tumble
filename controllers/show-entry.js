var Entry = require('../models/entry');

module.exports = {
    showEntry
}

function showEntry(req, res) {
    Entry.findById(req.params.id, function(err, entry) {
        if (err) console.log(err);
        res.render('tumblers/show-entry', {title: 'Tumble', entry});
    });
}