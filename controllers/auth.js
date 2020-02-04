const User = require('../models/user')
const { secret } = require('../config/env')
const jwt = require('jsonwebtoken')

function register(req, res) {
  User
    .create(req.body)
    .then(user => res.status(201).json({ message: `${user.username}, Welcome to Cosa Nostra!` }))
    .catch(err => res.status(406).json({ message: 'SOMETHING IS VERY WRONG!!!', err }))
}

function login(req, res) {
  User
    .findOne({ email: req.body.email })
    .then(user => {
      if (!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Invalid credentials - user not found' })
      }
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '24h' })
      res.status(202).json({ message: `WELCOME BACK ${user.username}`, token })
    })
    .catch(err => res.status(406).json({ message: 'SOMETHING IS VERY WRONG!!!', err }))
}

module.exports = { register, login }