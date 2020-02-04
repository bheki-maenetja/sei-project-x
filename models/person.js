const mongoose = require('mongoose')

const peopleSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  alias: { type: String, required: true, unique: true },
  handle: { type: String, required: true, unique: true },
  gender: { type: String, required: true, enam: ['male', 'female'] },
  business: { type: Array, required: true },
  imageURL: { type: String, required: true },
  contact_details: { type: Object, required: true },
  affiliations: { type: mongoose.Schema.ObjectId, ref: 'Organisation', required: true },
  rank: { type: Array, required: true }
}, {
  toJSON: {
    virtuals: true
  }
})

peopleSchema.virtual('jobs', {
  ref: 'Job',
  localField: '_id',
  foreignField: 'issued_by'
})

module.exports = mongoose.model('Person', peopleSchema)