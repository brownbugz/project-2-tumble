var Entry = require('../models/entry');
var Review = require('../models/review');


module.exports = {
    pastEntry,
    appendFromNewEntry,
    deleteEntry,
    showEntry,
}

function pastEntry(req, res) {
    Entry.find({}, function(err, entries) {
        res.render('tumblers/past-entry', { title: "Tumble", entries });
    });
}

function appendFromNewEntry(req, res, next) {
    console.log('APPENDFROMNEWENT')
    console.log(req.body);
    var entry = new Entry(req.body);
        entry.save(function(err, entry) {
            res.redirect(`/past-entry/${entry.id}`);    
    });
}

function deleteEntry(req, res, next) {
    Entry.findByIdAndDelete(req.params.id, function(err, entry) {
        console.log(entry);
        next();
    });
  }

  function showEntry(req, res) {
    Entry.findById(req.params.id, function(err, entry) {
        if (err) console.log(err);
        res.render('tumblers/show-entry', {title: 'Tumble', entry});
    });
}










