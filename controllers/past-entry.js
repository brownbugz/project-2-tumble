var Entry = require('../models/entry');


module.exports = {
    pastEntry,
    appendFromNewEntry,
    deleteEntry
}

function pastEntry(req, res) {
    Entry.findById(req.params.id, function(err, entry) {
        res.render('tumblers/past-entry', { 
            title: "Tumble",
            entry
        });
    });
}

function appendFromNewEntry(req, res, next) {
    var entry = new Entry(req.body);
        entry.save(function(err, entry) {
            res.redirect(`/past-entry/${entry.id}`);    
    });
}

// function appendFromNewEntry(req, res, next) {
//   var entry = new Entry(req.body);
//     Entry.findById(req.params.id, function(err, entry) {
//         entry.push(req.body.entryId);
//         entry.save(function(err) {
//             res.redirect(`/past-entry/${entry._id}`)
//         });
//     });
// }

function showEntry(req, res) {
    Entry.find({}, function(err, entries) {
        res.render('tumblers/past-entry', {
            name,
            entries
        });
    });
}

function deleteEntry(req, res, next) {
    Entry.findOne({'entry._id': req.params.id}, function(err, entry) {
      entry.id(req.params.id).remove();
      entry.save(function(err) {
        res.redirect('/users-homepage');
      });
    });
  }





