var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
    text: String,
});

var tumblerSchema = new mongoose.Schema({
    userName: String,
    password: String,
}, {
    timestamps: true
});

var entrySchema = new mongoose.Schema({
    dateName: String,
    age: Number,
    meetups: Date,
    reviews: [reviewSchema],
}, {
    timestamps: true
});


module.exports = mongoose.model('Tumbler', tumblerSchema);