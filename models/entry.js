var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
  content: String,
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  }
}, {  
  timestamps: true
});

var entrySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    min: 18,
    max: 90,
    required: true
  }, 
  profession: {
      type: String,
      required: true
  },
  zodiac: {
      type: String,
      required: true
  },
  reviews: [reviewSchema],
  repeatDate: {type: Boolean, default: false}
}, {timestamps: true});


module.exports = mongoose.model('Entry', entrySchema);