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

function createEntry(req,res) {
    console.log(req.body);
    console.log('hello');
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



