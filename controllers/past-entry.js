var Entry = require('../models/entry');


module.exports = {
    pastEntry,
    appendFromNewEntry,
    deleteEntry,
    editEntry
}

function pastEntry(req, res) {
    Entry.find({}, function(err, entries) {
        res.render('tumblers/past-entry', { title: "Tumble", entries });
    });
}

function appendFromNewEntry(req, res, next) {
    var entry = new Entry(req.body);
        entry.save(function(err, entry) {
            res.redirect(`/past-entry/${entry.id}`);    
    });
}

function deleteEntry(req, res, next) {
    Entry.findOne({'entry._id': req.params.id}, function(err, entry) {
      entry._id(req.params.id).remove();
      entry.save(function(err) {
        res.redirect('/past-entry');
      });
    });
  }

  function editEntry(req, res) {

  }





