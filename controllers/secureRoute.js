const { secret } = require('../config/env')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

function secureRoute(req, res, next) {
  if (!req.headers.authorization || !req.headers.authorization.includes('Bearer ')) {
    return res.status(401).json({ message: 'UNAUTHORIZED! GET OUTTA HERE!' })
  }
  const token = req.headers.authorization.replace('Bearer ', '')

  new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, payload) => {
      if (err) reject(err)
      resolve(payload)
    })
  })
    .then(payload => User.findById(payload.sub))
    .then(user => {
      if (!user) return res.status(401).json({ message: 'UNAUTHORIZED! GET OUTTA HERE!' })
      req.currentUser = user
      next()
    })
    .catch(err => res.status(406).json({ message: 'SOMETHING IS VERY WRONG!!!', err }))
}

module.exports = secureRoute