const mongoose = require('mongoose')

const organisation = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true },
  type: { type: String, required: true },
  imageURL: { type: String, required: true },
  business: { type: Array, required: true },
  countries_of_operation: { type: Array, required: true },
  base: { type: Array }
}, {
  toJSON: {
    virtuals: true
  }
})

organisation.virtual('members', {
  ref: 'Person',
  localField: '_id',
  foreignField: 'affiliations'
})

module.exports = mongoose.model('Organisation', organisation)