const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userBlueprint = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  alias: { type: String, required: true, unique: true },
  handle: { type: String, required: true, unique: true },
  business: { type: Array, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

userBlueprint.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password)
}

userBlueprint
  .virtual('passwordConfirmation')
  .set(function confirmPassword(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

userBlueprint
  .pre('validate', function checkPassword(next) {
    if (this.isModified('password') && this._passwordConfirmation !== this.password) {
      this.invalidate('passwordConfirmation', 'YOUR PASSWORDS DO NOT MATCH!!!')
    }
    next()
  })

userBlueprint
  .pre('save', function encryptPassword(next) {
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
    }
    next()
  })

module.exports = mongoose.model('User', userBlueprint)