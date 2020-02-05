const router = require('express').Router()
const people = require('../controllers/peopleController')
const crimeOrgs = require('../controllers/orgController')
const crimeJobs = require('../controllers/jobController')
const authControl = require('../controllers/auth')
const secureRoute = require('../controllers/secureRoute')

// Authentication
router.route('/register')
  .post(authControl.register)

router.route('/login')
  .post(authControl.login)

router.route('/users')
  .get(authControl.getAllUsers)

router.route('/users/:id')
  .get(authControl.getUser)

// People of Interest
router.route('/people')
  .get(people.getPeople)

router.route('/people/:id')
  .get(people.getPerson)

// Organisations
router.route('/orgs')
  .get(crimeOrgs.getOrgs)
  
router.route('/orgs/:id')
  .get(crimeOrgs.getOrg)

// Jobs
router.route('/jobs')
  .get(crimeJobs.getJobs)
  .post(secureRoute, crimeJobs.makeJob)

router.route('/jobs/:id')
  .get(crimeJobs.getJob)
  .put(secureRoute, crimeJobs.updateJob)
  .delete(secureRoute, crimeJobs.deleteJob)

module.exports = router