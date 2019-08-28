var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var reviewSchema = new Schema({
//   content: String,
//   rating: {
//     type: Number,
//     min: 1,
//     max: 5,
//     default: 5
//   }
// }, {  
//   timestamps: true
// });

var entrySchema = new Schema({
  user: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  }, 
  profession: {
      type: String,
  },
  zodiac: {
      type: String,
  },
  repeatDate: {type: Boolean, default: false}
}, {timestamps: true});


module.exports = mongoose.model('Entry', entrySchema);