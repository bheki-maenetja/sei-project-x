function logger(req, res, next) {
  console.log(`A ${req.method} request has been made to ${req.url}`)
  next()
}

module.exports = logger