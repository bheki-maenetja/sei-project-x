const Person = require('../models/person')

function getPeople(req, res) {
  Person
    .find()
    .populate('affiliations')
    .populate('jobs')
    .then(people => res.status(200).json(people))
    .catch(err => res.json({ message: 'SOMETHING IS VERY WRONG!!!', error: err }))
}

function getPerson(req, res) {
  Person
    .findById(req.params.id)
    .populate('affiliations')
    .populate('jobs')
    .then(person => person ? res.status(200).json(person) : res.status(404).json({ message: 'Error 404 - Not found' }))
    .catch(err => res.json({ message: 'SOMETHING IS VERY WRONG!!!', error: err }))
}

module.exports = { getPeople, getPerson }