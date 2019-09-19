var Entry = require('../models/entry');

module.exports = {
    newEntry,
    createEntry,
}

function newEntry(req, res) {
    res.render('tumblers/new-entry', { 
        title: "Tumble"
    });
}




