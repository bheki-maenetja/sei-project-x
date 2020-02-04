const crimeJob = require('../models/job')

function getJobs(req, res) {
  crimeJob
    .find()
    .populate('issued_by')
    .populate('issued_by_user')
    .then(jobs => res.status(200).json(jobs))
    .catch(err => res.status(404).json({ message: 'Error - jobs not found', err }))
}

function getJob(req, res) {
  crimeJob
    .findById(req.params.id)
    .populate('issued_by')
    .populate('issued_by_user')
    .then(job => job ? res.status(200).json(job) : res.status(404).json({ message: 'Error - job not found' }))
    .catch(err => res.status(406).json({ message: 'SOMETHING IS VERY WRONG!!!', err }))
}

function makeJob(req, res) {
  req.body.issued_by_user = req.currentUser
  crimeJob
    .create(req.body)
    .then(newJob => res.status(201).json(newJob))
    .catch(err => res.status(406).json({ message: 'SOMETHING IS VERY WRONG!!!', err }))
}

function updateJob(req, res) {
  crimeJob
    .findById(req.params.id)
    .then(job => {
      if (!job) return res.status(404).json({ message: 'Error - job not found' })
      if (!job.issued_by_user.equals(req.currentUser._id)) return res.status(401).json({ message: 'THIS AIN\'T YOUR JOB!!! GET OUTTA HERE!!!' })
      Object.assign(job, req.body)
      return job.save()
    })
    .then(job => res.status(202).json(job))
    .catch(err => res.status(406).json({ message: 'SOMETHING IS VERY WRONG!!!', err }))
}

function deleteJob(req, res) {
  crimeJob
    .findById(req.params.id)
    .then(job => {
      if (!job) return res.status(404).json({ message: 'Error - job not found' })
      if (!job.issued_by_user.equals(req.currentUser._id)) return res.status(401).json({ message: 'THIS AIN\'T YOUR JOB!!! GET OUTTA HERE!!!' })
      job.remove()
    })
    .then(() => res.sendStatus(204))
    .catch(err => res.status(406).json({ message: 'SOMETHING IS VERY WRONG!!!', err }))
}

module.exports = { getJobs, getJob, makeJob, deleteJob, updateJob }