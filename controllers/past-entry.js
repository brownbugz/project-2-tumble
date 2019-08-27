var Entry = require('../models/entry');

module.exports = {
    pastEntry
}

function pastEntry(req, res) {
    res.render('tumblers/past-entry', { title: "Tumble"});
}

