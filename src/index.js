'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const User = require('./models/user')
const db = require('./database/index')
const handleErrors = require('./middleware/handleErrors')
// const { BadRequest } = require('./utils/errors')

// init app
const app = express()
const port = 2000

// body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Welcome to Team-granite Api')
})

// error handler middleware
app.get('*', function (req, res, next) {
  // Reporting async errors *must* go through `next()`
  setImmediate(() => {
    next(new Error())
  })
})

app.use(handleErrors)

app.post('/add', function (req, res) {
  let user = new User()
  user.firstName = req.body.firstName
  user.lastName = req.body.lastName
  user.email = req.body.email
  user.phone = req.body.phone
  user.save(function (err) {
    if (err) {
      console.log(err)
      return;
    } else {
      console.log('saved\n##########################')
    }
  })
})

// listen on port
app.listen(port, function () {
  console.log('\n##############################')
  console.log(`Listening at http://localhost:${port}\n`)
})

module.exports = app
