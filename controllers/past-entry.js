var Entry = require('../models/entry');


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
    var entry = new Entry(req.body);
    entry.user = req.user._id;
        entry.save(function(err, entry) {
            res.redirect(`/past-entry/${entry.id}`);    
    });
}

function deleteEntry(req, res, next) {
    Entry.findByIdAndDelete(req.params.id, function(err, entry) {
        next();
    });
  }

  function showEntry(req, res) {
    Entry.findById(req.params.id, function(err, entry) {
        if (err) console.log(err);
        res.render('tumblers/show-entry', {title: 'Tumble', entry});
    });
}










