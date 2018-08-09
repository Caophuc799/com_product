import mongoose from 'mongoose'

// Define collection and schema for todo item

var product = new mongoose.Schema({
  name: {
    type: String,
    default: '',
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  createAt: {
    type: Date,
    default: Date.now
  },
  count: {
    type: Number,
    default: 1
  },
  isSold: {
    type: Boolean,
    default: false
  }
}
)

export default mongoose.model('products', product)
