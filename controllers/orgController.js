const crimeOrg = require('../models/organisation')

function getOrgs(req, res) {
  crimeOrg
    .find()
    .populate('members')
    .then(orgs => res.status(200).json(orgs))
    .catch(err => res.status(406).json({ message: 'SOMETHING IS VERY WRONG!!!', err }))
}

function getOrg(req, res) {
  crimeOrg
    .findById(req.params.id)
    .populate('members')
    .then(org => org ? res.status(200).json(org) : res.status(404).json({ message: 'Error 404 - Not found' }))
    .catch(err => res.status(406).json({ message: 'SOMETHING IS VERY WRONG!!!', err }))
}

module.exports = { getOrgs, getOrg }