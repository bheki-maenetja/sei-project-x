const mongoose = require('mongoose')

const jobSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  imageURL: { type: String, required: true },
  type: { type: String, required: true },
  value: { type: Number, required: true, min: 10 },
  issued_by: { type: mongoose.Schema.ObjectId, ref: 'Person' },
  issued_by_user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  description: { type: String, required: true },
  terms_of_contract: { type: String, required: true }
})

module.exports = mongoose.model('Job', jobSchema)