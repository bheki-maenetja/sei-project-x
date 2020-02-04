const { dbURI, personObjs, orgObjs, jobObjs, userObjs } = require('../config/env')
const mongoose = require('mongoose')
const User = require('../models/user')
const Person = require('../models/person')
const CrimeOrg = require('../models/organisation')
const CrimeJob = require('../models/job')


mongoose.connect(dbURI, { useUnifiedTopology: true, useNewUrlParser: true }, (err, db) => {
  if (err) return console.log('SOMETHING IS VERY WRONG', err)
  db.dropDatabase()
    .then(() => User.create(userObjs))
    .then(() => CrimeOrg.create(orgObjs))
    .then((crimeOrgs) => {
      personObjs.map(obj => obj.affiliations = crimeOrgs.find(org => org.slug === obj.affiliations)) 
      return Person.create(personObjs)
    })
    .then((crimePeople) => {
      jobObjs.map(obj => obj.issued_by = crimePeople.find(person => person.handle === obj.issued_by))
      return CrimeJob.create(jobObjs)
    })
    .then(() => console.log('Data created'))
    .catch(err => console.log('SOMETHING IS VERY WRONG', err))
    .finally(() => mongoose.connection.close())
})