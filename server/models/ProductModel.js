var mongoose = require('mongoose')

// Define collection and schema for todo item

var product = new mongoose.Schema({
  name: {
    type: String
  },

  done: {
    type: Boolean
  }
},

{
  collection: 'com_pro'
}
)

module.exports = mongoose.model('Product', product)
